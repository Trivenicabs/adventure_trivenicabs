"use client";

import { waLink, telLink, site } from "@/lib/site";

export default function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 p-3 lg:hidden">
      <div className="glass flex items-center gap-2 rounded-2xl p-2">
        <a href={telLink()} className="btn btn-ghost flex-1 justify-center !py-3">
          Call
        </a>
        <a
          href={waLink(`Hi ${site.name}! I'd like to book.`)}
          target="_blank"
          rel="noopener"
          className="btn btn-gold flex-1 justify-center !py-3"
        >
          WhatsApp Book
        </a>
      </div>
    </div>
  );
}
