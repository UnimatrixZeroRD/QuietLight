import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://quietlightministries.org";
const siteName = "Quiet Light Ministries";
const siteDescription = "A spiritual path of stillness, humility, sacred reflection, Daily Light, music, writings, and digital works.";
const facebookVerification = "p353p26jdn2dj0fqkp6vwueqrdgwew";
const microsoftVerification = "7FFCFE3FA489059163785757FEF7A47D";
const googleAnalyticsId = "G-53X83J437V";

const organizationJsonLd = {"@context":"https://schema.org","@type":"Organization",name:siteName,url:siteUrl,description:siteDescription,founder:{"@type":"Person",name:"Joshua Eaton"},sameAs:["https://open.spotify.com/artist/0k96zp5CFLPM2I2EtFOLTB","https://music.apple.com/us/artist/yehoshua-of-%C4%93at%C5%ABn/1888389584","https://music.youtube.com/@Yehoshuaof%C4%92at%C5%ABn"]};
const websiteJsonLd = {"@context":"https://schema.org","@type":"WebSite",name:siteName,url:siteUrl,description:siteDescription,inLanguage:"en-CA",publisher:{"@type":"Organization",name:siteName,url:siteUrl}};

export const metadata: Metadata = { metadataBase:new URL(siteUrl), applicationName:siteName, title:{default:siteName,template:`%s | ${siteName}`}, description:siteDescription, keywords:["Quiet Light","Quiet Light Ministries","Way of Quiet Light","Daily Light","spiritual reflection","devotional writing","The Keeper's Lantern"], authors:[{name:"Joshua Eaton"}], creator:"Joshua Eaton", publisher:siteName, alternates:{canonical:"/",types:{"application/rss+xml":[{url:"/rss.xml",title:`${siteName} RSS Feed`},{url:"/feed.xml",title:`${siteName} Feed`}]}}, icons:{icon:[{url:"/favicon.ico",sizes:"any"},{url:"/images/brand/quiet-light-icon.webp",type:"image/webp",sizes:"512x512"}],shortcut:"/favicon.ico",apple:"/apple-touch-icon.png"}, other:{"facebook-domain-verification":facebookVerification,"msvalidate.01":microsoftVerification} };
export const viewport: Viewport = { width:"device-width", initialScale:1, maximumScale:5, themeColor:"#07111f", colorScheme:"dark" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-CA">
      <head>
        <meta name="facebook-domain-verification" content={facebookVerification} />
        <meta name="msvalidate.01" content={microsoftVerification} />
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `}
        </Script>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7648202890845162" crossOrigin="anonymous" strategy="afterInteractive" />
      </head>
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
