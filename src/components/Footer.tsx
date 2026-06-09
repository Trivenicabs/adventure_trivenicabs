import Link from "next/link";
import { site, waLink, telLink } from "@/lib/site";
import { activities, packages, rentals, yatra } from "@/lib/data";

const col = (items: { slug: string; title: string }[], n = 5) =>
  items.slice(0, n).map((i) => ({ href: `/${i.slug}`, label: i.title }));

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10 bg-night-2/60">
      <div className="aurora -top-24 left-1/4 h-72 w-72 bg-cyan/10" />
      <div className="container-x relative section-pad !pb-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gold font-display text-sm font-bold text-night">
                T
              </span>
              <span className="font-display text-lg font-semibold">
                Triveni Adventure
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mute">
              Rishikesh adventure sports, camping, Char Dham yatra & self-drive
              rentals — by {site.parent}, North India&apos;s trusted travel
              brand.
            </p>
            <div className="mt-5 flex items-center gap-1.5 text-sm">
              <span className="text-gold">★ {site.rating}</span>
              <span className="text-mute">
                / 5 · {site.reviewCount.toLocaleString()}+ travellers
              </span>
            </div>
          </div>

          <FooterCol title="Top Activities" links={col(activities, 6)} />
          <FooterCol title="Packages" links={col(packages, 5)} />
          <FooterCol title="Rentals & Tours" links={[...col(rentals, 3), ...col(yatra, 3)]} />

          <div>
            <h4 className="footer-h">Get in touch</h4>
            <div className="mt-4 grid gap-2 text-sm">
              <a href={telLink()} className="text-mist hover:text-gold">
                {site.phoneDisplay}
              </a>
              <a
                href={waLink()}
                className="text-mist hover:text-cyan"
                target="_blank"
                rel="noopener"
              >
                WhatsApp us
              </a>
              <a href={`mailto:${site.email}`} className="text-mute hover:text-mist">
                {site.email}
              </a>
              <a
                href={site.parentUrl}
                className="mt-2 inline-block text-mute hover:text-mist"
                target="_blank"
                rel="noopener"
              >
                ← Need a cab? trivenicabs.in
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-mute sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Triveni Adventure · {site.domain}</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy-policy" className="hover:text-mist">Privacy</Link>
            <Link href="/terms-and-conditions" className="hover:text-mist">Terms</Link>
            <Link href="/cancellation-and-refund-policy" className="hover:text-mist">Cancellation</Link>
            <Link href="/about-us" className="hover:text-mist">About</Link>
            <Link href="/contact-us" className="hover:text-mist">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="footer-h">{title}</h4>
      <ul className="mt-4 grid gap-2 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-mute transition-colors hover:text-mist">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
