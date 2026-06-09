import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import EnquiryForm from "@/components/EnquiryForm";
import { site, waLink, telLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Triveni Adventure Rishikesh",
  description:
    "Get in touch with Triveni Adventure for Rishikesh adventure bookings, rentals and Char Dham yatra. Call or WhatsApp +91 89235 34551, 24×7.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={<>Let&apos;s plan your <span className="text-rust">Rishikesh</span> trip</>}
        sub="Questions, custom itineraries or group bookings — we're here 24×7."
      />
      <section className="container-x section-pad grid gap-8 lg:grid-cols-2">
        <div className="grid gap-4">
          <a href={telLink()} className="panel card-lift rounded-card p-6">
            <div className="footer-h">Call / WhatsApp</div>
            <div className="mt-2 font-display text-2xl font-semibold text-rust">{site.phoneDisplay}</div>
            <div className="text-sm text-ink-soft">Available 24×7 for bookings & support</div>
          </a>
          <a href={`mailto:${site.email}`} className="panel card-lift rounded-card p-6">
            <div className="footer-h">Email</div>
            <div className="mt-2 font-display text-xl font-semibold text-ink">{site.email}</div>
          </a>
          <a href={waLink()} target="_blank" rel="noopener" className="panel card-lift rounded-card p-6">
            <div className="footer-h">Quick book</div>
            <div className="mt-2 font-display text-xl font-semibold text-teal">Chat on WhatsApp →</div>
          </a>
          <div className="panel rounded-card p-6">
            <div className="footer-h">Parent brand</div>
            <a href={site.parentUrl} target="_blank" rel="noopener" className="mt-2 block font-display text-xl font-semibold text-ink hover:text-rust">
              trivenicabs.in — cabs & tours
            </a>
            <p className="mt-1 text-sm text-ink-soft">Need a Delhi–Rishikesh cab? We&apos;ve got that too.</p>
          </div>
        </div>
        <div>
          <h2 className="section-h mb-4">Send an enquiry</h2>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
