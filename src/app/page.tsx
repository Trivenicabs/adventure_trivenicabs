import Link from "next/link";
import Hero from "@/components/Hero";
import ItemCard from "@/components/ItemCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import CinematicBand from "@/components/CinematicBand";
import { Marquee } from "@/components/Marquee";
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
import SmartImage from "@/components/SmartImage";

const categories = [
  { key: "activity", href: "/river-rafting-in-rishikesh", image: img.rafting, emoji: "🛶" },
  { key: "package", href: "/rishikesh-adventure-packages", image: img.camping, emoji: "🎒" },
  { key: "rental", href: "/bike-rental-in-rishikesh", image: img.enfield, emoji: "🏍️" },
  { key: "bike-tour", href: "/bike-tour-rishikesh-to-chopta-tungnath", image: img.himalayanBike, emoji: "🏔️" },
  { key: "yatra", href: "/char-dham-yatra-from-rishikesh", image: img.kedarnath, emoji: "🛕" },
  { key: "haridwar", href: "/haridwar-ganga-aarti-tour", image: img.aarti, emoji: "🪔" },
] as const;

const why = [
  { icon: "🛡️", title: "Certified & insured", body: "Govt-licensed operators, ISO safety gear and trained guides on every activity." },
  { icon: "🤝", title: "One brand, end-to-end", body: "Cab from Delhi, adventure in Rishikesh, yatra to the dhams — all under Triveni." },
  { icon: "⚡", title: "Instant WhatsApp booking", body: "No app, no pre-payment needed. Confirm your slot in a single chat, 24×7." },
  { icon: "💛", title: "10,000+ happy travellers", body: "A 4.9★ legacy from the parent Triveni Cabs brand, now on the river." },
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

      {/* marquee of activities */}
      <div className="relative border-y border-white/10 bg-night-2/50 py-4">
        <Marquee
          items={activities.map((a) => `${a.emoji}  ${a.title.replace(" in Rishikesh", "")}`)}
        />
      </div>

      {/* categories */}
      <section className="section-pad">
        <div className="container-x">
          <SectionHeading
            eyebrow="Pick your line"
            title={<>Six ways to <span className="shimmer-text">feel alive</span> in Rishikesh</>}
            sub="From white-water and free-falls to sacred Himalayan circuits and self-drive freedom."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c, i) => (
              <Reveal key={c.key} delay={i * 0.06}>
                <Link
                  href={c.href}
                  className="group relative block aspect-[16/10] overflow-hidden rounded-glass glass card-hover"
                >
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                    <SmartImage src={c.image} alt={categoryMeta[c.key].label} emoji={c.emoji} sizes="(max-width:768px) 90vw, 420px" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <span className="text-2xl">{c.emoji}</span>
                    <h3 className="mt-1 font-display text-xl font-semibold text-mist group-hover:text-gold">
                      {categoryMeta[c.key].label}
                    </h3>
                    <p className="text-sm text-mute">{categoryMeta[c.key].blurb}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* featured activities */}
      <section id="activities" className="section-pad !pt-0">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="30+ adventures"
              title={<>The thrills <span className="shimmer-text">everyone</span> comes for</>}
            />
            <Reveal delay={0.1}>
              <Link href="/things-to-do-in-rishikesh" className="btn btn-ghost">
                See all activities →
              </Link>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[1fr]">
            {/* large editorial feature tile */}
            <Reveal className="sm:col-span-2 lg:col-span-2 lg:row-span-2">
              <Link
                href={`/${activities[0].slug}`}
                className="group glass card-hover relative block h-full min-h-[24rem] overflow-hidden rounded-glass"
              >
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                  <SmartImage src={img[activities[0].image]} alt={activities[0].title} emoji={activities[0].emoji} sizes="(max-width:768px) 90vw, 640px" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-night via-night/30 to-transparent" />
                {activities[0].badge && (
                  <span className="absolute left-4 top-4 chip !text-night !bg-gold !border-gold/60">{activities[0].badge}</span>
                )}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="flex items-center gap-2 text-xs text-cyan">
                    <span>{activities[0].emoji}</span>
                    {activities[0].duration && <span>{activities[0].duration}</span>}
                  </div>
                  <h3 className="mt-2 max-w-md font-display text-2xl font-semibold leading-tight text-mist group-hover:text-gold sm:text-3xl">
                    {activities[0].title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm text-mute">{activities[0].tagline}</p>
                  {activities[0].priceFrom && (
                    <div className="mt-4 inline-flex items-baseline gap-1 text-sm">
                      <span className="text-mute">from</span>
                      <span className="font-display text-xl font-semibold text-gold">₹{activities[0].priceFrom.toLocaleString("en-IN")}</span>
                    </div>
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

      {/* packages — editorial feature + list */}
      <section className="relative section-pad">
        <div className="aurora left-0 top-10 h-80 w-80 bg-gold/10" />
        <div className="container-x relative">
          <SectionHeading
            eyebrow="Save more, do more"
            title={<>Combo <span className="shimmer-text">packages</span></>}
            sub="Bundled rafting, camping, bungee and zipline at one all-in price — the smartest way to do Rishikesh."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {/* featured package */}
            <Reveal className="lg:col-span-2">
              <Link
                href={`/${packages[0].slug}`}
                className="group glass card-hover relative block h-full min-h-[26rem] overflow-hidden rounded-glass"
              >
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                  <SmartImage src={img[packages[0].image]} alt={packages[0].title} emoji={packages[0].emoji} sizes="(max-width:1024px) 92vw, 720px" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-night via-night/40 to-transparent" />
                {packages[0].badge && (
                  <span className="absolute left-4 top-4 chip !text-night !bg-gold !border-gold/60">{packages[0].badge}</span>
                )}
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <div className="text-xs text-cyan">{packages[0].emoji} {packages[0].duration}</div>
                  <h3 className="mt-2 max-w-md font-display text-2xl font-semibold leading-tight text-mist group-hover:text-gold sm:text-3xl">
                    {packages[0].title}
                  </h3>
                  <p className="mt-2 max-w-lg text-sm text-mute">{packages[0].tagline}</p>
                  <div className="mt-4 flex items-center gap-4">
                    {packages[0].priceFrom && (
                      <span className="font-display text-xl font-semibold text-gold">
                        ₹{packages[0].priceFrom.toLocaleString("en-IN")}
                        <span className="ml-1 text-xs font-normal text-mute">{packages[0].unit}</span>
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-cyan transition-all group-hover:gap-2">
                      View package →
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
            {/* compact list */}
            <div className="grid content-start gap-3">
              {packages.slice(1, 6).map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.06}>
                  <Link href={`/${p.slug}`} className="group glass card-hover flex items-center gap-4 rounded-2xl p-3">
                    <span className="relative h-16 w-20 shrink-0 overflow-hidden rounded-xl">
                      <SmartImage src={img[p.image]} alt={p.title} emoji={p.emoji} sizes="80px" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="truncate font-display text-sm font-semibold text-mist group-hover:text-gold">{p.title}</div>
                      <div className="text-xs text-mute">{p.duration}</div>
                    </div>
                    {p.priceFrom && (
                      <div className="text-right text-sm">
                        <div className="text-[11px] text-mute">from</div>
                        <div className="font-display font-semibold text-gold">₹{p.priceFrom.toLocaleString("en-IN")}</div>
                      </div>
                    )}
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* rentals + bike tours split */}
      <section className="section-pad !pt-0">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="New · Self-drive"
              title={<>Bike & scooty <span className="shimmer-text">rentals</span></>}
              sub="Royal Enfields, KTMs and scooters — by the hour, day or for the Himalayas."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {rentals.slice(0, 4).map((r, i) => (
                <Reveal key={r.slug} delay={(i % 2) * 0.07}>
                  <ItemCard item={r} />
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Himalayan circuit"
              title={<>Guided <span className="shimmer-text">bike tours</span></>}
              sub="Chopta, Kedarnath, Auli, Spiti — epic routes with backup & stays sorted."
            />
            <div className="mt-8 grid gap-3">
              {bikeTours.slice(0, 4).map((t, i) => (
                <Reveal key={t.slug} delay={i * 0.06}>
                  <Link
                    href={`/${t.slug}`}
                    className="group glass card-hover flex items-center gap-4 rounded-2xl p-3"
                  >
                    <span className="relative h-16 w-20 shrink-0 overflow-hidden rounded-xl">
                      <SmartImage src={img[t.image]} alt={t.title} emoji={t.emoji} sizes="80px" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="truncate font-display font-semibold text-mist group-hover:text-gold">
                        {t.title.replace("Rishikesh to ", "").replace(" Bike Trip", "")}
                      </div>
                      <div className="text-xs text-mute">{t.duration}</div>
                    </div>
                    <div className="text-right text-sm">
                      <div className="text-mute text-[11px]">from</div>
                      <div className="font-display font-semibold text-cyan">
                        ₹{t.priceFrom?.toLocaleString("en-IN")}
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* yatra band */}
      <section className="relative overflow-hidden section-pad">
        <div className="absolute inset-0 -z-10 opacity-30">
          <SmartImage src={img.kedarnath} alt="" emoji="🛕" sizes="100vw" />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-night via-night/85 to-night" />
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Pilgrimage"
            title={<>Char Dham & <span className="shimmer-text">Yatra</span> from Rishikesh</>}
            sub="The sacred Himalayan circuit — by cab or by bike, with stays, permits and guidance handled."
          />
          <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[...yatra.slice(0, 3), ...haridwar.slice(0, 3)].map((y, i) => (
              <Reveal key={y.slug} delay={(i % 3) * 0.07}>
                <ItemCard item={y} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* why triveni */}
      <section className="section-pad !pt-0">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Why Triveni"
            title={<>Trusted on the road. <span className="shimmer-text">Now on the river.</span></>}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.07}>
                <div className="glass card-hover h-full rounded-glass p-6">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/5 text-2xl ring-aurora">
                    {w.icon}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-mist">
                    {w.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* reviews */}
      <section className="section-pad !pt-0">
        <div className="container-x">
          <SectionHeading
            eyebrow="★ 4.9 / 5"
            title={<>What travellers <span className="shimmer-text">say</span></>}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.08}>
                <figure className="glass h-full rounded-glass p-6">
                  <div className="flex gap-0.5 text-gold">★★★★★</div>
                  <blockquote className="mt-3 text-sm leading-relaxed text-mist">
                    “{r.text}”
                  </blockquote>
                  <figcaption className="mt-4 flex items-center justify-between text-sm">
                    <span className="font-medium text-mist">
                      {r.name} <span className="text-mute">· {r.from}</span>
                    </span>
                    <span className="chip !text-[10px]">{r.tag}</span>
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
          <SectionHeading
            eyebrow="Plan like a local"
            title={<>Rishikesh <span className="shimmer-text">travel guides</span></>}
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {guides.map((g, i) => (
              <Reveal key={g.slug} delay={i * 0.04}>
                <Link
                  href={`/${g.slug}`}
                  className="glass-soft inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm text-mute transition-colors hover:text-mist"
                >
                  <span>{g.emoji}</span>
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
