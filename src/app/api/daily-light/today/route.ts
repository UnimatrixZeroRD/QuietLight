import { NextResponse } from "next/server";
import { getLatestDailyLightEntry } from "@/lib/supabase/daily-light";

export const revalidate = 3600;

export async function GET() {
  const entry = await getLatestDailyLightEntry();

  if (!entry) {
    return NextResponse.json({ entry: null }, { status: 404 });
  }

  return NextResponse.json({ entry });
}
