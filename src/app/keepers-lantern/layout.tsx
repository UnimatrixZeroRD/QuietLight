import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "The Keeper's Lantern",
  description: "Explore The Keeper's Lantern, a Quiet Light work of prayer, psalm, invocation, and sacred reflection.",
  alternates: { canonical: "/keepers-lantern" },
  openGraph: {
    title: "The Keeper's Lantern | The Way of Quiet Light",
    description: "Explore The Keeper's Lantern, a Quiet Light work of prayer, psalm, invocation, and sacred reflection.",
    url: "/keepers-lantern",
    images: [
      {
        url: "/images/books/keepers-lantern-cover.png",
        width: 1024,
        height: 1536,
        alt: "The Keeper's Lantern Definitive Edition book cover.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Keeper's Lantern | The Way of Quiet Light",
    description: "Explore The Keeper's Lantern, a Quiet Light work of prayer, psalm, invocation, and sacred reflection.",
    images: ["/images/books/keepers-lantern-cover.png"],
  },
};

export default function KeepersLanternLayout({ children }: { children: ReactNode }) {
  return children;
}
