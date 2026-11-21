create or replace function public.set_updated_at() returns trigger language plpgsql set search_path=public as $$ begin new.updated_at=timezone('utc',now()); return new; end; $$;
revoke all on function public.handle_new_user() from public;
revoke all on function public.handle_new_user() from anon;
revoke all on function public.handle_new_user() from authenticated;
