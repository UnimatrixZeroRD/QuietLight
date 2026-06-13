import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Lantern Psalms",
  description: "Read the Lantern Psalms and sacred poetic writings of The Way of Quiet Light.",
  alternates: { canonical: "/lantern-psalms" },
  openGraph: {
    title: "Lantern Psalms | The Way of Quiet Light",
    description: "Read the Lantern Psalms and sacred poetic writings of The Way of Quiet Light.",
    url: "/lantern-psalms",
  },
};

export default function LanternPsalmsLayout({ children }: { children: ReactNode }) {
  return children;
}
