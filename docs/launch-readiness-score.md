# Launch Readiness Score

The admin dashboard now includes a single readiness score for launch review.

## Route

`/admin`

## Weighted areas

The score combines four areas:

- Operations: 25%
- Delivery: 25%
- Live pages: 30%
- Draft cleanup: 20%

The UI now shows each weight and the formula behind each section.

## Operations

Orders waiting for review and open messages reduce the operations score.

Formula:

`100 - pending orders x18 - paid review orders x14 - open messages x18`

## Delivery

Active products are checked for delivery readiness.

A product is counted as ready when it has:

- Description
- Cover image
- Cover alt text
- Delivery files
- File descriptions

Formula:

`ready active products / all active products`

If there are no active products, this area defaults to 50%.

## Live pages

Published public blog posts, Daily Light entries, active products, and public albums are checked for visible page details.

Formula:

`complete live items / all live items`

If there are no live items, this area defaults to 50%.

## Draft cleanup

Drafts older than 30 days reduce the cleanup score.

Formula:

`100 - stale drafts x10`

## Checklist export

The launch readiness panel now generates a copyable launch-review checklist.

The checklist includes:

- Overall readiness percentage
- Score line for each readiness area
- Review action list
- Copy button
- Manual text area fallback

## Follow-up

Future work can add configurable weights and downloadable checklist files.
