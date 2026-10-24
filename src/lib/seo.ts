// Central SEO helpers — ports the penalty-safe keyword plan into code.
//
// Rule enforced here: ONE primary keyword per page (item.keyword), used once in
// title, description, H1 and one alt. Everything else is natural secondary /
// long-tail / semantic variation — never the same phrase stuffed repeatedly.
// See seo-report/Triveni-Adventure-Keyword-Plan.xlsx for the full map.

import type { CategoryIndex, Item } from "./data";
import { categoryIndexFor, categoryMeta } from "./data";
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

/**
 * The URL the middle breadcrumb crumb should point at, or null when there is
 * nothing real to point it at.
 *
 * This used to be `/${slug.split("/")[0]}` unconditionally, which is right for
 * a sub-page — a rafting stretch's first segment is its parent hub — but on a
 * top-level item it resolved to the item's own URL, so positions 2 and 3 of the
 * BreadcrumbList were the same page. Now it prefers the category's index page
 * where one exists, falls back to the parent item, and otherwise leaves the
 * crumb unlinked rather than inventing a destination.
 */
export function categoryCrumbUrl(item: Item): string | null {
  const index = categoryIndexFor(item.category);
  if (index) return `${site.baseUrl}/${index.slug}`;
  const parentSlug = item.slug.includes("/") ? item.slug.split("/")[0] : null;
  return parentSlug ? `${site.baseUrl}/${parentSlug}` : null;
}

/** BreadcrumbList matching the visible breadcrumb on every detail page. */
export function breadcrumbSchema(item: Item) {
  const crumb = categoryCrumbUrl(item);
  const items = [
    { name: "Home", url: site.baseUrl },
    ...(crumb ? [{ name: categoryMeta[item.category].label, url: crumb }] : []),
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

/* ------------------------------------------------------------------ */
/* Category index pages                                               */
/* ------------------------------------------------------------------ */
//
// Same one-keyword rule as the item pages. A category index has a broader
// keyword than any of its items ("day trips from rishikesh" against
// "chopta tour from rishikesh"), which is the point of it — the index
// answers the browse query and the items answer the specific ones.

export function categoryKeywordsFor(ci: CategoryIndex): string[] {
  const p = ci.keyword;
  const set = new Set<string>([p]);
  set.add(`best ${p}`);
  set.add(`${categoryMeta[ci.category].label.toLowerCase()} rishikesh`);
  const priced = ci.items.filter((i) => i.priceFrom);
  if (priced.length) set.add(`${p} price`);
  return [...set].slice(0, 5);
}

export function categoryMetaTitle(ci: CategoryIndex): string {
  return ci.title;
}

/**
 * The description leads with the category's own lede and then says what the
 * page does with the listings.
 *
 * The price is only quoted when every listing has one. Fourteen nearby
 * destinations "from ₹3,499" would be a true statement about the four that are
 * priced and a misleading one about the ten that are quoted on request, and a
 * description that oversells by implication is the kind of thing this site's
 * writing is supposed to avoid. The same test decides the closing clause: a
 * category of guides is read rather than booked, so it is not offered a
 * booking CTA.
 */
export function categoryMetaDescription(ci: CategoryIndex): string {
  const prices = ci.items.map((i) => i.priceFrom).filter((p): p is number => !!p);
  const allPriced = prices.length === ci.items.length && prices.length > 0;
  const tail = allPriced
    ? `All ${ci.items.length} compared, from ${inr(Math.min(...prices))} — book on WhatsApp, no advance payment.`
    : `All ${ci.items.length} in one place, with what actually separates them.`;
  // The lede is the part worth having in a snippet. If the two together run
  // past what Google will show, drop the tail rather than truncating mid-word
  // into an ellipsis that says nothing.
  const full = `${ci.meta.lede} ${tail}`;
  return full.length > 160 ? ci.meta.lede : full;
}

/** BreadcrumbList for a category index: Home / this page. */
export function categoryBreadcrumbSchema(ci: CategoryIndex) {
  const items = [
    { name: "Home", url: site.baseUrl },
    { name: ci.meta.label, url: `${site.baseUrl}/${ci.slug}` },
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
 * ItemList for a category index — the listing the page actually shows, in the
 * order it shows it, so the structured data matches what a reader sees.
 */
export function categoryItemListSchema(ci: CategoryIndex) {
  return {
    "@type": "ItemList",
    name: ci.title,
    numberOfItems: ci.items.length,
    itemListElement: ci.items.map((i, n) => ({
      "@type": "ListItem",
      position: n + 1,
      name: i.title,
      url: `${site.baseUrl}/${i.slug}`,
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
