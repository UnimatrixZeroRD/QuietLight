import { buildRobotsTxt } from "../../lib/site-seo";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export function GET() {
  return new Response(buildRobotsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store, max-age=0",
    },
  });
}
