const googleSellerId =
  process.env.GOOGLE_ADSENSE_PUBLISHER_ID ??
  process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_PUBLISHER_ID ??
  process.env.GOOGLE_AD_MANAGER_PUBLISHER_ID ??
  "pub-0000000000000000";

function buildAdsTxt() {
  if (googleSellerId === "pub-0000000000000000") {
    return `# Google ads.txt placeholder for The Way of Quiet Light
# Replace this by setting GOOGLE_ADSENSE_PUBLISHER_ID in the deployment environment.
# Expected format:
# google.com, pub-0000000000000000, DIRECT, f08c47fec0942fa0
`;
  }

  return `google.com, ${googleSellerId}, DIRECT, f08c47fec0942fa0
`;
}

export const dynamic = "force-dynamic";
export const revalidate = 0;

export function GET() {
  return new Response(buildAdsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store, max-age=0",
    },
  });
}
