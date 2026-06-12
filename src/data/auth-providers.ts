export type SocialAuthProvider = {
  label: string;
  provider: "google" | "facebook" | "apple";
  enabled: boolean;
};

export const socialAuthProviders: SocialAuthProvider[] = [
  { label: "Continue with Google", provider: "google", enabled: false },
  { label: "Continue with Facebook", provider: "facebook", enabled: false },
  { label: "Continue with Apple", provider: "apple", enabled: false },
];
