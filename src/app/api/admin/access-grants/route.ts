import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../../../lib/supabase/server";

async function getAdminClient() {
  const supabase = await createSupabaseServerClient();

  if (!supabase) {
    return { error: NextResponse.json({ error: "Supabase is not configured." }, { status: 500 }) };
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: NextResponse.json({ error: "Sign in required." }, { status: 401 }) };
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .maybeSingle();

  if (profile?.role !== "admin") {
    return { error: NextResponse.json({ error: "Admin access required." }, { status: 403 }) };
  }

  return { supabase };
}

export async function GET() {
  const result = await getAdminClient();
  if (result.error) return result.error;

  const supabase = result.supabase;

  const [profilesResult, productsResult] = await Promise.all([
    supabase
      .from("profiles")
      .select("id,display_name,handle,role")
      .order("created_at", { ascending: false })
      .limit(100),
    supabase
      .from("products")
      .select("id,title,status")
      .order("created_at", { ascending: false })
      .limit(100),
  ]);

  if (profilesResult.error || productsResult.error) {
    return NextResponse.json(
      { error: profilesResult.error?.message ?? productsResult.error?.message ?? "Unable to load options." },
      { status: 400 },
    );
  }

  return NextResponse.json({
    profiles: profilesResult.data ?? [],
    products: productsResult.data ?? [],
  });
}

export async function POST(request: Request) {
  const result = await getAdminClient();
  if (result.error) return result.error;

  const body = (await request.json()) as { userId?: string; productId?: string };

  if (!body.userId || !body.productId) {
    return NextResponse.json({ error: "User ID and product ID are required." }, { status: 400 });
  }

  const { error } = await result.supabase.from("licenses").insert({
    user_id: body.userId,
    product_id: body.productId,
    license_type: "personal",
    status: "active",
    starts_at: new Date().toISOString(),
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
