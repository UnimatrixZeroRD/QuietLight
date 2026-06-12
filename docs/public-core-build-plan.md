# Public Core Build Plan

This document tracks the next stage of the Quiet Light build.

The first goal is a polished public website that can later grow into the full publishing, membership, media, and commerce platform.

---

## Current Focus

Build the public-facing foundation first:

1. Layout shell.
2. Header and footer.
3. Reusable UI components.
4. Homepage.
5. Core pages.
6. Structured local data.
7. Asset organization.

This gives the project a presentable public face before adding accounts, payments, uploads, and admin tools.

---

## Components Started

The first reusable components include:

- Button.
- Lantern card.
- Section heading.
- Gold divider.
- Page hero.

These components establish the blue and gold Quiet Light visual language.

---

## Structured Data Started

The project now has starter data files for:

- Albums.
- Books.
- Membership tiers.
- Products.
- Daily Light content.

This lets the public site behave more like a platform before the database layer is wired in.

---

## Next Tasks

1. Run local checks.
2. Fix any build errors.
3. Expand the homepage into the full public landing page.
4. Add optimized images.
5. Improve mobile navigation.
6. Build the first polished versions of Music, Store, Membership, Daily Light, and The Keeper's Lantern.
7. Begin planning Supabase tables after the public site is stable.

---

## Build Priority

Do not start payments before the public site feels complete.

The order should be:

1. Beautiful public site.
2. Blog and content publishing.
3. Authentication.
4. Membership access.
5. Store and product catalog.
6. Stripe or PayPal checkout.
7. Admin dashboard.
