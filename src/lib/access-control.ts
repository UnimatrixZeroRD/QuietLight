export type AccessLevel = "public" | "free_account" | "member" | "paid_product" | "private";

export type GatedResource = {
  accessLevel: AccessLevel;
  requiredMembershipTier?: string;
  requiredProductId?: string;
};
