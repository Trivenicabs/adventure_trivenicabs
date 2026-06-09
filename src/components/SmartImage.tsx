"use client";

import Image from "next/image";
import { useState } from "react";

const GRADIENTS = [
  "linear-gradient(135deg,#c2502b,#dd9a2b 130%)",
  "linear-gradient(135deg,#1f7a6b,#dd9a2b 150%)",
  "linear-gradient(135deg,#2f4434,#1f7a6b 140%)",
  "linear-gradient(135deg,#9c3c1f,#c2502b 160%)",
];

function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h << 5) - h + s.charCodeAt(i);
  return Math.abs(h);
}

// Vintage screen-print treatment so every photo reads like a poster plate.
const GRADE =
  "linear-gradient(0deg, rgba(194,80,43,0.16), rgba(221,154,43,0.1)), linear-gradient(180deg, rgba(241,231,208,0.1), rgba(42,33,23,0.14))";

export default function SmartImage({
  src,
  alt,
  emoji,
  priority,
  sizes = "100vw",
  className = "",
  grade = true,
}: {
  src: string;
  alt: string;
  emoji?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  grade?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const grad = GRADIENTS[hash(alt) % GRADIENTS.length];

  if (failed) {
    return (
      <div
        className={`relative h-full w-full ${className}`}
        style={{ background: grad }}
        role="img"
        aria-label={alt}
      >
        <div className="absolute inset-0 grid place-items-center text-6xl opacity-40 select-none">
          {emoji ?? "🏔️"}
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 0%, rgba(255,255,255,0.12), transparent)",
          }}
        />
      </div>
    );
  }

  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${className}`}
        style={{ filter: "sepia(0.22) saturate(0.86) contrast(1.06) brightness(1.03)" }}
        onError={() => setFailed(true)}
      />
      {grade && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: GRADE, mixBlendMode: "multiply" }}
        />
      )}
    </>
  );
}
