"use client";

import { useEffect, useRef, useState } from "react";
import { Globe, Loader2, Play, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import type { AgentEvent } from "@/lib/jev/types";

type Step = Extract<AgentEvent, { type: "step" }>;
type Finish = Extract<AgentEvent, { type: "finished" }>;

const EXAMPLES = [
  "Search for \"Next.js 16 release notes\" and open the official blog post",
  "Go to news.ycombinator.com and open the top story",
  "Open wikipedia.org and search for \"Alan Turing\"",
];

export function JevConsole() {
  const [goal, setGoal] = useState("");
  const [startUrl, setStartUrl] = useState("");
  const [running, setRunning] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [steps, setSteps] = useState<Step[]>([]);
  const [shot, setShot] = useState<{ image: string; url: string; title: string } | null>(null);
  const [finish, setFinish] = useState<Finish | null>(null);
  const [error, setError] = useState<string | null>(null);
  const controller = useRef<AbortController | null>(null);
  const accessKeyInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      if (accessKeyInput.current) {
        accessKeyInput.current.value = localStorage.getItem("jev-access-key") ?? "";
      }
    } catch {}
    return () => controller.current?.abort();
  }, []);

  const handle = (event: AgentEvent) => {
    switch (event.type) {
      case "status":
        setStatus(event.message);
        break;
      case "screenshot":
        setShot(event);
        break;
      case "step":
        setSteps((prev) => [...prev, event]);
        break;
      case "finished":
        setFinish(event);
        setStatus(null);
        break;
      case "error":
        setError(event.message);
        setStatus(null);
        break;
    }
  };

  async function run() {
    if (!goal.trim() || running) return;
    const accessKey = accessKeyInput.current?.value ?? "";
    try {
      localStorage.setItem("jev-access-key", accessKey);
    } catch {}
    setSteps([]);
    setShot(null);
    setFinish(null);
    setError(null);
    setStatus("Connecting…");
    setRunning(true);
    controller.current = new AbortController();

    try {
      const response = await fetch("/api/jev", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-jev-access-key": accessKey },
        body: JSON.stringify({ goal, startUrl }),
        signal: controller.current.signal,
      });
      if (!response.ok || !response.body) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error ?? `Request failed (${response.status}).`);
      }

      const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();
      let buffer = "";
      for (;;) {
        const { value, done } = await reader.read();
        if (done) break;
        buffer += value;
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";
        for (const line of lines) if (line.trim()) handle(JSON.parse(line) as AgentEvent);
      }
    } catch (err) {
      if (controller.current?.signal.aborted) {
        setFinish({ type: "finished", outcome: "stopped", message: "Stopped." });
      } else {
        setError(err instanceof Error ? err.message : String(err));
      }
    } finally {
      setStatus(null);
      setRunning(false);
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)]">
      <section className="flex flex-col gap-4">
        <form
          className="flex flex-col gap-3 rounded-2xl border border-ink/10 bg-white p-5 shadow-sm"
          onSubmit={(e) => {
            e.preventDefault();
            run();
          }}
        >
          <label className="text-sm font-medium" htmlFor="jev-goal">
            What should Jev do?
          </label>
          <Textarea
            id="jev-goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) run();
            }}
            placeholder='e.g. Search for "Adele" on youtube.com'
            className="min-h-28"
            disabled={running}
          />
          <div className="flex flex-wrap gap-1.5">
            {EXAMPLES.map((example) => (
              <button
                key={example}
                type="button"
                disabled={running}
                onClick={() => setGoal(example)}
                className="rounded-full bg-muted px-2.5 py-1 text-left text-xs text-ink/70 transition-colors hover:bg-peach disabled:opacity-50"
              >
                {example}
              </button>
            ))}
          </div>
          <label className="mt-1 text-sm font-medium" htmlFor="jev-url">
            Start page <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <Input
            id="jev-url"
            value={startUrl}
            onChange={(e) => setStartUrl(e.target.value)}
            placeholder="Uses a URL in the task, or DuckDuckGo"
            disabled={running}
          />
          <label className="mt-1 text-sm font-medium" htmlFor="jev-key">
            Access key <span className="font-normal text-muted-foreground">(if JEV_ACCESS_KEY is set)</span>
          </label>
          <Input
            id="jev-key"
            type="password"
            ref={accessKeyInput}
            disabled={running}
            autoComplete="off"
          />
          {running ? (
            <Button type="button" variant="destructive" size="lg" onClick={() => controller.current?.abort()}>
              <Square /> Stop
            </Button>
          ) : (
            <Button type="submit" size="lg" disabled={!goal.trim()}>
              <Play /> Run
            </Button>
          )}
        </form>

        <div className="rounded-2xl border border-ink/10 bg-white p-5 shadow-sm">
          <h2 className="text-sm font-medium">Steps</h2>
          {steps.length === 0 && !status && !finish && !error && (
            <p className="mt-2 text-sm text-muted-foreground">Actions will appear here as Jev works.</p>
          )}
          <ol className="mt-3 flex flex-col gap-2">
            {steps.map((step) => (
              <li key={step.step} className="rounded-lg bg-muted/60 px-3 py-2 text-sm">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-mono text-xs break-all">
                    {step.step}. {step.action}
                  </span>
                  <span className="shrink-0 text-[11px] text-muted-foreground">
                    done {Math.round(step.done * 100)}% · {step.latencyMs}ms
                  </span>
                </div>
                <p className="mt-0.5 text-ink/70">{step.result}</p>
              </li>
            ))}
          </ol>
          {status && (
            <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
              <Loader2 className="size-4 animate-spin" /> {status}
            </p>
          )}
          {finish && (
            <p
              className={cn(
                "mt-3 rounded-lg px-3 py-2 text-sm",
                finish.outcome === "done" ? "bg-baby/60" : "bg-peach/60",
              )}
            >
              {finish.message}
            </p>
          )}
          {error && <p className="mt-3 rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">{error}</p>}
        </div>
      </section>

      <section className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm">
        <div className="flex items-center gap-2 border-b border-ink/10 px-4 py-2.5 text-xs text-muted-foreground">
          <Globe className="size-3.5 shrink-0" />
          <span className="truncate">{shot?.url ?? "about:blank"}</span>
        </div>
        <div className="relative aspect-[1280/800] bg-muted">
          {shot ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={shot.image} alt={shot.title || "Browser screenshot"} className="size-full object-cover object-top" />
          ) : (
            <div className="flex size-full items-center justify-center text-sm text-muted-foreground">
              {running ? <Loader2 className="size-5 animate-spin" /> : "The browser view appears here."}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
