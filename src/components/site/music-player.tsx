"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Loader2, Pause, Play, SkipBack, SkipForward } from "lucide-react";
import ReactPlayer from "react-player/soundcloud";
import tracksData from "@/data/tracks.json";

type Track = {
  title: string;
  artist?: string;
  trackLink: string;
  picture?: string;
};

function shuffle<T>(input: T[]): T[] {
  const arr = [...input];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function MusicPlayer() {
  const [playlist, setPlaylist] = useState<Track[]>([]);
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(false);
  // playing = user intent (drives the widget); audible = audio actually
  // coming out (drives the UI — vinyl, pause icon, controls shift)
  const [playing, setPlaying] = useState(false);
  const [audible, setAudible] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const hideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const trackAudible = useRef(false);
  const playerRef = useRef<ReactPlayer | null>(null);

  // shuffle client-side only, to avoid a hydration mismatch
  useEffect(() => {
    setPlaylist(shuffle(tracksData as Track[]));
  }, []);

  const track = playlist[index];

  const togglePlay = () => {
    // command the widget synchronously inside the click handler — Safari only
    // honours cross-origin play() while the click's user activation is alive
    const widget = playerRef.current?.getInternalPlayer();
    if (playing) {
      widget?.pause?.();
      setAudible(false);
    } else {
      widget?.play?.();
    }
    setStarted(true);
    setPlaying((p) => !p);
    setShowControls(true);
  };

  const step = (direction: 1 | -1) => {
    // switch tracks via the widget's own load() so the iframe document (and
    // its playback permission from the first user gesture) is preserved —
    // remounting the iframe would lose autoplay rights for the next track
    const next = (index + direction + playlist.length) % playlist.length;
    const widget = playerRef.current?.getInternalPlayer();
    widget?.load?.(playlist[next].trackLink, { auto_play: playing });
    setAudible(false);
    setIndex(next);
  };

  // skip tracks that never start (removed/region-blocked SoundCloud uploads)
  useEffect(() => {
    trackAudible.current = false;
    if (!playing) return;
    const watchdog = setTimeout(() => {
      if (!trackAudible.current) step(1);
    }, 6000);
    return () => clearTimeout(watchdog);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, playing, playlist.length]);

  const handleMouseEnter = () => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    if (started) setShowControls(true);
  };

  const handleMouseLeave = () => {
    hideTimeout.current = setTimeout(() => setShowControls(false), 2000);
  };

  if (!track) return null;

  const loading = playing && !audible;

  return (
    <div
      className="fixed bottom-5 right-5 z-50 flex items-end gap-3"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* hidden SoundCloud player — mounted from load so the widget is ready
          before the first user click, otherwise browsers block the audio */}
      <div
        aria-hidden
        className="pointer-events-none fixed bottom-0 left-0 -z-50 size-24 overflow-hidden opacity-0"
      >
        <ReactPlayer
          ref={playerRef}
          // stable url: track changes go through widget.load() in step(),
          // never through a url-prop change (which would remount the iframe)
          url={playlist[0].trackLink}
          playing={playing}
          onPlay={() => {
            trackAudible.current = true;
            if (playing) setAudible(true);
          }}
          onPause={() => setAudible(false)}
          onEnded={() => step(1)}
          onError={() => step(1)}
          controls={false}
          config={{ options: { auto_play: false } }}
          width="100%"
          height="100%"
        />
      </div>

      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, x: 16, filter: "blur(4px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: 16, filter: "blur(4px)" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`relative z-10 flex items-center gap-3 rounded-xl bg-nero/90 py-3 pl-5 pr-3.5 shadow-lg backdrop-blur-md transition-[margin] duration-1000 ${
              audible ? "mr-14" : "mr-0"
            }`}
          >
            <div className="max-w-52 min-w-0">
              <p className="truncate text-[15px] font-semibold text-white">
                {track.title}
              </p>
              <p className="truncate text-[13px] text-white/60">
                {track.artist ?? "Unknown artist"}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => step(-1)}
                aria-label="Previous track"
                className="flex size-9 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <SkipBack className="size-4.5 fill-current" />
              </button>
              <button
                onClick={() => step(1)}
                aria-label="Next track"
                className="flex size-9 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <SkipForward className="size-4.5 fill-current" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* artwork + vinyl */}
      <motion.button
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        onClick={togglePlay}
        aria-label={playing ? "Pause music" : "Play music"}
        className="group relative size-28 cursor-pointer"
      >
        <Image
          src="/images/vinyl.webp"
          alt=""
          width={104}
          height={104}
          draggable={false}
          className={`absolute top-1 z-0 size-26 animate-[spin_4s_linear_infinite] transition-[left] duration-1000 ${
            audible ? "-left-1/2" : "left-1"
          }`}
        />
        {/* eslint-disable-next-line @next/next/no-img-element -- remote SoundCloud artwork, unoptimized on purpose */}
        <img
          src={track.picture}
          alt={`${track.title} artwork`}
          draggable={false}
          className="relative z-10 size-full rounded-xl object-cover shadow-[0_8px_24px_rgba(30,29,29,0.45)]"
        />
        <span
          className={`absolute left-1/2 top-1/2 z-20 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-nero/80 text-white backdrop-blur-sm transition-opacity duration-300 ${
            audible && !showControls
              ? "opacity-0 group-hover:opacity-100"
              : "opacity-100"
          }`}
        >
          {loading ? (
            <Loader2 className="size-6 animate-spin" />
          ) : audible ? (
            <Pause className="size-6 fill-current" />
          ) : (
            <Play className="ml-0.5 size-6 fill-current" />
          )}
        </span>
      </motion.button>
    </div>
  );
}
