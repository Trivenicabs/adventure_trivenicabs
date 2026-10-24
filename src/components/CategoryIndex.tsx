import Link from "next/link";
import SmartImage from "./SmartImage";
import Reveal, { RevealItem } from "./Reveal";
import ItemCard from "./ItemCard";
import FaqList from "./FaqList";
import BookButton from "./BookButton";
import type { CategoryIndex as CategoryIndexData } from "@/lib/data";
import { img, galleryFor } from "@/lib/images";
import { themeForCategory } from "@/lib/themes";
import { site, telLink } from "@/lib/site";
import { crossLinkFor, mainUrl, transportSetFor } from "@/lib/crosslinks";
import {
  categoryBreadcrumbSchema,
  categoryItemListSchema,
  categoryKeywordsFor,
} from "@/lib/seo";

/**
 * A category index page.
 *
 * It is deliberately the same page shape as an item — hero, lede, body, the
 * honest counter-advice, the written sections, the gallery, the FAQs, the
 * transport panel — with the listing dropped in where an item page has its
 * price table. A reader arriving from a card should not feel they have landed
 * on a different site, and the writing is doing the same job either way.
 *
 * The one structural difference is the order. On an item page the listing-ish
 * content (price table, what's included) sits below the prose because the
 * reader has already chosen. Here the grid sits between the lead paragraphs
 * and the "choosing" sections, because the reader's question is which one, and
 * burying the answer under six paragraphs would be the wrong way round.
 */
