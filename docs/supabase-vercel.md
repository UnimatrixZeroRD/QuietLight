# Supabase and Vercel

Supabase has been connected to the Vercel project.

This means the app can begin preparing for database-backed content, authentication, memberships, products, purchases, licenses, and admin tools.

---

## Public Environment Variables

The public browser and SSR clients expect these variables to exist in Vercel and local development:

- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

The app also supports this legacy fallback if needed:

- NEXT_PUBLIC_SUPABASE_ANON_KEY

These are safe public client values, not service-role secrets.

---

## Server-Only Secrets Later

Future server-side work may require private values such as a service role key.

Those must stay server-only and should never be exposed to browser code.

---

## Current Code Layer

The Supabase layer currently includes:

- src/lib/supabase/env.ts
- src/lib/supabase/client.ts
- src/lib/supabase/server.ts
- src/lib/supabase/proxy.ts
- middleware.ts

The helpers return null or allow safe pass-through when required public variables are missing, so local builds can remain stable while the database and auth layer are being prepared.

---

## Auth Providers

Current enabled path:

- Email and password.

Planned but disabled for now:

- Google.
- Facebook.
- Apple.

Enable the social providers only after provider credentials and Supabase Auth callback settings are ready.

---

## Next Database Areas

The future database model should include:

1. Profiles.
2. Membership tiers.
3. Posts.
4. Pages.
5. Daily Light entries.
6. Scripture references.
7. Products.
8. Purchases.
9. Digital licenses.
10. Media items.
11. Embeds.

---

## Build Order

The recommended order remains:

1. Public site.
2. Structured content data.
3. Supabase schema.
4. Authentication.
5. Membership access.
6. Products and digital licenses.
7. PayPal or Stripe checkout.
8. Admin dashboard.
