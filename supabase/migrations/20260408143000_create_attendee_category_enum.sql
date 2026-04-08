do $$
begin
  if not exists (
    select 1
    from pg_type t
    join pg_namespace n on n.oid = t.typnamespace
    where t.typname = 'attendee_category'
      and n.nspname = 'public'
  ) then
    create type public.attendee_category as enum (
      'Policy Maker',
      'Finance & Economics Professional',
      'Academic / Researcher',
      'Student',
      'Business Executive',
      'Media',
      'General Public'
    );
  end if;
end
$$;

