"use client";

import { useEffect } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { analytics, trackEvent } from "@/lib/analytics";

/**
 * Loads GA4 and tracks the site's conversion events.
 *
 * Conversions are captured with a single delegated click listener on the
 * document rather than by editing every CTA — so every "Book on WhatsApp",
 * "Call" and parent-brand link across all 93 pages is covered automatically,
 * including any added later.
 *
 * No PII is ever sent (see the rule in lib/analytics.ts) — only the event, the
 * page path and the button's own label.
 */
export default function Analytics() {
  useEffect(() => {
    if (!analytics.gaId) return;

    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement | null)?.closest?.("a");
      if (!link) return;

      const href = link.getAttribute("href") ?? "";
      // The button's visible text tells us which product was being booked.
      const label = (link.textContent ?? "").trim().slice(0, 80);
      const path = window.location.pathname;

      if (href.startsWith("https://wa.me/")) {
        trackEvent("whatsapp_click", {
          event_category: "conversion",
          event_label: label,
          page_path: path,
        });
      } else if (href.startsWith("tel:")) {
        trackEvent("call_click", {
          event_category: "conversion",
          event_label: label,
          page_path: path,
        });
      } else if (
        href.includes("trivenicabs.in") &&
        !href.includes("adventure.trivenicabs.in")
      ) {
        trackEvent("outbound_parent_click", {
          event_category: "outbound",
          event_label: label,
          page_path: path,
        });
      }
    };

    // capture phase: fires even if a handler stops propagation
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  if (!analytics.gaId) return null;
  return <GoogleAnalytics gaId={analytics.gaId} />;
}
