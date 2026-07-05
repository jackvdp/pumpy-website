"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const MusicPlayer = dynamic(
  () => import("./music-player").then((mod) => mod.MusicPlayer),
  { ssr: false }
);

export function LazyMusicPlayer() {
  // mount once the browser is idle so the player chunk (react-player +
  // playlist data) stays off the critical path — the SoundCloud widget is
  // still ready well before anyone can reach the play button
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(() => setReady(true), { timeout: 3000 });
      return () => cancelIdleCallback(id);
    }
    const timer = setTimeout(() => setReady(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return ready ? <MusicPlayer /> : null;
}
