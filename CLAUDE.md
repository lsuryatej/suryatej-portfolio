# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Production build
npm run start    # Run production server
npm run lint     # ESLint v9 (flat config)
```

No test suite is configured.

## Architecture

Next.js 16 App Router portfolio site for an ML Engineer. All routing lives under `src/app/`.

**Key files:**
- `src/lib/data.ts` — Single source of truth for all content (projects, experience, education, skills, personal info). Update here to change site content.
- `src/lib/utils.ts` — Exports `cn()` (clsx + tailwind-merge) used everywhere for conditional classes.
- `src/app/globals.css` — All design tokens as CSS variables (colors, fonts, spacing). Dark theme only.
- `src/app/api/contact/route.ts` — Server-side email handler using Resend SDK. Requires `RESEND_API_KEY` in `.env.local`.

**Component boundary:** Sections (`src/components/sections/`) are server components. `nav.tsx` and `contact/page.tsx` are `"use client"` because they need scroll listeners and form state.

## Styling

Tailwind CSS v4 with a custom design system defined in `globals.css`:
- Background scale: `#080808` (page) → `#111111` (cards) → `#1a1a1a` (elevated)
- Accent: purple `#7c3aed`
- Custom utility classes: `.display` (Instrument Serif), `.mono-tag` (Geist Mono badge), `.grid-bg` (background grid effect)
- Use `cn()` from `@/lib/utils` for all conditional class merging — never raw string concatenation.

## Environment Variables

```
RESEND_API_KEY=   # Required for contact form emails
```

## Dependencies Worth Knowing

- **Framer Motion** — used for scroll-triggered animations (`whileInView`) and the nav active-indicator layout animation
- **Radix UI** — `@radix-ui/react-dialog` (mobile nav), `@radix-ui/react-tooltip`
- **Resend** — transactional email for the contact form (`/api/contact`)
- **next-themes** — wired up but site is dark-mode only; theme switcher not exposed in UI
