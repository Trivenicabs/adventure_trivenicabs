import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Triveni Adventure Rishikesh",
  description:
    "Triveni Adventure is the Rishikesh experiential arm of Triveni Cabs — adventure sports, camping, Char Dham yatra, Haridwar tours and self-drive rentals from a brand trusted by 10,000+ travellers.",
};

const stats = [
  { v: "2015", l: "Triveni since" },
  { v: "10,000+", l: "Travellers served" },
  { v: "4.9★", l: "Average rating" },
  { v: "30+", l: "Adventures & tours" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title={<>Trusted on the road. <span className="shimmer-text">Born for the river.</span></>}
        sub={`${site.name} is the Rishikesh adventure arm of ${site.parent}, North India's trusted travel brand since 2015.`}
      />
      <section className="container-x grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <div className="space-y-5 text-mist/90 leading-relaxed">
            <p>
              For nearly a decade, {site.parent} has moved travellers safely across North
              India — Delhi to Rishikesh, airport transfers and multi-day Himalayan tours.
              Along the way, one request kept coming up: <em>&ldquo;Can you sort the
              rafting, the camping, the bungee too?&rdquo;</em>
            </p>
            <p>
              {site.name} is our answer. We&apos;ve brought the same obsession with safety,
              punctuality and honest pricing to Rishikesh&apos;s adventure capital — partnering
              only with government-licensed operators, certified guides and well-maintained
              fleets so you can chase the thrill without the worry.
            </p>
            <p>
              From a single WhatsApp message we can line up your Delhi cab, your riverside
              camp, your white-water slot and your Char Dham yatra — one brand, end to end.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.l} className="glass rounded-glass p-6 text-center">
                <div className="font-display text-3xl font-semibold text-gold">{s.v}</div>
                <div className="mt-1 text-xs text-mute">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
      <CTABand />
    </>
  );
}
