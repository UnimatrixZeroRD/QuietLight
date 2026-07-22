import { NextResponse } from "next/server";
import { getPublicDailyLightEntries } from "@/lib/supabase/daily-light";

type DailyLightDayRouteProps = {
  params: Promise<{ day: string }>;
};

export const revalidate = 3600;

export async function GET(_request: Request, { params }: DailyLightDayRouteProps) {
  const { day } = await params;
  const dayNumber = Number(day);

  if (!Number.isInteger(dayNumber) || dayNumber < 1) {
    return NextResponse.json({ entry: null, error: "Invalid Daily Light day." }, { status: 400 });
  }

  const entries = await getPublicDailyLightEntries();
  const entry = entries.find((dailyLightEntry) => dailyLightEntry.day === dayNumber) ?? null;

  if (!entry) {
    return NextResponse.json({ entry: null }, { status: 404 });
  }

  return NextResponse.json({ entry });
}
