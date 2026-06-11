# Platform Requirements

This document defines the larger product vision for the Quiet Light website.

Quiet Light should not be treated as a simple static website. The long-term goal is to build a spiritual publishing, membership, media, and digital commerce platform.

In plain terms, the site should function like a thoughtful combination of:

- **Substack** for free and paid publishing.
- **Shopify** for selling digital products and licenses.
- **WordPress** for content management, blogging, pages, and media.
- **A devotional archive** for scripture, reflections, music, books, and spiritual material.

The public experience should remain calm, beautiful, and reverent. The admin experience should eventually make it easy for Joshua Eaton to publish, sell, organize, and manage content without needing to edit code for every update.

---

## Core Product Vision

The Quiet Light platform should support:

1. Free public content.
2. Subscriber-only content.
3. Paid memberships.
4. One-time purchases.
5. Digital product licensing.
6. E-book uploads and delivery.
7. Music uploads or embedded listening links.
8. Video uploads or embedded video links.
9. Blog and article publishing.
10. Daily scripture and devotional content.
11. Bible-related resources and reading sections.
12. External platform embeds such as YouTube, Spotify, Apple Music, and social media.
13. A future admin dashboard for content, products, media, and members.

---

## Public Visitor Capabilities

A public visitor should be able to:

- View the homepage and main pages for free.
- Read content marked as free.
- Browse available books, music, videos, and devotionals.
- See previews of paid content.
- Subscribe to a membership.
- Purchase individual digital products.
- Access free Daily Light posts.
- Browse scripture quotes and Bible-related sections.
- Follow links to YouTube, Spotify, Apple Music, Substack, Facebook, Instagram, and other platforms.

---

## Member Capabilities

A registered member should eventually be able to:

- Log in securely.
- Manage their account.
- View member-only posts.
- Access content tied to their membership level.
- View purchased digital products.
- Download purchased e-books when allowed.
- Access music, videos, or bonus material tied to their license.
- Manage subscription or billing details through the payment provider.

---

## Admin Capabilities

The admin side should eventually allow Joshua Eaton to:

- Create and edit blog posts.
- Mark content as free, members-only, paid, or private.
- Upload e-books.
- Upload or link music.
- Upload or link videos.
- Create products.
- Set prices.
- Create digital licenses.
- Create membership tiers.
- Manage pages and sections.
- Add scripture quotes and Daily Light posts.
- Embed YouTube, Spotify, Apple Music, and other media.
- View orders and membership status.
- Manage product visibility.

The first version may not include every admin feature, but the architecture should leave room for them.

---

## Content Access Levels

Content should support access control.

Recommended access levels:

| Access Level | Meaning |
| --- | --- |
| `public` | Anyone can view it. |
| `free_account` | Requires a free account/login. |
| `member` | Requires an active membership. |
| `paid_product` | Requires purchase of a specific product/license. |
| `private` | Hidden from public use, admin-only or draft. |

Examples:

- A blog reflection may be `public`.
- A deeper devotional series may be `member`.
- An e-book may be `paid_product`.
- A music collection may be `paid_product` or `member`.
- Draft content should be `private`.

---

## Membership Model

The site should support recurring memberships.

Possible membership tiers:

| Tier | Purpose |
| --- | --- |
| Free | Public account, free posts, Daily Light updates. |
| Supporter | Access to supporter-only reflections and early updates. |
| Keeper | Deeper devotional archive, music previews, e-book excerpts. |
| Founding Keeper | Highest-level supporter access and special acknowledgements. |

The exact tier names and pricing can be decided later.

Memberships should be handled through a secure payment provider rather than custom-built billing logic.

---

## Digital Commerce Model

The site should allow one-time purchases of digital items.

Possible product types:

- E-books.
- Audiobooks.
- Music albums.
- Individual tracks.
- Video devotionals.
- Printable PDFs.
- Special edition digital releases.
- Bundles.
- Lifetime access licenses.

Each product should support:

