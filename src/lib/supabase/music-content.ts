import { albums as fallbackAlbums } from "../../data/albums";
import { createSupabaseBrowserClient } from "./client";

function toSlug(value: string) {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function fallbackList() {
  return fallbackAlbums.map((album) => {
    const slug = toSlug(album.title);
    return {
      title: album.title,
      subtitle: album.subtitle,
      description: album.description,
      status: album.status,
      href: `/music/${slug}`,
      slug,
      coverImageUrl: undefined as string | undefined,
      coverAltText: album.title,
    };
  });
}

function fallbackDetail(slug: string) {
  const album = fallbackList().find((item) => item.slug === slug);
  if (!album) return null;

  return {
    ...album,
    tracks: [] as Array<{
      id: string;
      title: string;
      slug: string;
      description: string;
      trackNumber: number | null;
      embedUrl: string | null;
    }>,
  };
}

export async function getPublicMusicAlbums() {
  const supabase = createSupabaseBrowserClient();
  if (!supabase) return fallbackList();

  const { data, error } = await supabase
    .from("albums")
    .select("slug,title,subtitle,description,cover_image_url,cover_alt_text")
    .eq("status", "published")
    .eq("access_level", "public")
    .order("created_at", { ascending: true });

  if (error || !data?.length) return fallbackList();

  return data.map((album) => ({
    title: album.title,
    subtitle: album.subtitle ?? "",
    description: album.description,
    status: "available" as const,
    href: `/music/${album.slug}`,
    slug: album.slug,
    coverImageUrl: album.cover_image_url ?? undefined,
    coverAltText: album.cover_alt_text || album.title,
  }));
}

export async function getPublicMusicAlbumBySlug(slug: string) {
  const supabase = createSupabaseBrowserClient();
  if (!supabase) return fallbackDetail(slug);

  const { data, error } = await supabase
    .from("albums")
    .select("id,slug,title,subtitle,description,cover_image_url,cover_alt_text")
    .eq("slug", slug)
    .eq("status", "published")
    .eq("access_level", "public")
    .maybeSingle();

  if (error || !data) return fallbackDetail(slug);

  const tracksResult = await supabase
    .from("tracks")
    .select("id,title,slug,description,track_number,embed_url")
    .eq("album_id", data.id)
    .eq("status", "published")
    .order("track_number", { ascending: true, nullsFirst: false });

  return {
    title: data.title,
    subtitle: data.subtitle ?? "",
    description: data.description,
    status: "available" as const,
    href: `/music/${data.slug}`,
    slug: data.slug,
    coverImageUrl: data.cover_image_url ?? undefined,
    coverAltText: data.cover_alt_text || data.title,
    tracks: tracksResult.error
      ? []
      : ((tracksResult.data ?? []) as Array<{
          id: string;
          title: string;
          slug: string;
          description: string | null;
          track_number: number | null;
          embed_url: string | null;
        }>).map((track) => ({
          id: track.id,
          title: track.title,
          slug: track.slug,
          description: track.description ?? "",
          trackNumber: track.track_number,
          embedUrl: track.embed_url,
        })),
  };
}
