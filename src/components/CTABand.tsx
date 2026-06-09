import { site, waLink, telLink } from "@/lib/site";
import Reveal from "./Reveal";

export default function CTABand() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <Reveal>
          <div className="panel-ink relative overflow-hidden border-2 border-ink px-6 py-14 text-center sm:px-12">
            <div className="sunburst pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20" />
            <div className="relative">
              <span className="eyebrow center !text-mustard">Ready when you are</span>
              <h2 className="mx-auto mt-4 max-w-2xl font-display text-[clamp(2rem,5vw,3.6rem)] uppercase leading-[0.95] text-paper">
                Your Rishikesh story starts with{" "}
                <span className="text-mustard">one message</span>
              </h2>
              <p className="mx-auto mt-4 max-w-lg font-serif-d text-lg text-paper/80">
                Tell us the dates and the thrill — we&apos;ll handle the rest,
                from the Delhi cab to the riverside camp.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href={waLink(`Hi ${site.name}! I'd like to plan a trip.`)}
                  target="_blank"
                  rel="noopener"
                  className="btn btn-mustard"
                >
                  Book on WhatsApp
                </a>
                <a href={telLink()} className="btn btn-paper">
                  Call {site.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
