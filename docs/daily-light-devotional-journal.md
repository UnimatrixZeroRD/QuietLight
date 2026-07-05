# Daily Light Devotional Journal App

This document tracks the first installable devotional journal layer for The Daily Light.

## Purpose

The Daily Light app experience turns the existing Daily Light content system into a mobile-first devotional journal that can be installed from supported browsers and later packaged for iOS and Android.

The first version is intentionally simple:

- Show the current Daily Light.
- Provide a focused reading experience for scripture, reflection, prayer, and practice.
- Let readers save a private note for the current Daily Light.
- Let readers save/favourite a Daily Light on the current device.
- Provide a share action.
- Cache the Daily Light app shell and current reading for basic offline use.

## New route

```text
/daily-light/app
```

This route uses the existing Daily Light data helpers and renders a dedicated app-style interface instead of the larger website page.

## API routes

```text
/api/daily-light/today
/api/daily-light/archive
/api/daily-light/[slug]
/api/daily-light/day/[day]
```

These routes expose the existing Daily Light content in a clean app-friendly JSON format.

## PWA support

The app manifest now launches the installed experience at:

```text
/daily-light/app
```

The service worker lives at:

```text
/public/sw.js
```

It caches Daily Light pages, Daily Light API responses, and core app assets as progressive enhancement. If service worker registration fails, the site still works normally.

## Local journal storage

The first journal version stores notes in the reader's browser using `localStorage`.

This gives the app a useful private journal experience immediately without requiring a full account system. It is not yet cross-device sync.

## Recommended next phase

The next phase should move private notes, favourites, and reading history into Supabase once account-based sync is ready.

Suggested tables:

```sql
daily_light_notes
- id uuid primary key
- user_id uuid not null
- daily_light_slug text not null
- note text not null default ''
- created_at timestamptz not null default now()
- updated_at timestamptz not null default now()

daily_light_favorites
- id uuid primary key
- user_id uuid not null
- daily_light_slug text not null
- created_at timestamptz not null default now()

daily_light_reading_history
- id uuid primary key
- user_id uuid not null
- daily_light_slug text not null
- read_at timestamptz not null default now()

daily_light_user_settings
- user_id uuid primary key
- reminder_time time
- timezone text not null default 'America/Halifax'
- notifications_enabled boolean not null default false
```

Each table should use Row Level Security so users can only read and write their own journal data.

## Later native app path

Once the PWA feels good, the recommended native packaging path is still Capacitor first:

```text
QuietLight Next.js site
  -> Daily Light app route
  -> PWA
  -> Capacitor iOS/Android wrapper
```

A full Expo / React Native rebuild should only happen later if the devotional app grows beyond the website shell model.
