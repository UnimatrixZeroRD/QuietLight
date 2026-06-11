# Local Setup

The application scaffold now includes a package manifest and core Next.js configuration files.

Recommended setup:

- npm install
- npm run dev

Expected development server: http://localhost:3000

---

## Dependencies

The project currently uses:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Supabase client
- ESLint with flat config
- Stripe and/or PayPal integration packages later when payment work begins

---

## First Local Verification Steps

After dependencies are installed, run:

- npm run lint
- npm run typecheck
- npm run build

If a package lockfile is generated locally, commit it so future installs can use npm ci.

---

## Notes

This repository was scaffolded through direct GitHub file creation rather than the interactive Next.js generator, so the first few local runs may reveal small configuration or component issues to clean up.
