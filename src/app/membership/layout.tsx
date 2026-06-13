import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Membership",
  description: "Support The Way of Quiet Light through membership tiers and future member access to writings, music, and digital works.",
  alternates: { canonical: "/membership" },
  openGraph: {
    title: "Membership | The Way of Quiet Light",
    description: "Support The Way of Quiet Light through membership tiers and future member access to writings, music, and digital works.",
    url: "/membership",
  },
};

export default function MembershipLayout({ children }: { children: ReactNode }) {
  return children;
}
