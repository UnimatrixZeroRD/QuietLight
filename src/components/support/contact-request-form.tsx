"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";

type Topic = "general" | "order" | "download" | "membership" | "account" | "technical";

const topics: { label: string; value: Topic }[] = [
  { label: "General", value: "general" },
  { label: "Order", value: "order" },
  { label: "Download", value: "download" },
  { label: "Membership", value: "membership" },
  { label: "Account", value: "account" },
  { label: "Technical", value: "technical" },
];

export function ContactRequestForm() {
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [topic, setTopic] = useState<Topic>("general");
  const [subject, setSubject] = useState("");
  const [messageText, setMessageText] = useState("");
  const [message, setMessage] = useState("");
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const supabase = createSupabaseBrowserClient();
    if (!supabase) {
      setMessage("Supabase is not configured in this environment yet.");
      setIsLoadingUser(false);
      return;
    }

    void Promise.resolve().then(async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setUserId(user.id);
        setEmail(user.email ?? "");
      }

      setIsLoadingUser(false);
    });
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSaving(true);
    setMessage("");

    const supabase = createSupabaseBrowserClient();
    if (!supabase || !userId) {
      setMessage("Please sign in before sending a request.");
      setIsSaving(false);
      return;
    }

    const { error } = await supabase.from("messages").insert({
      user_id: userId,
      sender_name: name,
      sender_address: email,
      topic,
      subject,
      message_text: messageText,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Your request has been sent. Thank you — we will review it from the admin inbox.");
      setTopic("general");
      setSubject("");
      setMessageText("");
    }

    setIsSaving(false);
  }

  if (!isLoadingUser && !userId) {
    return (
      <section className="lantern-panel mt-10 rounded-3xl p-8">
        <p className="gold-text uppercase tracking-[0.3em]">Contact</p>
        <h2 className="mt-4 text-3xl">Sign in to send a request</h2>
        <p className="mt-4 leading-8 text-[var(--muted-silver)]">
          Support requests are attached to your account so orders, downloads, memberships, and access questions can be reviewed safely.
        </p>
        <Link className="lantern-glow mt-6 inline-block rounded-full border border-[var(--lantern-gold)] bg-[var(--lantern-gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--midnight)]" href="/sign-in?next=/support">
          Sign In
        </Link>
        <p className="mt-6 text-sm leading-6 text-[var(--muted-silver)]">
          You can also email Joshua Eaton directly at joshuaeatonca@protonmail.com.
        </p>
      </section>
    );
  }

  return (
    <form className="lantern-panel mt-10 rounded-3xl p-8" onSubmit={handleSubmit}>
      <p className="gold-text uppercase tracking-[0.3em]">Contact</p>
      <h2 className="mt-4 text-3xl">Send a support request</h2>
      <p className="mt-4 text-sm leading-6 text-[var(--muted-silver)]">
        Use this for order questions, download access, account issues, memberships, or technical problems.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <input className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={name} onChange={(event) => setName(event.target.value)} placeholder="Name" />
        <input className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" type="email" required />
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-[220px_1fr]">
        <select className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={topic} onChange={(event) => setTopic(event.target.value as Topic)}>
          {topics.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
        </select>
        <input className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={subject} onChange={(event) => setSubject(event.target.value)} placeholder="Subject" required />
      </div>

      <textarea className="mt-4 min-h-44 w-full rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={messageText} onChange={(event) => setMessageText(event.target.value)} placeholder="How can we help? Include order ID, product name, or account details if relevant." required />

      <button className="lantern-glow mt-6 rounded-full border border-[var(--lantern-gold)] bg-[var(--lantern-gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--midnight)] disabled:opacity-60" type="submit" disabled={isSaving || isLoadingUser}>
        {isSaving ? "Sending..." : "Send Request"}
      </button>

      {message ? <p className="mt-5 text-sm leading-6 text-[var(--muted-silver)]">{message}</p> : null}
    </form>
  );
}
