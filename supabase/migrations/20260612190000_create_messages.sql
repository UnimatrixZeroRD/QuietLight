create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete set null,
  sender_name text not null default '',
  sender_address text not null default '',
  topic text not null default 'general',
  subject text not null default '',
  message_text text not null default '',
  status text not null default 'open',
  notes text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.messages enable row level security;

create policy "messages_insert_own"
on public.messages for insert
to authenticated
with check (user_id = auth.uid());

create policy "messages_select_own_or_admin"
on public.messages for select
to authenticated
using (user_id = auth.uid() or public.is_admin(auth.uid()));

create policy "messages_admin_all"
on public.messages for all
to authenticated
using (public.is_admin(auth.uid()))
with check (public.is_admin(auth.uid()));

create index if not exists messages_created_at_idx on public.messages(created_at desc);
create index if not exists messages_status_idx on public.messages(status);
create index if not exists messages_user_id_idx on public.messages(user_id);
