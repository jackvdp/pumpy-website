"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

function HeroLine({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  return (
    <span className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay: 0.15 + index * 0.15, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  // 0 → hero fully in view, 1 → hero scrolled out of view
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  // once the per-character entrance has played, swap to plain text so no
  // inline transform/filter styles linger (Safari can rasterise vertical
  // text with stale offsets while those are present)
  const [labelSettled, setLabelSettled] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setLabelSettled(true), 3300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-baby texture-lines-baby"
    >
      {/* soft glow — drifts down slowly as you scroll for depth */}
      <motion.div
        aria-hidden
        style={{ y: glowY }}
        className="pointer-events-none absolute -right-40 -top-40 size-[36rem] rounded-full bg-baby-deep/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-56 -left-40 size-[32rem] rounded-full bg-white/50 blur-3xl"
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative mx-auto w-full max-w-6xl px-6 pb-24 pt-32 lg:px-8"
      >
        {/* vertical side label — anchored to the container edge, vertically
          centred, characters blur-bloom in one by one */}
        <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 lg:block">
          <div
            className="flex items-center gap-4"
            style={{ writingMode: "vertical-rl" }}
          >
            <span
              aria-label="Personalised service"
              className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-ink/70"
            >
              {"Personalised service".split("").map((char, i) => (
                <motion.span
                  key={labelSettled ? `settled-${i}` : `animating-${i}`}
                  aria-hidden
                  className="inline-block"
                  initial={
                    labelSettled
                      ? false
                      : { opacity: 0, y: 40, scale: 1.6, filter: "blur(12px)" }
                  }
                  animate={
                    labelSettled
                      ? undefined
                      : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
                  }
                  transition={{
                    duration: 0.4,
                    delay: 1.3 + i * 0.05,
                    ease: "easeOut",
                  }}
                >
                  {char === " " ? " " : char}
                </motion.span>
              ))}
            </span>
            {labelSettled ? (
              <span className="h-24 w-px bg-ink/40" />
            ) : (
              <motion.span
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.6, delay: 2.4, ease: "easeOut" }}
                className="h-24 w-px origin-top bg-ink/40"
              />
            )}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="mb-8 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-ink/70"
        >
          Vanderpump Tech — independent digital studio
        </motion.p>

        <h1 className="text-ink font-semibold leading-[0.95] tracking-[-0.04em] text-[clamp(3.25rem,11vw,9.5rem)]">
          <HeroLine index={0}>Websites.</HeroLine>
          <HeroLine index={1}>
            Apps.{" "}
            <span className="relative inline-block">
              AI
              <motion.svg
                viewBox="0 0 220 24"
                fill="none"
                className="absolute -bottom-[0.08em] left-0 w-full"
                aria-hidden
              >
                <motion.path
                  d="M4 17 C 60 8, 150 6, 216 12"
                  stroke="#f97316"
                  strokeWidth="7"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" }}
                />
              </motion.svg>
            </span>
            <span className="text-flame">.</span>
          </HeroLine>
        </h1>

        <div className="mt-10 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease }}
            className="max-w-xl text-lg leading-relaxed text-ink/80 sm:text-xl"
          >
            Bespoke websites, mobile apps and AI solutions — designed and built
            end-to-end. An agile, independent partner delivering a fast,
            personal service at every stage.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button
              render={<a href="mailto:jack@vanderpump.tech" />}
              nativeButton={false}
              size="lg"
              className="group h-12 rounded-full px-7 text-base"
            >
              Start a project
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Button>
            <Button
              render={<a href="#work" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-ink/25 bg-transparent px-7 text-base text-ink hover:bg-ink hover:text-white"
            >
              See the work
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* floating note card — rises faster than the page for parallax depth */}
      <motion.div
        style={{ y: cardY }}
        className="absolute bottom-0 left-6 hidden max-w-xs lg:left-8 xl:block"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease }}
          className="bg-white p-8"
        >
          <ArrowUpRight className="absolute right-6 top-6 size-5 text-flame" />
          <p className="text-xl font-semibold leading-snug tracking-tight text-ink">
            Building your digital presence,{" "}
            <span className="text-flame">together</span>.
          </p>
        </motion.div>
      </motion.div>

      {/* scroll indicator — dissolves as soon as scrolling starts */}
      <motion.div
        style={{ opacity: indicatorOpacity }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <motion.a
          href="#logos"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="block"
          aria-label="Scroll down"
        >
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex size-11 items-center justify-center rounded-full border border-ink/25 text-ink"
          >
            <ArrowDown className="size-4" />
          </motion.span>
        </motion.a>
      </motion.div>
    </section>
  );
}
