# Launch Readiness Score

The admin dashboard now includes a single readiness score for launch review.

## Route

`/admin`

## Weighted areas

The score combines four areas:

- Operations
- Delivery
- Live pages
- Draft cleanup

## Operations

Orders waiting for review and open messages reduce the operations score.

## Delivery

Active products are checked for delivery readiness.

A product is counted as ready when it has:

- Description
- Cover image
- Cover alt text
- Delivery files
- File descriptions

## Live pages

Published public blog posts, Daily Light entries, active products, and public albums are checked for visible page details.

## Draft cleanup

Drafts older than 30 days reduce the cleanup score.

## Follow-up

Future work can add configurable weights and launch checklist exports.
