"use client";

import { motion, useReducedMotion } from "motion/react";

export function Marquee({ items }: { items: string[] }) {
  const reduce = useReducedMotion();
  const row = [...items, ...items];
  return (
    <div className="flex overflow-hidden border-y-2 border-ink bg-rust py-2.5">
      <motion.div
        className="flex shrink-0 items-center gap-8 pr-8"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      >
        {row.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-3 whitespace-nowrap font-display text-sm uppercase tracking-wide text-cream"
          >
            {t}
            <span className="text-mustard">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
