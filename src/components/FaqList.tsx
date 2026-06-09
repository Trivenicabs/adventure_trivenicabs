"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function FaqList({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mt-4 grid gap-3">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="panel overflow-hidden bg-paper">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-display text-base uppercase leading-tight text-ink">
                {f.q}
              </span>
              <span
                className={`grid h-7 w-7 shrink-0 place-items-center rounded border-2 border-ink font-display text-lg transition-colors ${
                  isOpen ? "bg-rust text-cream" : "bg-mustard text-ink"
                }`}
              >
                {isOpen ? "–" : "+"}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="border-t-2 border-ink/15 px-5 py-4 font-serif-d text-[15px] leading-snug text-ink-soft">
                    {f.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
