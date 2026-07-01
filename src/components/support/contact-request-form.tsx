"use client";

import { FormEvent, useState } from "react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";

type Topic = "general" | "donations" | "membership" | "in-kind" | "books" | "music" | "technical";

const topics: { label: string; value: Topic }[] = [
  { label: "General Question", value: "general" },
  { label: "Donations and Giving", value: "donations" },
  { label: "Membership", value: "membership" },
  { label: "In-Kind Donations", value: "in-kind" },
  { label: "Books and Resources", value: "books" },
  { label: "Music, Video, or Podcast", value: "music" },
  { label: "Technical Support", value: "technical" },
];

const consentStatement =
  "I consent to Quiet Light Ministries contacting me by email or telephone about this message, donation, membership, support request, or related ministry matter. I understand that I can withdraw this consent at any time.";

export function ContactRequestForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState<Topic>("general");
  const [subject, setSubject] = useState("");
  const [messageText, setMessageText] = useState("");
  const [hasContactConsent, setHasContactConsent] = useState(false);
  const [message, setMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSaving(true);
    setMessage("");

    if (!hasContactConsent) {
      setMessage("Please confirm that Quiet Light Ministries has permission to contact you about this message.");
      setIsSaving(false);
      return;
    }

    const supabase = createSupabaseBrowserClient();
    if (!supabase) {
      setMessage("The contact form is not configured yet. Please try again later.");
      setIsSaving(false);
      return;
    }

    const { error } = await supabase.from("contact_submissions").insert({
      sender_name: name,
      sender_email: email,
      sender_phone: phone,
      topic,
      subject,
      message_text: messageText,
      consent_to_contact: hasContactConsent,
      consent_statement: consentStatement,
      source: "support_page",
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Your message has been sent. Thank you for reaching out to Quiet Light Ministries.");
      setName("");
      setEmail("");
      setPhone("");
      setTopic("general");
      setSubject("");
      setMessageText("");
      setHasContactConsent(false);
    }

    setIsSaving(false);
  }

  return (
    <form className="lantern-panel mt-10 rounded-3xl p-8" onSubmit={handleSubmit}>
      <p className="gold-text uppercase tracking-[0.3em]">Contact</p>
      <h2 className="mt-4 text-3xl">Send a message to Quiet Light Ministries</h2>
      <p className="mt-4 text-sm leading-6 text-[var(--muted-silver)]">
        Use this form for questions about donations, memberships, in-kind support, books, music, videos, podcasts, technical matters, or anything connected to the work of Quiet Light Ministries. You do not need to be signed in to send a message.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-[var(--muted-silver)]">
          Name
          <input className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" required />
        </label>
        <label className="grid gap-2 text-sm text-[var(--muted-silver)]">
          Email Address
          <input className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" type="email" required />
        </label>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-[var(--muted-silver)]">
          Telephone Number
          <input className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="Phone number" type="tel" required />
        </label>
        <label className="grid gap-2 text-sm text-[var(--muted-silver)]">
          Topic
          <select className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={topic} onChange={(event) => setTopic(event.target.value as Topic)}>
            {topics.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
          </select>
        </label>
      </div>

      <label className="mt-4 grid gap-2 text-sm text-[var(--muted-silver)]">
        Subject
        <input className="rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={subject} onChange={(event) => setSubject(event.target.value)} placeholder="How can we help?" required />
      </label>

      <label className="mt-4 grid gap-2 text-sm text-[var(--muted-silver)]">
        Message
        <textarea className="min-h-44 w-full rounded-2xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.85)] px-5 py-4 text-[var(--ivory)]" value={messageText} onChange={(event) => setMessageText(event.target.value)} placeholder="Write your message here." required />
      </label>

      <label className="mt-6 flex gap-3 rounded-2xl border border-[rgba(216,168,79,0.28)] bg-[rgba(7,17,31,0.55)] p-4 text-sm leading-6 text-[var(--muted-silver)]">
        <input className="mt-1 h-4 w-4 accent-[var(--lantern-gold)]" checked={hasContactConsent} onChange={(event) => setHasContactConsent(event.target.checked)} type="checkbox" required />
        <span>
          {consentStatement}
        </span>
      </label>

      <p className="mt-4 text-xs leading-6 text-[var(--muted-silver)]">
        This consent allows Quiet Light Ministries to respond to your inquiry and follow up about the matter you submit. It is included to support Canadian anti-spam compliance.
      </p>

      <button className="lantern-glow mt-6 rounded-full border border-[var(--lantern-gold)] bg-[var(--lantern-gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--midnight)] disabled:opacity-60" type="submit" disabled={isSaving}>
        {isSaving ? "Sending..." : "Send Message"}
      </button>

      {message ? <p className="mt-5 text-sm leading-6 text-[var(--muted-silver)]">{message}</p> : null}
    </form>
  );
}
