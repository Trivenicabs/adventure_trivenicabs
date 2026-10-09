"use client";

import { telLink } from "@/lib/site";
import BookButton from "./BookButton";

export default function StickyCTA() {
  return (
    <div className="sticky bottom-0 z-40 border-t-2 border-ink bg-paper p-2 lg:hidden">
      <div className="flex items-center gap-2">
        <a href={telLink()} className="btn btn-paper flex-1 justify-center !py-2.5">
          Call
        </a>
        <BookButton
          product="Rishikesh Adventure"
          label="WhatsApp Book"
          className="btn btn-rust flex-1 justify-center !py-2.5"
        />
      </div>
    </div>
  );
}
