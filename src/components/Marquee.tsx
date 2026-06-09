"use client";

import { motion, useReducedMotion } from "motion/react";

export function Marquee({ items }: { items: string[] }) {
  const reduce = useReducedMotion();
  const row = [...items, ...items];
  return (
    <div className="relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
      <motion.div
        className="flex shrink-0 items-center gap-10 pr-10"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
      >
        {row.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-3 whitespace-nowrap font-display text-sm font-medium tracking-wide text-mute"
          >
            {t}
            <span className="text-gold/50">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
