# Admin Products

The Quiet Light admin area now includes a first product management page.

Route:

- /admin/products

Components:

- src/components/admin/product-editor.tsx
- src/components/admin/product-list.tsx
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

Products can now select a public media asset as a cover image.

The product list shows recent products and includes a safe archive action.

---

## Current Limitations

This layer creates product records only.

It does not yet connect product files, payment checkout, purchases, or license delivery.

---

## Next Product Work

1. Add product editing.
2. Add product file records.
3. Add PayPal or Stripe checkout.
4. Add purchase records.
5. Add license delivery.
