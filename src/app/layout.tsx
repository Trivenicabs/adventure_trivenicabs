import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/site";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.baseUrl,
    siteName: site.name,
    type: "website",
  },
  alternates: { canonical: site.baseUrl },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link
          rel="preconnect"
          href="https://api.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700,500&f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
        {/* If JS is disabled, force scroll-reveal content visible (never blank). */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-full flex flex-col bg-night text-mist font-sans">
        <div className="grain-overlay" aria-hidden />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
