"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { PublicDailyLightEntry } from "@/lib/supabase/daily-light";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

type DailyLightJournalAppProps = {
  entry: PublicDailyLightEntry | null;
  recentEntries: PublicDailyLightEntry[];
};

const STORAGE_PREFIX = "quiet-light:daily-light";

function formatDate(value?: string) {
  if (!value) return "Today";
  return new Intl.DateTimeFormat("en-CA", { dateStyle: "long" }).format(new Date(value));
}

function getNoteKey(slug: string) {
  return `${STORAGE_PREFIX}:notes:${slug}`;
}

function getFavoritesKey() {
  return `${STORAGE_PREFIX}:favorites`;
}

function getReadingHistoryKey() {
  return `${STORAGE_PREFIX}:reading-history`;
}

function readStoredStringArray(key: string) {
  try {
    const value = window.localStorage.getItem(key);
    if (!value) return [];
    const parsedValue = JSON.parse(value);
    return Array.isArray(parsedValue) ? parsedValue.filter((item): item is string => typeof item === "string") : [];
  } catch {
    return [];
  }
}

function upsertReadingHistory(entry: PublicDailyLightEntry) {
  try {
    const key = getReadingHistoryKey();
    const currentValue = window.localStorage.getItem(key);
    const currentHistory = currentValue ? JSON.parse(currentValue) : [];
    const safeHistory = Array.isArray(currentHistory) ? currentHistory : [];
    const nextHistory = [
      {
        slug: entry.slug,
        title: entry.title,
        publishedOn: entry.publishedOn,
        readAt: new Date().toISOString(),
      },
      ...safeHistory.filter((item) => item?.slug !== entry.slug),
    ].slice(0, 60);

    window.localStorage.setItem(key, JSON.stringify(nextHistory));
  } catch {
    // Local journaling is a convenience feature and should never block reading.
  }
}

