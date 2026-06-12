import type { NextRequest } from "next/server";
import { updateSession } from "./src/lib/supabase/proxy";

export async function middleware(request: NextRequest) {
  return updateSession(request);
}

export const config = {
  matcher: ["/account/:path*", "/admin/:path*"],
};
