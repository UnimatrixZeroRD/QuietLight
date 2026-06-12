import { SignInForm } from "../../components/auth/sign-in-form";

export default function SignInPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <p className="gold-text uppercase tracking-[0.3em]">Sign In</p>
      <h1 className="gold-text mt-4 text-5xl md:text-7xl">Enter Quiet Light</h1>
      <p className="mt-8 text-xl leading-9 text-[var(--muted-silver)]">
        Request a magic link to access your account, future memberships, private reflections, purchases, and digital licenses.
      </p>
      <SignInForm />
    </main>
  );
}
