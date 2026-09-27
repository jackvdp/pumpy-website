export type Operation =
  | "CLICK"
  | "TYPE_TEXT"
  | "NAVIGATE"
  | "SCROLL_UP"
  | "SCROLL_DOWN"
  | "PRESS_RETURN"
  | "PRESS_ESCAPE"
  | "GO_BACK"
  | "WAIT"
  | "DONE"
  | "BLOCKED";

/** An interactive control observed on the current page. */
export type PageElement = {
  id: string;
  role: string;
  label: string;
  value?: string;
  focused: boolean;
  editable: boolean;
};

export type Observation = {
  url: string;
  title: string;
  elements: PageElement[];
  text: string;
};

export type Decision = {
  operation: Operation;
  /** Element id for CLICK / TYPE_TEXT. */
  target?: string;
  /** Literal text for TYPE_TEXT, or URL for NAVIGATE. */
  text?: string;
  done: number;
  absent: number;
  confidence?: number;
};

export type ActionRecord = { action: string; result: string };

/** Events streamed to the client as newline-delimited JSON. */
export type AgentEvent =
  | { type: "status"; message: string }
  | { type: "screenshot"; image: string; url: string; title: string }
  | {
      type: "step";
      step: number;
      action: string;
      result: string;
      done: number;
      latencyMs: number;
    }
  | { type: "finished"; outcome: "done" | "blocked" | "limit" | "stopped"; message: string }
  | { type: "error"; message: string };
