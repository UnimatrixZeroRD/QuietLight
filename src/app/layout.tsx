import type { ReactNode } from "react";
import "./globals.css";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="quiet-page-bg">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
