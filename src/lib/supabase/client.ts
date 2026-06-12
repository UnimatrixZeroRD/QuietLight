import { createBrowserClient } from "@supabase/ssr";
import { getSupabasePublicKey, getSupabaseUrl, hasSupabasePublicEnv } from "./env";

export function createSupabaseBrowserClient() {
  if (!hasSupabasePublicEnv()) {
    return null;
  }

  return createBrowserClient(getSupabaseUrl(), getSupabasePublicKey());
}
