export type PaymentProvider = "stripe" | "paypal";

export type CheckoutIntent = {
  provider: PaymentProvider;
  productId?: string;
  membershipTierId?: string;
  successUrl: string;
  cancelUrl: string;
};

export type PaymentProviderStatus = {
  provider: PaymentProvider;
  enabled: boolean;
  purpose: "memberships" | "products" | "both";
};
