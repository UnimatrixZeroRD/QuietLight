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
- Sign-in link.
- Account library link.

A first checkout API scaffold now exists. It does not connect to a payment provider yet, but it gives the product page a stable route to connect to in the next payment phase.

---

## Current Limitations

Payment provider integration is not connected yet.

The current call to action still points users toward sign-in and the account library until payment automation is added.

---

## Next Store Work

1. Choose the first payment provider.
2. Add checkout session creation.
3. Add webhook handling.
4. Create purchase and license records after successful checkout.
5. Add customer purchase history.
