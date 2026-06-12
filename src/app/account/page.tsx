import Link from "next/link";
import { AccountPanel } from "../../components/auth/account-panel";

export default function AccountPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <p className="gold-text uppercase tracking-[0.3em]">Account</p>
      <h1 className="gold-text mt-4 text-5xl md:text-7xl">Your Quiet Light Account</h1>
      <p className="mt-8 max-w-3xl text-xl leading-9 text-[var(--muted-silver)]">
        This account area will grow into the home for memberships, digital purchases, licenses, and private devotional access.
      </p>
      <AccountPanel />
      <Link className="gold-text mt-8 inline-block uppercase tracking-[0.18em]" href="/sign-in">
        Go to sign in
      </Link>
    </main>
  );
}
