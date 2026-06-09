"use client";

import Image from "next/image";
import { useState } from "react";

const GRADIENTS = [
  "linear-gradient(135deg,#0a1f26,#12b3a3 120%)",
  "linear-gradient(135deg,#07151a,#f5ce2e 160%)",
  "linear-gradient(135deg,#0a1f26,#2ee6c8 140%)",
  "linear-gradient(135deg,#091a1e,#ff7a45 170%)",
];

function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h << 5) - h + s.charCodeAt(i);
  return Math.abs(h);
}

// Unified cinematic grade applied over every photo so disparate sources
// read as one cohesive brand world (teal shadows → warm gold highlights).
const GRADE =
  "linear-gradient(180deg, rgba(6,14,20,0.12) 0%, rgba(6,14,20,0) 38%, rgba(6,14,20,0.4) 100%), linear-gradient(115deg, rgba(36,240,212,0.12) 0%, transparent 48%, rgba(255,207,31,0.1) 100%)";

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
        style={{ filter: "contrast(1.05) saturate(1.06) brightness(0.96)" }}
        onError={() => setFailed(true)}
      />
      {grade && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: GRADE, mixBlendMode: "soft-light" }}
        />
      )}
    </>
  );
}
