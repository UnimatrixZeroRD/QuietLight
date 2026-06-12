import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../../../../../../lib/supabase/server";

type DownloadRouteContext = {
  params: Promise<{
    productId: string;
    fileId: string;
  }>;
};

type ProductFileRecord = {
  id: string;
  product_id: string;
  file_path: string;
  storage_bucket: string | null;
};

export async function GET(_request: Request, context: DownloadRouteContext) {
  const { productId, fileId } = await context.params;
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

  const isAdmin = profile?.role === "admin";

  const { data: file, error: fileError } = await supabase
    .from("product_files")
    .select("id,product_id,file_path,storage_bucket")
    .eq("id", fileId)
    .eq("product_id", productId)
    .maybeSingle();

  if (fileError || !file) {
    return NextResponse.json({ error: "File not found." }, { status: 404 });
  }

  const productFile = file as ProductFileRecord;

  const { data: license } = await supabase
    .from("licenses")
    .select("id,expires_at,status")
    .eq("user_id", user.id)
    .eq("product_id", productId)
    .eq("status", "active")
    .maybeSingle();

  const licenseIsValid = Boolean(
    license && (!license.expires_at || new Date(license.expires_at) > new Date()),
  );

  if (!isAdmin && !licenseIsValid) {
    return NextResponse.json({ error: "You do not have access to this file." }, { status: 403 });
  }

  const bucket = productFile.storage_bucket ?? "product-files";
  const { data: signedUrl, error: signedUrlError } = await supabase.storage
    .from(bucket)
    .createSignedUrl(productFile.file_path, 600);

  if (signedUrlError || !signedUrl?.signedUrl) {
    return NextResponse.json({ error: "Unable to create download link." }, { status: 500 });
  }

  return NextResponse.redirect(signedUrl.signedUrl);
}
