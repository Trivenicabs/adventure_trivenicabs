"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="container-x">
        <nav
          className={`mt-3 flex items-center justify-between rounded-full px-3 pl-4 transition-all duration-500 ${
            scrolled ? "glass py-1.5" : "glass-soft py-2"
          }`}
        >
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="relative h-9 w-9 overflow-hidden rounded-xl ring-1 ring-white/20 shadow-[0_0_24px_-6px_rgba(245,206,46,0.7)]">
              <Image
                src="/brand/triveni-logo.jpg"
                alt="Triveni"
                fill
                className="object-cover"
                sizes="36px"
              />
            </span>
            <span className="leading-none">
              <span className="block font-display text-[15px] font-semibold tracking-tight text-mist">
                Triveni
              </span>
              <span className="block text-[10px] font-medium uppercase tracking-[0.22em] text-cyan">
                Adventure
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-mute transition-colors hover:text-mist hover:bg-white/5"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={telLink()}
              className="hidden rounded-full p-2.5 text-mist transition-colors hover:bg-white/10 sm:grid"
              aria-label="Call us"
            >
              <PhoneIcon />
            </a>
            <a
              href={waLink(`Hi Triveni Adventure! I'd like to book.`)}
              target="_blank"
              rel="noopener"
              className="btn btn-gold text-sm !py-2.5 !px-4"
            >
              <WhatsAppIcon />
              <span className="hidden sm:inline">Book Now</span>
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="grid rounded-full p-2.5 text-mist hover:bg-white/10 lg:hidden"
              aria-label="Menu"
            >
              <BurgerIcon open={open} />
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="container-x lg:hidden"
          >
            <div className="glass mt-2 grid gap-1 rounded-3xl p-3">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-mist hover:bg-white/5"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={telLink()}
                className="btn btn-ghost mt-1 justify-center"
              >
                <PhoneIcon /> Call {site.phoneDisplay}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.8 14.13c-.25.69-1.45 1.32-1.99 1.36-.53.04-.53.42-3.34-.7-2.81-1.12-4.55-4-4.69-4.19-.14-.19-1.12-1.49-1.12-2.84s.71-2.01.96-2.29c.25-.28.55-.35.73-.35.18 0 .37 0 .53.01.17.01.4-.06.62.48.25.6.85 2.07.92 2.22.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.56.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.21 1.37.28.14.44.12.6-.07.18-.19.69-.8.88-1.08.18-.28.37-.23.62-.14.25.09 1.6.76 1.87.9.28.14.46.21.53.32.07.12.07.65-.18 1.34z" />
    </svg>
  );
}

function BurgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      {open ? (
        <>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </>
      ) : (
        <>
          <line x1="3" y1="7" x2="21" y2="7" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="17" x2="21" y2="17" />
        </>
      )}
    </svg>
  );
}
