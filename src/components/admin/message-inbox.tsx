"use client";

import { useCallback, useEffect, useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";

type MessageStatus = "open" | "in_review" | "resolved" | "closed";

type InboxMessage = {
  id: string;
  sender_name: string;
  sender_address: string;
  topic: string;
  subject: string;
  message_text: string;
  status: MessageStatus;
  notes: string;
  created_at: string;
};

const statuses: { label: string; value: MessageStatus }[] = [
  { label: "Open", value: "open" },
  { label: "In Review", value: "in_review" },
  { label: "Resolved", value: "resolved" },
  { label: "Closed", value: "closed" },
];

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-CA", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value));
}

export function MessageInbox() {
  const [items, setItems] = useState<InboxMessage[]>([]);
  const [statusFilter, setStatusFilter] = useState<MessageStatus | "all">("open");
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

    let query = supabase.from("messages").select("id,sender_name,sender_address,topic,subject,message_text,status,notes,created_at").order("created_at", { ascending: false }).limit(100);
    if (statusFilter !== "all") query = query.eq("status", statusFilter);
    const { data, error } = await query;
    if (error) setNotice(error.message);
    else setItems((data ?? []) as InboxMessage[]);
    setIsLoading(false);
  }, [statusFilter]);

  useEffect(() => {
    void loadItems();
  }, [loadItems]);

  return (
    <section className="lantern-panel mt-10 rounded-3xl p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="gold-text uppercase tracking-[0.3em]">Inbox</p>
          <h2 className="mt-4 text-3xl">Messages</h2>
        </div>
        <button className="rounded-full border border-[var(--lantern-gold)] px-5 py-2 text-xs uppercase tracking-[0.18em] text-[var(--ivory)]" type="button" onClick={loadItems}>Refresh</button>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.18em] ${statusFilter === "all" ? "border-[var(--lantern-gold)] text-[var(--ivory)]" : "border-[rgba(216,168,79,0.35)] text-[var(--muted-silver)]"}`} type="button" onClick={() => setStatusFilter("all")}>All</button>
        {statuses.map((status) => (
          <button className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.18em] ${statusFilter === status.value ? "border-[var(--lantern-gold)] text-[var(--ivory)]" : "border-[rgba(216,168,79,0.35)] text-[var(--muted-silver)]"}`} key={status.value} type="button" onClick={() => setStatusFilter(status.value)}>{status.label}</button>
        ))}
      </div>

      {isLoading ? <p className="mt-6 text-[var(--muted-silver)]">Loading messages...</p> : null}
      {notice ? <p className="mt-6 text-sm leading-6 text-[var(--muted-silver)]">{notice}</p> : null}
      <div className="mt-6 grid gap-4">
        {!isLoading && items.length === 0 ? <p className="text-sm leading-6 text-[var(--muted-silver)]">No messages match this filter.</p> : null}
        {items.map((item) => <MessageCard item={item} key={item.id} onSaved={loadItems} />)}
      </div>
    </section>
  );
}

function MessageCard({ item, onSaved }: { item: InboxMessage; onSaved: () => Promise<void> }) {
  const [status, setStatus] = useState<MessageStatus>(item.status);
  const [notes, setNotes] = useState(item.notes);
  const [saving, setSaving] = useState(false);
  const [notice, setNotice] = useState("");

  async function save() {
    setSaving(true);
    setNotice("");
    const supabase = createSupabaseBrowserClient();
    if (!supabase) {
      setSaving(false);
      return;
    }
    const { error } = await supabase.from("messages").update({ status, notes, updated_at: new Date().toISOString() }).eq("id", item.id);
    if (error) setNotice(error.message);
    else {
      setNotice("Saved.");
      await onSaved();
    }
    setSaving(false);
  }

  return (
    <article className="rounded-2xl border border-[rgba(216,168,79,0.25)] p-5">
      <p className="gold-text text-xs uppercase tracking-[0.25em]">{item.topic} - {item.status}</p>
      <h3 className="mt-3 text-2xl">{item.subject}</h3>
      <p className="mt-2 text-sm text-[var(--muted-silver)]">{item.sender_name || "No name"} - {item.sender_address}</p>
      <p className="mt-2 text-sm text-[var(--muted-silver)]">{formatDate(item.created_at)}</p>
      <p className="mt-4 whitespace-pre-wrap rounded-2xl border border-[rgba(216,168,79,0.18)] p-4 text-sm leading-7 text-[var(--muted-silver)]">{item.message_text}</p>
      <div className="mt-4 grid gap-4 md:grid-cols-[220px_1fr]">
        <select className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={status} onChange={(event) => setStatus(event.target.value as MessageStatus)}>
          {statuses.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
        </select>
        <input className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={notes} onChange={(event) => setNotes(event.target.value)} placeholder="Admin notes" />
      </div>
      <button className="mt-4 rounded-full border border-[var(--lantern-gold)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--ivory)] disabled:opacity-60" type="button" onClick={save} disabled={saving}>{saving ? "Saving..." : "Save Message"}</button>
      {notice ? <p className="mt-4 text-sm leading-6 text-[var(--muted-silver)]">{notice}</p> : null}
    </article>
  );
}
