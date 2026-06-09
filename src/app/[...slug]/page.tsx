import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import SmartImage from "@/components/SmartImage";
import Reveal from "@/components/Reveal";
import ItemCard from "@/components/ItemCard";
import FaqList from "@/components/FaqList";
import { allItems, itemBySlug, categoryMeta, type Item } from "@/lib/data";
import { img, galleryFor } from "@/lib/images";
import { intro, includes, excludes, carry, faqs, priceTable } from "@/lib/content";
import { themeFor } from "@/lib/themes";
import ThemeAtmosphere from "@/components/ThemeAtmosphere";
import { site, waLink, telLink } from "@/lib/site";
import type { CSSProperties } from "react";

export function generateStaticParams() {
  return allItems.map((i) => ({ slug: i.slug.split("/") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = itemBySlug(slug.join("/"));
  if (!item) return {};
  const title = `${item.title}${
    item.priceFrom ? ` — from ₹${item.priceFrom.toLocaleString("en-IN")}` : ""
  }`;
  return {
    title,
    description: `${item.tagline} Book ${item.keyword} with Triveni — certified, instant WhatsApp booking, 24×7 support.`,
    alternates: { canonical: `${site.baseUrl}/${item.slug}` },
    openGraph: { title, description: item.tagline, images: [img[item.image]] },
  };
}

export default async function DetailPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug: slugParts } = await params;
  const slug = slugParts.join("/");
  const item = itemBySlug(slug);
  if (!item) notFound();

  const related = allItems
    .filter((r) => r.category === item.category && r.slug !== item.slug)
    .slice(0, 3);
  const fallbackRelated = allItems
    .filter((r) => r.category !== item.category && r.priceFrom)
    .slice(0, 3);
  const rel = related.length ? related : fallbackRelated;

  const inc = includes(item);
  const exc = excludes(item);
  const car = carry(item);
  const qa = faqs(item);
  const prices = priceTable(item);
  const bookMsg = `Hi ${site.name}! I'm interested in "${item.title}". Please share details & availability.`;
  const theme = themeFor(item);
  const themeVars = {
    "--ta": theme.a,
    "--tb": theme.b,
    "--tink": theme.ink,
  } as CSSProperties;

  return (
    <article className="pb-10" style={themeVars}>
      <Schema item={item} qa={qa} />

      {/* hero */}
      <header className="relative min-h-[82svh] overflow-hidden">
        <div className="absolute inset-0">
          <SmartImage src={img[item.image]} alt={item.title} emoji={item.emoji} priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-night/45 via-night/65 to-night" />
          <div className="absolute inset-0 bg-gradient-to-r from-night/80 to-transparent" />
          <div
            className="absolute inset-0 opacity-60 mix-blend-soft-light"
            style={{ background: `radial-gradient(70% 60% at 20% 30%, ${theme.a}, transparent 60%)` }}
          />
        </div>

        {/* themed aurora blooms */}
        <div className="aurora left-[6%] top-[18%] h-80 w-80" style={{ background: `${theme.a}33` }} />
        <div className="aurora right-[8%] top-[30%] h-96 w-96 [animation-delay:-4s]" style={{ background: `${theme.b}33` }} />

        {/* vibe-specific motion atmosphere */}
        <ThemeAtmosphere vibe={theme.vibe} a={theme.a} b={theme.b} />

        <div className="container-x relative z-10 flex min-h-[82svh] flex-col justify-end pb-14 pt-32">
          <Breadcrumb item={item} />
          <Reveal>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="chip chip-theme ring-theme">
                {item.emoji} {theme.label}
              </span>
              <span className="chip">{categoryMeta[item.category].label}</span>
              {item.badge && (
                <span className="chip bg-theme-a !border-transparent" style={{ color: theme.ink }}>
                  {item.badge}
                </span>
              )}
            </div>
            <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.2rem,6vw,4.6rem)] font-semibold leading-[0.96]">
              {item.title}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-mute">{item.tagline}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              {item.priceFrom && (
                <div className="glass-dark rounded-2xl px-5 py-3 glow-theme">
                  <div className="text-xs text-mute">Starting from</div>
                  <div className="font-display text-2xl font-semibold text-theme">
                    ₹{item.priceFrom.toLocaleString("en-IN")}
                    <span className="ml-1 text-sm font-normal text-mute">
                      {item.unit}
                    </span>
                  </div>
                </div>
              )}
              <div className="glass-dark rounded-2xl px-5 py-3">
                <div className="text-xs text-mute">Rated</div>
                <div className="font-display text-2xl font-semibold text-mist">
                  {site.rating}★
                </div>
              </div>
              <div className="flex gap-3">
                <a href={waLink(bookMsg)} target="_blank" rel="noopener" className="btn btn-theme">
                  Book on WhatsApp
                </a>
                <a href={telLink()} className="btn btn-ghost">Call</a>
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      <div className="container-x mt-14 grid gap-12 lg:grid-cols-[1fr_22rem]">
        {/* main */}
        <div className="min-w-0">
          <Reveal>
            <p className="text-lg leading-relaxed text-mist/90">{intro(item)}</p>
          </Reveal>

          {item.highlights && (
            <Reveal className="mt-10">
              <h2 className="section-h">Highlights</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {item.highlights.map((h) => (
                  <div key={h} className="glass-soft flex items-start gap-3 rounded-2xl p-4">
                    <span className="mt-0.5 text-theme">✦</span>
                    <span className="text-sm text-mist">{h}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          )}

          {item.meta && (
            <Reveal className="mt-10">
              <h2 className="section-h">Quick facts</h2>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {item.meta.map((m) => (
                  <div key={m.label} className="glass rounded-2xl p-4">
                    <div className="text-xs uppercase tracking-wide text-mute">{m.label}</div>
                    <div className="mt-1 font-display text-lg font-semibold text-mist">{m.value}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          )}

          {prices && (
            <Reveal className="mt-10">
              <h2 className="section-h">Price list</h2>
              <p className="mt-1 text-sm text-mute">{prices.caption}</p>
              <div className="mt-4 overflow-hidden rounded-glass glass">
                <table className="w-full text-left text-sm">
                  <tbody>
                    {prices.rows.map((r, idx) => (
                      <tr
                        key={r.label}
                        className={idx ? "border-t border-white/8" : ""}
                      >
                        <td className="px-5 py-3.5 font-medium text-mist">
                          {r.label}
                          {r.note && (
                            <span className="ml-2 text-xs text-mute">{r.note}</span>
                          )}
                        </td>
                        <td className="px-5 py-3.5 text-right font-display font-semibold text-theme">
                          {r.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-mute">
                Prices are indicative and vary by date, season & availability —
                message us for a live quote.
              </p>
            </Reveal>
          )}

          {(inc.length > 0 || exc.length > 0) && (
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {inc.length > 0 && (
                <Reveal>
                  <div className="glass h-full rounded-glass p-6">
                    <h3 className="font-display text-lg font-semibold text-mist">What&apos;s included</h3>
                    <ul className="mt-4 grid gap-2.5 text-sm">
                      {inc.map((x) => (
                        <li key={x} className="flex gap-2 text-mist">
                          <span className="text-theme">✓</span> {x}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )}
              {exc.length > 0 && (
                <Reveal delay={0.08}>
                  <div className="glass h-full rounded-glass p-6">
                    <h3 className="font-display text-lg font-semibold text-mist">Not included</h3>
                    <ul className="mt-4 grid gap-2.5 text-sm">
                      {exc.map((x) => (
                        <li key={x} className="flex gap-2 text-mute">
                          <span className="text-ember">✕</span> {x}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )}
            </div>
          )}

          {car.length > 0 && (
            <Reveal className="mt-10">
              <h2 className="section-h">What to carry</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {car.map((c) => (
                  <span key={c} className="glass-soft rounded-full px-4 py-2 text-sm text-mist">
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>
          )}

          {/* gallery */}
          <Reveal className="mt-10">
            <h2 className="section-h">Gallery</h2>
            <div className="mt-4 grid auto-rows-[10rem] grid-cols-2 gap-3 sm:grid-cols-4">
              {galleryFor(item.image, theme.vibe, item.slug).map((g, idx) => (
                <div
                  key={idx}
                  className={`group relative overflow-hidden rounded-2xl ring-1 ring-white/8 ${
                    idx === 0
                      ? "col-span-2 row-span-2"
                      : idx === 1
                      ? "col-span-2 sm:col-span-2"
                      : ""
                  }`}
                >
                  <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110">
                    <SmartImage src={g} alt={`${item.title} — photo ${idx + 1}`} emoji={item.emoji} sizes="(max-width:768px) 50vw, 360px" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-night/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </Reveal>

          {/* faq */}
          <Reveal className="mt-12">
            <h2 className="section-h">Frequently asked questions</h2>
            <FaqList items={qa} />
          </Reveal>
        </div>

        {/* sticky booking aside */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="glass rounded-glass p-6">
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-mute">
                {item.priceFrom ? "Book from" : "Get a quote"}
              </span>
              {item.priceFrom && (
                <span className="font-display text-2xl font-semibold text-theme">
                  ₹{item.priceFrom.toLocaleString("en-IN")}
                </span>
              )}
            </div>
            {item.unit && <div className="text-xs text-mute">{item.unit}</div>}
            <div className="mt-5 grid gap-2.5">
              <a href={waLink(bookMsg)} target="_blank" rel="noopener" className="btn btn-theme justify-center">
                Book on WhatsApp
              </a>
              <a href={telLink()} className="btn btn-ghost justify-center">
                Call {site.phoneDisplay}
              </a>
            </div>
            <p className="mt-4 text-center text-xs text-mute">
              Instant confirmation · No advance payment · 24×7 support
            </p>
            <div className="mt-5 border-t border-white/10 pt-4 text-sm">
              <a href={site.parentUrl} target="_blank" rel="noopener" className="flex items-center justify-between text-mute hover:text-mist">
                <span>Need a cab from Delhi?</span>
                <span className="text-cyan">trivenicabs.in →</span>
              </a>
            </div>
          </div>
        </aside>
      </div>

      {/* related */}
      {rel.length > 0 && (
        <section className="container-x mt-16">
          <h2 className="section-h">You might also like</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rel.map((r) => (
              <ItemCard key={r.slug} item={r} />
            ))}
          </div>
          <div className="mt-8">
            <Link href="/" className="btn btn-ghost">← Back to all adventures</Link>
          </div>
        </section>
      )}
    </article>
  );
}

function Breadcrumb({ item }: { item: Item }) {
  return (
    <nav className="flex flex-wrap items-center gap-2 text-xs text-mute">
      <Link href="/" className="hover:text-mist">Home</Link>
      <span>/</span>
      <span className="text-cyan">{categoryMeta[item.category].label}</span>
      <span>/</span>
      <span className="text-mist">{item.title}</span>
    </nav>
  );
}

function Schema({ item, qa }: { item: Item; qa: { q: string; a: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: item.title,
        description: item.tagline,
        image: img[item.image],
        brand: { "@type": "Brand", name: site.name },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: site.rating,
          reviewCount: site.reviewCount,
        },
        ...(item.priceFrom && {
          offers: {
            "@type": "Offer",
            price: item.priceFrom,
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            url: `${site.baseUrl}/${item.slug}`,
          },
        }),
      },
      {
        "@type": "FAQPage",
        mainEntity: qa.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
