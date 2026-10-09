"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

/**
 * Scroll entrance.
 *
 * The site commits to a printed-poster aesthetic, so the entrance is a poster
 * being set down rather than a panel sliding in: it arrives slightly off-square
 * and settles straight. `rotate` is the angle it starts at — a small value,
 * alternating sign across a grid, reads as hand-placed instead of mechanical.
 *
 * `stagger` turns the wrapper into a variants parent so a grid can sequence its
 * children from one place, instead of every call site passing its own
 * `delay={i * 0.05}`. Children opt in by being wrapped in `RevealItem`.
 *
 * Reduced motion returns the children in a plain div with no transform and no
 * opacity animation — not a faster version of the same movement.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  rotate = 0,
  stagger,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  rotate?: number;
  stagger?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  if (stagger) {
    const parent: Variants = {
      hidden: {},
      shown: { transition: { staggerChildren: stagger, delayChildren: delay } },
    };
    return (
      <motion.div
        className={className}
        data-reveal
        variants={parent}
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, margin: "-80px", amount: 0.1 }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      data-reveal
      initial={{ opacity: 0, y, rotate }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-80px", amount: 0.15 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/**
 * A child of a `Reveal` that has `stagger` set. It carries no timing of its own
 * — the parent decides when each one runs, which is the reason for using
 * variants rather than hand-passed delays.
 */
export function RevealItem({
  children,
  y = 24,
  rotate = 0,
  className = "",
}: {
  children: ReactNode;
  y?: number;
  rotate?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  const item: Variants = {
    hidden: { opacity: 0, y, rotate },
    shown: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}
