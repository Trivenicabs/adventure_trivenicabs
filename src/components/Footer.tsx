import Link from "next/link";
import Image from "next/image";
import Divider from "./Divider";
import { site, waLink, telLink } from "@/lib/site";
import { activities, packages, rentals, yatra } from "@/lib/data";

const col = (items: { slug: string; title: string }[], n = 5) =>
  items.slice(0, n).map((i) => ({ href: `/${i.slug}`, label: i.title }));

export default function Footer() {
  return (
    <>
    <Divider color="ink" bg="paper" />
    <footer className="bg-ink text-paper">
      <div className="container-x section-pad !pb-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="relative h-11 w-11 overflow-hidden rounded-md border-2 border-paper">
                <Image src="/brand/triveni-logo.webp" alt="Triveni" fill className="object-cover" sizes="44px" />
              </span>
              <span className="font-display text-xl uppercase">Triveni Adventure</span>
            </div>
            <p className="mt-4 max-w-xs font-serif-d text-sm leading-snug text-paper/70">
              Rishikesh adventure sports, camping, Char Dham yatra & self-drive
              rentals — by {site.parent}, North India&apos;s trusted travel brand.
            </p>
            <div className="mt-5 font-display text-sm text-mustard">
              ★ {site.rating} / 5 · {site.reviewCount.toLocaleString()}+ travellers
            </div>
          </div>

          <FooterCol title="Top Activities" links={col(activities, 6)} />
          <FooterCol title="Packages" links={col(packages, 5)} />
          <FooterCol title="Rentals & Tours" links={[...col(rentals, 3), ...col(yatra, 3)]} />

          <div>
            <h4 className="footer-h">Get in touch</h4>
            <div className="mt-4 grid gap-2 text-sm">
              <a href={telLink()} className="hover:text-mustard">{site.phoneDisplay}</a>
              <a href={waLink()} className="hover:text-mustard" target="_blank" rel="noopener">WhatsApp us</a>
              <a href={`mailto:${site.email}`} className="text-paper/70 hover:text-paper">{site.email}</a>
              <a href={site.parentUrl} className="mt-2 inline-block text-paper/70 hover:text-paper" target="_blank" rel="noopener">
                ← Need a cab? trivenicabs.in
              </a>
            </div>
          </div>
        </div>

        <hr className="mt-12 border-0 border-t-2 border-paper/25" />
        <div className="mt-6 flex flex-col gap-3 text-xs text-paper/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Triveni Adventure · {site.domain}</p>
          <div className="flex flex-wrap gap-4 font-display uppercase tracking-wide">
            <Link href="/privacy-policy" className="hover:text-mustard">Privacy</Link>
            <Link href="/terms-and-conditions" className="hover:text-mustard">Terms</Link>
            <Link href="/cancellation-and-refund-policy" className="hover:text-mustard">Cancellation</Link>
            <Link href="/about-us" className="hover:text-mustard">About</Link>
            <Link href="/contact-us" className="hover:text-mustard">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
    </>
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
            <Link href={l.href} className="text-paper/75 transition-colors hover:text-mustard">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