export function DailyLightJournalApp({ entry, recentEntries }: DailyLightJournalAppProps) {
  const [note, setNote] = useState("");
  const [noteStatus, setNoteStatus] = useState("Journal saves on this device.");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [shareStatus, setShareStatus] = useState("");
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [installStatus, setInstallStatus] = useState("Install this devotional journal from your browser menu or home screen prompt.");
  const [isAppleMobile, setIsAppleMobile] = useState(false);

  const noteKey = useMemo(() => (entry ? getNoteKey(entry.slug) : null), [entry]);
  const isFavorite = entry ? favorites.includes(entry.slug) : false;

  useEffect(() => {
    setIsAppleMobile(/iphone|ipad|ipod/i.test(window.navigator.userAgent));

    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as BeforeInstallPromptEvent);
      setInstallStatus("This devotional journal can be installed on this device.");
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
  }, []);

  useEffect(() => {
    setFavorites(readStoredStringArray(getFavoritesKey()));
  }, []);

  useEffect(() => {
    if (!entry || !noteKey) return;

    try {
      setNote(window.localStorage.getItem(noteKey) ?? "");
      upsertReadingHistory(entry);
    } catch {
      setNote("");
    }
  }, [entry, noteKey]);

  useEffect(() => {
    if (!noteKey) return;

    const autosaveTimer = window.setTimeout(() => {
      try {
        window.localStorage.setItem(noteKey, note);
        setNoteStatus(note.trim() ? "Journal saved on this device." : "Journal is empty for this Daily Light.");
      } catch {
        setNoteStatus("Journal could not be saved on this device.");
      }
    }, 500);

    return () => window.clearTimeout(autosaveTimer);
  }, [note, noteKey]);

  async function handleInstall() {
    if (!installPrompt) {
      setInstallStatus(
        isAppleMobile
          ? "On iPhone or iPad, tap Share, then Add to Home Screen."
          : "Use your browser menu and choose Install app or Add to Home Screen."
      );
      return;
    }

    await installPrompt.prompt();
    const choice = await installPrompt.userChoice;
    setInstallPrompt(null);
    setInstallStatus(choice.outcome === "accepted" ? "Install started." : "You can install it later from your browser menu.");
  }

  function toggleFavorite() {
    if (!entry) return;

    const nextFavorites = isFavorite ? favorites.filter((slug) => slug !== entry.slug) : [entry.slug, ...favorites];
    setFavorites(nextFavorites);

    try {
      window.localStorage.setItem(getFavoritesKey(), JSON.stringify(nextFavorites));
    } catch {
      // Favourite state can still update in memory for this session.
    }
  }

  async function handleShare() {
    if (!entry) return;

    const entryUrl = `${window.location.origin}/daily-light/${entry.slug}`;
    const shareText = [
      entry.title,
      entry.keyVerseReference ?? entry.scriptureReference,
      entry.keyVerseText ?? entry.scriptureText,
      `Read today's Daily Light: ${entryUrl}`,
    ]
      .filter(Boolean)
      .join("\n\n");

    try {
      if (navigator.share) {
        await navigator.share({ title: entry.title, text: shareText, url: entryUrl });
        setShareStatus("Shared.");
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareText);
        setShareStatus("Copied to clipboard.");
      } else {
        setShareStatus("Copy the page link from your browser to share.");
      }
    } catch {
      setShareStatus("Share cancelled.");
    }
  }

  if (!entry) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-24">
        <section className="lantern-panel rounded-3xl p-8 text-center md:p-12">
          <p className="gold-text text-xs uppercase tracking-[0.25em]">The Daily Light</p>
          <h1 className="gold-text mt-4 text-4xl md:text-6xl">The devotional journal is being prepared.</h1>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-[var(--muted-silver)]">
            Once the current Daily Light is available, this page will become the installable devotional journal experience.
          </p>
          <Link className="gold-text mt-8 inline-block rounded-full border border-[var(--lantern-gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em]" href="/daily-light">
            Return to Daily Light
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 md:py-16">
      <section className="lantern-panel rounded-3xl p-5 md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="gold-text text-xs uppercase tracking-[0.25em]">Installable Devotional Journal</p>
            <h1 className="gold-text mt-3 text-4xl md:text-6xl">The Daily Light</h1>
            <p className="mt-4 max-w-2xl leading-8 text-[var(--muted-silver)]">
              A quiet morning scripture, reflection, prayer, and personal journal space for the Way of Quiet Light.
            </p>
          </div>
          <button
            className="rounded-full border border-[var(--lantern-gold)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--soft-gold)] transition hover:bg-[rgba(216,168,79,0.12)]"
            onClick={handleInstall}
            type="button"
          >
            Install
          </button>
        </div>
        <p className="mt-4 text-sm leading-6 text-[var(--muted-silver)]">{installStatus}</p>
      </section>

      <article className="lantern-panel mt-6 rounded-3xl p-6 md:p-10">
        <div className="flex flex-col gap-4 border-b border-[rgba(216,168,79,0.22)] pb-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="gold-text text-xs uppercase tracking-[0.25em]">{formatDate(entry.publishedOn)}</p>
            <div className="mt-3 text-xs uppercase tracking-[0.18em] text-[var(--soft-gold)]">
              {entry.volume ? <span>{entry.volume}</span> : null}
              {entry.volume && entry.volumeTitle ? <span> · </span> : null}
              {entry.volumeTitle ? <span>{entry.volumeTitle}</span> : null}
              {entry.day ? <span> · Day {entry.day}</span> : null}
            </div>
            <h2 className="gold-text mt-4 text-4xl md:text-6xl">{entry.title}</h2>
            {entry.theme ? <p className="mt-4 text-[var(--muted-silver)]">Theme: {entry.theme}</p> : null}
          </div>
          <div className="flex gap-3">
            <button
              className="rounded-full border border-[rgba(216,168,79,0.45)] px-4 py-2 text-xs uppercase tracking-[0.16em] text-[var(--soft-gold)] transition hover:border-[var(--lantern-gold)] hover:bg-[rgba(216,168,79,0.1)]"
              onClick={toggleFavorite}
              type="button"
            >
              {isFavorite ? "Saved" : "Save"}
            </button>
            <button
              className="rounded-full border border-[rgba(216,168,79,0.45)] px-4 py-2 text-xs uppercase tracking-[0.16em] text-[var(--soft-gold)] transition hover:border-[var(--lantern-gold)] hover:bg-[rgba(216,168,79,0.1)]"
              onClick={handleShare}
              type="button"
            >
              Share
            </button>
          </div>
        </div>

        {(entry.oldTestamentReading || entry.newTestamentReading) ? (
          <section className="mt-8 grid gap-4 md:grid-cols-2">
            {entry.oldTestamentReading ? (
              <div className="rounded-2xl border border-[rgba(216,168,79,0.24)] p-5">
                <p className="gold-text text-xs uppercase tracking-[0.22em]">Old Testament</p>
                <p className="mt-3 text-2xl">{entry.oldTestamentReading}</p>
              </div>
            ) : null}
            {entry.newTestamentReading ? (
              <div className="rounded-2xl border border-[rgba(216,168,79,0.24)] p-5">
                <p className="gold-text text-xs uppercase tracking-[0.22em]">New Testament</p>
                <p className="mt-3 text-2xl">{entry.newTestamentReading}</p>
              </div>
            ) : null}
          </section>
        ) : null}

        {(entry.keyVerseReference || entry.keyVerseText || entry.scriptureReference) ? (
          <section className="mt-8 rounded-2xl border border-[rgba(216,168,79,0.24)] p-5">
            <p className="gold-text text-xs uppercase tracking-[0.22em]">Key Verse</p>
            <h3 className="mt-3 text-2xl">{entry.keyVerseReference ?? entry.scriptureReference}</h3>
            {(entry.keyVerseText ?? entry.scriptureText) ? (
              <p className="mt-4 text-xl italic leading-9 text-[var(--soft-gold)]">“{entry.keyVerseText ?? entry.scriptureText}”</p>
            ) : null}
          </section>
        ) : null}

        <section className="mt-8">
          <p className="gold-text text-xs uppercase tracking-[0.22em]">Daily Light</p>
          <p className="mt-4 whitespace-pre-line text-lg leading-9 text-[var(--ivory)] md:text-xl md:leading-10">{entry.reflection}</p>
        </section>

        {entry.prayer ? (
          <section className="mt-8 rounded-2xl border border-[rgba(216,168,79,0.24)] p-5">
            <p className="gold-text text-xs uppercase tracking-[0.22em]">Prayer</p>
            <p className="mt-4 whitespace-pre-line text-base leading-8 text-[var(--muted-silver)] md:text-lg md:leading-9">{entry.prayer}</p>
          </section>
        ) : null}

        {(entry.reflectionQuestion || entry.todayPractice || entry.closingThought) ? (
          <section className="mt-8 rounded-2xl border border-[rgba(216,168,79,0.24)] p-5">
            <p className="gold-text text-xs uppercase tracking-[0.22em]">Reflection</p>
            {entry.reflectionQuestion ? <p className="mt-4 leading-8 text-[var(--muted-silver)]"><span className="text-[var(--soft-gold)]">Question:</span> {entry.reflectionQuestion}</p> : null}
            {entry.todayPractice ? <p className="mt-4 leading-8 text-[var(--muted-silver)]"><span className="text-[var(--soft-gold)]">Today&apos;s Practice:</span> {entry.todayPractice}</p> : null}
            {entry.closingThought ? <p className="mt-5 text-xl italic leading-9 text-[var(--soft-gold)]">“{entry.closingThought}”</p> : null}
          </section>
        ) : null}
      </article>

      <section className="lantern-panel mt-6 rounded-3xl p-6 md:p-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="gold-text text-xs uppercase tracking-[0.25em]">Private Journal</p>
            <h2 className="mt-3 text-3xl md:text-4xl">My notes for today</h2>
          </div>
          <p className="text-sm text-[var(--muted-silver)]">{noteStatus}</p>
        </div>
        <textarea
          className="mt-5 min-h-48 w-full rounded-2xl border border-[rgba(216,168,79,0.28)] bg-[rgba(7,17,31,0.72)] p-4 leading-7 text-[var(--ivory)] outline-none transition placeholder:text-[rgba(225,230,235,0.42)] focus:border-[var(--lantern-gold)]"
          onChange={(event) => setNote(event.target.value)}
          placeholder="Write what stood out, what you are praying through, or how you want to carry today’s light."
          value={note}
        />
        <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--muted-silver)] md:flex-row md:items-center md:justify-between">
          <p>Notes are stored privately in this browser for the first app version. Account sync can come next.</p>
          <button
            className="rounded-full border border-[rgba(216,168,79,0.45)] px-5 py-2 text-xs uppercase tracking-[0.16em] text-[var(--soft-gold)] transition hover:border-[var(--lantern-gold)] hover:bg-[rgba(216,168,79,0.1)]"
            onClick={() => {
              setNote("");
              setNoteStatus("Journal cleared for this Daily Light.");
            }}
            type="button"
          >
            Clear Note
          </button>
        </div>
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-[1fr_0.8fr]">
        <div className="lantern-panel rounded-3xl p-6 md:p-8">
          <p className="gold-text text-xs uppercase tracking-[0.25em]">Recent Lights</p>
          <div className="mt-5 grid gap-4">
            {recentEntries.slice(0, 7).map((recentEntry) => (
              <Link className="block rounded-2xl border border-[rgba(216,168,79,0.2)] p-4 transition hover:border-[rgba(216,168,79,0.48)] hover:bg-[rgba(216,168,79,0.06)]" href={`/daily-light/${recentEntry.slug}`} key={recentEntry.slug}>
                <p className="gold-text text-xs uppercase tracking-[0.2em]">{formatDate(recentEntry.publishedOn)}</p>
                <h3 className="mt-2 text-2xl">{recentEntry.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted-silver)]">{recentEntry.summary}</p>
              </Link>
            ))}
          </div>
        </div>

        <aside className="lantern-panel rounded-3xl p-6 md:p-8">
          <p className="gold-text text-xs uppercase tracking-[0.25em]">App Status</p>
          <div className="mt-5 grid gap-4 text-sm leading-7 text-[var(--muted-silver)]">
            <p>Today’s reflection and the Daily Light app page are prepared for offline caching once the service worker is active.</p>
            <p>{favorites.length} saved Daily Light{favorites.length === 1 ? "" : "s"} on this device.</p>
            {shareStatus ? <p>{shareStatus}</p> : null}
            <Link className="gold-text inline-block" href="/daily-light">
              View the full Daily Light archive →
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}
