import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../../../../../lib/supabase/server";

type FulfillOrderProps = {
  params: Promise<{ orderId: string }>;
};

type OrderIntent = {
  id: string;
  user_id: string | null;
  product_id: string | null;
  method: string;
  amount_cents: number | null;
  currency: string;
  status: string;
};

export async function POST(_request: Request, { params }: FulfillOrderProps) {
  const { orderId } = await params;
  const supabase = await createSupabaseServerClient();

  if (!supabase) {
    return NextResponse.json({ error: "Supabase is not configured." }, { status: 500 });
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Sign in required." }, { status: 401 });
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .maybeSingle();

  if (profile?.role !== "admin") {
    return NextResponse.json({ error: "Admin access required." }, { status: 403 });
  }

  const { data: order, error: orderError } = await supabase
    .from("order_intents")
    .select("id,user_id,product_id,method,amount_cents,currency,status")
    .eq("id", orderId)
    .maybeSingle();

  if (orderError || !order) {
    return NextResponse.json({ error: orderError?.message ?? "Order not found." }, { status: 404 });
  }

  const selectedOrder = order as OrderIntent;

  if (!selectedOrder.user_id || !selectedOrder.product_id) {
    return NextResponse.json({ error: "Order is missing user or product information." }, { status: 400 });
  }

  const { data: existingPurchase } = await supabase
    .from("purchases")
    .select("id,status")
    .eq("provider_payment_id", selectedOrder.id)
    .maybeSingle();

  if (!existingPurchase) {
    const { error: purchaseError } = await supabase.from("purchases").insert({
      user_id: selectedOrder.user_id,
      product_id: selectedOrder.product_id,
      provider: selectedOrder.method,
      provider_payment_id: selectedOrder.id,
      amount_cents: selectedOrder.amount_cents ?? 0,
      currency: selectedOrder.currency,
      status: "completed",
    });

    if (purchaseError) {
      return NextResponse.json({ error: purchaseError.message }, { status: 400 });
    }
  }

  const { data: existingLicense } = await supabase
    .from("licenses")
    .select("id,status")
    .eq("user_id", selectedOrder.user_id)
    .eq("product_id", selectedOrder.product_id)
    .eq("status", "active")
    .maybeSingle();

  if (!existingLicense) {
    const { error: licenseError } = await supabase.from("licenses").insert({
      user_id: selectedOrder.user_id,
      product_id: selectedOrder.product_id,
      license_type: "personal",
      status: "active",
      starts_at: new Date().toISOString(),
    });

    if (licenseError) {
      return NextResponse.json({ error: licenseError.message }, { status: 400 });
    }
  }

  const { error: updateError } = await supabase
    .from("order_intents")
    .update({ status: "fulfilled", updated_at: new Date().toISOString() })
    .eq("id", selectedOrder.id);

  if (updateError) {
    return NextResponse.json({ error: updateError.message }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    alreadyLicensed: Boolean(existingLicense),
    alreadyPurchased: Boolean(existingPurchase),
  });
}