export default function CategoryIndex({ ci }: { ci: CategoryIndexData }) {
  const { meta, items } = ci;
  const theme = themeForCategory(ci.category);
  const prices = items.map((i) => i.priceFrom).filter((p): p is number => !!p);
  // Only show a "from" price when every listing carries one. Ten of the
  // fourteen nearby destinations are quoted on request, so "14 listings from
  // ₹3,499" would be true of four of them and misleading about the rest.
  const cheapest = prices.length === items.length && prices.length > 0 ? Math.min(...prices) : null;
  const somePriced = prices.length > 0;
  const transport = transportSetFor(ci.slug, ci.category);
  const cross = crossLinkFor(ci.slug, ci.category);

  return (
    <article>
      <Schema ci={ci} />

      {/* poster hero */}
      <header className="border-b-2 border-ink bg-paper-2">
        <div className="container-x py-10 sm:py-14">
          <nav className="flex flex-wrap items-center gap-2 font-display text-xs uppercase tracking-wide text-ink-soft">
            <Link href="/" className="hover:text-rust">Home</Link>
            <span>/</span>
            <span className="text-ink">{meta.label}</span>
          </nav>
          <div className="mt-6 grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
            <Reveal>
              <div className="flex flex-wrap items-center gap-2">
                <span className="tag">{items.length} listings</span>
                <span className="tag !bg-teal !text-cream">{theme.label}</span>
              </div>
              <h1 className="section-h mt-4 max-w-2xl !text-[clamp(2.4rem,6vw,4.4rem)] text-ink">
                {ci.title}
              </h1>
              <p className="mt-4 max-w-xl font-serif-d text-lg leading-snug text-ink-soft">
                {meta.lede}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                {cheapest !== null ? (
                  <div className="panel-cream px-4 py-2">
                    <div className="text-[11px] font-bold uppercase tracking-wide text-ink-soft">
                      Cheapest listing
                    </div>
                    <div className="font-display text-2xl text-rust">
                      ₹{cheapest.toLocaleString("en-IN")}
                    </div>
                  </div>
                ) : (
                  <div className="panel-cream px-4 py-2">
                    <div className="text-[11px] font-bold uppercase tracking-wide text-ink-soft">
                      {somePriced ? "Listings priced" : "Listings"}
                    </div>
                    <div className="font-display text-2xl text-ink">
                      {somePriced ? `${prices.length} of ${items.length}` : items.length}
                    </div>
                  </div>
                )}
                <div className="panel-cream px-4 py-2">
                  <div className="text-[11px] font-bold uppercase tracking-wide text-ink-soft">Rated</div>
                  <div className="font-display text-2xl text-ink">{site.rating}★</div>
                </div>
                <div className="flex gap-3">
                  <BookButton product={ci.title} label="Ask us which to pick" />
                  <a href={telLink()} className="btn btn-paper">Call</a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="print-frame aspect-[4/3] rotate-1 shadow-[6px_6px_0_0_var(--color-ink)]">
                <SmartImage
                  src={img[ci.image]}
                  alt={`${ci.keyword} — ${ci.title}`}
                  priority
                  sizes="(max-width:1024px) 90vw, 540px"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t-2 border-ink bg-mustard px-4 py-2">
                  <span className="font-display text-sm uppercase tracking-wide text-ink">
                    {meta.label}
                  </span>
                  <span className="font-display text-sm text-rust-dk">{items.length} listings</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </header>

      <div className="container-x mt-12 grid gap-12 pb-16 lg:grid-cols-[1fr_22rem]">
        <div className="min-w-0">
          <Reveal>
            <p className="font-serif-d text-xl leading-snug text-ink">{meta.body[0]}</p>
          </Reveal>

          {meta.body.length > 1 && (
            <Reveal className="mt-5">
              <div className="space-y-4">
                {meta.body.slice(1).map((p, idx) => (
                  <p key={idx} className="leading-relaxed text-ink-soft">{p}</p>
                ))}
              </div>
            </Reveal>
          )}

          {/* The listing itself, high up — this is what the reader came for. */}
          <Reveal className="mt-10">
            <h2 className="section-h text-ink">All {items.length} {meta.label.toLowerCase()}</h2>
            <p className="mt-1 text-sm text-ink-soft">
              In listing order. The sections below are about choosing between them.
            </p>
          </Reveal>
          <Reveal stagger={0.05} className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {items.map((i, n) => (
              <RevealItem key={i.slug} rotate={n % 2 === 0 ? -1.2 : 1.2}>
                <ItemCard item={i} className="h-full" />
              </RevealItem>
            ))}
          </Reveal>

          {/* Who should be looking at a different category. Kept where an item
              page puts it — early enough to be useful rather than a footnote. */}
          <Reveal className="mt-10">
            <div className="panel border-l-4 border-rust bg-cream p-5">
              <div className="text-[11px] font-bold uppercase tracking-wide text-rust">
                Who should skip this
              </div>
              <p className="mt-2 leading-relaxed text-ink">{meta.notFor}</p>
            </div>
          </Reveal>

          {meta.sections.map((s) => (
            <Reveal key={s.heading} className="mt-10">
              <h2 className="section-h text-ink">{s.heading}</h2>
              <div className="mt-4 space-y-4">
                {s.paragraphs.map((p, idx) => (
                  <p key={idx} className="leading-relaxed text-ink-soft">{p}</p>
                ))}
              </div>
            </Reveal>
          ))}

          <Reveal className="mt-10">
            <h2 className="section-h text-ink">Gallery</h2>
            <div className="mt-4 grid auto-rows-[10rem] grid-cols-2 gap-3 sm:grid-cols-4">
              {galleryFor(ci.image, theme.vibe, ci.slug).map((g, idx) => (
                <div
                  key={idx}
                  className={`group relative overflow-hidden rounded-card border-2 border-ink ${
                    idx === 0 ? "col-span-2 row-span-2" : idx === 1 ? "col-span-2" : ""
                  }`}
                >
                  <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105">
                    <SmartImage
                      src={g}
                      alt={`${ci.title} — photo ${idx + 1}`}
                      sizes="(max-width:768px) 50vw, 360px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-12">
            <h2 className="section-h text-ink">Frequently asked questions</h2>
            <FaqList items={meta.ownFaqs} />
          </Reveal>

          {transport && (
            <Reveal className="mt-12">
              <h2 className="section-h text-ink">{transport.heading}</h2>
              <p className="mt-2 text-sm text-ink-soft">{transport.intro}</p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {transport.links.map((l) => (
                  <li key={l.path}>
                    <a
                      href={mainUrl(l.path)}
                      target="_blank"
                      rel="noopener"
                      className="block h-full rounded-lg border-2 border-ink/15 bg-paper-2 px-4 py-3 hover:border-rust"
                    >
                      <span className="flex items-center justify-between gap-2 font-semibold text-ink">
                        <span>{l.label}</span>
                        <span aria-hidden="true" className="text-rust">↗</span>
                      </span>
                      {l.note && (
                        <span className="mt-0.5 block text-xs text-ink-soft">{l.note}</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-ink-soft">
                Journeys are booked with Triveni Cabs; everything on this page is booked here.
              </p>
            </Reveal>
          )}
        </div>

        {/* sticky aside */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="panel bg-paper-2 p-6">
            <div className="flex items-baseline justify-between">
              <span className="font-display text-sm uppercase text-ink-soft">
                {cheapest !== null ? "From" : "Get a quote"}
              </span>
              {cheapest !== null && (
                <span className="font-display text-2xl text-rust">
                  ₹{cheapest.toLocaleString("en-IN")}
                </span>
              )}
            </div>
            <div className="text-xs text-ink-soft">
              {items.length} listings
              {cheapest === null && somePriced ? `, ${prices.length} with a published price` : ""}
            </div>
            <div className="mt-5 grid gap-2.5">
              <BookButton
                product={ci.title}
                detail={`Help choosing between ${items.length} ${meta.label.toLowerCase()}`}
                label="Ask us which to pick"
                className="btn btn-rust justify-center"
              />
              <a href={telLink()} className="btn btn-teal justify-center">
                Call {site.phoneDisplay}
              </a>
            </div>
            <p className="mt-4 text-center text-xs text-ink-soft">
              Instant confirmation · No advance payment · 24×7 support
            </p>
            <div className="mt-5 border-t-2 border-ink/15 pt-4 text-sm">
              <a
                href={mainUrl(cross.path)}
                target="_blank"
                rel="noopener"
                className="block hover:text-rust"
              >
                <span className="font-display text-xs uppercase text-ink-soft">Getting there</span>
                <span className="mt-1 flex items-center justify-between gap-2 font-semibold text-ink">
                  <span>{cross.label}</span>
                  <span className="text-rust">→</span>
                </span>
                {cross.note && (
                  <span className="mt-0.5 block text-xs text-ink-soft">{cross.note}</span>
                )}
              </a>
            </div>
          </div>
        </aside>
      </div>

      <section className="border-t-2 border-ink bg-paper-2 section-pad">
        <div className="container-x">
          <h2 className="section-h text-ink">Keep looking</h2>
          <p className="mt-2 max-w-2xl text-sm text-ink-soft">
            Everything on this site in one place, or go back to the activities if this is not the
            kind of trip you are after.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/" className="btn btn-paper">← Back to all adventures</Link>
            <Link href="/things-to-do-in-rishikesh" className="btn btn-paper">
              Things to do in Rishikesh
            </Link>
            <Link href="/rishikesh-adventure-sports-price-list" className="btn btn-paper">
              Every price in one place
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}

function Schema({ ci }: { ci: CategoryIndexData }) {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      categoryBreadcrumbSchema(ci),
      categoryItemListSchema(ci),
      {
        "@type": "CollectionPage",
        name: ci.title,
        description: ci.meta.lede,
        url: `${site.baseUrl}/${ci.slug}`,
        keywords: categoryKeywordsFor(ci).join(", "),
        isPartOf: { "@type": "WebSite", name: site.name, url: site.baseUrl },
      },
      {
        "@type": "FAQPage",
        mainEntity: ci.meta.ownFaqs.map((f) => ({
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
