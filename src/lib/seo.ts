// Central SEO helpers — ports the penalty-safe keyword plan into code.
//
// Rule enforced here: ONE primary keyword per page (item.keyword), used once in
// title, description, H1 and one alt. Everything else is natural secondary /
// long-tail / semantic variation — never the same phrase stuffed repeatedly.
// See seo-report/Triveni-Adventure-Keyword-Plan.xlsx for the full map.

import type { Item } from "./data";
import { categoryMeta } from "./data";
import { site } from "./site";

const inr = (n: number) => `₹${Math.round(n).toLocaleString("en-IN")}`;

/**
 * Keyword set for a page: the primary keyword plus a small number of NATURAL
 * secondary / long-tail variants. Used for the <meta keywords> hint and the
 * Product schema `keywords` field — kept short and non-repetitive on purpose.
 */
export function keywordsFor(item: Item): string[] {
  const p = item.keyword;
  const base = p.endsWith(" in rishikesh")
    ? p.slice(0, -" in rishikesh".length)
    : p.endsWith(" rishikesh")
      ? p.slice(0, -" rishikesh".length)
      : p;

  const set = new Set<string>([p]);

  // commercial / transactional variants only when the page has a price
  if (item.priceFrom) {
    set.add(`${p} price`);
    set.add(`${base} price in rishikesh`);
    set.add(`book ${p} online`);
    set.add(`${base} cost rishikesh`);
    // one local / near-me variant per bookable page — activates with the GBP
    set.add(`${base} near me`);
  }
  // avoid "best best ..." when the keyword already leads with a modifier
  if (!/^(best|top|cheap)\b/.test(p)) set.add(`best ${p}`);

  // a category-level umbrella term for topical relevance
  const cat = categoryMeta[item.category]?.label?.toLowerCase();
  if (cat) set.add(`${cat} in rishikesh`);

  return [...set].slice(0, 7);
}

/** Penalty-safe, click-optimised <title>. Primary keyword appears once. */
export function metaTitle(item: Item): string {
  // competitor-proven pattern: keyword + price hook (brand appended by template)
  return item.priceFrom
    ? `${item.title} — from ${inr(item.priceFrom)}`
    : item.title;
}

/**
 * Meta description: primary keyword once, a secondary term (price/booking)
 * woven in naturally, and the trust + booking hooks that drive click-through.
 * ~150–160 chars.
 */
export function metaDescription(item: Item): string {
  const price = item.priceFrom ? ` from ${inr(item.priceFrom)}` : "";
  const lead = item.tagline.trim();
  const cta = item.priceFrom
    ? `Book ${item.keyword}${price} on WhatsApp — certified guides, no advance payment, 24×7 support.`
    : `${item.title} by Triveni — certified operators, instant WhatsApp booking, 24×7 support.`;
  const full = `${lead} ${cta}`;
  return full.length > 300 ? full.slice(0, 297) + "…" : full;
}

/* ------------------------------------------------------------------ */
/* Structured-data (JSON-LD) node builders                            */
/* ------------------------------------------------------------------ */

/** BreadcrumbList matching the visible breadcrumb on every detail page. */
export function breadcrumbSchema(item: Item) {
  const items = [
    { name: "Home", url: site.baseUrl },
    {
      name: categoryMeta[item.category].label,
      url: `${site.baseUrl}/${item.slug.split("/")[0]}`,
    },
    { name: item.title, url: `${site.baseUrl}/${item.slug}` },
  ];
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

/**
 * LocalBusiness / TravelAgency node for the brand — added site-wide so Google
 * can associate every page with the Rishikesh business and its NAP data.
 * (Confirm exact street address when the Google Business Profile is verified.)
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": `${site.baseUrl}/#business`,
    name: site.name,
    description: site.description,
    url: site.baseUrl,
    telephone: site.phone,
    email: site.email,
    image: `${site.baseUrl}/images/rishikesh/rafting.jpg`,
    priceRange: "₹₹",
    parentOrganization: { "@type": "Organization", name: site.parent, url: site.parentUrl },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rishikesh",
      addressRegion: "Uttarakhand",
      postalCode: "249201",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "City", name: "Rishikesh" },
      { "@type": "City", name: "Haridwar" },
      { "@type": "State", name: "Uttarakhand" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating,
      reviewCount: site.reviewCount,
    },
    sameAs: [site.social.instagram, site.social.facebook, site.parentUrl],
  };
}
