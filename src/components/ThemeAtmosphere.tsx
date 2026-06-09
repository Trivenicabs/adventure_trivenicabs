"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Vibe } from "@/lib/themes";

// deterministic pseudo-random from index (SSR-safe, no Math.random)
const rnd = (i: number, s = 1) => {
  const x = Math.sin(i * 12.9898 * s) * 43758.5453;
  return x - Math.floor(x);
};

export default function ThemeAtmosphere({
  vibe,
  a,
  b,
}: {
  vibe: Vibe;
  a: string;
  b: string;
}) {
  const reduce = useReducedMotion();
  // Respect reduced-motion: no looping particle animation.
  if (reduce) return null;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {vibe === "water" && <Water a={a} b={b} />}
      {vibe === "adrenaline" && <Adrenaline a={a} b={b} />}
      {vibe === "air" && <Air a={a} b={b} />}
      {vibe === "fire" && <Fire a={a} b={b} />}
      {vibe === "earth" && <Earth a={a} b={b} />}
      {vibe === "ride" && <Ride a={a} b={b} />}
      {vibe === "pilgrim" && <Pilgrim a={a} b={b} />}
      {vibe === "guide" && <Air a={a} b={b} />}
    </div>
  );
}

function Water({ a, b }: { a: string; b: string }) {
  return (
    <>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute inset-x-[-20%] h-40 rounded-[100%] blur-2xl"
          style={{
            bottom: `${8 + i * 14}%`,
            background: `linear-gradient(90deg, transparent, ${i % 2 ? b : a}55, transparent)`,
            opacity: 0.4 - i * 0.08,
          }}
          animate={{ x: ["-8%", "8%", "-8%"] }}
          transition={{ duration: 9 + i * 3, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      {Array.from({ length: 14 }).map((_, i) => (
        <motion.span
          key={`b${i}`}
          className="absolute h-2 w-2 rounded-full"
          style={{ left: `${rnd(i) * 100}%`, bottom: "-5%", background: a, opacity: 0.5 }}
          animate={{ y: [0, -700], opacity: [0, 0.6, 0] }}
          transition={{ duration: 6 + rnd(i, 2) * 6, repeat: Infinity, delay: rnd(i, 3) * 6, ease: "easeIn" }}
        />
      ))}
    </>
  );
}

function Adrenaline({ a, b }: { a: string; b: string }) {
  return (
    <>
      <motion.div
        className="absolute inset-0"
        style={{ background: `radial-gradient(60% 50% at 50% 30%, ${a}22, transparent 70%)` }}
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.08, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
      {Array.from({ length: 22 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-px"
          style={{
            left: `${rnd(i) * 100}%`,
            height: `${30 + rnd(i, 2) * 80}px`,
            top: "-15%",
            background: `linear-gradient(${i % 2 ? a : b}, transparent)`,
            opacity: 0.5,
          }}
          animate={{ y: ["0vh", "120vh"] }}
          transition={{ duration: 1 + rnd(i, 4) * 1.4, repeat: Infinity, delay: rnd(i, 5) * 2, ease: "easeIn" }}
        />
      ))}
    </>
  );
}

function Air({ a, b }: { a: string; b: string }) {
  return (
    <>
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full blur-[1px]"
          style={{
            left: `${rnd(i) * 100}%`,
            top: `${rnd(i, 2) * 100}%`,
            width: `${4 + rnd(i, 3) * 8}px`,
            height: `${4 + rnd(i, 3) * 8}px`,
            background: i % 2 ? a : b,
            opacity: 0.4,
          }}
          animate={{ y: [0, -40, 0], x: [0, 20, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 8 + rnd(i, 4) * 8, repeat: Infinity, delay: rnd(i, 5) * 4, ease: "easeInOut" }}
        />
      ))}
    </>
  );
}

function Fire({ a, b }: { a: string; b: string }) {
  return (
    <>
      <motion.div
        className="absolute inset-x-0 bottom-0 h-1/2"
        style={{ background: `radial-gradient(50% 80% at 50% 100%, ${b}33, transparent 70%)` }}
        animate={{ opacity: [0.4, 0.75, 0.5, 0.7, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${20 + rnd(i) * 60}%`,
            bottom: "0%",
            width: `${3 + rnd(i, 2) * 4}px`,
            height: `${3 + rnd(i, 2) * 4}px`,
            background: i % 3 ? a : b,
            opacity: 0.7,
          }}
          animate={{ y: [0, -260 - rnd(i, 3) * 160], x: [0, (rnd(i, 4) - 0.5) * 80], opacity: [0.8, 0] }}
          transition={{ duration: 4 + rnd(i, 5) * 4, repeat: Infinity, delay: rnd(i, 6) * 4, ease: "easeOut" }}
        />
      ))}
    </>
  );
}

function Earth({ a, b }: { a: string; b: string }) {
  return (
    <>
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full blur-[2px]"
          style={{
            left: `${rnd(i) * 100}%`,
            top: `${rnd(i, 2) * 100}%`,
            width: `${6 + rnd(i, 3) * 10}px`,
            height: `${6 + rnd(i, 3) * 10}px`,
            background: i % 2 ? a : b,
            opacity: 0.18,
          }}
          animate={{ x: [0, 30, 0], y: [0, -16, 0] }}
          transition={{ duration: 14 + rnd(i, 4) * 10, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </>
  );
}

function Ride({ a, b }: { a: string; b: string }) {
  return (
    <>
      {Array.from({ length: 16 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-px"
          style={{
            top: `${rnd(i) * 100}%`,
            width: `${60 + rnd(i, 2) * 160}px`,
            left: "-20%",
            background: `linear-gradient(90deg, transparent, ${i % 2 ? a : b}, transparent)`,
            opacity: 0.45,
          }}
          animate={{ x: ["0vw", "130vw"] }}
          transition={{ duration: 2 + rnd(i, 3) * 2.5, repeat: Infinity, delay: rnd(i, 4) * 3, ease: "linear" }}
        />
      ))}
    </>
  );
}

function Pilgrim({ a, b }: { a: string; b: string }) {
  return (
    <>
      <motion.div
        className="absolute inset-0"
        style={{ background: `radial-gradient(50% 40% at 50% 20%, ${a}1f, transparent 70%)` }}
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      {Array.from({ length: 16 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${rnd(i) * 100}%`,
            bottom: "-4%",
            width: `${4 + rnd(i, 2) * 6}px`,
            height: `${4 + rnd(i, 2) * 6}px`,
            background: i % 2 ? a : b,
            boxShadow: `0 0 12px ${a}`,
            opacity: 0.6,
          }}
          animate={{ y: [0, -500 - rnd(i, 3) * 200], opacity: [0, 0.7, 0] }}
          transition={{ duration: 9 + rnd(i, 4) * 7, repeat: Infinity, delay: rnd(i, 5) * 7, ease: "easeOut" }}
        />
      ))}
    </>
  );
}
