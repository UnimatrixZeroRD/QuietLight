import { MemberList } from "../../../components/admin/member-list";

export default function AdminMembersPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <p className="gold-text uppercase tracking-[0.3em]">Admin Members</p>
      <h1 className="gold-text mt-4 text-5xl md:text-7xl">Members and Access</h1>
      <p className="mt-8 max-w-3xl text-xl leading-9 text-[var(--muted-silver)]">
        Review profiles, roles, membership status, and future access controls.
      </p>
      <MemberList />
    </main>
  );
}
