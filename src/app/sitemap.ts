import type { MetadataRoute } from "next";
import { allItems, categoryIndexPages } from "@/lib/data";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const core = [
    "",
    "book-now",
    "contact-us",
    "about-us",
    "reviews",
    "faqs",
    "privacy-policy",
    "terms-and-conditions",
    "cancellation-and-refund-policy",
  ];
  const staticPages = core.map((p) => ({
    url: `${site.baseUrl}/${p}`.replace(/\/$/, "") || site.baseUrl,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.7,
  }));
  const itemPages = allItems.map((i) => ({
    url: `${site.baseUrl}/${i.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));
  // The category index pages sit above their items: each one is the browse
  // entry point for everything under it, and is the page we would rather have
  // ranking for the broad query.
  const indexPages = categoryIndexPages.map((ci) => ({
    url: `${site.baseUrl}/${ci.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));
  return [...staticPages, ...indexPages, ...itemPages];
}
