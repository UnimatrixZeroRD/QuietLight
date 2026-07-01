create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  sender_name text not null,
  sender_email text not null,
  sender_phone text not null,
  topic text not null,
  subject text not null,
  message_text text not null,
  consent_to_contact boolean not null default false,
  consent_statement text not null,
  source text not null default 'support_page',
  status text not null default 'new' check (status in ('new', 'reviewed', 'closed')),
  created_at timestamptz not null default now()
);

alter table public.contact_submissions enable row level security;

create policy "Anyone may submit contact form"
  on public.contact_submissions
  for insert
  to anon, authenticated
  with check (
    consent_to_contact = true
    and length(trim(sender_name)) > 0
    and length(trim(sender_email)) > 0
    and length(trim(sender_phone)) > 0
    and length(trim(subject)) > 0
    and length(trim(message_text)) > 0
  );

create index if not exists contact_submissions_created_at_idx
  on public.contact_submissions (created_at desc);

create index if not exists contact_submissions_status_idx
  on public.contact_submissions (status, created_at desc);
