const adsTxt = "google.com, pub-7648202890845162, DIRECT, f08c47fec0942fa0\n";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export function GET() {
  return new Response(adsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store, max-age=0",
    },
  });
}
