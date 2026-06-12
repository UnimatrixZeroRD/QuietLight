# Admin Products

The Quiet Light admin area now includes a first product management page.

Route:

- /admin/products

Components:

- src/components/admin/product-editor.tsx
- src/components/admin/product-list.tsx
- src/components/admin/product-file-manager.tsx
- src/components/admin/public-image-picker.tsx

---

## Current Capabilities

The product editor can create products for:

- E-books.
- Music.
- Video.
- Bundles.
- Downloads.
- Membership products.

Products can be saved as:

- Draft.
- Active.
- Archived.

Products can select a public media asset as a cover image.

The product list shows recent products and includes a safe archive action.

The product file manager can attach uploaded files from product, member, or private storage buckets to a product record.

---

## Current Limitations

This layer creates product records and product file records.

It does not yet create payment checkout, purchases, or license delivery.

---

## Next Product Work

1. Add signed file delivery.
2. Add PayPal or Stripe checkout.
3. Add purchase records.
4. Add license delivery.
5. Add product editing.
