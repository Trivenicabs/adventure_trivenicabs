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
        title={<>Lock your <span className="shimmer-text">adventure</span> in 2 minutes</>}
        sub="Tell us what you're after — we reply on WhatsApp with availability and the best price. No advance payment needed."
      />
      <section className="container-x grid gap-8 lg:grid-cols-[1fr_20rem]">
        <EnquiryForm />
        <aside className="grid gap-4">
          <a href={waLink(`Hi ${site.name}! I'd like to book.`)} target="_blank" rel="noopener" className="glass card-hover rounded-glass p-6">
            <div className="text-2xl">💬</div>
            <div className="mt-2 font-display text-lg font-semibold text-mist">WhatsApp us</div>
            <div className="text-sm text-mute">Fastest — instant replies, 24×7.</div>
          </a>
          <a href={telLink()} className="glass card-hover rounded-glass p-6">
            <div className="text-2xl">📞</div>
            <div className="mt-2 font-display text-lg font-semibold text-mist">Call {site.phoneDisplay}</div>
            <div className="text-sm text-mute">Speak to a Triveni travel expert.</div>
          </a>
          <div className="glass rounded-glass p-6">
            <div className="text-2xl">🛡️</div>
            <div className="mt-2 font-display text-lg font-semibold text-mist">Why book with us</div>
            <ul className="mt-3 grid gap-2 text-sm text-mute">
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
