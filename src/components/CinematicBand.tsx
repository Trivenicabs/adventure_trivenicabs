"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import SmartImage from "./SmartImage";
import Reveal from "./Reveal";
import { img } from "@/lib/images";

const stats = [
  { v: "30+", l: "Adventures & tours" },
  { v: "4.9★", l: "From 10,000+ travellers" },
  { v: "9–36", l: "km of Ganga rapids" },
  { v: "24×7", l: "On-ground support" },
];

export default function CinematicBand() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} className="relative my-10 overflow-hidden">
      <div className="relative min-h-[78svh]">
        {/* parallax cinematic photo */}
        <motion.div style={{ y: reduce ? undefined : y }} className="absolute inset-0 -top-[12%] -bottom-[12%]">
          <SmartImage
            src={img.ramjhulaNight}
            alt="Ram Jhula bridge illuminated over the Ganga at night, Rishikesh"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-night via-night/70 to-night/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-transparent to-night/60" />

        <div className="container-x relative flex min-h-[78svh] flex-col justify-center py-20">
          <Reveal className="max-w-2xl">
            <span className="chip ring-aurora">Why Rishikesh</span>
            <h2 className="mt-5 font-display text-[clamp(2.2rem,5.5vw,4rem)] font-semibold leading-[1.02]">
              Where the <span className="shimmer-text">Ganga</span> meets the
              Himalaya.
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-mist/85">
              India&apos;s adventure capital — holy white-water, soaring gorges,
              starlit riverside camps and sacred peaks, all within a few hours of
              Delhi. We bring you the thrill; the mountains do the rest.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-12">
            <div className="grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-glass border border-white/10 glass-dark sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.l} className="bg-white/[0.02] p-5 text-center sm:text-left">
                  <div className="font-display text-3xl font-semibold text-gold">
                    {s.v}
                  </div>
                  <div className="mt-1 text-xs leading-snug text-mute">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
