import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../../lib/supabase/server";

type PaymentMethod = "stripe" | "paypal" | "etransfer";

type CheckoutBody = {
  productSlug?: string;
  method?: PaymentMethod;
};

type ProductRecord = {
  id: string;
  slug: string;
  title: string;
  price_cents: number;
  currency: string;
};

const etransferEmail = process.env.NEXT_PUBLIC_ETRANSFER_EMAIL ?? "joshuaeatonca@protonmail.com";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as CheckoutBody | null;

  if (!body?.productSlug) {
    return NextResponse.json({ error: "Product slug is required." }, { status: 400 });
  }

  const method = body.method ?? "etransfer";
  const supabase = await createSupabaseServerClient();

  if (!supabase) {
    return NextResponse.json({ error: "Supabase is not configured." }, { status: 500 });
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.email) {
    return NextResponse.json({ error: "Sign in before starting an order." }, { status: 401 });
  }

  const { data: product, error: productError } = await supabase
    .from("products")
    .select("id,slug,title,price_cents,currency")
    .eq("slug", body.productSlug)
    .maybeSingle();

  if (productError || !product) {
    return NextResponse.json({ error: "Product not found." }, { status: 404 });
  }

  const selectedProduct = product as ProductRecord;
  const { data: orderIntent, error: orderError } = await supabase
    .from("order_intents")
    .insert({
      user_id: user.id,
      product_id: selectedProduct.id,
      product_slug: selectedProduct.slug,
      product_title: selectedProduct.title,
      method,
      amount_cents: selectedProduct.price_cents,
      currency: selectedProduct.currency,
      status: "pending",
      customer_email: user.email,
    })
    .select("id")
    .single();

  if (orderError || !orderIntent) {
    return NextResponse.json({ error: orderError?.message ?? "Unable to create order." }, { status: 400 });
  }

  if (method === "etransfer") {
    return NextResponse.json({
      method,
      orderId: orderIntent.id,
      productSlug: body.productSlug,
      message: `E-transfer is available for manual early access. Send payment to ${etransferEmail} and include order ${orderIntent.id}, the product slug ${body.productSlug}, and your account email in the message. Access will be granted manually after payment is confirmed.`,
    });
  }

  if (method === "stripe") {
    return NextResponse.json(
      {
        method,
        orderId: orderIntent.id,
        productSlug: body.productSlug,
        message: "Stripe is listed as an option, but card checkout is not connected yet. Your pending order was recorded for future follow-up.",
      },
      { status: 501 },
    );
  }

  if (method === "paypal") {
    return NextResponse.json(
      {
        method,
        orderId: orderIntent.id,
        productSlug: body.productSlug,
        message: "PayPal is listed as an option, but PayPal checkout is not connected yet. Your pending order was recorded for future follow-up.",
      },
      { status: 501 },
    );
  }

  return NextResponse.json({ error: "Unsupported payment method." }, { status: 400 });
}
