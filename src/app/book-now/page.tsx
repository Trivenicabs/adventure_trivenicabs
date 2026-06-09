import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import EnquiryForm from "@/components/EnquiryForm";
import { site, waLink, telLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book Rishikesh Adventure Online",
  description:
    "Book river rafting, bungee, camping, packages, rentals and yatra in Rishikesh with Triveni. Instant WhatsApp confirmation, no advance payment, 24×7 support.",
};

export default function BookNowPage() {
  return (
    <>
      <PageHeader
        eyebrow="Book now"
        title={<>Lock your <span className="text-rust">adventure</span> in 2 minutes</>}
        sub="Tell us what you're after — we reply on WhatsApp with availability and the best price. No advance payment needed."
      />
      <section className="container-x section-pad grid gap-8 lg:grid-cols-[1fr_20rem]">
        <EnquiryForm />
        <aside className="grid gap-4">
          <a href={waLink(`Hi ${site.name}! I'd like to book.`)} target="_blank" rel="noopener" className="panel card-lift rounded-card p-6">
            <IconBadge><ChatIcon /></IconBadge>
            <div className="mt-3 font-display text-lg font-semibold text-ink">WhatsApp us</div>
            <div className="text-sm text-ink-soft">Fastest — instant replies, 24×7.</div>
          </a>
          <a href={telLink()} className="panel card-lift rounded-card p-6">
            <IconBadge><PhoneIcon /></IconBadge>
            <div className="mt-3 font-display text-lg font-semibold text-ink">Call {site.phoneDisplay}</div>
            <div className="text-sm text-ink-soft">Speak to a Triveni travel expert.</div>
          </a>
          <div className="panel rounded-card p-6">
            <IconBadge><ShieldIcon /></IconBadge>
            <div className="mt-3 font-display text-lg font-semibold text-ink">Why book with us</div>
            <ul className="mt-3 grid gap-2 text-sm text-ink-soft">
              <li>✓ Certified, insured operators</li>
              <li>✓ No advance payment</li>
              <li>✓ Free cancellation guidance</li>
              <li>✓ Cab + adventure bundles</li>
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="grid h-11 w-11 place-items-center rounded-md border-2 border-ink bg-mustard text-ink shadow-[3px_3px_0_0_var(--color-ink)]">
      {children}
    </span>
  );
}

const ico = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function ChatIcon() {
  return (
    <svg {...ico}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg {...ico}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg {...ico}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
