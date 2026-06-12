export type AccessLevel = "public" | "free_account" | "member" | "paid_product" | "private";

export type PublishStatus = "draft" | "published" | "archived";

export type BaseContent = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  accessLevel: AccessLevel;
  status: PublishStatus;
};
