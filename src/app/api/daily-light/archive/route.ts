import { NextResponse } from "next/server";
import { getPublicDailyLightEntries } from "@/lib/supabase/daily-light";

export const revalidate = 3600;

export async function GET() {
  const entries = await getPublicDailyLightEntries();

  return NextResponse.json({ count: entries.length, entries });
}
