"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
};

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={revealVariants}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

export function WordReveal({
  text,
  className,
  delay = 0,
  as: Tag = "h2",
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}) {
  const words = text.split(" ");
  const MotionTag = motion[Tag];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ staggerChildren: 0.06, delayChildren: delay }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="inline-block whitespace-pre"
          variants={{
            hidden: { opacity: 0, y: 24, filter: "blur(10px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
            },
          }}
        >
          {word}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </MotionTag>
  );
}
