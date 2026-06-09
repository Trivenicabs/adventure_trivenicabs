import Link from "next/link";
import SmartImage from "./SmartImage";
import { img } from "@/lib/images";
import type { Item } from "@/lib/data";

export default function ItemCard({
  item,
  className = "",
}: {
  item: Item;
  className?: string;
}) {
  return (
    <Link
      href={`/${item.slug}`}
      className={`group card-lift panel flex flex-col overflow-hidden bg-paper ${className}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-ink">
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
          <SmartImage
            src={img[item.image]}
            alt={item.title}
            sizes="(max-width:768px) 90vw, 360px"
          />
        </div>
        {item.badge && (
          <span className="tag absolute left-3 top-3">{item.badge}</span>
        )}
        {item.priceFrom && (
          <span className="absolute bottom-0 right-0 border-l-2 border-t-2 border-ink bg-rust px-3 py-1 font-display text-sm text-cream">
            ₹{item.priceFrom.toLocaleString("en-IN")}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        {item.duration && (
          <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-teal">
            {item.duration}
          </div>
        )}
        <h3 className="mt-1 font-display text-xl leading-none text-ink transition-colors group-hover:text-rust">
          {item.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 font-serif-d text-sm leading-snug text-ink-soft">
          {item.tagline}
        </p>
        <span className="mt-3 inline-flex items-center gap-1 font-display text-xs uppercase tracking-wide text-rust">
          View &amp; book →
        </span>
      </div>
    </Link>
  );
}
