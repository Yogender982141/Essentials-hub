# Essentials Hub — Demo Project

This is a demo Blinkit-like grocery storefront called *Essentials Hub*.

## What is included
- Frontend: React (Vite) + Tailwind CSS (pages & components)
- Mock backend: Node + Express (server/data.json)
- Admin panel (demo) with image upload (base64)
- Payments demo (mock)
- Dynamic product images via Unsplash Source queries

## Quick start (local)
1. `npm install`
2. `npm run start`  # runs frontend + mock backend concurrently
3. Open http://localhost:5173

Backend runs on http://localhost:4000 by default.

## Deploy
- Frontend: Vercel/Netlify (build command: `npm run build`, output `dist`)
- Backend: Railway/Render or serverless function; point VITE_API_BASE to your backend URL.

