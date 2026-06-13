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
  },
};

export default function KeepersLanternLayout({ children }: { children: ReactNode }) {
  return children;
}
