import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://quiet-light.vercel.app";
const siteName = "The Way of Quiet Light";
const siteDescription = "A spiritual path of stillness, humility, sacred reflection, Daily Light, music, writings, and digital works.";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  description: siteDescription,
  founder: {
    "@type": "Person",
    name: "Joshua Eaton",
  },
  sameAs: [
    "https://open.spotify.com/artist/0k96zp5CFLPM2I2EtFOLTB",
    "https://music.apple.com/us/artist/yehoshua-of-%C4%93at%C5%ABn/1888389584",
    "https://music.youtube.com/@Yehoshuaof%C4%92at%C5%ABn",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  description: siteDescription,
  inLanguage: "en-CA",
  publisher: {
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: `${siteName} | The Flame Remains`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: ["Quiet Light", "Way of Quiet Light", "Daily Light", "spiritual reflection", "devotional writing", "The Keeper's Lantern"],
  authors: [{ name: "Joshua Eaton" }],
  creator: "Joshua Eaton",
  publisher: siteName,
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": [
        { url: "/rss.xml", title: `${siteName} RSS Feed` },
        { url: "/feed.xml", title: `${siteName} Feed` },
      ],
    },
  },
  other: {
    "facebook-domain-verification": "p353p26jdn2dj0fqkp6vwueqrdgwew",
    "msvalidate.01": "7FFCFE3FA489059163785757FEF7A47D",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "/",
    siteName,
    title: `${siteName} | The Flame Remains`,
    description: siteDescription,
    images: [
      {
        url: "/images/backgrounds/quiet-light-hero.svg",
        width: 1200,
        height: 630,
        alt: "Lantern-lit Quiet Light sanctuary artwork",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | The Flame Remains`,
    description: siteDescription,
    images: ["/images/backgrounds/quiet-light-hero.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#07111f",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-CA">
      <body className="quiet-page-bg min-h-screen antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <div id="main-content">{children}</div>
        <SiteFooter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
