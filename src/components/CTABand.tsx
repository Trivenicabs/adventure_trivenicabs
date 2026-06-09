import { site, waLink, telLink } from "@/lib/site";
import Reveal from "./Reveal";

export default function CTABand() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-[2rem] px-6 py-14 text-center sm:px-12">
            <div className="aurora left-1/4 top-0 h-60 w-60 bg-gold/25" />
            <div className="aurora right-1/4 bottom-0 h-60 w-60 bg-cyan/25 [animation-delay:-5s]" />
            <div className="relative">
              <span className="chip ring-aurora">Ready when you are</span>
              <h2 className="mx-auto mt-5 max-w-2xl font-display text-[clamp(2rem,5vw,3.4rem)] font-semibold leading-[1.05]">
                Your Rishikesh story starts with{" "}
                <span className="shimmer-text">one message.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-mute">
                Tell us the dates and the thrill — we&apos;ll handle the rest, from
                the Delhi cab to the riverside camp.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href={waLink(`Hi ${site.name}! I'd like to plan a trip.`)}
                  target="_blank"
                  rel="noopener"
                  className="btn btn-gold"
                >
                  Book on WhatsApp
                </a>
                <a href={telLink()} className="btn btn-ghost">
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
