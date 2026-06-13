"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";

type MessageStatus = "open" | "in_review" | "resolved" | "closed";

type UserMessage = {
  id: string;
  topic: string;
  subject: string;
  message_text: string;
  status: MessageStatus;
  notes: string;
  created_at: string;
};

const statusOptions: { label: string; value: MessageStatus | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Open", value: "open" },
  { label: "In Review", value: "in_review" },
  { label: "Resolved", value: "resolved" },
  { label: "Closed", value: "closed" },
];

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-CA", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value));
}

function formatStatus(value: string) {
  return value.replace(/_/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export function UserMessageList() {
  const [items, setItems] = useState<UserMessage[]>([]);
  const [statusFilter, setStatusFilter] = useState<MessageStatus | "all">("all");
  const [notice, setNotice] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const loadItems = useCallback(async () => {
    setIsLoading(true);
    setNotice("");
    const supabase = createSupabaseBrowserClient();
    if (!supabase) {
      setNotice("Supabase is not configured in this environment yet.");
      setIsLoading(false);
      return;
    }

    const { data: userData } = await supabase.auth.getUser();
    const user = userData.user;
    if (!user) {
      setNotice("Sign in to view your messages.");
      setIsLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("messages")
      .select("id,topic,subject,message_text,status,notes,created_at")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .limit(50);

    if (error) setNotice(error.message);
    else setItems((data ?? []) as UserMessage[]);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    void loadItems();
  }, [loadItems]);

  const filteredItems = useMemo(() => {
    if (statusFilter === "all") return items;
    return items.filter((item) => item.status === statusFilter);
  }, [items, statusFilter]);

  return (
    <section className="lantern-panel mt-10 rounded-3xl p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="gold-text uppercase tracking-[0.3em]">Messages</p>
          <h2 className="mt-4 text-3xl">Your requests</h2>
          <p className="mt-3 text-sm leading-6 text-[var(--muted-silver)]">Track messages you have sent from the contact form.</p>
        </div>
        <Link className="rounded-full border border-[var(--lantern-gold)] px-5 py-2 text-xs uppercase tracking-[0.18em] text-[var(--soft-gold)]" href="/support">
          New Request
        </Link>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {statusOptions.map((option) => (
          <button className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.18em] ${statusFilter === option.value ? "border-[var(--lantern-gold)] text-[var(--ivory)]" : "border-[rgba(216,168,79,0.35)] text-[var(--muted-silver)]"}`} key={option.value} type="button" onClick={() => setStatusFilter(option.value)}>
            {option.label}
          </button>
        ))}
      </div>

      {isLoading ? <p className="mt-6 text-[var(--muted-silver)]">Loading messages...</p> : null}
      {notice ? <p className="mt-6 text-sm leading-6 text-[var(--muted-silver)]">{notice}</p> : null}
      {!isLoading && items.length === 0 ? <p className="mt-6 text-sm leading-6 text-[var(--muted-silver)]">No messages have been sent from this account yet.</p> : null}
      {!isLoading && items.length > 0 ? <p className="mt-6 text-sm text-[var(--muted-silver)]">Showing {filteredItems.length} of {items.length} messages.</p> : null}

      <div className="mt-6 grid gap-4">
        {filteredItems.map((item) => (
          <article className="rounded-2xl border border-[rgba(216,168,79,0.25)] p-5" key={item.id}>
            <p className="gold-text text-xs uppercase tracking-[0.25em]">{item.topic} - {formatStatus(item.status)}</p>
            <h3 className="mt-3 text-2xl">{item.subject}</h3>
            <p className="mt-2 text-sm text-[var(--muted-silver)]">Sent {formatDate(item.created_at)}</p>
            <p className="mt-4 whitespace-pre-wrap rounded-2xl border border-[rgba(216,168,79,0.18)] p-4 text-sm leading-7 text-[var(--muted-silver)]">{item.message_text}</p>
            {item.notes ? <p className="mt-4 rounded-2xl border border-[rgba(216,168,79,0.18)] p-4 text-sm leading-7 text-[var(--muted-silver)]">Admin note: {item.notes}</p> : null}
          </article>
        ))}
      </div>
    </section>
  );
}
