"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  // Respect reduced-motion: render plainly, no transform/opacity animation.
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      data-reveal
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px", amount: 0.15 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
