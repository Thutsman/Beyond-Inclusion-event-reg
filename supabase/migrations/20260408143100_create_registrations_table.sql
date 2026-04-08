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

create table if not exists public.registrations (
  id uuid primary key default gen_random_uuid(),
  first_name text not null check (length(trim(first_name)) between 1 and 120),
  last_name text not null check (length(trim(last_name)) between 1 and 120),
  email text not null check (email ~* '^[A-Z0-9._%+\-]+@[A-Z0-9.\-]+\.[A-Z]{2,}$'),
  phone text check (phone is null or length(trim(phone)) <= 40),
  organisation text check (organisation is null or length(trim(organisation)) <= 200),
  category public.attendee_category not null,
  source text not null default 'web',
  ip_address inet,
  user_agent text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index if not exists registrations_email_unique_idx
  on public.registrations (lower(email));

create index if not exists registrations_created_at_idx
  on public.registrations (created_at desc);

create index if not exists registrations_category_idx
  on public.registrations (category);

drop trigger if exists set_registrations_updated_at on public.registrations;
create trigger set_registrations_updated_at
before update on public.registrations
for each row
execute function public.set_updated_at();

alter table public.registrations enable row level security;

drop policy if exists registrations_insert_public on public.registrations;
create policy registrations_insert_public
on public.registrations
for insert
to anon, authenticated
with check (true);

drop policy if exists registrations_select_none on public.registrations;
create policy registrations_select_none
on public.registrations
for select
to anon, authenticated
using (false);

revoke all on public.registrations from anon, authenticated;
grant insert on public.registrations to anon, authenticated;

comment on table public.registrations is 'Book launch registration submissions captured from the public form.';
comment on column public.registrations.metadata is 'Optional structured context (utm tags, referral info, etc.).';

