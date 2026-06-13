import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "The Way",
  description: "Explore the path of Quiet Light: stillness, humility, sacred reflection, and quiet works.",
  alternates: { canonical: "/the-way" },
  openGraph: {
    title: "The Way | The Way of Quiet Light",
    description: "Explore the path of Quiet Light: stillness, humility, sacred reflection, and quiet works.",
    url: "/the-way",
  },
};

export default function TheWayLayout({ children }: { children: ReactNode }) {
  return children;
}
