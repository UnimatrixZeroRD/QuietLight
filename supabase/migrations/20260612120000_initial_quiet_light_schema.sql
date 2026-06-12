-- Initial Quiet Light schema baseline.
-- This mirrors the first schema applied to the QuietLight Supabase project.

create extension if not exists pgcrypto;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  handle text unique,
  avatar_url text,
  bio text,
  role text not null default 'reader',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.membership_tiers (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  description text not null,
  price_cents integer not null default 0,
  currency text not null default 'CAD',
  billing_interval text not null default 'monthly',
  access_level text not null default 'member',
  is_active boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.memberships (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  tier_id uuid references public.membership_tiers(id) on delete set null,
  status text not null default 'active',
  provider text,
  provider_customer_id text,
  provider_subscription_id text,
  current_period_start timestamptz,
  current_period_end timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  subtitle text,
  excerpt text not null default '',
  body_md text not null default '',
  status text not null default 'draft',
  access_level text not null default 'public',
  featured_image_url text,
  published_at timestamptz,
  author_id uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.pages (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  summary text not null default '',
  body_md text not null default '',
  status text not null default 'draft',
  access_level text not null default 'public',
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.daily_light_entries (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  scripture_reference text,
  scripture_text text,
  reflection text not null,
  prayer text,
  status text not null default 'draft',
  access_level text not null default 'public',
  published_on date,
  author_id uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.scripture_references (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  summary text not null default '',
  book text not null,
  chapter integer not null,
  verse_start integer,
  verse_end integer,
  translation text,
  status text not null default 'published',
  access_level text not null default 'public',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  description text not null default '',
  product_type text not null default 'ebook',
  price_cents integer not null default 0,
  currency text not null default 'CAD',
  status text not null default 'draft',
  access_level text not null default 'paid_product',
  cover_image_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.product_files (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products(id) on delete cascade,
  title text not null,
  file_path text not null,
  file_type text not null default 'download',
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.purchases (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  product_id uuid references public.products(id) on delete set null,
  provider text,
  provider_payment_id text,
  amount_cents integer not null default 0,
  currency text not null default 'CAD',
  status text not null default 'pending',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.licenses (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  product_id uuid not null references public.products(id) on delete cascade,
  purchase_id uuid references public.purchases(id) on delete set null,
  license_type text not null default 'personal',
  status text not null default 'active',
  starts_at timestamptz not null default now(),
  expires_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.albums (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  subtitle text,
  description text not null default '',
  cover_image_url text,
  status text not null default 'draft',
  access_level text not null default 'public',
  released_on date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.tracks (
  id uuid primary key default gen_random_uuid(),
  album_id uuid references public.albums(id) on delete cascade,
  slug text not null unique,
  title text not null,
  description text not null default '',
  track_number integer,
  duration_seconds integer,
  embed_url text,
  status text not null default 'draft',
  access_level text not null default 'public',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.media_assets (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null default '',
  bucket text not null,
  path text not null,
  media_type text not null default 'image',
  access_level text not null default 'public',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (bucket, path)
);

create table if not exists public.embeds (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  provider text not null,
  embed_url text not null,
  description text not null default '',
  access_level text not null default 'public',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.membership_tiers enable row level security;
alter table public.memberships enable row level security;
alter table public.posts enable row level security;
alter table public.pages enable row level security;
alter table public.daily_light_entries enable row level security;
alter table public.scripture_references enable row level security;
alter table public.products enable row level security;
alter table public.product_files enable row level security;
alter table public.purchases enable row level security;
alter table public.licenses enable row level security;
alter table public.albums enable row level security;
alter table public.tracks enable row level security;
alter table public.media_assets enable row level security;
alter table public.embeds enable row level security;

insert into public.membership_tiers (slug, name, description, price_cents, billing_interval, access_level, sort_order)
values
  ('free-reader', 'Free Reader', 'Free access to public reflections, Daily Light, and basic updates.', 0, 'free', 'public', 1),
  ('supporter', 'Supporter', 'A simple way to support the work and receive deeper reflections.', 500, 'monthly', 'member', 2),
  ('keeper', 'Keeper', 'Deeper devotional access, member writing, and special releases.', 1500, 'monthly', 'member', 3)
on conflict (slug) do nothing;

insert into public.daily_light_entries (slug, title, reflection, prayer, status, access_level, published_on)
values ('the-flame-remains', 'The Flame Remains', 'I am not the light. I am only its keeper.', 'May the quiet flame remain steady in us today.', 'published', 'public', current_date)
on conflict (slug) do nothing;
