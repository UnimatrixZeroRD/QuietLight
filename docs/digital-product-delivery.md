# Digital Product Delivery

Quiet Light now has a complete manual digital product delivery path.

---

## Current Flow

1. Admin uploads a file in Admin Media.
2. Admin attaches that uploaded file to a product in Admin Products.
3. The public product page shows customer-facing included file summaries.
4. A signed-in user creates an order from /store/[slug].
5. Admin fulfills the order from /admin/orders.
6. Fulfillment creates a purchase record and an active license.
7. The user sees the product in /account.
8. The user downloads licensed files through signed download links.

---

## Admin Product Files

Product file records now include:

- Display title.
- Customer-facing description.
- File type.
- Sort order.
- Storage bucket.
- Storage path.

The file path and storage bucket remain admin/internal delivery details. The public store page only shows safe file summary information.

---

## Public Product Page

Product pages now include an Included after purchase section.

This section displays:

- File title.
- File type.
- File description.

It does not expose private storage paths.

---

## Account Library

The account product library now displays each licensed product with:

- Product cover.
- Product description.
- Downloadable file cards.
- File descriptions.
- Signed download buttons.

---

## Next Work

1. Add file replacement/editing for attached product files.
2. Add delete/detach controls for product files.
3. Add file size metadata.
4. Add delivery status checks for products with no attached files.
5. Add an admin warning when a product is active but has no attached files.
