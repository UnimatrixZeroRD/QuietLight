# Store Product Pages

Quiet Light now includes public product detail pages for the store.

Routes:

- /store
- /store/[slug]
- /api/checkout

Implementation:

- src/lib/supabase/store-products.ts
- src/app/store/page.tsx
- src/app/store/[slug]/page.tsx
- src/components/store/payment-options.tsx
- src/components/store/checkout-button.tsx
- src/app/api/checkout/route.ts

---

## Current Capabilities

The store index now links each product card to a detail page.

The product detail page shows:

- Product type.
- Product status.
- Product title.
- Product price.
- Product description.
- Product cover image when one is available.
- Payment option selector.
- Account library link.

The product page now lists three payment options:

- Card through a future Stripe connection.
- PayPal through a future PayPal connection.
- Manual Canadian e-transfer instructions.

The checkout API scaffold accepts a product slug and selected method. Stripe and PayPal return placeholder messages. E-transfer returns manual instructions using NEXT_PUBLIC_ETRANSFER_EMAIL when configured.

---

## Current Limitations

Stripe and PayPal are listed but not connected to live provider flows yet.

E-transfer access is still manual: after payment is confirmed, admin grants product access in /admin/members.

---

## Next Store Work

1. Add order intent records for manual and provider-based purchases.
2. Add customer purchase history.
3. Add provider checkout session creation later.
4. Add webhook handling later.
5. Create purchase and license records after successful provider checkout later.
