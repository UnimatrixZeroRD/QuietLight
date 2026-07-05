import type { Metadata } from "next";
import { DailyLightJournalApp } from "@/components/daily-light-journal-app";
import { getLatestDailyLightEntry, getPublicDailyLightEntries } from "@/lib/supabase/daily-light";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Daily Light App",
  description: "An installable devotional journal for Daily Light scripture, reflection, prayer, and private notes.",
  alternates: { canonical: "/daily-light/app" },
  openGraph: {
    title: "Daily Light App | Quiet Light Ministries",
    description: "Install The Daily Light as a devotional journal for scripture, reflection, prayer, and private notes.",
    url: "/daily-light/app",
  },
};

export default async function DailyLightAppPage() {
  const [entry, entries] = await Promise.all([getLatestDailyLightEntry(), getPublicDailyLightEntries()]);

  return <DailyLightJournalApp entry={entry} recentEntries={entries} />;
}
