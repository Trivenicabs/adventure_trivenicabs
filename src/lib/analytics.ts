// Analytics, Search Console & lead-capture configuration.
//
// The three values below are PUBLIC by design — a GA4 measurement ID and a
// Search Console token are both visible in the page source anyway, and the
// Apps Script URL is a public write-only endpoint. None of them are secrets,
// so they live in code (deployed via Vercel) rather than env vars.
//
// ⚠️  NEVER put a Google service-account key or API secret in this file — those
//     are real credentials and must go in Vercel's Environment Variables.

export const analytics: {
  gaId: string;
  gscVerification: string;
  bingVerification: string;
  leadSheetEndpoint: string;
} = {
  /** GA4 Measurement ID — Google Analytics → Admin → Data Streams → Web.
   *  Format: G-XXXXXXXXXX. Leave empty to disable analytics entirely.
   *
   *  Deliberately the SAME property as www.trivenicabs.in. GA4 sets its cookie
   *  on the registrable domain, so a session continues across
   *  trivenicabs.in → adventure.trivenicabs.in rather than starting again —
   *  which is the only way to see whether a reader who arrives for rafting goes
   *  on to book the journey. Separate properties make that path invisible, and
   *  this site previously measured nothing at all.
   *
   *  In reporting, split the two with GA4's built-in Hostname dimension;
   *  without it the figures for both sites blend into one. Do NOT configure
   *  cross-domain measurement — that is for distinct registrable domains and
   *  would do nothing here. */
  gaId: "G-4JLY2DXYLS",

  /** Search Console verification token — Search Console → Add property →
   *  URL prefix → HTML tag → copy ONLY the content="..." value.
   *  Leave empty to omit the verification meta tag.
   *
   *  The same token as the main site: an HTML-tag token belongs to the Google
   *  account rather than to one host, so it can prove ownership of this
   *  property too. If Search Console declines it, the fallback is a DNS TXT
   *  record on trivenicabs.in — that verifies a Domain property covering the
   *  domain and every subdomain at once, and needs no code here at all.
   *
   *  Worth being explicit: this is measurement only. A verification token has
   *  no effect on ranking and does not make Google treat a subdomain as
   *  established. It is how the data is read, nothing more. */
  gscVerification: "0TyoHgbDMg6YyyLIrEu3ek6bkqmfjs9qKx7KxUR2NlQ",

  /** Bing Webmaster Tools token, rendered as msvalidate.01. The same token as
   *  the main site, for the same reason as the Google one above. Bing is also
   *  where Copilot's web results come from, so it is worth having. */
  bingVerification: "20696359D0ED6AD28A7BA67EF19A58B7",

  /** Google Apps Script Web App URL that appends leads to the Google Sheet.
   *  See seo-report/google-sheet-lead-capture.md for the 5-minute setup.
   *  Leave empty to disable sheet capture (the form still opens WhatsApp). */
  leadSheetEndpoint: "",
};

/* ------------------------------------------------------------------ */
/* GA4 event tracking                                                  */
/* ------------------------------------------------------------------ */

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js",
      eventNameOrId: string,
      params?: Record<string, unknown>,
    ) => void;
  }
}

/**
 * Send a GA4 event.
 *
 * ⚠️  PII RULE: never pass name, phone, email or any personally identifying
 * value here. Google's policy forbids PII in Analytics and violations can get
 * the property terminated. Lead details go to the Google Sheet instead — this
 * function is for anonymous counts and categories only.
 */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", name, params);
}

/* ------------------------------------------------------------------ */
/* Lead capture → Google Sheet                                         */
/* ------------------------------------------------------------------ */

export interface Lead {
  name: string;
  phone: string;
  interest: string;
  date?: string;
  people?: string;
  notes?: string;
  /** Which page the lead came from */
  source?: string;
}

/**
 * Append a lead to the Google Sheet via the Apps Script endpoint.
 *
 * Deliberately fire-and-forget: it must never block or break the WhatsApp
 * hand-off, which is the actual booking path. Uses `keepalive` so the request
 * survives the page navigating away to WhatsApp.
 */
export async function captureLead(lead: Lead): Promise<void> {
  if (!analytics.leadSheetEndpoint) return;
  try {
    await fetch(analytics.leadSheetEndpoint, {
      method: "POST",
      // text/plain avoids a CORS preflight, which Apps Script handles poorly
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        ...lead,
        timestamp: new Date().toISOString(),
        source: lead.source ?? (typeof window !== "undefined" ? window.location.pathname : ""),
      }),
      keepalive: true,
    });
  } catch {
    // Never surface a capture failure to the customer.
  }
}
