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
            <div className="text-2xl">💬</div>
            <div className="mt-2 font-display text-lg font-semibold text-ink">WhatsApp us</div>
            <div className="text-sm text-ink-soft">Fastest — instant replies, 24×7.</div>
          </a>
          <a href={telLink()} className="panel card-lift rounded-card p-6">
            <div className="text-2xl">📞</div>
            <div className="mt-2 font-display text-lg font-semibold text-ink">Call {site.phoneDisplay}</div>
            <div className="text-sm text-ink-soft">Speak to a Triveni travel expert.</div>
          </a>
          <div className="panel rounded-card p-6">
            <div className="text-2xl">🛡️</div>
            <div className="mt-2 font-display text-lg font-semibold text-ink">Why book with us</div>
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
