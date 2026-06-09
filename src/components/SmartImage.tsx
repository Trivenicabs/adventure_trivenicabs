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

// Light warm unify only — keep photos vivid & alive (adventure energy).
const GRADE = "linear-gradient(180deg, rgba(221,154,43,0.05), rgba(194,80,43,0.06))";

export default function SmartImage({
  src,
  alt,
  priority,
  sizes = "100vw",
  className = "",
  grade = true,
}: {
  src: string;
  alt: string;
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
        <div className="absolute inset-0 grid place-items-center opacity-40 select-none">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="#faf3e2" aria-hidden>
            <path d="M3 20h18L15 8l-3 5-2-3-7 10Z" />
            <circle cx="17.5" cy="6" r="1.6" />
          </svg>
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
        style={{ filter: "saturate(1.16) contrast(1.08)" }}
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
