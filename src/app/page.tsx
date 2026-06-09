import Link from "next/link";
import Hero from "@/components/Hero";
import ItemCard from "@/components/ItemCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import CinematicBand from "@/components/CinematicBand";
import { Marquee } from "@/components/Marquee";
import SmartImage from "@/components/SmartImage";
import {
  activities,
  packages,
  rentals,
  bikeTours,
  yatra,
  haridwar,
  guides,
  categoryMeta,
} from "@/lib/data";
import { img } from "@/lib/images";

const categories = [
  { key: "activity", href: "/river-rafting-in-rishikesh", image: "rafting", no: "01" },
  { key: "package", href: "/rishikesh-adventure-packages", image: "camping", no: "02" },
  { key: "rental", href: "/bike-rental-in-rishikesh", image: "enfield", no: "03" },
  { key: "bike-tour", href: "/bike-tour-rishikesh-to-chopta-tungnath", image: "chopta", no: "04" },
  { key: "yatra", href: "/char-dham-yatra-from-rishikesh", image: "kedarnath", no: "05" },
  { key: "haridwar", href: "/haridwar-ganga-aarti-tour", image: "aarti", no: "06" },
] as const;

const why = [
  { n: "1", title: "Certified & insured", body: "Govt-licensed operators, ISO safety gear and trained guides on every activity." },
  { n: "2", title: "One brand, end-to-end", body: "Cab from Delhi, adventure in Rishikesh, yatra to the dhams — all under Triveni." },
  { n: "3", title: "Instant WhatsApp booking", body: "No app, no pre-payment. Confirm your slot in a single chat, 24×7." },
  { n: "4", title: "10,000+ travellers", body: "A 4.9★ legacy from the parent Triveni Cabs brand, now on the river." },
];

const reviews = [
  { name: "Aarav S.", from: "Delhi", text: "Rafted the 16 km with Triveni — guides were pros and the cliff jump was unreal. Booking over WhatsApp took 2 minutes.", tag: "River Rafting" },
  { name: "Meera & Co.", from: "Bengaluru", text: "Did the bungee + camping combo for a birthday. The riverside camp and bonfire were magical. Highly recommend!", tag: "Bungee + Camping" },
  { name: "Rohit K.", from: "Jaipur", text: "Rented a Himalayan for the Chopta route. Bike was spotless, paperwork instant. Best self-drive experience in Rishikesh.", tag: "Bike Rental" },
];

