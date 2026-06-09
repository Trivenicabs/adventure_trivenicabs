import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import FaqList from "@/components/FaqList";
import CTABand from "@/components/CTABand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Rishikesh Adventure FAQs",
  description:
    "Answers to common questions about booking adventure sports, packages, rentals and yatra in Rishikesh with Triveni — safety, pricing, payment and more.",
};

const qa = [
  { q: "How do I book with Triveni Adventure?", a: `Tap any "Book" button to chat on WhatsApp, use the enquiry form, or call ${site.phoneDisplay}. We confirm your slot instantly — no app or advance payment required.` },
  { q: "Do I need to pay in advance?", a: "No advance payment is needed to confirm most bookings. You can pay on arrival; for some peak-date packages a small token may be requested, which we'll always tell you upfront." },
  { q: "Are the activities safe?", a: "Yes. We partner only with government-licensed operators using certified guides and regularly inspected safety equipment. A safety briefing is included before every activity." },
  { q: "What is the best time to visit Rishikesh?", a: "September to June is ideal for most adventures. River rafting runs roughly September–June (closed during peak monsoon). Camping and yatra have their own best windows — ask us for your dates." },
  { q: "Can you arrange a cab from Delhi or Dehradun?", a: "Absolutely — that's our origin. Triveni Cabs can bundle a Delhi–Rishikesh or Dehradun airport transfer with your adventure at a combined rate." },
  { q: "Do I need a licence to rent a bike or scooty?", a: "Yes, a valid driving licence and a government ID (for the deposit) are required for all self-drive rentals. Helmets and documents are provided with every vehicle." },
  { q: "Can you customise a package for my group?", a: "Definitely. Tell us your group size, budget and the thrills you want — couples, families, college groups and corporates all get tailored itineraries." },
  { q: "What is your cancellation policy?", a: "Cancellation terms vary by activity and season. In general, free or low-fee cancellation is available with reasonable notice. See our Cancellation & Refund Policy or ask us before booking." },
];

export default function FaqsPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQs"
        title={<>Everything you need to <span className="shimmer-text">know</span></>}
        sub="Still unsure? Message us on WhatsApp — we reply fast, 24×7."
      />
      <section className="container-x max-w-3xl">
        <FaqList items={qa} />
      </section>
      <CTABand />
    </>
  );
}
