"use client";

import { useEffect, useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";

type ProfileItem = {
  id: string;
  display_name: string | null;
  handle: string | null;
  role: string;
  created_at: string;
};

export function MemberList() {
  const [profiles, setProfiles] = useState<ProfileItem[]>([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  async function loadProfiles() {
    setIsLoading(true);
    setMessage("");

    const supabase = createSupabaseBrowserClient();
    if (!supabase) {
      setMessage("Supabase is not configured in this environment yet.");
      setIsLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("profiles")
      .select("id,display_name,handle,role,created_at")
      .order("created_at", { ascending: false })
      .limit(50);

    if (error) {
      setMessage(error.message);
    } else {
      setProfiles((data ?? []) as ProfileItem[]);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    loadProfiles();
  }, []);

  return (
    <section className="lantern-panel mt-10 rounded-3xl p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="gold-text uppercase tracking-[0.3em]">Members</p>
          <h2 className="mt-4 text-3xl">Profiles and roles</h2>
        </div>
        <button className="rounded-full border border-[var(--lantern-gold)] px-5 py-2 text-xs uppercase tracking-[0.18em] text-[var(--ivory)]" type="button" onClick={loadProfiles}>
          Refresh
        </button>
      </div>

      {isLoading ? <p className="mt-6 text-[var(--muted-silver)]">Loading profiles...</p> : null}
      {message ? <p className="mt-6 text-sm leading-6 text-[var(--muted-silver)]">{message}</p> : null}

      <div className="mt-6 grid gap-4">
        {profiles.map((profile) => (
          <article className="rounded-2xl border border-[rgba(216,168,79,0.25)] p-5" key={profile.id}>
            <p className="gold-text text-xs uppercase tracking-[0.25em]">{profile.role}</p>
            <h3 className="mt-3 text-2xl">{profile.display_name ?? "Unnamed profile"}</h3>
            <p className="mt-2 text-sm text-[var(--muted-silver)]">{profile.handle ? `@${profile.handle}` : "No handle set"}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
