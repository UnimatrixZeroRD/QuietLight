# Stale Draft Warnings

The admin dashboard now flags old drafts that may need review before launch.

## Route

`/admin`

## Threshold

Drafts are flagged when they have not been updated for 30 days or more.

## Checked areas

- Blog drafts
- Daily Light drafts
- Product drafts
- Album drafts

## Dashboard behavior

Each card shows:

- Number of stale drafts
- First few draft titles
- Draft age
- Link to the matching admin list
- Direct link to the exact admin card when available

## Direct anchors

Stale draft links now target the matching admin card anchors:

- Blog drafts: `/admin/content#content-post-[id]`
- Daily Light drafts: `/admin/content#content-daily-light-[id]`
- Product drafts: `/admin/products#product-[id]`
- Album drafts: `/admin/music#album-[id]`

## Follow-up

Future work can add full direct edit routing for individual draft items.
