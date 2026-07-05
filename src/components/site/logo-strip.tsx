"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Reveal } from "./reveal";

// width/height are each file's intrinsic dimensions so Next can verify the
// aspect ratio; `display` is the rendered height
const logos = [
  { src: "/images/logos/met.svg", alt: "Met Office", width: 466, height: 63, display: 28 },
  { src: "/images/logos/dbt.webp", alt: "Department for Business & Trade", width: 1936, height: 1083, display: 52 },
  { src: "/images/logos/zopa.png", alt: "Zopa Bank", width: 300, height: 300, display: 80 },
  { src: "/images/logos/icps.webp", alt: "ICPS", width: 200, height: 134, display: 48 },
  { src: "/images/logos/vdpfx.webp", alt: "Vanderpump FX", width: 500, height: 165, display: 44 },
];

export function LogoStrip() {
  return (
    <section id="logos" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <p className="mb-10 text-center font-mono text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Tech solutions developed for
          </p>
        </Reveal>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.08 }}
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16"
        >
          {logos.map((logo) => (
            <motion.div
              key={logo.alt}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                unoptimized
                loading="eager"
                className="object-contain opacity-80 brightness-0 transition-opacity duration-300 hover:opacity-100"
                style={{ height: logo.display, width: "auto" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