- Title.
- Description.
- Cover image.
- Price.
- Product type.
- Access rules.
- Download or streaming link.
- License terms.
- Visibility status.

---

## Digital License Concept

When someone purchases an e-book, album, video, or collection, they are not buying ownership of the underlying creative work. They are buying a virtual license for personal access according to the terms set by the site.

A product license may provide:

- Download access.
- Streaming access.
- Reading access.
- Member library access.
- Limited or permanent access depending on the product.

The site should clearly distinguish between:

- Free access.
- Membership access.
- Product purchase access.
- External platform access.

---

## Blog and Publishing Requirements

The blog should support:

- Posts.
- Categories.
- Tags.
- Featured images.
- Draft and published status.
- Free and paid access settings.
- SEO metadata.
- Embedded videos, music, and social posts.

Possible categories:

- Daily Light.
- Reflections.
- Scripture.
- The Way.
- The Keeper's Lantern.
- Lantern Psalms.
- Music.
- Announcements.
- Seasonal devotionals.

---

## Media Requirements

The platform should support multiple media types.

### E-books

The site should support uploading or linking:

- PDF files.
- EPUB files.
- Possibly MOBI or Kindle-compatible formats later.

### Music

The site should support:

- Embedded Spotify players.
- Embedded Apple Music links if available.
- Uploaded audio files later if needed.
- Album and track pages.
- Purchase or license access for music.

### Video

The site should support:

- YouTube embeds.
- Vimeo or other video platform embeds if needed.
- Uploaded video files later if hosting costs make sense.

### Social Embeds

The site may eventually support embeds or links for:

- YouTube.
- Spotify.
- Apple Music.
- Facebook.
- Instagram.
- TikTok.
- Substack.
- Podcast platforms.

External embeds should be used carefully so the site remains fast and visually clean.

---

## Bible and Scripture Section

The site should include a dedicated Bible/scripture area.

Possible features:

- Daily scripture quotes.
- Scripture reflections.
- Bible reading pages.
- Themed scripture collections.
- Devotional commentary.
- Links between scripture, Daily Light posts, and Quiet Light teachings.

Important note:

Bible translation licensing must be handled carefully. Public domain translations are easier to host directly. Copyrighted translations may require permission or should be linked/quoted only within allowed limits.

---

## Recommended Build Strategy

The full vision is large. It should not all be built at once.

Recommended staged approach:

### Stage 1 — Beautiful Public Website

- Homepage.
- Static pages.
- Book page.
- Music page.
- Daily Light page.
- About and Support pages.

### Stage 2 — Content Publishing

- Blog/article system.
- Markdown/MDX or CMS-backed posts.
- Categories and tags.
- Daily Light archive.

### Stage 3 — Accounts and Memberships

- User login.
- Membership tiers.
- Member-only content.
- Payment provider integration.

### Stage 4 — Digital Products

- Product catalog.
- E-book products.
- Music products.
- Digital licenses.
- Purchase access library.

### Stage 5 — Admin Dashboard

- Content management.
- Product management.
- Media management.
- Membership management.

### Stage 6 — Advanced Integrations

- YouTube and Spotify embeds.
- Newsletter integration.
- Automated Daily Light scheduling.
- Search.
- Analytics.

---

## Recommended Architecture Direction

The site should begin with a modern web application foundation rather than a static-only site.

Recommended core architecture:

- **Next.js** for the web application.
- **TypeScript** for maintainable code.
- **Tailwind CSS** for design system implementation.
- **Supabase** for database, authentication, and storage.
- **Stripe** for subscriptions, checkout, billing, and digital product purchases.
- **Vercel** for deployment.
- **MDX or a CMS layer** for publishing depending on how much admin functionality is needed.

This approach keeps the site custom and beautiful while leaving room for memberships, gated content, product licensing, and admin tools.

---

## Guiding Principle

The platform can contain commerce, subscriptions, memberships, products, and media — but it should never feel like a noisy store.

It should still feel like Quiet Light:

> A lantern-lit path through the dark.

Commerce should support the work, not overpower the work.
