# ApplyTrack

**Organize Your Job Search. Track Your Success.**

ApplyTrack is a full-stack job application tracking workspace built with Next.js 15, React 19, TypeScript, Tailwind CSS v4 and Supabase.

## Features

- Email/password sign-up, sign-in and password recovery
- Protected dashboard with application/interview/follow-up summaries
- Create and list job applications
- Drag/drop application pipeline with persisted status updates
- Company, interview, resume, follow-up and analytics views
- Supabase PostgreSQL with owner-scoped row-level security
- Private PDF resume storage bucket (5 MB limit)

Some entity screens are currently read-only; create/edit/delete flows for interviews, companies, resumes and follow-ups remain to be completed. This is an initial usable foundation, not yet certified production-ready.

## Tech stack

- Next.js App Router, React, TypeScript
- Tailwind CSS v4, Lucide React
- Supabase Auth, PostgreSQL, Storage

## Local development

1. Install Node.js 20.9+.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local`.
4. Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to the Supabase project URL and publishable key.
5. Run `npm run dev` and open `http://localhost:3000`.

Never commit `.env.local`, service-role keys, database passwords or tokens.

## Supabase backend

Project URL: https://hzqwsebqjpjfycxdsgkh.supabase.co  
Region: Mumbai (`ap-south-1`).

The dedicated Supabase project has the eight application tables and RLS enabled. Keep migrations in `supabase/migrations`. The browser app must use only the publishable/anon key; all access is constrained by RLS.

## Deployment

The project is configured for Vercel Git deployment. Set the two public Supabase variables in Vercel for Production, Preview and Development. Configure Supabase Auth Site URL and redirect URLs to the Vercel domain before testing email verification and password reset. Run CI and live auth/data smoke tests before marking production-ready.

## Roadmap before production

- Full application detail/edit/delete, search, filters, pagination and CSV export
- Company CRUD and linking UX
- Interview create/edit/cancel and calendar view
- Resume upload/download/delete UI
- Follow-up create/complete UI and notification scheduling
- Rich analytics charts and filters
- Profile editing, avatar and preferences
- Automated unit, integration, accessibility and E2E tests
- Cross-record ownership checks for interview/follow-up foreign keys
- End-to-end auth redirect and deployment smoke tests
