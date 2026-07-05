import { NextResponse } from "next/server";
import { getPublicDailyLightEntryBySlug } from "@/lib/supabase/daily-light";

type DailyLightEntryRouteProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 3600;

export async function GET(_request: Request, { params }: DailyLightEntryRouteProps) {
  const { slug } = await params;
  const entry = await getPublicDailyLightEntryBySlug(slug);

  if (!entry) {
    return NextResponse.json({ entry: null }, { status: 404 });
  }

  return NextResponse.json({ entry });
}
