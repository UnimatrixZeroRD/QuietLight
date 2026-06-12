"use client";

import { FormEvent, useState } from "react";
import { socialAuthProviders } from "../../data/auth-providers";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";

type AuthMode = "sign-in" | "sign-up";

export function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<AuthMode>("sign-in");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    const supabase = createSupabaseBrowserClient();

    if (!supabase) {
      setMessage("Supabase is not configured in this environment yet.");
      setIsSubmitting(false);
      return;
    }

    const response =
      mode === "sign-in"
        ? await supabase.auth.signInWithPassword({ email, password })
        : await supabase.auth.signUp({
            email,
            password,
            options: {
              emailRedirectTo: `${window.location.origin}/account`,
            },
          });

    if (response.error) {
      setMessage(response.error.message);
    } else if (mode === "sign-up") {
      setMessage("Account created. Check your email if confirmation is required.");
      setPassword("");
    } else {
      window.location.href = "/account";
    }

    setIsSubmitting(false);
  }

  return (
    <div className="lantern-panel mt-10 rounded-3xl p-8">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-3">
          <button
            className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.18em] ${
              mode === "sign-in" ? "border-[var(--lantern-gold)] text-[var(--soft-gold)]" : "border-[rgba(216,168,79,0.3)] text-[var(--muted-silver)]"
            }`}
            type="button"
            onClick={() => setMode("sign-in")}
          >
            Sign In
          </button>
          <button
            className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.18em] ${
              mode === "sign-up" ? "border-[var(--lantern-gold)] text-[var(--soft-gold)]" : "border-[rgba(216,168,79,0.3)] text-[var(--muted-silver)]"
            }`}
            type="button"
            onClick={() => setMode("sign-up")}
          >
            Create Account
          </button>
        </div>

        <label className="mt-8 block text-sm uppercase tracking-[0.25em] text-[var(--soft-gold)]" htmlFor="email">
          Email address
        </label>
        <input
          className="mt-4 w-full rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)] outline-none focus:border-[var(--lantern-gold)]"
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          required
        />

        <label className="mt-6 block text-sm uppercase tracking-[0.25em] text-[var(--soft-gold)]" htmlFor="password">
          Password
        </label>
        <input
          className="mt-4 w-full rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)] outline-none focus:border-[var(--lantern-gold)]"
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          minLength={6}
          required
        />

        <button
          className="lantern-glow mt-6 rounded-full border border-[var(--lantern-gold)] bg-[var(--lantern-gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--midnight)] disabled:opacity-60"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Working..." : mode === "sign-in" ? "Sign In" : "Create Account"}
        </button>
        {message ? <p className="mt-5 text-sm leading-6 text-[var(--muted-silver)]">{message}</p> : null}
      </form>

      <div className="mt-8 border-t border-[rgba(216,168,79,0.25)] pt-8">
        <p className="text-sm uppercase tracking-[0.25em] text-[var(--soft-gold)]">Social sign-in</p>
        <div className="mt-4 grid gap-3">
          {socialAuthProviders.map((provider) => (
            <button
              className="rounded-full border border-[rgba(216,168,79,0.25)] px-5 py-3 text-sm uppercase tracking-[0.18em] text-[var(--muted-silver)] opacity-70"
              type="button"
              disabled={!provider.enabled}
              key={provider.provider}
            >
              {provider.label} - Disabled for now
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
