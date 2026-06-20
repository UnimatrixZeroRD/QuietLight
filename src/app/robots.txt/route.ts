import { buildRobotsTxt } from "../../lib/site-seo";

export const dynamic = "force-dynamic";
export const revalidate = 300;

export function GET() {
  return new Response(buildRobotsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=300, stale-while-revalidate=86400",
    },
  });
}
