import type { MetadataRoute } from "next";
import { allItems } from "@/lib/data";
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
  return [...staticPages, ...itemPages];
}
