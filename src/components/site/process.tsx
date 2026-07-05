"use client";

import { motion } from "motion/react";
import { Compass, PenTool, Code2, Rocket } from "lucide-react";
import { Reveal, WordReveal } from "./reveal";

const steps = [
  {
    number: "01",
    icon: Compass,
    title: "Discover",
    description:
      "We work closely with you to understand your vision and goals, making sure the project aligns with your objectives from the very first conversation.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design",
    description:
      "Ideas become visually striking, intuitive interfaces. Every screen is crafted to be both beautiful and effortless to use.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Develop",
    description:
      "Your design comes to life with modern technologies and best practices — with open communication the whole way through.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Deploy",
    description:
      "A careful launch and smooth handover, with ongoing support and maintenance to keep everything running flawlessly.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-nero texture-lines-dark py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <Reveal>
            <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-flame">
              How it works
            </p>
          </Reveal>
          <WordReveal
            text="Your vision, digitally realised."
            className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl"
          />
        </div>

        <div>
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08}>
              <motion.div
                whileHover={{ x: 12 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group grid grid-cols-1 items-center gap-4 border-b border-white/10 py-10 first:border-t md:grid-cols-12 md:gap-8"
              >
                <span className="font-mono text-sm text-white/40 md:col-span-1">
                  {step.number}
                </span>
                <div className="flex items-center gap-5 md:col-span-4">
                  <step.icon className="size-8 shrink-0 text-flame transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {step.title}
                  </h3>
                </div>
                <p className="leading-relaxed text-white/60 md:col-span-7">
                  {step.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-14 text-center">
          <p className="text-lg text-white/80">
            Let&apos;s build your project together.{" "}
            <a
              href="mailto:jack@vanderpump.tech"
              className="font-semibold text-peach underline decoration-flame decoration-2 underline-offset-4 transition-colors hover:text-white"
            >
              Get in touch.
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
