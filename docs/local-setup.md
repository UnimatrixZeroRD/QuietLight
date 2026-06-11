# Local Setup

The application scaffold has started, but the install manifest still needs to be added before the project can run locally.

Recommended setup once the manifest is present:

```bash
npm install
npm run dev
```

Expected development server:

```text
http://localhost:3000
```

---

## Planned Dependencies

The project is intended to use:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Supabase client
- Stripe and/or PayPal integration packages when payment work begins

---

## First Local Verification Steps

After dependencies are installed:

```bash
npm run typecheck
npm run build
```

The first build may need small corrections because the repository is currently being scaffolded through direct GitHub file creation rather than a local Next.js generator.
