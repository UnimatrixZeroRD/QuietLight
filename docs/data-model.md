# Data Model

This document outlines the early conceptual data model for the Quiet Light platform.

The final database schema may change, but the project should be designed around these core entities.

---

## Core Entities

The platform will likely need the following major data types:

1. Users
2. Memberships
3. Posts
4. Pages
5. Products
6. Purchases
7. Licenses
8. Media Assets
9. Daily Light Entries
10. Scripture Entries
11. External Embeds
12. Categories and Tags

---

## Users

Users represent people who create accounts on the site.

Possible fields:

| Field | Purpose |
| --- | --- |
| `id` | Unique user identifier. |
| `email` | Login and contact email. |
| `display_name` | Optional public or account name. |
| `role` | User role such as user, member, admin. |
| `created_at` | Account creation date. |
| `updated_at` | Last updated date. |

Possible roles:

- `visitor` is not stored unless they create an account.
- `user`
- `member`
- `admin`

---

## Memberships

Memberships represent recurring access plans.

Possible fields:

| Field | Purpose |
| --- | --- |
| `id` | Unique membership record. |
| `user_id` | User who owns the membership. |
| `tier` | Membership tier. |
| `status` | Active, canceled, past_due, expired. |
| `provider` | Payment provider such as Stripe. |
| `provider_subscription_id` | External billing subscription ID. |
| `started_at` | Membership start date. |
| `renews_at` | Next renewal date if available. |
| `ended_at` | End date if canceled or expired. |

---

## Posts

Posts are used for blog content, reflections, announcements, and devotional writing.

Possible fields:

| Field | Purpose |
| --- | --- |
| `id` | Unique post ID. |
| `title` | Post title. |
| `slug` | URL-friendly identifier. |
| `summary` | Short preview text. |
| `content` | Post body or content reference. |
| `status` | Draft, published, archived. |
| `access_level` | Public, free_account, member, paid_product, private. |
| `featured_image` | Main image path or media ID. |
| `published_at` | Publication date. |
| `created_at` | Creation date. |
| `updated_at` | Last update date. |

---

## Pages

Pages are long-lived website pages, such as The Way, About, Support, or The Keeper's Lantern.

Possible fields:

| Field | Purpose |
| --- | --- |
| `id` | Unique page ID. |
| `title` | Page title. |
| `slug` | URL path. |
| `content` | Page body or content reference. |
| `status` | Draft or published. |
| `seo_title` | Search/social page title. |
| `seo_description` | Search/social description. |
| `created_at` | Creation date. |
| `updated_at` | Last update date. |

In the first version, pages may be hard-coded. Later, they can be moved into a database or CMS.

---

## Products

Products represent digital items available for purchase or license.

Possible product types:

- E-book.
- Audiobook.
- Music album.
- Music track.
- Video.
- Printable PDF.
- Bundle.
- Membership-related product.

Possible fields:

| Field | Purpose |
| --- | --- |
| `id` | Unique product ID. |
| `title` | Product name. |
| `slug` | Product URL. |
| `description` | Product description. |
| `product_type` | E-book, music, video, PDF, bundle, etc. |
| `price_cents` | Price in cents. |
| `currency` | Currency code. |
| `status` | Draft, active, archived. |
| `cover_image` | Product cover image. |
| `access_rule` | What purchase unlocks. |
| `created_at` | Creation date. |
| `updated_at` | Last update date. |

---

## Purchases

Purchases represent completed transactions.

Possible fields:

| Field | Purpose |
| --- | --- |
| `id` | Unique purchase ID. |
| `user_id` | User who made the purchase. |
| `product_id` | Purchased product. |
| `provider` | Payment provider. |
| `provider_payment_id` | External payment ID. |
| `status` | Paid, refunded, disputed, failed. |
| `amount_cents` | Amount paid. |
| `currency` | Currency code. |
| `purchased_at` | Purchase date. |

