create unique index if not exists purchases_provider_payment_id_unique_idx
on public.purchases(provider_payment_id)
where provider_payment_id is not null;
