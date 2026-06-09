"use client";

import Link from "next/link";
import { motion } from "motion/react";
import SmartImage from "./SmartImage";
import Stamp from "./Stamp";
import { img } from "@/lib/images";
import { site, waLink } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b-2 border-ink bg-paper">
      {/* sunburst behind artwork */}
      <div className="sunburst pointer-events-none absolute -right-40 -top-40 hidden h-[44rem] w-[44rem] rounded-full lg:block" />

      <div className="container-x relative grid items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        {/* left — the bill */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="eyebrow"
          >
            Est. Rishikesh · India&apos;s Adventure Capital
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease }}
            className="mt-5 font-display text-[clamp(2.9rem,8.5vw,6rem)] text-ink"
          >
            Chase the{" "}
            <span className="text-rust">thrill</span>
            <br /> of the Himalayas
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 max-w-md font-serif-d text-lg leading-snug text-ink-soft"
          >
            Raft the holy Ganga, leap off India&apos;s highest bungee, camp under
            Himalayan stars and ride the high passes — all under the {site.parent}{" "}
            name.
          </motion.p>

          {/* data callouts */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-7 flex flex-wrap items-stretch gap-0 overflow-hidden rounded-card border-2 border-ink"
          >
            {[
              { v: "30+", l: "Activities" },
              { v: "4.9★", l: "10,000+ rated" },
              { v: "9–36km", l: "Ganga rapids" },
              { v: "₹600", l: "Rafting from" },
            ].map((s, i) => (
              <div
                key={s.l}
                className={`flex-1 px-4 py-2.5 ${i ? "border-l-2 border-ink" : ""} ${
                  i % 2 ? "bg-paper" : "bg-cream"
                }`}
              >
                <div className="font-display text-xl text-ink">{s.v}</div>
                <div className="text-[11px] font-semibold uppercase tracking-wide text-ink-soft">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            <a
              href={waLink(`Hi ${site.name}! I'd like to book an adventure.`)}
              target="_blank"
              rel="noopener"
              className="btn btn-rust"
            >
              Book your adventure
            </a>
            <Link href="/#activities" className="btn btn-paper">
              Explore 30+ activities
            </Link>
          </motion.div>
        </div>

        {/* right — framed artwork + stamp */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="print-frame aspect-[4/5] rotate-1 shadow-[6px_6px_0_0_var(--color-ink)]">
            <SmartImage
              src={img.rafting}
              alt="River rafting on the Ganga, Rishikesh"
              priority
              sizes="(max-width:1024px) 90vw, 520px"
            />
            {/* printed caption strip */}
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t-2 border-ink bg-mustard px-4 py-2">
              <span className="font-display text-sm uppercase tracking-wide text-ink">
                River Rafting · Grade IV
              </span>
              <span className="font-display text-sm text-rust-dk">₹1,000</span>
            </div>
          </div>

          {/* small inset photo */}
          <div className="print-frame absolute -bottom-6 -left-6 hidden h-32 w-40 -rotate-3 shadow-[4px_4px_0_0_var(--color-ink)] sm:block">
            <SmartImage src={img.camping} alt="Riverside camping at night" sizes="160px" />
          </div>

          {/* rotating stamp seal */}
          <div className="absolute -right-4 -top-6 h-28 w-28 sm:h-32 sm:w-32">
            <Stamp />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
