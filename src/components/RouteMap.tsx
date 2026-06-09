import Reveal from "./Reveal";

const stops = [
  { n: "1", place: "Delhi", note: "Cab pickup" },
  { n: "2", place: "Haridwar", note: "Ganga Aarti" },
  { n: "3", place: "Rishikesh", note: "Basecamp · adventure" },
  { n: "4", place: "The Dhams", note: "Char Dham · high passes" },
];

export default function RouteMap() {
  return (
    <section className="section-pad !pt-0">
      <div className="container-x">
        <Reveal>
          <div className="panel contour bg-paper-2 p-7 sm:p-10">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <span className="eyebrow">The expedition route</span>
                <h2 className="section-h mt-2 text-ink">
                  Delhi to the <span className="text-rust">high passes</span>
                </h2>
              </div>
              <p className="max-w-xs font-serif-d text-sm text-ink-soft">
                One brand for the whole journey — the cab from Delhi, your
                Rishikesh basecamp, and the road to the peaks.
              </p>
            </div>

            {/* route — horizontal on sm+, vertical on mobile */}
            <div className="relative mt-9">
              {/* connector line */}
              <div className="absolute left-5 top-0 bottom-0 hidden w-0 border-l-[3px] border-dashed border-rust sm:block sm:left-0 sm:right-0 sm:top-5 sm:h-0 sm:w-auto sm:border-l-0 sm:border-t-[3px]" />
              <ol className="relative grid gap-7 sm:grid-cols-4 sm:gap-4">
                {stops.map((s) => (
                  <li key={s.n} className="flex items-center gap-4 sm:flex-col sm:items-center sm:text-center">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-ink bg-rust font-display text-base text-cream shadow-[3px_3px_0_0_var(--color-ink)]">
                      {s.n}
                    </span>
                    <div className="sm:mt-3">
                      <div className="font-display text-lg uppercase leading-none text-ink">{s.place}</div>
                      <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-teal">{s.note}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
