"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "motion/react";
import { ArrowUp, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, WordReveal } from "./reveal";

const stats = [
  { value: 10, suffix: "k", label: "Hours dedicated to development." },
  { value: 5000, suffix: "+", label: "Commits pushed to production." },
  { value: 250, suffix: "k", label: "Lines of clean, efficient code." },
  { value: 100, suffix: "%", label: "Client satisfaction with their product." },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 2, ease: "circOut" });
      return () => controls.stop();
    }
  }, [inView, count, value]);

  return (
    <span
      ref={ref}
      className="flex items-baseline text-6xl font-bold tracking-[-0.03em] text-ink sm:text-7xl"
    >
      <motion.span>{rounded}</motion.span>
      <span className="text-flame">{suffix}</span>
      <ArrowUp className="ml-3 size-7 self-center text-flame" />
    </span>
  );
}

export function Stats() {
  return (
    <section className="bg-white pb-24 sm:pb-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <WordReveal
            text="Technical knowledge, user-centric design."
            className="text-4xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl"
          />
        </div>

        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          {/* left column — pins below the navbar and stays until the section ends */}
          <div>
            <div className="lg:sticky lg:top-36">
              <Reveal>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Dedicated to providing personalised solutions tailored to
                  your{" "}
                  <span className="font-semibold text-ink underline decoration-flame decoration-2 underline-offset-4">
                    unique business needs and goals.
                  </span>
                </p>
                <Button
                  render={<a href="mailto:jack@vanderpump.tech" />}
                  nativeButton={false}
                  size="lg"
                  className="group mt-10 h-12 rounded-full px-7 text-base"
                >
                  Let&apos;s talk now
                  <Mail className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                </Button>
              </Reveal>
            </div>
          </div>

          {/* 2x2 counter grid — scrolls normally */}
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:col-span-2">
            {stats.map((stat, i) => (
              <div key={stat.label} className="bg-white p-10 py-14 sm:p-12 sm:py-16">
                <Reveal delay={(i % 2) * 0.1}>
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <p className="mt-14 leading-relaxed text-muted-foreground">
                    {stat.label}
                  </p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
