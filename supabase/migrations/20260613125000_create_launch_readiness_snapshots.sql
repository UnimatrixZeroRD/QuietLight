create table if not exists public.launch_readiness_snapshots (
  id uuid primary key default gen_random_uuid(),
  created_by uuid references auth.users(id) on delete set null,
  total_score integer not null check (total_score >= 0 and total_score <= 100),
  operations_score integer not null check (operations_score >= 0 and operations_score <= 100),
  delivery_score integer not null check (delivery_score >= 0 and delivery_score <= 100),
  live_pages_score integer not null check (live_pages_score >= 0 and live_pages_score <= 100),
  draft_cleanup_score integer not null check (draft_cleanup_score >= 0 and draft_cleanup_score <= 100),
  checklist text not null default '',
  notes text not null default '',
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table public.launch_readiness_snapshots enable row level security;

create index if not exists launch_readiness_snapshots_created_at_idx on public.launch_readiness_snapshots (created_at desc);
create index if not exists launch_readiness_snapshots_created_by_idx on public.launch_readiness_snapshots (created_by);

drop policy if exists "Admins can read launch readiness snapshots" on public.launch_readiness_snapshots;
create policy "Admins can read launch readiness snapshots"
  on public.launch_readiness_snapshots
  for select
  to authenticated
  using (public.is_admin(auth.uid()));

drop policy if exists "Admins can create launch readiness snapshots" on public.launch_readiness_snapshots;
create policy "Admins can create launch readiness snapshots"
  on public.launch_readiness_snapshots
  for insert
  to authenticated
  with check (public.is_admin(auth.uid()));

drop policy if exists "Admins can update launch readiness snapshots" on public.launch_readiness_snapshots;
create policy "Admins can update launch readiness snapshots"
  on public.launch_readiness_snapshots
  for update
  to authenticated
  using (public.is_admin(auth.uid()))
  with check (public.is_admin(auth.uid()));

drop policy if exists "Admins can delete launch readiness snapshots" on public.launch_readiness_snapshots;
create policy "Admins can delete launch readiness snapshots"
  on public.launch_readiness_snapshots
  for delete
  to authenticated
  using (public.is_admin(auth.uid()));
