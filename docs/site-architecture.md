# Site Architecture

This document defines the planned structure of the Quiet Light website.

The site should be simple enough for a first release, but organized enough to grow into a larger devotional, book, music, and media archive.

---

## Primary Navigation

The initial main navigation should include:

1. **Home**
2. **The Way**
3. **The Keeper's Lantern**
4. **Music**
5. **The Lantern Psalms**
6. **Daily Light**
7. **About**
8. **Support**

This keeps the core identity visible without overwhelming visitors.

---

## Planned Routes

| Route | Page | Purpose |
| --- | --- | --- |
| `/` | Home | Main landing page and first impression. |
| `/the-way` | The Way | Explains the spiritual path, language, and principles. |
| `/keepers-lantern` | The Keeper's Lantern | Book landing page and editions. |
| `/music` | Music | Album and song archive. |
| `/lantern-psalms` | The Lantern Psalms | Dedicated page for the Lantern Psalms. |
| `/daily-light` | Daily Light | Daily devotional or reflection archive. |
| `/about` | About | Founder, story, persona, and project origin. |
| `/support` | Support | Donations, newsletter, following, and contact. |

Future routes may include:

| Route | Purpose |
| --- | --- |
| `/articles` | Long-form reflections and essays. |
| `/devotionals` | Thematic devotional archive. |
| `/podcast` | Podcast episodes and listening links. |
| `/books` | Full book catalog if more books are added. |
| `/media-kit` | Press materials, logos, covers, and official language. |
| `/contact` | Contact form or contact information. |

---

## Homepage Structure

The homepage should be the strongest and most polished page on the site.

Planned sections:

### 1. Hero

Purpose: immediately communicate the identity of the Way of Quiet Light.

Content:

- Large title: **The Way of Quiet Light**
- Subtitle: **A spiritual path of stillness, humility, sacred reflection, and the light that never fades.**
- Primary button: **Enter the Quiet Light**
- Secondary button: **Listen to the Music**

Visual direction:

- Deep blue aurora landscape.
- Lantern imagery.
- Gold serif title.
- Dark overlay for readability.
- Gentle glow around title and buttons.

### 2. What Is the Way of Quiet Light?

Purpose: explain the project in a few sentences.

Suggested copy:

> The Way of Quiet Light is a spiritual path of stillness, humility, quiet service, sacred reflection, and the keeping of the inner flame. It is not a path of noise, pride, or spectacle. It is the way of the lantern — carried gently, guarded faithfully, and offered to those still walking through the dark.

CTA: **Learn the Way**

### 3. The Keeper's Lantern

Purpose: introduce the book.

Content:

- Book cover image.
- Title and subtitle.
- Short description.
- Buttons: **Read More**, **Order the Book**.

### 4. Music of the Quiet Light

Purpose: showcase the sacred music catalog.

Content:

- Album cards.
- Featured albums:
  - The Flame Remains
  - The Everlasting Light
  - Gloria Patri
- Button on each card: **Listen**

### 5. Daily Light

Purpose: create a reason for people to return.

Content:

- Quote or devotional card.
- Newsletter or social follow CTA.

Suggested quote:

> I am not the light. I am only its keeper.

### 6. The Rule of the Keeper

Purpose: present the rhythm and practice of the Way.

Content:

- Brief explanation.
- Link to the full rule or future page.

### 7. About the Keeper

Purpose: introduce Joshua Eaton and the origin of the work.

Content:

- Short biography.
- Image used with restraint.
- Button: **Read Joshua's Story**

### 8. Footer

Purpose: provide navigation and closing identity.

Footer should include:

- Logo or text mark.
- Motto: **The flame remains.**
- Explore links.
- Resources links.
- Connect links.
- Newsletter CTA.
- Copyright.

---

## Page-Level Notes

### Home

The homepage should not try to say everything. It should invite the visitor into the world of the Way of Quiet Light and direct them to the right next page.

### The Way

This page should explain:

- What the Way of Quiet Light is.
- The meaning of the lantern.
- The meaning of the keeper.
- The Ten Quiet Charges when ready.
- The Keeper's Oath when ready.
- How someone can begin.

### The Keeper's Lantern

This page should include:

- Book overview.
- Author note.
- Main themes.
- Table of contents or major sections.
- Editions.
- Links to purchase, download, or learn more.

### Music

This page should include:

- Album grid.
- Release descriptions.
- Listening links.
- Featured tracks.
- Connection between book, prayer, psalms, and music.

### The Lantern Psalms

This page should include:

- Explanation of the Lantern Psalms.
- Volume organization.
- Lyrics or selected text if appropriate.
- Listen links.
- Devotional use notes.

### Daily Light

This page should eventually become an archive of daily posts.

Each entry may include:

- Date.
- Title.
- Scripture or quote.
- Reflection.
- Prayer or closing line.

### About

This page should be personal but dignified.

It should explain:

- Who Joshua Eaton is.
- Why the work began.
- The Keeper persona.
- The connection between hardship, faith, creativity, and stillness.

### Support

This page should include:

- Donation links.
- Newsletter signup.
- Social links.
- Book and music links.
- Ways people can share the project.

---

## Component Architecture

Planned reusable components:

| Component | Purpose |
| --- | --- |
| `SiteHeader` | Main navigation and logo. |
| `SiteFooter` | Footer links, motto, and newsletter CTA. |
| `HeroSection` | Large image-backed page hero. |
| `SectionHeading` | Consistent page and section headings. |
| `GoldDivider` | Ornamental divider line. |
| `LanternCard` | Glass-like blue/gold feature card. |
| `AlbumCard` | Music card with cover, title, description, and link. |
| `BookFeature` | Book image and promotional copy. |
| `QuoteCard` | Devotional quote or scripture block. |
| `CTAButton` | Primary and secondary buttons. |
| `PageShell` | Shared page layout wrapper. |

---

## Layout Principles

- Use generous spacing.
- Keep text blocks readable and not too wide.
- Avoid crowding every image into one page.
- Use the most intense religious images for specific devotional pages, not the default homepage.
- Keep the homepage elegant and peaceful.
- Make mobile layout a first-class design concern.

---

## Content Flow

The ideal first-visit flow is:

1. Visitor lands on the homepage.
2. They immediately understand the name and mood.
3. They read a short explanation of the Way.
4. They see the book.
5. They see the music.
6. They are invited to receive Daily Light or follow the project.
7. They can support, listen, read, or learn more.

That flow should remain clear even as the site grows.
