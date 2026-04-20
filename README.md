# Sounds Of Suds Full-Stack Starter

This project includes:
- Next.js frontend
- splash screen + hero carousel
- booking form
- Supabase booking storage
- Twilio SMS helper
- Stripe checkout route
- admin login
- dashboard with booking/payment controls

## 1. Install

```bash
npm install
```

## 2. Create env file

Copy `.env.example` to `.env.local` and fill in your real values.

## 3. Create Supabase table

Open your Supabase SQL editor and run:

```sql
-- paste supabase/schema.sql
```

## 4. Start dev server

```bash
npm run dev
```

## 5. Open app

- Homepage: http://localhost:3000
- Admin login: http://localhost:3000/admin-login

## Admin login

Use the values from:
- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`

## Notes

- The dashboard auth is a simple env-based admin login starter.
- Stripe route is included, but the homepage currently saves bookings directly.
- Twilio SMS sends only if your Twilio env vars are set.
- This is a launchable starter, not a finished production app.
