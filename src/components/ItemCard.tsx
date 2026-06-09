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
      className={`group glass card-hover relative block overflow-hidden rounded-glass ${className}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
          <SmartImage
            src={img[item.image]}
            alt={item.title}
            emoji={item.emoji}
            sizes="(max-width:768px) 90vw, 360px"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/20 to-transparent" />
        {item.badge && (
          <span className="absolute left-3 top-3 chip !text-[10px] !text-night !bg-gold !border-gold/60">
            {item.badge}
          </span>
        )}
        {item.priceFrom && (
          <div className="absolute bottom-3 right-3 glass-dark rounded-full px-3 py-1 text-xs">
            <span className="text-mute">from </span>
            <span className="font-display font-semibold text-gold">
              ₹{item.priceFrom.toLocaleString("en-IN")}
            </span>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 text-xs text-cyan">
          <span>{item.emoji}</span>
          {item.duration && <span>{item.duration}</span>}
        </div>
        <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug text-mist transition-colors group-hover:text-gold">
          {item.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-mute">
          {item.tagline}
        </p>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-cyan opacity-0 transition-all duration-300 group-hover:gap-2 group-hover:opacity-100">
          View & book →
        </span>
      </div>
    </Link>
  );
}
