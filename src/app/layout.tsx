import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const siteName = "The Way of Quiet Light";
const siteDescription = "A spiritual path of stillness, humility, sacred reflection, Daily Light, music, writings, and digital works.";

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
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <div id="main-content">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
