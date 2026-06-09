import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Rishikesh Adventure Reviews",
  description:
    "Read what travellers say about rafting, bungee, camping, rentals and yatra booked with Triveni Adventure Rishikesh. Rated 4.9★ by 10,000+ travellers.",
};

const reviews = [
  { name: "Aarav S.", from: "Delhi", tag: "16 km Rafting", text: "Guides were absolute pros and the cliff jump was unreal. WhatsApp booking took 2 minutes flat. Will be back for the bungee." },
  { name: "Meera & friends", from: "Bengaluru", tag: "Bungee + Camping", text: "Did the combo for a birthday — riverside camp, bonfire, and India's highest bungee. Magical, safe and so well organised." },
  { name: "Rohit K.", from: "Jaipur", tag: "Himalayan Rental", text: "Rented a Himalayan for Chopta. Spotless bike, instant paperwork, and roadside support when I needed air. Best self-drive in Rishikesh." },
  { name: "The Nairs", from: "Mumbai", tag: "Family Package", text: "Gentle rafting for the kids, comfy tents and great food. Triveni handled our Delhi cab too — one call, whole trip sorted." },
  { name: "Ishaan P.", from: "Chandigarh", tag: "Char Dham Yatra", text: "Smooth Do Dham yatra — experienced driver on those mountain roads, clean stays, darshan timed perfectly. Deeply grateful." },
  { name: "Sara M.", from: "Pune", tag: "Zipline + Rafting", text: "Flew the zipline over the Ganga then rafted down. Adrenaline overload! Staff were friendly and safety-first throughout." },
];

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        eyebrow={`★ ${site.rating} / 5 · ${site.reviewCount.toLocaleString()}+ travellers`}
        title={<>Loved by <span className="text-rust">thrill-seekers</span></>}
        sub="A 4.9★ legacy from Triveni Cabs, now powering Rishikesh's best adventures."
      />
      <section className="container-x section-pad">
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={(i % 3) * 0.08} className="mb-5 inline-block w-full">
              <figure className="panel rounded-card p-6">
                <div className="flex gap-0.5 text-rust">★★★★★</div>
                <blockquote className="mt-3 text-sm leading-relaxed text-ink">“{r.text}”</blockquote>
                <figcaption className="mt-4 flex items-center justify-between text-sm">
                  <span className="font-medium text-ink">{r.name} <span className="text-ink-soft">· {r.from}</span></span>
                  <span className="tag !text-[10px]">{r.tag}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
      <CTABand />
    </>
  );
}
