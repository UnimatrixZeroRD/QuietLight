import { buildSitemapXml } from "../../lib/site-seo";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const xml = await buildSitemapXml();

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "no-store, max-age=0",
    },
  });
}
