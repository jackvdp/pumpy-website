import { NextRequest, NextResponse } from "next/server";
import { runAgent } from "@/lib/jev/agent";
import type { AgentEvent } from "@/lib/jev/types";

export const maxDuration = 300;

export async function POST(request: NextRequest) {
  // The route drives a real browser on your TypeSafe key, so keep it private.
  const accessKey = process.env.JEV_ACCESS_KEY;
  if (accessKey && request.headers.get("x-jev-access-key") !== accessKey) {
    return NextResponse.json({ error: "Invalid access key." }, { status: 401 });
  }
  if (!process.env.TYPESAFE_AI_API_KEY) {
    return NextResponse.json({ error: "TYPESAFE_AI_API_KEY is not configured." }, { status: 500 });
  }

  const body = (await request.json().catch(() => null)) as
    | { goal?: unknown; startUrl?: unknown; maxSteps?: unknown }
    | null;
  const goal = typeof body?.goal === "string" ? body.goal.trim() : "";
  if (!goal || goal.length > 2000) {
    return NextResponse.json({ error: "Describe a task (up to 2000 characters)." }, { status: 400 });
  }

  let startUrl: string | undefined;
  if (typeof body?.startUrl === "string" && body.startUrl.trim()) {
    const raw = body.startUrl.trim();
    try {
      const url = new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`);
      if (!["http:", "https:"].includes(url.protocol)) throw new Error();
      startUrl = url.toString();
    } catch {
      return NextResponse.json({ error: "Start URL must be an http(s) address." }, { status: 400 });
    }
  }
  const maxSteps = Math.min(Math.max(Number(body?.maxSteps) || 15, 1), 30);

  const encoder = new TextEncoder();
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const emit = (event: AgentEvent) => {
        try {
          controller.enqueue(encoder.encode(JSON.stringify(event) + "\n"));
        } catch {
          // Client disconnected; the abort signal stops the run.
        }
      };
      await runAgent({ goal, startUrl, maxSteps, signal: request.signal, emit });
      try {
        controller.close();
      } catch {}
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "application/x-ndjson; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
