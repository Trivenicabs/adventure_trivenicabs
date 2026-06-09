"use client";

import { useState } from "react";
import { site, waLink } from "@/lib/site";

const interests = [
  "River Rafting",
  "Bungee Jumping",
  "Camping",
  "Adventure Package",
  "Bike / Scooty Rental",
  "Char Dham / Yatra",
  "Haridwar Tour",
  "Other",
];

export default function EnquiryForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState(interests[0]);
  const [date, setDate] = useState("");
  const [people, setPeople] = useState("2");
  const [notes, setNotes] = useState("");

  const msg = `Hi ${site.name}! New enquiry:
• Name: ${name || "—"}
• Phone: ${phone || "—"}
• Interest: ${interest}
• Date: ${date || "flexible"}
• People: ${people}
• Notes: ${notes || "—"}`;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        window.open(waLink(msg), "_blank");
      }}
      className="panel bg-paper-2 p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your name">
          <input className="inp" value={name} onChange={(e) => setName(e.target.value)} placeholder="Aarav Sharma" required />
        </Field>
        <Field label="Phone / WhatsApp">
          <input className="inp" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 ..." required />
        </Field>
        <Field label="Interested in">
          <select className="inp" value={interest} onChange={(e) => setInterest(e.target.value)}>
            {interests.map((i) => (
              <option key={i} value={i}>{i}</option>
            ))}
          </select>
        </Field>
        <Field label="Preferred date">
          <input type="date" className="inp" value={date} onChange={(e) => setDate(e.target.value)} />
        </Field>
        <Field label="No. of people">
          <input type="number" min={1} className="inp" value={people} onChange={(e) => setPeople(e.target.value)} />
        </Field>
        <Field label="Anything else?">
          <input className="inp" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Pickup from Delhi, etc." />
        </Field>
      </div>
      <button type="submit" className="btn btn-rust mt-6 w-full justify-center">
        Send enquiry on WhatsApp →
      </button>
      <p className="mt-3 text-center text-xs text-ink-soft">
        No advance payment · Instant reply · Or call {site.phoneDisplay}
      </p>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-display text-xs uppercase tracking-[0.12em] text-teal">
        {label}
      </span>
      {children}
    </label>
  );
}
