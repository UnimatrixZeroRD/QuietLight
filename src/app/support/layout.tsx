import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Support",
  description: "Support the writing, music, scripture work, public platform, and ongoing Quiet Light projects.",
  alternates: { canonical: "/support" },
  openGraph: {
    title: "Support | The Way of Quiet Light",
    description: "Support the writing, music, scripture work, public platform, and ongoing Quiet Light projects.",
    url: "/support",
  },
};

export default function SupportLayout({ children }: { children: ReactNode }) {
  return children;
}
