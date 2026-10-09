"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { site, waLink } from "@/lib/site";
import { captureLead, trackEvent } from "@/lib/analytics";

interface Props {
  /** What's being booked — shown in the modal and logged to the Sheet. */
  product: string;
  /** Extra context appended to the WhatsApp message (e.g. price). */
  detail?: string;
  label?: string;
  className?: string;
}

/**
 * A booking CTA that collects name + phone before handing off to WhatsApp.
 *
 * Why not a plain link: a direct wa.me jump tells us nothing about who enquired
 * — the number stays inside WhatsApp. Two fields let the lead land in the
 * Google Sheet while the customer still ends up in the same WhatsApp chat with
 * the message pre-filled.
 *
 * Progressive enhancement: it renders as a real <a href="wa.me/..."> link, so
 * if JavaScript fails the button still works as it did before — it just skips
 * the capture step. Booking never breaks.
 */
export default function BookButton({ product, detail, label = "Book on WhatsApp", className = "btn btn-rust" }: Props) {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [sending, setSending] = useState(false);
  const firstField = useRef<HTMLInputElement>(null);

  const plainMsg = `Hi ${site.name}! I'm interested in "${product}". Please share details & availability.`;

  // Esc to close + lock background scroll while the modal is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstField.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (sending) return;
    setSending(true);

    // Open the WhatsApp tab synchronously-ish: mobile browsers block popups
    // opened after an await, so we build the URL first and never await before
    // window.open below.
    const msg =
      `Hi ${site.name}! I'd like to book "${product}".` +
      `\n• Name: ${name}` +
      `\n• Phone: ${phone}` +
      (date ? `\n• Preferred date: ${date}` : "") +
      (detail ? `\n• ${detail}` : "") +
      `\nPlease confirm availability.`;

    void captureLead({ name, phone, interest: product, date, notes: detail });
    trackEvent("booking_enquiry", {
      event_category: "conversion",
      event_label: product,
    });

    window.open(waLink(msg), "_blank", "noopener");
    setSending(false);
    setOpen(false);
  }

  return (
    <>
      <a
        href={waLink(plainMsg)}
        target="_blank"
        rel="noopener"
        className={className}
        onClick={(e) => {
          // Let modified clicks (new tab, etc.) behave normally.
          if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
          e.preventDefault();
          setOpen(true);
        }}
      >
        {label}
      </a>

      {/* The modal used to appear and vanish instantly. It is the moment the
          booking actually happens, so it gets the one piece of motion on this
          site that is about reassurance rather than character: the scrim fades,
          and the card rises from the bottom on a phone where it is a sheet, or
          settles slightly off-square on a wider screen where it is a card on
          the board. Reduced motion gets neither — just the dialog. */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-end justify-center bg-ink/60 p-0 backdrop-blur-sm sm:items-center sm:p-4"
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={`Book ${product}`}
            initial={reduce ? undefined : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            <motion.div
              className="panel w-full max-w-md bg-paper-2 p-6 sm:p-7"
              onClick={(e) => e.stopPropagation()}
              initial={reduce ? undefined : { y: 28, rotate: -0.8, opacity: 0 }}
              animate={reduce ? undefined : { y: 0, rotate: 0, opacity: 1 }}
              exit={reduce ? undefined : { y: 18, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-display text-xs uppercase tracking-[0.12em] text-teal">
                  Almost there
                </div>
                <h2 className="mt-1 font-display text-2xl uppercase leading-tight text-ink">
                  {product}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="font-display text-xl leading-none text-ink-soft hover:text-rust"
              >
                ✕
              </button>
            </div>

            <p className="mt-3 text-sm text-ink-soft">
              Just your name and number — we&apos;ll open WhatsApp with your details filled in.
            </p>

            <form onSubmit={submit} className="mt-5 grid gap-4">
              <label className="block">
                <span className="mb-1.5 block font-display text-xs uppercase tracking-[0.12em] text-teal">
                  Your name
                </span>
                <input
                  ref={firstField}
                  className="inp"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Aarav Sharma"
                  required
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block font-display text-xs uppercase tracking-[0.12em] text-teal">
                  Phone / WhatsApp
                </span>
                <input
                  className="inp"
                  type="tel"
                  inputMode="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  required
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block font-display text-xs uppercase tracking-[0.12em] text-teal">
                  Preferred date <span className="normal-case text-ink-soft">(optional)</span>
                </span>
                <input
                  className="inp"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </label>

              <button type="submit" className="btn btn-rust mt-1 w-full justify-center" disabled={sending}>
                Continue to WhatsApp →
              </button>
            </form>

              <p className="mt-3 text-center text-xs text-ink-soft">
                No advance payment · Instant confirmation · 24×7 support
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
