"use client";

import { FormEvent, useEffect, useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";

type ProfileFormProps = {
  userId: string;
};

export function ProfileForm({ userId }: ProfileFormProps) {
  const [displayName, setDisplayName] = useState("");
  const [profileHandle, setProfileHandle] = useState("");
  const [bio, setBio] = useState("");
  const [role, setRole] = useState("reader");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const supabase = createSupabaseBrowserClient();

    if (!supabase) {
      setMessage("Supabase is not configured in this environment yet.");
      setIsLoading(false);
      return;
    }

    supabase
      .from("profiles")
      .select("display_name,handle,bio,role")
      .eq("id", userId)
      .maybeSingle()
      .then(({ data, error }) => {
        if (error) {
          setMessage(error.message);
        }

        if (data) {
          setDisplayName(data.display_name ?? "");
          setProfileHandle(data.handle ?? "");
          setBio(data.bio ?? "");
          setRole(data.role ?? "reader");
        }

        setIsLoading(false);
      });
  }, [userId]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSaving(true);
    setMessage("");

    const supabase = createSupabaseBrowserClient();

    if (!supabase) {
      setMessage("Supabase is not configured in this environment yet.");
      setIsSaving(false);
      return;
    }

    const { error } = await supabase
      .from("profiles")
      .update({
        display_name: displayName,
        handle: profileHandle || null,
        bio: bio || null,
        updated_at: new Date().toISOString(),
      })
      .eq("id", userId);

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Profile updated.");
    }

    setIsSaving(false);
  }

  if (isLoading) {
    return <div className="lantern-panel mt-8 rounded-3xl p-8">Loading profile...</div>;
  }

  return (
    <form className="lantern-panel mt-8 rounded-3xl p-8" onSubmit={handleSubmit}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="gold-text uppercase tracking-[0.3em]">Profile</p>
          <h2 className="mt-4 text-3xl">Public identity</h2>
        </div>
        <p className="rounded-full border border-[rgba(216,168,79,0.35)] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[var(--muted-silver)]">
          {role}
        </p>
      </div>

      <label className="mt-8 block text-sm uppercase tracking-[0.25em] text-[var(--soft-gold)]" htmlFor="display-name">
        Display name
      </label>
      <input
        className="mt-4 w-full rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)] outline-none focus:border-[var(--lantern-gold)]"
        id="display-name"
        value={displayName}
        onChange={(event) => setDisplayName(event.target.value)}
        placeholder="Your name"
      />

      <label className="mt-6 block text-sm uppercase tracking-[0.25em] text-[var(--soft-gold)]" htmlFor="handle">
        Handle
      </label>
      <input
        className="mt-4 w-full rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)] outline-none focus:border-[var(--lantern-gold)]"
        id="handle"
        value={profileHandle}
        onChange={(event) => setProfileHandle(event.target.value)}
        placeholder="keeper"
      />

      <label className="mt-6 block text-sm uppercase tracking-[0.25em] text-[var(--soft-gold)]" htmlFor="bio">
        Bio
      </label>
      <textarea
        className="mt-4 min-h-32 w-full rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)] outline-none focus:border-[var(--lantern-gold)]"
        id="bio"
        value={bio}
        onChange={(event) => setBio(event.target.value)}
        placeholder="A short profile note."
      />

      <button
        className="lantern-glow mt-6 rounded-full border border-[var(--lantern-gold)] bg-[var(--lantern-gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--midnight)] disabled:opacity-60"
        type="submit"
        disabled={isSaving}
      >
        {isSaving ? "Saving..." : "Save Profile"}
      </button>
      {message ? <p className="mt-5 text-sm leading-6 text-[var(--muted-silver)]">{message}</p> : null}
    </form>
  );
}
