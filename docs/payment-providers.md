# Payment Providers

Quiet Light should keep the payment layer flexible.

The platform may use **Stripe**, **PayPal**, or both.

Stripe is a strong option for subscriptions, memberships, product checkout, customer management, and automated billing.

PayPal is a strong option for donations, one-time purchases, and users who prefer PayPal checkout.

The application should avoid being hard-wired to one provider. The code should use an internal payment provider model so Stripe or PayPal can be selected depending on what is best for launch.

---

## Planned Payment Uses

Quiet Light may eventually use payments for:

- Membership subscriptions.
- One-time e-book purchases.
- Music purchases.
- Video purchases.
- Digital product bundles.
- Donations or support links.

---

## Access After Payment

After a successful payment, the platform should create the proper access record.

That access may be:

- A membership.
- A product purchase.
- A digital access license.

Access should be controlled by the Quiet Light application, not by scattered payment buttons across the site.

---

## Initial Direction

Build the platform so both Stripe and PayPal can be supported.

Pick the easiest provider for the first real checkout flow, then add the second provider later if needed.
