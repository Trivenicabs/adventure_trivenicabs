"use client";

import { waLink, telLink, site } from "@/lib/site";

export default function StickyCTA() {
  return (
    <div className="sticky bottom-0 z-40 border-t-2 border-ink bg-paper p-2 lg:hidden">
      <div className="flex items-center gap-2">
        <a href={telLink()} className="btn btn-paper flex-1 justify-center !py-2.5">
          Call
        </a>
        <a
          href={waLink(`Hi ${site.name}! I'd like to book.`)}
          target="_blank"
          rel="noopener"
          className="btn btn-rust flex-1 justify-center !py-2.5"
        >
          WhatsApp Book
        </a>
      </div>
    </div>
  );
}
