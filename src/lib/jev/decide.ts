import { createTypeSafeAi } from "@ai-sdk/typesafe-ai";
import { experimental_evaluate as evaluate } from "ai";
import type { ActionRecord, Decision, Observation, Operation } from "./types";

const NONE = "__none__";
const MAX_CHOICES = 255;
/** Mirrors third-hand's budget, kept well below the service's context limit. */
const MAX_STATE_BYTES = 24_000;

type Question =
  | { type: "choice"; instructions: string; criteria: Record<string, string> }
  | { type: "boolean"; instructions: string };

type Answer = { choice?: string; probability?: number };

export type DecideInput = {
  goal: string;
  observation: Observation;
  history: ActionRecord[];
  step: number;
  textOptions: string[];
  urlOptions: string[];
  abortSignal?: AbortSignal;
};

export function jevModel() {
  const apiKey = process.env.TYPESAFE_AI_API_KEY;
  if (!apiKey) throw new Error("TYPESAFE_AI_API_KEY is not set.");
  return createTypeSafeAi({ apiKey }).evaluationModel(process.env.JEV_MODEL || "jev-latest");
}

function describe(el: Observation["elements"][number]) {
  return `${el.label}${el.value ? ` = ${el.value}` : ""} [${el.role}]${el.focused ? " (focused)" : ""}`;
}

/** Asks Jev for one step: which operation to take and, when needed, its target. */
export async function decide(input: DecideInput): Promise<Decision & { latencyMs: number }> {
  const { goal, observation, history, step, textOptions, urlOptions } = input;
  let elements = observation.elements;

  const operations: Partial<Record<Operation, string>> = {
    SCROLL_UP: "Reveal content above",
    SCROLL_DOWN: "Reveal content below",
    PRESS_RETURN: "Submit the focused field or confirm the selected item",
    PRESS_ESCAPE: "Dismiss the current popup, dialog or menu",
    GO_BACK: "Return to the previous page",
    WAIT: "Wait for content that is still loading",
    DONE: "Every requirement of the task is visibly satisfied on the page",
    BLOCKED: "No available operation can make progress",
  };

  const build = () => {
    const clickable = elements.slice(0, MAX_CHOICES - 1);
    const editable = elements.filter((el) => el.editable).slice(0, MAX_CHOICES - 1);
    const ops = { ...operations };
    if (clickable.length) ops.CLICK = "Click a control on the page";
    if (editable.length && textOptions.length) ops.TYPE_TEXT = "Replace the text in an editable field";
    if (urlOptions.length) ops.NAVIGATE = "Open a web address named in the task";

    const questions: Record<string, Question> = {
      done: {
        type: "boolean",
        instructions: `Has this task been completed: "${goal}"? Judge only by what is visible on the page and the actions already taken.`,
      },
      absent: {
        type: "boolean",
        instructions: `Is the control needed for the next step of "${goal}" missing from the page elements?`,
      },
      operation: {
        type: "choice",
        instructions: `Which operation advances "${goal}" by one step? Do not repeat completed steps. DONE requires visible evidence.`,
        criteria: ops as Record<string, string>,
      },
    };

    const choice = (items: Array<[string, string]>, instructions: string): Question => ({
      type: "choice",
      instructions,
      criteria: { ...Object.fromEntries(items), [NONE]: "None of these fit" },
    });

    if (ops.CLICK) {
      questions.click_target = choice(
        clickable.map((el) => [el.id, describe(el)]),
        `Which element should be clicked to advance "${goal}"?`,
      );
    }
    if (ops.TYPE_TEXT) {
      questions.type_target = choice(
        editable.map((el) => [el.id, describe(el)]),
        `Which field should receive text to advance "${goal}"?`,
      );
      questions.text = choice(
        textOptions.map((text, i) => [String(i), text]),
        "Which phrase from the task should be entered? For searches pick the shortest precise keywords, not the whole instruction.",
      );
    }
    if (ops.NAVIGATE) {
      questions.url = choice(
        urlOptions.map((url, i) => [String(i), url]),
        `Which address should be opened to advance "${goal}"?`,
      );
    }

    const state = {
      task: goal,
      step,
      page: { url: observation.url, title: observation.title },
      action_attempts: history.length
        ? history.slice(-6).map((h) => `${h.action}: ${h.result}`)
        : ["nothing yet"],
      elements: elements.map((el) => ({
        id: el.id,
        role: el.role,
        label: el.label,
        ...(el.value ? { value: el.value } : {}),
        ...(el.focused ? { focused: true } : {}),
      })),
      visible_text: observation.text,
    };
    return { questions, state, ops };
  };

  // Halve the observation until the request fits the budget.
  let request = build();
  while (JSON.stringify(request).length > MAX_STATE_BYTES && elements.length > 1) {
    elements = elements.slice(0, Math.ceil(elements.length / 2));
    request = build();
  }

  const start = Date.now();
  const result = await evaluate({
    model: jevModel(),
    state: request.state,
    questions: request.questions,
    abortSignal: input.abortSignal,
  });
  const latencyMs = Date.now() - start;

  const answers = result.answers as Record<string, Answer>;
  const confidence = (
    result.providerMetadata?.typesafe as { confidence?: Record<string, number> } | undefined
  )?.confidence?.operation;
  const base = {
    done: answers.done?.probability ?? 0,
    absent: answers.absent?.probability ?? 0,
    confidence,
    latencyMs,
  };

  const operation = answers.operation?.choice as Operation | undefined;
  if (!operation || !(operation in request.ops)) {
    throw new Error("Jev returned an unsupported operation.");
  }

  const pick = (key: string) => {
    const picked = answers[key]?.choice;
    return picked && picked !== NONE ? picked : undefined;
  };

  if (operation === "CLICK") {
    const target = pick("click_target");
    return target ? { ...base, operation, target } : { ...base, operation: "BLOCKED" };
  }
  if (operation === "TYPE_TEXT") {
    const target = pick("type_target");
    const text = pick("text");
    return target && text != null
      ? { ...base, operation, target, text: textOptions[Number(text)] }
      : { ...base, operation: "BLOCKED" };
  }
  if (operation === "NAVIGATE") {
    const url = pick("url");
    return url != null ? { ...base, operation, text: urlOptions[Number(url)] } : { ...base, operation: "BLOCKED" };
  }
  return { ...base, operation };
}
