import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Music",
  description: "Listen to sacred Quiet Light music for prayer, reflection, stillness, and the keeping of the flame.",
  alternates: { canonical: "/music" },
  openGraph: {
    title: "Music | The Way of Quiet Light",
    description: "Listen to sacred Quiet Light music for prayer, reflection, stillness, and the keeping of the flame.",
    url: "/music",
  },
};

export default function MusicLayout({ children }: { children: ReactNode }) {
  return children;
}
