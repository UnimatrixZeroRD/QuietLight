export type AccessLevel = "public" | "free_account" | "member" | "paid_product" | "private";

export type ViewerContext = {
  isSignedIn: boolean;
  isMember: boolean;
  ownedProductIds: string[];
};

export function canViewContent(accessLevel: AccessLevel, viewer: ViewerContext) {
  if (accessLevel === "public") {
    return true;
  }

  if (accessLevel === "free_account") {
    return viewer.isSignedIn;
  }

  if (accessLevel === "member") {
    return viewer.isMember;
  }

  if (accessLevel === "paid_product") {
    return viewer.ownedProductIds.length > 0;
  }

  return false;
}
