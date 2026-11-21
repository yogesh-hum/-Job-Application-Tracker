# ApplyTrack

**Organize Your Job Search. Track Your Success.**

ApplyTrack is a full-stack job application tracking workspace built with Next.js, TypeScript, Tailwind CSS and Supabase.

## Current implementation

- Supabase email/password registration, login, logout and password recovery flows.
- Protected dashboard route with session refresh middleware.
- Data-backed overview cards, recent applications, upcoming interviews and follow-ups.
- Create and list job applications, including status, priority, work type, employment type, salary range, dates, URL and notes.
- Drag-and-drop pipeline board with persisted status changes.
- Interview, company, resume, follow-up, analytics and account settings views.
- PostgreSQL schema for profiles, companies, applications, interviews, resumes, follow-up tasks, notifications and activity logs.
- Row Level Security policies for user-owned records.
- Private PDF resume storage bucket (5 MB limit) with user-folder storage policies.
- Supabase migrations are included under `supabase/migrations`.

Some screens are initial read-only views and are not yet complete CRUD workflows. See **Known gaps** below; this is an in-progress first implementation, not a claim of production readiness.

## Stack

- Next.js App Router + React + TypeScript
- Tailwind CSS v4
- Supabase Auth, PostgreSQL and Storage
- Recharts (reserved for richer chart components)
- Lucide React icons

## Local setup

1. Install Node.js 20.9+.
2. Install dependencies: `npm install`.
3. Copy `.env.example` to `.env.local` and set your Supabase project URL and publishable key.
4. Run `npm run dev` and open `http://localhost:3000`.

Do not commit `.env.local`, service-role keys, database passwords or access tokens.

## Supabase project

The ApplyTrack project is hosted in the Mumbai region (`ap-south-1`). Apply the SQL migrations in order if setting up a fresh environment. Authentication uses Supabase Auth. Configure the Auth email templates and redirect URLs to include your local and production app URLs before testing email verification and password recovery end-to-end.

## Deployment

Connect this repository to Vercel and add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` as environment variables. Use the publishable key, never the service-role key, in the browser.

## Known gaps before production

- Full application edit/delete/detail pages, search, filters, pagination and CSV export.
- Full company CRUD and linking UX.
- Interview create/edit/cancel forms and calendar view.
- Resume upload/download/delete UI and metadata workflow.
- Follow-up create/complete UI and notification scheduling.
- Rich analytics charts and date filters.
- Profile editing, avatar upload and theme toggle.
- Automated unit, integration, accessibility and end-to-end tests.
- Production Auth email/redirect configuration and live smoke tests.
- Additional cross-record ownership constraints should be added for child records (interviews/follow-ups referencing applications) before multi-user production use.

## Security notes

All user-owned tables have RLS enabled. The app uses the Supabase publishable key and relies on RLS for client data access. Resume objects are private and scoped to a user's UUID folder. The signup profile trigger has restricted execute permissions; the timestamp trigger has a fixed search path. Review Supabase Security Advisors after each migration.
