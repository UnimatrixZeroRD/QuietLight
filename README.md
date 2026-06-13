# The Way of Quiet Light

**The Way of Quiet Light** is the public website and digital home for Joshua Eaton's spiritual and creative work, including **The Keeper's Lantern**, the Lantern Psalms, devotional writings, sacred music, daily reflections, and related media.

This repository holds the source code, documentation, design system, content structure, admin tooling, and deployment workflow for the redesigned Quiet Light website.

The guiding visual identity is simple:

> **Deep blue stillness. Gold lantern light. Sacred reflection.**

---

## Project Purpose

The Quiet Light website is intended to become a calm, beautiful, and organized digital sanctuary for the entire Way of Quiet Light body of work.

It is used to:

- Present the Way of Quiet Light as a spiritual path of stillness, humility, reflection, and quiet service.
- Introduce and promote **The Keeper's Lantern — The Book of Joshua**.
- Showcase music projects such as **The Flame Remains**, **The Everlasting Light**, and **Gloria Patri**.
- Publish devotional writings, reflections, scripture-based posts, and Daily Light content.
- Provide a central place for books, music, podcasts, social links, newsletters, and support links.
- Maintain a consistent brand system using blue, gold, lantern imagery, serif typography, and sacred visual atmosphere.

---

## Platform Vision

Quiet Light is not intended to remain only a static website.

The long-term goal is a custom publishing, membership, media, and digital commerce platform that combines the best parts of:

- **Substack** for free and paid writing.
- **Shopify** for digital products and licensing.
- **WordPress** for pages, blogging, publishing, and content management.
- **A devotional archive** for scripture, Daily Light posts, music, books, and sacred reflection.

The platform supports or is being prepared to support public content, memberships, one-time digital purchases, e-books, music and album access, media embeds, Daily Light entries, support messages, admin publishing controls, and launch readiness workflows.

The full platform requirements are documented in [`docs/platform-requirements.md`](docs/platform-requirements.md).

---

## Website Sections

The website is organized around the following main pages:

| Page | Purpose |
| --- | --- |
| **Home** | Main landing page and introduction to the Way of Quiet Light. |
| **The Way** | Explanation of the spiritual path, values, language, and purpose. |
| **The Keeper's Lantern** | Book landing page for The Keeper's Lantern and related editions. |
| **Music** | Music archive for albums, hymns, psalms, and sacred soundscapes. |
| **The Lantern Psalms** | Dedicated devotional/music section for the Lantern Psalms. |
| **Daily Light** | Daily scripture, reflection, quote, or devotional post. |
| **Bible / Scripture** | Scripture quotes, devotional references, and Bible-related resources. |
| **Store** | Digital products, e-books, music, downloads, and product licenses. |
| **Membership** | Membership tiers, supporter access, and paid subscription options. |
| **Blog** | Reflections, updates, devotional writing, and announcements. |
| **About** | About Joshua Eaton, the Keeper persona, and the origin of the work. |
| **Support** | Donation, message, newsletter, social links, and ways to help the project grow. |

---

## Technology Stack

The current stack is:

| Layer | Tool | Purpose |
| --- | --- | --- |
| Framework | **Next.js** | Main website framework with routing, SEO, and deployment support. |
| Language | **TypeScript** | Safer development and easier long-term maintenance. |
| Styling | **Tailwind CSS** | Fast, consistent styling with a custom blue/gold design system. |
| Database/Auth/Storage | **Supabase** | User accounts, memberships, access control, uploaded files, admin data, and platform records. |
| Payments | **Stripe / PayPal / manual fulfillment readiness** | Checkout direction, order intents, direct grants, and purchase/license tracking. |
| Deployment | **Vercel** | Deployment from GitHub with preview builds. |
| Repository | **GitHub** | Source control, documentation, and project history. |

---

## Design Direction

The website should feel like a sacred digital sanctuary rather than a standard corporate or author site.

The main visual direction is:

- Midnight blue and deep aurora backgrounds.
- Antique gold headings, borders, and ornamental dividers.
- Warm amber lantern glow effects.
- Elegant serif typography for titles and section headers.
- Readable body text with generous spacing.
- Cinematic imagery, but used with restraint.
- Mobile-first layout with strong accessibility and readability.

See the detailed design notes in [`docs/design-system.md`](docs/design-system.md).

---

## Documentation Index

| Document | Description |
| --- | --- |
| [`docs/project-overview.md`](docs/project-overview.md) | High-level description of the project and its goals. |
| [`docs/platform-requirements.md`](docs/platform-requirements.md) | Full Substack/Shopify/WordPress-style platform requirements. |
| [`docs/data-model.md`](docs/data-model.md) | Data model for users, products, memberships, posts, licenses, media, and platform records. |
| [`docs/payment-providers.md`](docs/payment-providers.md) | Payment provider options for Stripe, PayPal, memberships, purchases, and licenses. |
| [`docs/site-architecture.md`](docs/site-architecture.md) | Planned pages, routes, sections, and user flow. |
| [`docs/design-system.md`](docs/design-system.md) | Colors, typography, layout rules, visual language, and image usage. |
| [`docs/technology-stack.md`](docs/technology-stack.md) | What tools are used, why they are being used, and what each piece does. |
| [`docs/content-and-assets.md`](docs/content-and-assets.md) | How books, music, images, devotional content, and media should be organized. |
| [`docs/development-workflow.md`](docs/development-workflow.md) | How development should happen from local work to GitHub and deployment. |
| [`docs/deployment.md`](docs/deployment.md) | Deployment plan, hosting expectations, environment variables, and build notes. |
| [`docs/final-launch-qa-checklist.md`](docs/final-launch-qa-checklist.md) | Final pre-launch route, admin, content, store, media, and support QA checklist. |
| [`docs/stabilization-notes.md`](docs/stabilization-notes.md) | Stabilization plan, likely typecheck risk areas, and feature-freeze guidance. |
| [`docs/launch-readiness-score.md`](docs/launch-readiness-score.md) | Admin readiness score, checklist export, and weighted launch review model. |
| [`docs/launch-readiness-history.md`](docs/launch-readiness-history.md) | Snapshot history, charting, CSV export, and snapshot comparison tools. |
| [`docs/roadmap.md`](docs/roadmap.md) | Planned phases for building the website. |

---

## Stabilization Commands

Before launch or deployment review, run:

```bash
npm run lint
npm run typecheck
npm run build
```

Launch should not proceed until all three pass.

---

## Repository Status

This repository has moved from early scaffold into a **stabilization and final launch QA phase**.

The next major step is to run the local checks, resolve any lint/type/build issues, complete the final launch QA checklist, and then enter content/publishing cleanup before public promotion.

---

## Core Motto

> **The flame remains.**

For God. For Light. For One Another.
