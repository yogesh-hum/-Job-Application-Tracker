# ApplyTrack

**Organize Your Job Search. Track Your Success.**

ApplyTrack is a full-stack job application tracker built with Next.js, TypeScript, Tailwind CSS and Supabase.

## Current status

This repository is being initialized. The Supabase backend is already provisioned in Mumbai (`ap-south-1`) and its initial schema and RLS policies have been applied.

## Stack

- Next.js App Router, React and TypeScript
- Tailwind CSS v4
- Supabase Auth, PostgreSQL and private Storage

## Setup

1. Install Node.js 20.9+.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and configure the Supabase publishable key.
4. Run `npm run dev`.

Never commit `.env.local`, service-role keys, database passwords or tokens.

## Backend

Project URL: `https://hzqwsebqjpjfycxdsgkh.supabase.co` (Mumbai, `ap-south-1`). Initial SQL migrations will be checked in under `supabase/migrations`.

## Deployment

Connect this repository to Vercel and add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` as environment variables. Do not expose service-role credentials in the browser.

## Production readiness

Features and checks will be documented as they are implemented. The project must not be considered production-ready until CRUD workflows, authorization checks, automated tests, Auth redirect configuration and live smoke tests are complete.