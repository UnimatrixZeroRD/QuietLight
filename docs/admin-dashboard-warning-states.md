# Admin Dashboard Warning States

Quiet Light now uses visual warning states on the admin dashboard summary cards.

---

## Route

- `/admin`

---

## Card Labels

Dashboard cards now show one of these status labels:

- Healthy.
- Action needed.
- Review.
- Monitor.

---

## Warning Rules

Operational cards:

- Pending orders: Action needed when pending or paid orders exist.
- Open messages: Action needed when open messages exist.
- Purchases: Healthy when completed purchases exist, otherwise Monitor.
- Delivery ready: Review when any products need delivery attention.

Publishing cards:

- Blog posts: Review when drafts exist, Healthy when published posts exist and no drafts are present.
- Daily Light: Review when drafts exist, Healthy when published entries exist and no drafts are present.
- Products: Review when drafts exist or product delivery needs attention.
- Albums: Review when drafts exist, Healthy when published albums exist and no drafts are present.
- Profiles: Healthy when at least one admin profile exists, Action needed if no admin profile is detected.

---

## Purpose

The dashboard should not merely count records. It should help identify what requires attention before launch: orders, messages, delivery readiness, draft content, and missing admin setup.

---

## Next Work

- Add route-level warning banners to product admin pages.
- Add dashboard counts by message topic.
- Add order totals by payment method.
- Add weekly/monthly revenue summaries.
- Add recent publishing activity.
