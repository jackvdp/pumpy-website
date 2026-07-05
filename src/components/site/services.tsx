"use client";

import { motion } from "motion/react";
import { Globe, Smartphone, Sparkles } from "lucide-react";
import { Reveal, WordReveal } from "./reveal";

const services = [
  {
    icon: Globe,
    title: "Websites",
    description:
      "Fast, beautiful marketing sites and web apps that convert. Built with modern frameworks, tuned for performance and SEO from day one.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native-quality iOS and Android apps, from first wireframe to App Store launch. One codebase, every device, no compromises.",
  },
  {
    icon: Sparkles,
    title: "AI Solutions",
    description:
      "Chatbots, automations and AI-powered features that actually ship. Practical machine intelligence woven into your product and workflows.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <Reveal>
            <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-flame">
              What we build
            </p>
          </Reveal>
          <WordReveal
            text="Digital products that work for you."
            className="text-4xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group relative h-full overflow-hidden rounded-2xl border border-border bg-white p-8"
              >
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-flame transition-transform duration-500 ease-out group-hover:scale-x-100" />
                <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-peach text-ink transition-colors duration-300 group-hover:bg-flame group-hover:text-white">
                  <service.icon className="size-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold tracking-tight text-ink">
                  {service.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-16">
          <div className="grid gap-8 border-t border-border pt-10 sm:grid-cols-3">
            {[
              {
                title: "Personal service.",
                text: "Bespoke solutions tailored to your vision and objectives.",
              },
              {
                title: "Fast delivery.",
                text: "Quick turnaround of high-quality, customised digital products.",
              },
              {
                title: "Cost-effective.",
                text: "Premium results that fit your budget, without agency overhead.",
              },
            ].map((item) => (
              <p key={item.title} className="text-[17px] leading-relaxed">
                <span className="font-bold text-ink">{item.title}</span>{" "}
                <span className="text-muted-foreground">{item.text}</span>
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
