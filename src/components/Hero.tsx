"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";
import SmartImage from "./SmartImage";
import { img } from "@/lib/images";
import { site, waLink } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yFar = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const yMid = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yScene = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  // mouse position → drives 3D rotation of the image scene
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 70, damping: 18 });
  const sy = useSpring(my, { stiffness: 70, damping: 18 });

  // combine mouse tilt + scroll tilt for genuine 3D motion
  const rotX = useTransform(
    [sy, scrollYProgress] as const,
    (v) => (v[0] as number) * -10 + (v[1] as number) * 16
  );
  const rotY = useTransform(sx, [-0.5, 0.5], [-16, 16]);

  function onMove(e: React.MouseEvent) {
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  return (
    <section
      ref={ref}
      onMouseMove={reduce ? undefined : onMove}
      className="relative min-h-[100svh] overflow-hidden"
    >
      {/* aurora light bloom — restrained */}
      <div className="aurora left-[8%] top-[14%] h-[26rem] w-[26rem] bg-gold/18" />
      <div className="aurora right-[6%] top-[28%] h-[30rem] w-[30rem] bg-cyan/18 [animation-delay:-4s]" />

      {/* cinematic parallax photo with slow Ken Burns zoom */}
      <motion.div style={{ y: reduce ? undefined : yFar, opacity: fade }} className="absolute inset-0">
        <div className={`absolute inset-0 opacity-45 ${reduce ? "scale-110" : "animate-kenburns"}`}>
          <SmartImage src={img.himalaya} alt="Himalayan peaks above Rishikesh at dawn" emoji="🏔️" priority sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-night/50 via-night/55 to-night" />
        <div className="absolute inset-0 bg-gradient-to-r from-night/90 via-night/35 to-night/60" />
      </motion.div>

      {/* drifting mist */}
      <motion.div
        style={{ y: reduce ? undefined : yMid }}
        className="absolute inset-x-0 bottom-[16%] h-64 animate-drift opacity-40 blur-2xl"
        aria-hidden
      >
        <div className="mx-auto h-full w-[140%] -translate-x-[14%] bg-gradient-to-t from-cyan/20 to-transparent" />
      </motion.div>

      {/* content */}
      <div className="container-x relative z-10 flex min-h-[100svh] flex-col justify-center pt-28 pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          {/* left: headline */}
          <motion.div style={{ opacity: fade }}>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="chip ring-aurora"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
              India&apos;s Adventure Capital · Rishikesh
            </motion.span>

            <h1 className="mt-6 font-display text-[clamp(2.6rem,7vw,5.6rem)] font-semibold leading-[0.95]">
              <Line delay={0.05}>Chase the</Line>
              <Line delay={0.15}>
                <span className="shimmer-text text-glow">thrill</span> of the
              </Line>
              <Line delay={0.25}>Himalayas.</Line>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease }}
              className="mt-6 max-w-md text-base leading-relaxed text-mute sm:text-lg"
            >
              Raft the Ganga, leap off India&apos;s highest bungee, camp under
              the stars and ride the high passes — booked in one tap, backed by
              the {site.parent} name.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href={waLink(`Hi ${site.name}! I'd like to book an adventure.`)}
                target="_blank"
                rel="noopener"
                className="btn btn-gold"
              >
                Book your adventure →
              </a>
              <Link href="/#activities" className="btn btn-ghost">
                Explore 30+ activities
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-9 flex items-center gap-6 text-sm text-mute"
            >
              <Stat value="4.9★" label="10,000+ reviews" />
              <span className="h-8 w-px bg-white/15" />
              <Stat value="₹600" label="rafting from" />
              <span className="h-8 w-px bg-white/15" />
              <Stat value="24×7" label="support" />
            </motion.div>
          </motion.div>

          {/* right: 3D image scene — photos float in real 3D space */}
          <div className="relative hidden h-[34rem] [perspective:1500px] lg:block">
            <motion.div
              style={
                reduce
                  ? undefined
                  : { y: yScene, rotateX: rotX, rotateY: rotY, opacity: fade }
              }
              className="absolute inset-0 [transform-style:preserve-3d]"
            >
              <Card3D className="right-2 top-1 w-64" depth={140} delay={0.5} src={img.rafting} emoji="🛶" tag="Most booked" title="16 km River Rafting" meta="Grade III · ₹1,000" />
              <Card3D className="left-0 top-44 w-56" depth={40} delay={0.7} src={img.camping} emoji="🏕️" tag="Riverside" title="Camping & Bonfire" meta="From ₹999 / night" />
              <Card3D className="bottom-1 right-10 w-56" depth={90} delay={0.9} src={img.enfield} emoji="🏍️" tag="Himalayan" title="Bike Tours & Rentals" meta="From ₹800 / day" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 sm:block"
      >
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-white/25 p-1.5">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-cyan"
          />
        </div>
      </motion.div>
    </section>
  );
}

function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-lg font-semibold text-mist">{value}</div>
      <div className="text-xs text-mute">{label}</div>
    </div>
  );
}

// A photo card positioned at a fixed depth in 3D space.
// translateZ (depth) lives on its own element so it never fights the
// entrance + float transforms nested inside it.
function Card3D({
  className,
  depth,
  delay,
  src,
  emoji,
  tag,
  title,
  meta,
}: {
  className: string;
  depth: number;
  delay: number;
  src: string;
  emoji: string;
  tag: string;
  title: string;
  meta: string;
}) {
  return (
    <div
      className={`absolute ${className}`}
      style={{ transform: `translateZ(${depth}px)`, transformStyle: "preserve-3d" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 44, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay, ease }}
      >
        <div className="animate-float" style={{ animationDelay: `${delay}s` }}>
          <div className="glass card-hover overflow-hidden rounded-glass p-2 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)]">
            <div className="relative h-32 overflow-hidden rounded-xl">
              <SmartImage src={src} alt={title} emoji={emoji} sizes="260px" />
              <span className="absolute left-2 top-2 chip !text-[10px] !py-1 backdrop-blur">
                {tag}
              </span>
            </div>
            <div className="p-2.5">
              <div className="font-display text-sm font-semibold text-mist">{title}</div>
              <div className="text-xs text-cyan">{meta}</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
