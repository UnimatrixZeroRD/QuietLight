# Admin Products

The Quiet Light admin area now includes a first product management page.

Route:

- /admin/products

Components:

- src/components/admin/product-editor.tsx
- src/components/admin/product-list.tsx

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

The product list shows recent products and includes a safe archive action.

---

## Current Limitations

This layer creates product records only.

It does not yet connect files, payment checkout, purchases, or license delivery.

---

## Next Product Work

1. Add product editing.
2. Add product file records.
3. Add product cover image selection.
4. Add PayPal or Stripe checkout.
5. Add purchase records.
6. Add license delivery.
