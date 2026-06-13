# Final Launch QA Checklist

This checklist is the final stabilization pass before Quiet Light is treated as launch-ready.

## 1. Local verification

Run these commands from the project root:

```bash
npm run lint
npm run typecheck
npm run build
```

Launch should not proceed until all three pass.

## 2. Public route smoke test

Open each route in a browser and confirm the page renders without errors.

- `/`
- `/about`
- `/the-way`
- `/keepers-lantern`
- `/daily-light`
- `/bible`
- `/blog`
- `/music`
- `/store`
- `/membership`
- `/support`
- `/privacy`
- `/terms`
- `/refund-policy`
- `/robots.txt`
- `/sitemap.xml`

## 3. Dynamic route smoke test

Use at least one real published item for each dynamic route.

- `/blog/[slug]`
- `/daily-light/[slug]`
- `/store/[slug]`
- `/music/[slug]`

Confirm each page has:

- Correct title
- Complete visible copy
- No broken layout
- No missing image alt text where images are shown
- No console errors

## 4. Admin route smoke test

Open each admin area and confirm it loads for the admin user.

- `/admin`
- `/admin/content`
- `/admin/products`
- `/admin/orders`
- `/admin/ledger`
- `/admin/delivery`
- `/admin/members`
- `/admin/media`
- `/admin/music`
- `/admin/support`

## 5. Launch readiness dashboard

On `/admin`, confirm the following sections work:

- Dashboard summary cards
- Launch readiness score
- Launch checklist copy
- Launch checklist download
- Launch checklist print / save PDF
- Readiness snapshot save
- Readiness snapshot delete
- Readiness history chart
- Snapshot CSV export
- Selected snapshot comparison
- Side-by-side snapshot comparison
- Side-by-side comparison copy and download
- Live page validation
- Stale draft warnings
- Stale draft item actions
- Stale draft group actions

## 6. Store and delivery flow

For at least one active product:

- Confirm product appears on `/store`
- Confirm product detail page loads
- Confirm active product has cover image and alt text
- Confirm active product has file attachments
- Confirm file descriptions are visible in admin
- Confirm account library shows purchased files for the correct user
- Confirm direct fulfillment creates purchase/license access as expected

## 7. Support flow

Test the support workflow.

- Signed-in user submits a message from `/support`
- Admin sees the message in `/admin/support`
- Admin updates status and notes
- User sees message history in account panel

## 8. Media and music flow

Confirm media and album management is stable.

- Upload or register a media asset
- Confirm public image picker can select media
- Confirm media usage indicators show product, blog, or album usage
- Confirm used media cannot be archived from the card
- Confirm album quick edit works
- Confirm album publishing guards block incomplete albums
- Confirm track quick edit works
- Confirm track publishing guards block incomplete tracks
- Confirm published album page renders on `/music/[slug]`

## 9. Legal and trust pages

Review legal pages before launch.

- Privacy Policy
- Terms of Use
- Refund Policy

These pages are starter copy and should be reviewed before public promotion.

## 10. Content cleanup

Before launch:

- Resolve stale drafts
- Archive abandoned drafts
- Confirm published posts are intentional
- Confirm Daily Light entries are intentional
- Confirm no test products are active
- Confirm no test albums are published
- Confirm no private media is linked on public pages

## 11. Final launch gate

Only launch when:

- `npm run lint` passes
- `npm run typecheck` passes
- `npm run build` passes
- Launch readiness score is acceptable
- No active products are missing delivery requirements
- No public pages are incomplete
- No open support messages require immediate response
- No pending or paid orders need manual review
