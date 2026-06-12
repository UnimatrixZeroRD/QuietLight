import { NextResponse } from "next/server";

type PaymentMethod = "stripe" | "paypal" | "etransfer";

type CheckoutBody = {
  productSlug?: string;
  method?: PaymentMethod;
};

const etransferEmail = process.env.NEXT_PUBLIC_ETRANSFER_EMAIL ?? "eatonventurescorp@protonmail.com";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as CheckoutBody | null;

  if (!body?.productSlug) {
    return NextResponse.json({ error: "Product slug is required." }, { status: 400 });
  }

  const method = body.method ?? "etransfer";

  if (method === "etransfer") {
    return NextResponse.json({
      method,
      productSlug: body.productSlug,
      message: `E-transfer is available for manual early access. Send payment to ${etransferEmail} and include the product slug ${body.productSlug} plus your account email in the message. Access will be granted manually after payment is confirmed.`,
    });
  }

  if (method === "stripe") {
    return NextResponse.json(
      {
        method,
        productSlug: body.productSlug,
        message: "Stripe is listed as an option, but card checkout is not connected yet.",
      },
      { status: 501 },
    );
  }

  if (method === "paypal") {
    return NextResponse.json(
      {
        method,
        productSlug: body.productSlug,
        message: "PayPal is listed as an option, but PayPal checkout is not connected yet.",
      },
      { status: 501 },
    );
  }

  return NextResponse.json({ error: "Unsupported payment method." }, { status: 400 });
}
