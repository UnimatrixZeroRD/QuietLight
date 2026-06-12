import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as { productSlug?: string } | null;

  if (!body?.productSlug) {
    return NextResponse.json({ error: "Product slug is required." }, { status: 400 });
  }

  return NextResponse.json(
    {
      message: "Checkout is not connected yet. The next phase will connect this route to the selected payment provider.",
      productSlug: body.productSlug,
    },
    { status: 501 },
  );
}
