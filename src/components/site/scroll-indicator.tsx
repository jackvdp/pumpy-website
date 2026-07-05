"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

export function ScrollIndicator() {
  const { scrollY, scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setVisible(y > 300));

  return (
    <div
      className={`fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 transition-opacity duration-300 lg:block ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      style={{ mixBlendMode: "difference" }}
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll back to top"
        className="flex cursor-pointer flex-col items-center gap-4"
      >
        <span
          className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Scroll
        </span>
        <span className="relative block h-16 w-0.5 bg-white/25">
          <motion.span
            className="absolute inset-0 origin-top bg-white"
            style={{ scaleY: scrollYProgress }}
          />
        </span>
      </button>
    </div>
  );
}
