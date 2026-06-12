import { createClient } from "@supabase/supabase-js";
import { getSupabaseAnonKey, getSupabaseUrl, hasSupabasePublicEnv } from "./env";

export function createSupabaseBrowserClient() {
  if (!hasSupabasePublicEnv()) {
    return null;
  }

  return createClient(getSupabaseUrl(), getSupabaseAnonKey());
}
