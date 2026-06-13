import { featuredProducts as fallbackProducts } from "../../data/products";
import { createSupabaseBrowserClient } from "./client";

export type StoreProductFileSummary = {
  id: string;
  title: string;
  description: string;
  fileType: string;
  sortOrder: number;
};

function toSlug(value: string) {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function fallbackStoreProducts() {
  return fallbackProducts.map((product) => {
    const slug = toSlug(product.title);

    return {
      title: product.title,
      slug,
      type: product.type,
      description: product.description,
      href: `/store/${slug}`,
      coverImageUrl: undefined as string | undefined,
      priceCents: undefined as number | undefined,
      currency: "CAD",
      status: "draft",
      accessLevel: "paid_product",
      files: [] as StoreProductFileSummary[],
    };
  });
}

function formatFileSummary(file: {
  id: string;
  title: string;
  description: string | null;
  file_type: string;
  sort_order: number;
}) {
  return {
    id: file.id,
    title: file.title,
    description: file.description ?? "",
    fileType: file.file_type,
    sortOrder: file.sort_order,
  };
}

export async function getStoreProducts() {
  const supabase = createSupabaseBrowserClient();

  if (!supabase) {
    return fallbackStoreProducts();
  }

  const { data, error } = await supabase
    .from("products")
    .select("slug,title,description,product_type,cover_image_url,status,access_level,price_cents,currency")
    .in("status", ["active", "draft"])
    .order("created_at", { ascending: true });

  if (error || !data?.length) {
    return fallbackStoreProducts();
  }

  return data.map((product) => ({
    title: product.title,
    slug: product.slug,
    type: product.product_type,
    description: product.description,
    href: `/store/${product.slug}`,
    coverImageUrl: product.cover_image_url ?? undefined,
    priceCents: product.price_cents ?? undefined,
    currency: product.currency ?? "CAD",
    status: product.status,
    accessLevel: product.access_level,
    files: [] as StoreProductFileSummary[],
  }));
}

export async function getStoreProductBySlug(slug: string) {
  const supabase = createSupabaseBrowserClient();

  if (!supabase) {
    return fallbackStoreProducts().find((product) => product.slug === slug) ?? null;
  }

  const [{ data, error }, filesResult] = await Promise.all([
    supabase
      .from("products")
      .select("slug,title,description,product_type,cover_image_url,status,access_level,price_cents,currency")
      .eq("slug", slug)
      .in("status", ["active", "draft"])
      .maybeSingle(),
    supabase
      .from("product_file_summaries")
      .select("id,title,description,file_type,sort_order")
      .eq("product_slug", slug)
      .order("sort_order", { ascending: true }),
  ]);

  if (error || !data) {
    return fallbackStoreProducts().find((product) => product.slug === slug) ?? null;
  }

  return {
    title: data.title,
    slug: data.slug,
    type: data.product_type,
    description: data.description,
    href: `/store/${data.slug}`,
    coverImageUrl: data.cover_image_url ?? undefined,
    priceCents: data.price_cents ?? undefined,
    currency: data.currency ?? "CAD",
    status: data.status,
    accessLevel: data.access_level,
    files: filesResult.error ? [] : ((filesResult.data ?? []) as Parameters<typeof formatFileSummary>[0][]).map(formatFileSummary),
  };
}
