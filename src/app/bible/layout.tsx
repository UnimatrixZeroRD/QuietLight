import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Bible",
  description: "Explore scripture references and Quiet Light devotional connections for study, reflection, and prayer.",
  alternates: { canonical: "/bible" },
  openGraph: {
    title: "Bible | The Way of Quiet Light",
    description: "Explore scripture references and Quiet Light devotional connections for study, reflection, and prayer.",
    url: "/bible",
  },
};

export default function BibleLayout({ children }: { children: ReactNode }) {
  return children;
}
