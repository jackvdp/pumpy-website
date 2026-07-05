"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, WordReveal } from "./reveal";

export function Cta() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-nero py-28 sm:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/2 size-[30rem] -translate-y-1/2 rounded-full bg-flame/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-40 size-[26rem] rounded-full bg-peach/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6 text-center lg:px-8">
        <Reveal>
          <p className="mb-6 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-flame">
            Ready when you are
          </p>
        </Reveal>
        <WordReveal
          text="Let's build something brilliant together."
          className="mx-auto max-w-3xl text-5xl font-semibold tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl"
        />
        <Reveal delay={0.3}>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/60">
            Tell us about your idea — a website, an app, an AI feature, or all
            three — and get a fast, honest take on how to make it real.
          </p>
        </Reveal>
        <Reveal delay={0.45}>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 inline-block"
          >
            <Button
              render={<a href="mailto:jack@vanderpump.tech" />}
              nativeButton={false}
              size="lg"
              className="group h-14 rounded-full bg-gradient-to-r from-flame to-pink-600 px-9 text-lg text-white shadow-lg shadow-flame/25 hover:from-flame hover:to-pink-500"
            >
              <Mail className="size-5" />
              jack@vanderpump.tech
              <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Button>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
