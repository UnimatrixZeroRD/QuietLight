# Technology Stack

This document explains what will be used in the Quiet Light website and what each tool is for.

The project should be powerful enough to support a polished modern website, but simple enough to maintain without unnecessary complexity.

---

## Recommended Stack Summary

| Area | Tool | What It Is For |
| --- | --- | --- |
| Website framework | **Next.js** | Routing, pages, SEO, build system, and deployment. |
| Language | **TypeScript** | Safer JavaScript with better structure and fewer errors. |
| UI library | **React** | Building reusable interface components. |
| Styling | **Tailwind CSS** | Fast custom styling using the Quiet Light color system. |
| Content | **Markdown / MDX** | Writing devotionals, articles, page copy, and documentation. |
| Animation | **Framer Motion or CSS transitions** | Subtle fades, glows, and page polish. |
| Icons | **Lucide React or custom SVGs** | Simple icons such as flame, music, book, lantern, and social links. |
| Deployment | **Vercel** | Hosting, previews, production deployment, and GitHub integration. |
| Source control | **GitHub** | Repository, commits, branches, issues, and project history. |

---

## Next.js

**Purpose:** Main website framework.

Next.js is recommended because it supports:

- Modern React development.
- File-based routing.
- Strong SEO support.
- Static and dynamic pages.
- Image optimization.
- Easy deployment through Vercel.
- Future expansion if the site later needs forms, newsletters, APIs, or dynamic content.

Quiet Light will likely begin as a mostly static content and marketing site, but Next.js gives room to grow.

---

## TypeScript

**Purpose:** Safer code and better maintainability.

TypeScript should be used so that components, content objects, album data, navigation links, and future integrations are easier to manage.

Benefits:

- Reduces common code mistakes.
- Makes components easier to refactor.
- Helps with structured content.
- Improves long-term maintainability.

---

## React

**Purpose:** Reusable page and interface components.

React will be used for:

- Hero sections.
- Page layouts.
- Album cards.
- Book cards.
- Quote cards.
- Navigation.
- Footer.
- Buttons.
- Devotional content blocks.

The goal is to avoid duplicating design code across pages.

---

## Tailwind CSS

**Purpose:** Styling and design system implementation.

Tailwind CSS will be used to create the blue/gold Quiet Light visual style quickly and consistently.

Tailwind should be configured with the custom palette from the design system:

- Midnight blue.
- Deep blue.
- Aurora blue.
- Quiet teal.
- Lantern gold.
- Soft gold.
- Warm flame.
- Ivory.
- Muted silver.

Tailwind is also useful for responsive design, spacing, typography, and quick iteration.

---

## Markdown and MDX

**Purpose:** Content publishing.

Markdown or MDX should be used for written content such as:

- Daily Light posts.
- Devotionals.
- Reflections.
- Articles.
- Book excerpts.
- Music descriptions.
- Scripture-based notes.

Markdown keeps content easy to write and edit. MDX allows React components to be embedded inside content pages when needed.

Example future content types:

```text
content/daily-light/2026-06-11-the-flame-remains.mdx
content/articles/the-way-of-the-lantern.mdx
content/music/the-flame-remains.mdx
```

---

## Framer Motion or CSS Transitions

**Purpose:** Subtle visual polish.

Animation should be used lightly.

Appropriate effects:

- Fade-in on section entrance.
- Gentle button hover glow.
- Soft hero text reveal.
- Small lantern light pulse.

Avoid heavy animation or anything that makes the site feel loud or distracting.

For the first version, simple CSS transitions may be enough. Framer Motion can be added if the site needs more refined entrance animations.

---

## Icons and SVGs

**Purpose:** Lightweight symbolic UI.

Potential icons:

- Flame.
- Lantern.
- Book.
- Music note.
- Cross.
- Mail/newsletter.
- Social media links.

Use simple icons carefully. The website should not become icon-heavy.

Custom SVG ornaments may be better than generic icon packs for dividers and sacred styling.

---

## Image Handling

**Purpose:** Present artwork without hurting performance.

Images should be organized and optimized before use.

Guidelines:

- Use compressed web-friendly formats where possible.
- Keep original high-resolution files separate from optimized web versions.
- Use descriptive filenames.
- Avoid putting text-only information inside images when it needs to be searchable or readable.
- Add meaningful alt text.

Potential structure:

```text
public/images/brand/
public/images/books/
public/images/music/
public/images/backgrounds/
public/images/founder/
public/images/devotional/
```

---

## Vercel

**Purpose:** Hosting and deployment.

Vercel is recommended because it integrates well with GitHub and Next.js.

Expected workflow:

1. Push changes to GitHub.
2. Vercel creates a preview deployment.
3. Review the preview.
4. Merge or deploy to production when ready.

---

## GitHub

**Purpose:** Source control and project management.

GitHub will be used for:

- Source code.
- Documentation.
- Commit history.
- Issues and tasks.
- Pull requests.
- Deployment connection to Vercel.

Recommended branch approach:

- `main` for stable production-ready code.
- Feature branches for larger changes.
- Pull requests for review before major updates.

For very early development, direct commits to `main` may be acceptable, but the project should move to branches once the site has working code.

---

## Future Optional Tools

These are not required for the first version, but may be useful later.

| Tool | Use |
| --- | --- |
| Newsletter provider | Email signup and Daily Light delivery. |
| Analytics | Understand site traffic without becoming invasive. |
| CMS | Easier editing if content grows beyond Markdown. |
| Supabase | Future database, forms, subscriptions, or private admin tools. |
| Stripe or PayPal | Donations or product sales if needed. |
| Search integration | Search articles, devotionals, and music archive. |

---

## What Not To Add Too Early

Avoid adding unnecessary complexity in the first version.

Do not add too early:

- User accounts.
- Complex dashboards.
- Database features.
- Overbuilt CMS systems.
- Heavy animations.
- Too many dependencies.
- A large backend before the basic site exists.

The first priority is a beautiful, fast, clear public website.

---

## First Build Target

The first functional version should include:

- Next.js project scaffold.
- Tailwind CSS setup.
- Global design tokens.
- Header and footer.
- Homepage.
- Basic pages for The Way, Book, Music, Daily Light, About, and Support.
- Placeholder content and image slots.
- Deployment-ready structure.

After that, content and polish can be added in layers.
