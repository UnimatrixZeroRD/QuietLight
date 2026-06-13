import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about The Way of Quiet Light, its purpose, public work, and the lantern-lit path of stillness and service.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | The Way of Quiet Light",
    description: "Learn about The Way of Quiet Light, its purpose, public work, and the lantern-lit path of stillness and service.",
    url: "/about",
  },
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