---

## Licenses

Licenses represent the access granted by a purchase.

Possible fields:

| Field | Purpose |
| --- | --- |
| `id` | Unique license ID. |
| `user_id` | User who owns the license. |
| `product_id` | Product connected to the license. |
| `purchase_id` | Purchase that created the license. |
| `license_type` | Download, streaming, reading, lifetime, limited. |
| `status` | Active, revoked, expired. |
| `granted_at` | When access began. |
| `expires_at` | Optional expiration date. |

Licenses should be used to decide whether a user can access a paid e-book, album, video, or bundle.

---

## Media Assets

Media assets represent uploaded or linked files.

Possible media types:

- Image.
- PDF.
- EPUB.
- Audio.
- Video.
- External embed.

Possible fields:

| Field | Purpose |
| --- | --- |
| `id` | Unique media ID. |
| `title` | Human-readable title. |
| `media_type` | Image, PDF, EPUB, audio, video, embed. |
| `storage_path` | Internal storage path if uploaded. |
| `external_url` | External URL if hosted elsewhere. |
| `provider` | YouTube, Spotify, Apple Music, local, etc. |
| `mime_type` | File type if uploaded. |
| `size_bytes` | File size if uploaded. |
| `alt_text` | Accessibility description for images. |
| `created_at` | Creation date. |

---

## Daily Light Entries

Daily Light entries are short devotional posts or scripture reflections.

Possible fields:

| Field | Purpose |
| --- | --- |
| `id` | Unique entry ID. |
| `title` | Entry title. |
| `slug` | URL slug. |
| `date` | Devotional date. |
| `scripture_reference` | Optional Bible reference. |
| `quote` | Main quote or scripture text. |
| `reflection` | Short reflection. |
| `prayer` | Optional closing prayer. |
| `access_level` | Usually public, but may support members-only entries. |
| `published_at` | Publication date. |

---

## Scripture Entries

Scripture entries represent Bible quotes, passages, or references used by the site.

Possible fields:

| Field | Purpose |
| --- | --- |
| `id` | Unique scripture entry ID. |
| `translation` | Translation used. |
| `book` | Bible book. |
| `chapter` | Chapter number. |
| `verse_start` | Starting verse. |
| `verse_end` | Ending verse if applicable. |
| `text` | Passage text if legally hosted. |
| `source_url` | External source if linked. |
| `usage_notes` | Copyright or licensing notes. |

Public domain translations are easier to host directly. Copyrighted translations may require permissions or careful quotation practices.

---

## External Embeds

External embeds allow the site to connect to other platforms.

Possible providers:

- YouTube.
- Spotify.
- Apple Music.
- Facebook.
- Instagram.
- TikTok.
- Substack.
- Podcast platforms.

Possible fields:

| Field | Purpose |
| --- | --- |
| `id` | Unique embed ID. |
| `provider` | Platform name. |
| `title` | Embed title. |
| `embed_url` | Embed URL or iframe source. |
| `public_url` | Normal public link. |
| `description` | Optional description. |
| `created_at` | Creation date. |

---

## Categories and Tags

Categories and tags help organize content.

Possible categories:

- Daily Light.
- Scripture.
- Reflections.
- The Way.
- The Keeper's Lantern.
- Music.
- Lantern Psalms.
- Announcements.
- Seasonal Devotionals.

Tags can be more flexible:

- prayer
- stillness
- mercy
- humility
- faith
- light
- psalm
- Easter
- Good Friday

---

## Access Control Logic

A piece of content should be visible if one of the following is true:

- It is public.
- The user owns the required product license.
- The user has the required membership tier.
- The user is an admin.

This logic should be centralized so every page and content type follows the same access rules.

---

## Initial Implementation Note

The first build does not need a full database model immediately.

However, the site should be designed so these entities can be added cleanly when the project moves from a static public website to a full publishing, commerce, and membership platform.
