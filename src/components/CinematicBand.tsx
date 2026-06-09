"use client";

import SmartImage from "./SmartImage";
import Reveal from "./Reveal";
import { img } from "@/lib/images";

const stats = [
  { v: "30+", l: "Adventures & tours" },
  { v: "4.9★", l: "From 10,000+ travellers" },
  { v: "9–36", l: "km of Ganga rapids" },
  { v: "24×7", l: "On-ground support" },
];

export default function CinematicBand() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <div className="grid items-stretch gap-0 overflow-hidden rounded-card border-2 border-ink lg:grid-cols-2">
          {/* photo plate */}
          <div className="relative min-h-[22rem] border-b-2 border-ink lg:border-b-0 lg:border-r-2">
            <SmartImage
              src={img.ramjhulaNight}
              alt="Ram Jhula bridge illuminated over the Ganga at night, Rishikesh"
              sizes="(max-width:1024px) 100vw, 600px"
            />
            <span className="tag absolute left-4 top-4">Rishikesh · Uttarakhand</span>
          </div>

          {/* copy */}
          <div className="bg-paper p-8 sm:p-12">
            <Reveal>
              <span className="eyebrow">Why Rishikesh</span>
              <h2 className="section-h mt-3 text-ink">
                Where the <span className="text-rust">Ganga</span> meets the
                Himalaya
              </h2>
              <p className="mt-4 max-w-lg font-serif-d text-lg leading-snug text-ink-soft">
                India&apos;s adventure capital — holy white-water, soaring
                gorges, starlit camps and sacred peaks, all within a few hours of
                Delhi. We bring the thrill; the mountains do the rest.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-card border-2 border-ink sm:grid-cols-4">
                {stats.map((s, i) => (
                  <div key={s.l} className={`p-4 ${i % 2 ? "bg-cream" : "bg-paper-2"}`}>
                    <div className="font-display text-2xl text-rust">{s.v}</div>
                    <div className="mt-1 text-[11px] font-bold uppercase tracking-wide text-ink-soft">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
