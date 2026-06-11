# The Way of Quiet Light

**The Way of Quiet Light** is the public website and digital home for Joshua Eaton's spiritual and creative work, including **The Keeper's Lantern**, the Lantern Psalms, devotional writings, sacred music, daily reflections, and related media.

This repository will hold the source code, documentation, design system, content structure, and deployment workflow for the redesigned Quiet Light website.

The guiding visual identity is simple:

> **Deep blue stillness. Gold lantern light. Sacred reflection.**

---

## Project Purpose

The Quiet Light website is intended to become a calm, beautiful, and organized digital sanctuary for the entire Way of Quiet Light body of work.

It will be used to:

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

The platform should allow visitors to access free content, subscribe to memberships, purchase digital licenses, read blog posts, access e-books, listen to or purchase music, view embedded videos, and browse scripture/devotional material.

The platform should eventually support:

- Free public content.
- Member-only content.
- Paid subscriptions.
- One-time digital purchases.
- E-books and downloadable files.
- Music and album access.
- Video embeds and media pages.
- Daily scripture quotes and Daily Light posts.
- Bible and scripture resource sections.
- YouTube, Spotify, Apple Music, and social media embeds.
- A future admin dashboard for content, products, media, and memberships.

The full platform requirements are documented in [`docs/platform-requirements.md`](docs/platform-requirements.md).

---

## Planned Website Sections

The initial website will be organized around the following main pages:

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
| **Support** | Donation, newsletter, social links, and ways to help the project grow. |

---

## Planned Technology Stack

The intended stack is:

| Layer | Planned Tool | Purpose |
| --- | --- | --- |
| Framework | **Next.js** | Main website framework with routing, SEO, and deployment support. |
| Language | **TypeScript** | Safer development and easier long-term maintenance. |
| Styling | **Tailwind CSS** | Fast, consistent styling with a custom blue/gold design system. |
| Content | **MDX / CMS-backed content** | Publishing for reflections, devotionals, articles, pages, and product content. |
| UI Components | **Custom React components** | Reusable cards, hero sections, album panels, quote blocks, and page layouts. |
| Database/Auth/Storage | **Supabase** | User accounts, memberships, access control, uploaded files, and platform data. |
| Payments | **Stripe** | Subscriptions, checkout, product purchases, billing, and digital license creation. |
| Animation | **Framer Motion or CSS transitions** | Subtle glow, fade, and movement effects without making the site feel noisy. |
| Deployment | **Vercel** | Simple deployment from GitHub with preview builds. |
| Repository | **GitHub** | Source control, issue tracking, documentation, and project history. |

This stack is intended to support both a beautiful public website and a future gated publishing, membership, and digital product platform.

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
| [`docs/data-model.md`](docs/data-model.md) | Early conceptual data model for users, products, memberships, posts, licenses, and media. |
| [`docs/site-architecture.md`](docs/site-architecture.md) | Planned pages, routes, sections, and user flow. |
| [`docs/design-system.md`](docs/design-system.md) | Colors, typography, layout rules, visual language, and image usage. |
| [`docs/technology-stack.md`](docs/technology-stack.md) | What tools are planned, why they are being used, and what each piece does. |
| [`docs/content-and-assets.md`](docs/content-and-assets.md) | How books, music, images, devotional content, and media should be organized. |
| [`docs/development-workflow.md`](docs/development-workflow.md) | How development should happen from local work to GitHub and deployment. |
| [`docs/deployment.md`](docs/deployment.md) | Deployment plan, hosting expectations, environment variables, and build notes. |
| [`docs/roadmap.md`](docs/roadmap.md) | Planned phases for building the website. |

---

## Repository Status

This repository is currently in the **planning and documentation phase**.

The next major step is to scaffold the actual website application and begin building the first version of the homepage using the blue/gold Quiet Light design system, while keeping the future membership, publishing, and commerce architecture in mind.

---

## Core Motto

> **The flame remains.**

For God. For Light. For One Another.
