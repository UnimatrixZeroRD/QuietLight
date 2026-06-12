"use client";

import { useEffect, useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";
import { hasSupabasePublicEnv } from "../../lib/supabase/env";

type AccountState = {
  email: string | null;
  status: "loading" | "signed-in" | "signed-out" | "unconfigured";
};

export function AccountPanel() {
  const [account, setAccount] = useState<AccountState>(() => ({
    email: null,
    status: hasSupabasePublicEnv() ? "loading" : "unconfigured",
  }));

  useEffect(() => {
    if (!hasSupabasePublicEnv()) {
      return;
    }

    const supabase = createSupabaseBrowserClient();

    if (!supabase) {
      return;
    }

    supabase.auth.getUser().then(({ data }) => {
      if (data.user?.email) {
        setAccount({ email: data.user.email, status: "signed-in" });
      } else {
        setAccount({ email: null, status: "signed-out" });
      }
    });
  }, []);

  async function handleSignOut() {
    const supabase = createSupabaseBrowserClient();
    if (!supabase) return;

    await supabase.auth.signOut();
    setAccount({ email: null, status: "signed-out" });
  }

  if (account.status === "loading") {
    return <div className="lantern-panel mt-10 rounded-3xl p-8">Loading account...</div>;
  }

  if (account.status === "unconfigured") {
    return <div className="lantern-panel mt-10 rounded-3xl p-8">Supabase is not configured in this environment yet.</div>;
  }

  if (account.status === "signed-out") {
    return <div className="lantern-panel mt-10 rounded-3xl p-8">You are not signed in yet. Use the sign-in page to request a magic link.</div>;
  }

  return (
    <div className="lantern-panel mt-10 rounded-3xl p-8">
      <p className="gold-text uppercase tracking-[0.3em]">Signed in</p>
      <h2 className="mt-4 text-3xl">{account.email}</h2>
      <p className="mt-4 leading-7 text-[var(--muted-silver)]">
        This account area will later show profile details, memberships, purchases, licenses, and private content access.
      </p>
      <button
        className="mt-6 rounded-full border border-[var(--lantern-gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ivory)]"
        type="button"
        onClick={handleSignOut}
      >
        Sign Out
      </button>
    </div>
  );
}
