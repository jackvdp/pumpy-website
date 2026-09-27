import type { Browser } from "puppeteer";
import { execute, observe, openBrowser, openPage, screenshot } from "./browser";
import { decide } from "./decide";
import { textCandidates, urlCandidates } from "./text";
import type { ActionRecord, AgentEvent, Decision } from "./types";

const DONE_THRESHOLD = 0.7;
const DEFAULT_START = "https://duckduckgo.com";

export type RunOptions = {
  goal: string;
  startUrl?: string;
  maxSteps?: number;
  signal?: AbortSignal;
  emit: (event: AgentEvent) => void;
};

function label(decision: Decision) {
  switch (decision.operation) {
    case "CLICK":
      return `CLICK #${decision.target}`;
    case "TYPE_TEXT":
      return `TYPE_TEXT #${decision.target} "${decision.text}"`;
    case "NAVIGATE":
      return `NAVIGATE ${decision.text}`;
    default:
      return decision.operation;
  }
}

/**
 * The observe → decide → act loop. Jev never sees pixels: it chooses from the
 * page's labelled controls, and screenshots are only streamed back to the UI.
 */
export async function runAgent({ goal, startUrl, maxSteps = 15, signal, emit }: RunOptions) {
  const textOptions = textCandidates(goal);
  const urlOptions = urlCandidates(goal);
  const history: ActionRecord[] = [];
  let browser: Browser | undefined;
  let blockedInARow = 0;

  try {
    emit({ type: "status", message: "Starting browser…" });
    browser = await openBrowser();
    const page = await openPage(browser, startUrl || urlOptions[0] || DEFAULT_START);

    for (let step = 1; step <= maxSteps; step++) {
      if (signal?.aborted) {
        emit({ type: "finished", outcome: "stopped", message: "Stopped." });
        return;
      }

      const observation = await observe(page);
      emit({ type: "screenshot", image: await screenshot(page), url: observation.url, title: observation.title });
      emit({ type: "status", message: `Step ${step}: asking Jev…` });

      const decision = await decide({
        goal,
        observation,
        history,
        step,
        textOptions,
        urlOptions,
        abortSignal: signal,
      });
      const action = label(decision);

      if (decision.operation === "DONE" || (decision.done >= DONE_THRESHOLD && history.length > 0)) {
        emit({ type: "step", step, action: "DONE", result: "task looks complete", done: decision.done, latencyMs: decision.latencyMs });
        emit({ type: "finished", outcome: "done", message: "Jev reports the task is complete. Check the result." });
        return;
      }

      if (decision.operation === "BLOCKED") {
        blockedInARow++;
        emit({ type: "step", step, action, result: "no control can make progress", done: decision.done, latencyMs: decision.latencyMs });
        if (blockedInARow >= 2) {
          emit({ type: "finished", outcome: "blocked", message: "Jev couldn't find a way forward on this page." });
          return;
        }
        history.push({ action, result: "blocked" });
        continue;
      }
      blockedInARow = 0;

      const repeats = history.slice(-2).filter((h) => h.action === action).length;
      if (repeats === 2) {
        emit({ type: "finished", outcome: "blocked", message: `Stopped after repeating ${action} three times.` });
        return;
      }

      let result: string;
      try {
        result = await execute(page, decision, observation);
      } catch (error) {
        result = `failed: ${error instanceof Error ? error.message : String(error)}`;
      }
      history.push({ action, result });
      emit({ type: "step", step, action, result, done: decision.done, latencyMs: decision.latencyMs });
    }

    const final = await observe(page);
    emit({ type: "screenshot", image: await screenshot(page), url: final.url, title: final.title });
    emit({ type: "finished", outcome: "limit", message: `Reached the ${maxSteps}-step limit.` });
  } catch (error) {
    if (signal?.aborted) {
      emit({ type: "finished", outcome: "stopped", message: "Stopped." });
    } else {
      emit({ type: "error", message: error instanceof Error ? error.message : String(error) });
    }
  } finally {
    if (browser) {
      if (process.env.BROWSER_WS_ENDPOINT) await browser.disconnect().catch(() => undefined);
      else await browser.close().catch(() => undefined);
    }
  }
}