export default function Home() {
  return (
    <>
      <Hero />

      <Marquee items={activities.map((a) => a.title.replace(" in Rishikesh", ""))} />

      {/* categories */}
      <section className="section-pad">
        <div className="container-x">
          <SectionHeading
            eyebrow="Pick your line"
            title={<>Six ways to feel <span className="text-rust">alive</span></>}
            sub="From white-water and free-falls to sacred Himalayan circuits and self-drive freedom."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c, i) => (
              <Reveal key={c.key} delay={i * 0.05}>
                <Link href={c.href} className="group card-lift panel block overflow-hidden bg-paper">
                  <div className="relative aspect-[16/10] overflow-hidden border-b-2 border-ink">
                    <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                      <SmartImage src={img[c.image]} alt={categoryMeta[c.key].label} sizes="(max-width:768px) 90vw, 420px" />
                    </div>
                    <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border-2 border-ink bg-mustard font-display text-sm text-ink">
                      {c.no}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4">
                    <div>
                      <h3 className="font-display text-xl uppercase text-ink group-hover:text-rust">
                        {categoryMeta[c.key].label}
                      </h3>
                      <p className="text-sm text-ink-soft">{categoryMeta[c.key].blurb}</p>
                    </div>
                    <span className="font-display text-2xl text-rust">→</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* featured activities — bento */}
      <section id="activities" className="section-pad !pt-0">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="30+ adventures" title={<>The thrills everyone <span className="text-rust">comes for</span></>} />
            <Reveal delay={0.1}>
              <Link href="/things-to-do-in-rishikesh" className="btn btn-paper">See all →</Link>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[1fr]">
            {/* feature tile */}
            <Reveal className="sm:col-span-2 lg:col-span-2 lg:row-span-2">
              <Link href={`/${activities[0].slug}`} className="group card-lift panel relative block h-full min-h-[24rem] overflow-hidden bg-ink">
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                  <SmartImage src={img[activities[0].image]} alt={activities[0].title} sizes="(max-width:768px) 90vw, 640px" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                {activities[0].badge && <span className="tag absolute left-4 top-4">{activities[0].badge}</span>}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="font-display text-xs uppercase tracking-wide text-mustard">{activities[0].duration}</div>
                  <h3 className="mt-1 max-w-md font-display text-3xl uppercase leading-none text-cream sm:text-4xl">{activities[0].title}</h3>
                  <p className="mt-2 max-w-md font-serif-d text-sm text-cream/85">{activities[0].tagline}</p>
                  {activities[0].priceFrom && (
                    <span className="mt-4 inline-block border-2 border-cream bg-rust px-3 py-1 font-display text-sm text-cream">
                      From ₹{activities[0].priceFrom.toLocaleString("en-IN")}
                    </span>
                  )}
                </div>
              </Link>
            </Reveal>
            {activities.slice(1, 5).map((a, i) => (
              <Reveal key={a.slug} delay={(i % 2) * 0.07}>
                <ItemCard item={a} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CinematicBand />

      {/* packages — feature + list */}
      <section className="section-pad !pt-0">
        <div className="container-x">
          <SectionHeading
            eyebrow="Save more, do more"
            title={<>Combo <span className="text-rust">packages</span></>}
            sub="Bundled rafting, camping, bungee and zipline at one all-in price."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <Link href={`/${packages[0].slug}`} className="group card-lift panel relative block h-full min-h-[24rem] overflow-hidden bg-ink">
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                  <SmartImage src={img[packages[0].image]} alt={packages[0].title} sizes="(max-width:1024px) 92vw, 700px" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-ink via-ink/40 to-transparent" />
                {packages[0].badge && <span className="tag absolute left-4 top-4">{packages[0].badge}</span>}
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <div className="font-display text-xs uppercase tracking-wide text-mustard">{packages[0].duration}</div>
                  <h3 className="mt-1 font-display text-3xl uppercase leading-none text-cream sm:text-4xl">{packages[0].title}</h3>
                  <p className="mt-2 max-w-lg font-serif-d text-sm text-cream/85">{packages[0].tagline}</p>
                  {packages[0].priceFrom && (
                    <span className="mt-4 inline-block border-2 border-cream bg-rust px-3 py-1 font-display text-sm text-cream">
                      From ₹{packages[0].priceFrom.toLocaleString("en-IN")}
                    </span>
                  )}
                </div>
              </Link>
            </Reveal>
            <div className="grid content-start gap-3">
              {packages.slice(1, 6).map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.05}>
                  <Link href={`/${p.slug}`} className="group card-lift panel flex items-center gap-4 bg-paper p-3">
                    <span className="relative h-16 w-20 shrink-0 overflow-hidden rounded border-2 border-ink">
                      <SmartImage src={img[p.image]} alt={p.title} sizes="80px" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="truncate font-display text-sm uppercase text-ink group-hover:text-rust">{p.title}</div>
                      <div className="text-xs text-ink-soft">{p.duration}</div>
                    </div>
                    {p.priceFrom && <div className="font-display text-rust">₹{p.priceFrom.toLocaleString("en-IN")}</div>}
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* rentals + bike tours */}
      <section className="section-pad !pt-0">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="New · Self-drive" title={<>Bike & scooty <span className="text-rust">rentals</span></>} sub="Royal Enfields, KTMs and scooters — by the hour, day or for the Himalayas." />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {rentals.slice(0, 4).map((r, i) => (
                <Reveal key={r.slug} delay={(i % 2) * 0.06}><ItemCard item={r} className="h-full" /></Reveal>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Himalayan circuit" title={<>Guided <span className="text-rust">bike tours</span></>} sub="Chopta, Kedarnath, Auli, Spiti — epic routes with backup & stays sorted." />
            <div className="mt-8 grid gap-3">
              {bikeTours.slice(0, 5).map((t, i) => (
                <Reveal key={t.slug} delay={i * 0.05}>
                  <Link href={`/${t.slug}`} className="group card-lift panel flex items-center gap-4 bg-paper p-3">
                    <span className="relative h-16 w-20 shrink-0 overflow-hidden rounded border-2 border-ink">
                      <SmartImage src={img[t.image]} alt={t.title} sizes="80px" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="truncate font-display text-sm uppercase text-ink group-hover:text-rust">{t.title.replace("Rishikesh to ", "").replace(" Bike Trip", "")}</div>
                      <div className="text-xs text-ink-soft">{t.duration}</div>
                    </div>
                    {t.priceFrom && <div className="font-display text-rust">₹{t.priceFrom.toLocaleString("en-IN")}</div>}
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* yatra */}
      <section className="section-pad !pt-0">
        <div className="container-x">
          <SectionHeading align="center" eyebrow="Pilgrimage" title={<>Char Dham & <span className="text-rust">Yatra</span></>} sub="The sacred Himalayan circuit — by cab or by bike, with stays, permits and guidance handled." />
          <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[...yatra.slice(0, 3), ...haridwar.slice(0, 3)].map((y, i) => (
              <Reveal key={y.slug} delay={(i % 3) * 0.06}><ItemCard item={y} className="h-full" /></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* why triveni */}
      <section className="border-y-2 border-ink bg-paper-2 section-pad">
        <div className="container-x">
          <SectionHeading align="center" eyebrow="Why Triveni" title={<>Trusted on the road. <span className="text-rust">Now on the river.</span></>} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.06}>
                <div className="panel h-full bg-paper p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-full border-2 border-ink bg-teal font-display text-lg text-cream">{w.n}</span>
                  <h3 className="mt-4 font-display text-lg uppercase leading-tight text-ink">{w.title}</h3>
                  <p className="mt-2 font-serif-d text-sm leading-snug text-ink-soft">{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* reviews */}
      <section className="section-pad">
        <div className="container-x">
          <SectionHeading eyebrow="★ 4.9 / 5" title={<>What travellers <span className="text-rust">say</span></>} />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.07}>
                <figure className="panel h-full bg-cream p-6">
                  <div className="font-display text-mustard">★★★★★</div>
                  <blockquote className="mt-3 font-serif-d text-[15px] leading-snug text-ink">“{r.text}”</blockquote>
                  <figcaption className="mt-4 flex items-center justify-between border-t-2 border-ink/15 pt-3 text-sm">
                    <span className="font-display uppercase text-ink">{r.name} <span className="text-ink-soft">· {r.from}</span></span>
                    <span className="tag !bg-teal !text-cream !border-ink">{r.tag}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* guides */}
      <section id="guides" className="section-pad !pt-0">
        <div className="container-x">
          <SectionHeading eyebrow="Plan like a local" title={<>Rishikesh <span className="text-rust">travel guides</span></>} />
          <div className="mt-8 flex flex-wrap gap-3">
            {guides.map((g, i) => (
              <Reveal key={g.slug} delay={i * 0.03}>
                <Link href={`/${g.slug}`} className="panel inline-flex items-center gap-2 bg-paper px-4 py-2.5 font-display text-sm uppercase text-ink transition-colors hover:bg-mustard">
                  {g.title}
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
