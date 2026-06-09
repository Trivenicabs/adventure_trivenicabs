"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { site, waLink, telLink } from "@/lib/site";

const links = [
  { href: "/river-rafting-in-rishikesh", label: "Rafting" },
  { href: "/#activities", label: "Activities" },
  { href: "/rishikesh-adventure-packages", label: "Packages" },
  { href: "/bike-rental-in-rishikesh", label: "Rentals" },
  { href: "/char-dham-yatra-from-rishikesh", label: "Yatra" },
  { href: "/#guides", label: "Guides" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* top ribbon */}
      <div className="bg-ink text-paper">
        <div className="container-x flex items-center justify-between py-1.5 text-[11px] font-medium tracking-wide">
          <span className="font-display tracking-[0.18em]">RISHIKESH · UTTARAKHAND</span>
          <a href={telLink()} className="hover:text-mustard">
            ☎ {site.phoneDisplay} · OPEN 24×7
          </a>
        </div>
      </div>

      {/* main bar */}
      <nav className="border-b-2 border-ink bg-paper">
        <div className="container-x flex items-center justify-between py-3">
          <Link href="/" className="group flex items-center gap-3">
            <span className="relative h-11 w-11 overflow-hidden rounded-md border-2 border-ink shadow-[3px_3px_0_0_var(--color-ink)]">
              <Image
                src="/brand/triveni-logo.webp"
                alt="Triveni"
                fill
                className="object-cover"
                sizes="44px"
                priority
              />
            </span>
            <span className="leading-none">
              <span className="block font-display text-xl tracking-tight text-ink">
                Triveni
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.28em] text-rust">
                Adventure Co.
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded px-3 py-2 font-display text-sm uppercase tracking-wide text-ink transition-colors hover:text-rust"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={waLink(`Hi ${site.name}! I'd like to book.`)}
              target="_blank"
              rel="noopener"
              className="btn btn-rust !py-2 !px-4 text-sm"
            >
              Book Now
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="grid h-10 w-10 place-items-center rounded-md border-2 border-ink bg-cream lg:hidden"
              aria-label="Menu"
            >
              <span className="font-display text-lg">{open ? "✕" : "≡"}</span>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-b-2 border-ink bg-paper lg:hidden"
          >
            <div className="container-x grid gap-1 py-3">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded px-3 py-2.5 font-display text-base uppercase tracking-wide text-ink hover:text-rust"
                >
                  {l.label}
                </Link>
              ))}
              <a href={telLink()} className="btn btn-ink mt-1 justify-center">
                Call {site.phoneDisplay}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
