# Quiet Light Database Architecture

The QuietLight Supabase project now has an initial database foundation for the future publishing, membership, media, and digital commerce platform.

Project ID:

- escmzufznwjyfiwfamvr

---

## Core Areas

The schema is organized around six areas:

1. Identity and access.
2. Publishing.
3. Daily Light and scripture.
4. Digital products and licenses.
5. Music and media.
6. External embeds.

---

## Identity and Access

Tables:

- profiles
- membership_tiers
- memberships

Profiles extend Supabase Auth users. Membership tiers define public, supporter, and keeper-style levels. Memberships connect users to those tiers.

---

## Publishing

Tables:

- posts
- pages

Posts are for blog-style content, announcements, reflections, and long-form writing. Pages are for structured site pages that may later become editable through an admin dashboard.

---

## Daily Light and Scripture

Tables:

- daily_light_entries
- scripture_references

Daily Light entries hold the daily reflection archive. Scripture references hold reusable scripture metadata for devotional and study material.

---

## Digital Products and Licenses

Tables:

- products
- product_files
- purchases
- licenses

Products define e-books, music, videos, bundles, downloads, and future membership-related products. Product files define protected downloadable resources. Purchases and licenses determine access.

---

## Music and Media

Tables:

- albums
- tracks
- media_assets

Albums and tracks support the music archive. Media assets support images, audio, video, documents, and downloads.

---

## Embeds

Tables:

- embeds

Embeds are intended for Spotify, YouTube, Apple Music, podcast players, social posts, and other external media.

---

## Access Levels

The schema uses these access levels:

- public
- free_account
- member
- paid_product
- private

These map directly to the platform vision already documented in platform-requirements.md and data-model.md.

---

## Current App Integration

The app has a public content query layer at:

- src/lib/supabase/public-content.ts

Current pages using the query layer include:

- Store
- Membership
- Music
- Blog
- Daily Light
- Bible

Each query has local fallback data so the site can still build and render if local Supabase environment variables are missing.

---

## Next Database Work

1. Add a complete hardening migration for helper functions and RLS policy review.
2. Add admin-only insert and update paths through a future dashboard.
3. Add Storage buckets for books, music, images, videos, and downloads.
4. Add product and license workflow once PayPal or Stripe integration begins.
5. Add seed data for public launch content.
