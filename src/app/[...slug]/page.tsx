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
import { site, waLink, telLink } from "@/lib/site";

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
  const vibe = themeFor(item).label;
  const bookMsg = `Hi ${site.name}! I'm interested in "${item.title}". Please share details & availability.`;

  return (
    <article>
      <Schema item={item} qa={qa} />

      {/* poster hero */}
      <header className="border-b-2 border-ink bg-paper-2">
        <div className="container-x py-10 sm:py-14">
          <Breadcrumb item={item} />
          <div className="mt-6 grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
            <Reveal>
              <div className="flex flex-wrap items-center gap-2">
                <span className="tag">{categoryMeta[item.category].label}</span>
                <span className="tag !bg-teal !text-cream">{vibe}</span>
                {item.badge && <span className="tag !bg-rust !text-cream">{item.badge}</span>}
              </div>
              <h1 className="section-h mt-4 max-w-2xl !text-[clamp(2.4rem,6vw,4.4rem)] text-ink">
                {item.title}
              </h1>
              <p className="mt-4 max-w-xl font-serif-d text-lg leading-snug text-ink-soft">
                {item.tagline}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                {item.priceFrom && (
                  <div className="panel-cream px-4 py-2">
                    <div className="text-[11px] font-bold uppercase tracking-wide text-ink-soft">Starting from</div>
                    <div className="font-display text-2xl text-rust">
                      ₹{item.priceFrom.toLocaleString("en-IN")}
                      <span className="ml-1 text-xs font-normal text-ink-soft">{item.unit}</span>
                    </div>
                  </div>
                )}
                <div className="panel-cream px-4 py-2">
                  <div className="text-[11px] font-bold uppercase tracking-wide text-ink-soft">Rated</div>
                  <div className="font-display text-2xl text-ink">{site.rating}★</div>
                </div>
                <div className="flex gap-3">
                  <a href={waLink(bookMsg)} target="_blank" rel="noopener" className="btn btn-rust">Book on WhatsApp</a>
                  <a href={telLink()} className="btn btn-paper">Call</a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="print-frame aspect-[4/3] rotate-1 shadow-[6px_6px_0_0_var(--color-ink)]">
                <SmartImage src={img[item.image]} alt={item.title} priority sizes="(max-width:1024px) 90vw, 540px" />
                {item.priceFrom && (
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t-2 border-ink bg-mustard px-4 py-2">
                    <span className="font-display text-sm uppercase tracking-wide text-ink">{categoryMeta[item.category].label}</span>
                    <span className="font-display text-sm text-rust-dk">₹{item.priceFrom.toLocaleString("en-IN")}</span>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </header>

      <div className="container-x mt-12 grid gap-12 pb-16 lg:grid-cols-[1fr_22rem]">
        {/* main */}
        <div className="min-w-0">
          <Reveal>
            <p className="font-serif-d text-xl leading-snug text-ink">{intro(item)}</p>
          </Reveal>

          {item.highlights && (
            <Reveal className="mt-10">
              <h2 className="section-h text-ink">Highlights</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {item.highlights.map((h) => (
                  <div key={h} className="panel flex items-start gap-3 bg-paper p-4">
                    <span className="mt-0.5 font-display text-rust">★</span>
                    <span className="text-sm text-ink">{h}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          )}

          {item.meta && (
            <Reveal className="mt-10">
              <h2 className="section-h text-ink">Quick facts</h2>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {item.meta.map((m) => (
                  <div key={m.label} className="panel bg-cream p-4">
                    <div className="text-[11px] font-bold uppercase tracking-wide text-teal">{m.label}</div>
                    <div className="mt-1 font-display text-lg text-ink">{m.value}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          )}

          {prices && (
            <Reveal className="mt-10">
              <h2 className="section-h text-ink">Price list</h2>
              <p className="mt-1 text-sm text-ink-soft">{prices.caption}</p>
              <div className="panel mt-4 overflow-hidden bg-paper">
                <table className="w-full text-left text-sm">
                  <tbody>
                    {prices.rows.map((r, idx) => (
                      <tr key={r.label} className={idx ? "border-t-2 border-ink/12" : ""}>
                        <td className="px-5 py-3.5 font-medium text-ink">
                          {r.label}
                          {r.note && <span className="ml-2 text-xs text-ink-soft">{r.note}</span>}
                        </td>
                        <td className="px-5 py-3.5 text-right font-display text-rust">{r.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-ink-soft">
                Prices are indicative and vary by date, season & availability — message us for a live quote.
              </p>
            </Reveal>
          )}

          {(inc.length > 0 || exc.length > 0) && (
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {inc.length > 0 && (
                <Reveal>
                  <div className="panel h-full bg-paper p-6">
                    <h3 className="font-display text-xl uppercase text-ink">What&apos;s included</h3>
                    <ul className="mt-4 grid gap-2.5 text-sm">
                      {inc.map((x) => (
                        <li key={x} className="flex gap-2 text-ink">
                          <span className="font-bold text-teal">✓</span> {x}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )}
              {exc.length > 0 && (
                <Reveal delay={0.08}>
                  <div className="panel h-full bg-paper p-6">
                    <h3 className="font-display text-xl uppercase text-ink">Not included</h3>
                    <ul className="mt-4 grid gap-2.5 text-sm">
                      {exc.map((x) => (
                        <li key={x} className="flex gap-2 text-ink-soft">
                          <span className="font-bold text-rust">✕</span> {x}
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
              <h2 className="section-h text-ink">What to carry</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {car.map((c) => (
                  <span key={c} className="panel bg-cream px-4 py-2 text-sm text-ink">{c}</span>
                ))}
              </div>
            </Reveal>
          )}

          {/* gallery */}
          <Reveal className="mt-10">
            <h2 className="section-h text-ink">Gallery</h2>
            <div className="mt-4 grid auto-rows-[10rem] grid-cols-2 gap-3 sm:grid-cols-4">
              {galleryFor(item.image, themeFor(item).vibe, item.slug).map((g, idx) => (
                <div
                  key={idx}
                  className={`group relative overflow-hidden rounded-card border-2 border-ink ${
                    idx === 0 ? "col-span-2 row-span-2" : idx === 1 ? "col-span-2" : ""
                  }`}
                >
                  <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105">
                    <SmartImage src={g} alt={`${item.title} — photo ${idx + 1}`} sizes="(max-width:768px) 50vw, 360px" />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* faq */}
          <Reveal className="mt-12">
            <h2 className="section-h text-ink">Frequently asked questions</h2>
            <FaqList items={qa} />
          </Reveal>
        </div>

        {/* sticky booking aside */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="panel bg-paper-2 p-6">
            <div className="flex items-baseline justify-between">
              <span className="font-display text-sm uppercase text-ink-soft">
                {item.priceFrom ? "Book from" : "Get a quote"}
              </span>
              {item.priceFrom && (
                <span className="font-display text-2xl text-rust">₹{item.priceFrom.toLocaleString("en-IN")}</span>
              )}
            </div>
            {item.unit && <div className="text-xs text-ink-soft">{item.unit}</div>}
            <div className="mt-5 grid gap-2.5">
              <a href={waLink(bookMsg)} target="_blank" rel="noopener" className="btn btn-rust justify-center">Book on WhatsApp</a>
              <a href={telLink()} className="btn btn-teal justify-center">Call {site.phoneDisplay}</a>
            </div>
            <p className="mt-4 text-center text-xs text-ink-soft">
              Instant confirmation · No advance payment · 24×7 support
            </p>
            <div className="mt-5 border-t-2 border-ink/15 pt-4 text-sm">
              <a href={site.parentUrl} target="_blank" rel="noopener" className="flex items-center justify-between font-display text-xs uppercase text-ink-soft hover:text-rust">
                <span>Need a cab from Delhi?</span>
                <span className="text-rust">trivenicabs.in →</span>
              </a>
            </div>
          </div>
        </aside>
      </div>

      {/* related */}
      {rel.length > 0 && (
        <section className="border-t-2 border-ink bg-paper-2 section-pad">
          <div className="container-x">
            <h2 className="section-h text-ink">You might also like</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {rel.map((r) => (
                <ItemCard key={r.slug} item={r} />
              ))}
            </div>
            <div className="mt-8">
              <Link href="/" className="btn btn-paper">← Back to all adventures</Link>
            </div>
          </div>
        </section>
      )}
    </article>
  );
}

function Breadcrumb({ item }: { item: Item }) {
  return (
    <nav className="flex flex-wrap items-center gap-2 font-display text-xs uppercase tracking-wide text-ink-soft">
      <Link href="/" className="hover:text-rust">Home</Link>
      <span>/</span>
      <span className="text-teal">{categoryMeta[item.category].label}</span>
      <span>/</span>
      <span className="text-ink">{item.title}</span>
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
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
