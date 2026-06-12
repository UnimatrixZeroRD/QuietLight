"use client";

import { useEffect, useState } from "react";
import { OrderHistory } from "../account/order-history";
import { ProductLibrary } from "../account/product-library";
import { PurchaseHistory } from "../account/purchase-history";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";
import { hasSupabasePublicEnv } from "../../lib/supabase/env";
import { ProfileForm } from "./profile-form";

type AccountState = {
  email: string | null;
  userId: string | null;
  status: "loading" | "signed-in" | "signed-out" | "unconfigured";
};

export function AccountPanel() {
  const [account, setAccount] = useState<AccountState>(() => ({
    email: null,
    userId: null,
    status: hasSupabasePublicEnv() ? "loading" : "unconfigured",
  }));

  useEffect(() => {
    if (!hasSupabasePublicEnv()) return;

    const supabase = createSupabaseBrowserClient();
    if (!supabase) return;

    supabase.auth.getUser().then(({ data }) => {
      if (data.user?.email) {
        setAccount({ email: data.user.email, userId: data.user.id, status: "signed-in" });
      } else {
        setAccount({ email: null, userId: null, status: "signed-out" });
      }
    });
  }, []);

  async function handleSignOut() {
    const supabase = createSupabaseBrowserClient();
    if (!supabase) return;

    await supabase.auth.signOut();
    setAccount({ email: null, userId: null, status: "signed-out" });
  }

  if (account.status === "loading") {
    return <div className="lantern-panel mt-10 rounded-3xl p-8">Loading account...</div>;
  }

  if (account.status === "unconfigured") {
    return <div className="lantern-panel mt-10 rounded-3xl p-8">Supabase is not configured in this environment yet.</div>;
  }

  if (account.status === "signed-out") {
    return <div className="lantern-panel mt-10 rounded-3xl p-8">You are not signed in yet. Use the sign-in page to enter your account.</div>;
  }

  return (
    <div>
      <div className="lantern-panel mt-10 rounded-3xl p-8">
        <p className="gold-text uppercase tracking-[0.3em]">Signed in</p>
        <h2 className="mt-4 text-3xl">{account.email}</h2>
        <p className="mt-4 leading-7 text-[var(--muted-silver)]">This account area now includes profile management, order history, purchase history, and a digital product library.</p>
        <button
          className="mt-6 rounded-full border border-[var(--lantern-gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ivory)]"
          type="button"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>

      {account.userId ? <ProfileForm userId={account.userId} /> : null}
      <OrderHistory />
      <PurchaseHistory />
      <ProductLibrary />
    </div>
  );
}
