create table if not exists public.order_intents (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete set null,
  product_id uuid references public.products(id) on delete set null,
  product_slug text not null,
  product_title text,
  method text not null check (method in ('stripe', 'paypal', 'etransfer')),
  amount_cents integer,
  currency text not null default 'CAD',
  status text not null default 'pending' check (status in ('pending', 'paid', 'fulfilled', 'cancelled')),
  customer_email text,
  notes text,
  provider_reference text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists order_intents_user_id_idx on public.order_intents(user_id);
create index if not exists order_intents_product_id_idx on public.order_intents(product_id);
create index if not exists order_intents_status_idx on public.order_intents(status);
create index if not exists order_intents_created_at_idx on public.order_intents(created_at desc);

alter table public.order_intents enable row level security;

drop trigger if exists set_order_intents_updated_at on public.order_intents;
create trigger set_order_intents_updated_at
before update on public.order_intents
for each row execute function public.set_updated_at();

do $$
begin
  if not exists (select 1 from pg_policies where schemaname = 'public' and tablename = 'order_intents' and policyname = 'Users can read own order intents') then
    create policy "Users can read own order intents"
    on public.order_intents
    for select
    to authenticated
    using (user_id = auth.uid());
  end if;

  if not exists (select 1 from pg_policies where schemaname = 'public' and tablename = 'order_intents' and policyname = 'Users can create own order intents') then
    create policy "Users can create own order intents"
    on public.order_intents
    for insert
    to authenticated
    with check (user_id = auth.uid());
  end if;

  if not exists (select 1 from pg_policies where schemaname = 'public' and tablename = 'order_intents' and policyname = 'Admins can manage order intents') then
    create policy "Admins can manage order intents"
    on public.order_intents
    for all
    to authenticated
    using (public.is_admin(auth.uid()))
    with check (public.is_admin(auth.uid()));
  end if;
end $$;
