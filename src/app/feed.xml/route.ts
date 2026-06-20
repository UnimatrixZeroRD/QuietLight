import { buildRssXml } from "../../lib/site-seo";

export const dynamic = "force-dynamic";
export const revalidate = 300;

export async function GET() {
  const xml = await buildRssXml();

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=300, stale-while-revalidate=86400",
    },
  });
}
