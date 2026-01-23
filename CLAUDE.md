# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Project Overview

A single-page website for kabardinobalkaria.com — a digital showcase of the Kabardino-Balkaria region in the Russian Caucasus. Currently contains Vite boilerplate; the target implementation is a React + Tailwind CSS site.

## Target Architecture (from README)

- **Tech Stack:** React with Tailwind CSS, single page, static site
- **Entry point:** `src/main.js` renders to `#app` in `index.html`

### Design System

**Colors:**
- Background: #FAF8F5 (Warm Cream)
- Primary accent: #7FB3C4 (Soft Teal)
- Secondary accent: #A8B5A0 (Sage Green)
- Body text: #2D3B2D (Deep Forest)
- Secondary text: #78716c (Stone Gray)

**Typography:**
- Headlines: "Cormorant Garamond" (Google Font, weight 500)
- Body: System sans-serif stack
- Line-height: 1.7 for body text

### Page Sections

1. Fixed minimal navigation with blur on scroll
2. Full-viewport hero with parallax background
3. Introduction with stats row
4. Discover section: 10 location cards in responsive grid (1/2/3 columns)
5. Quote interlude with fixed background
6. About section: two-column layout
7. Instagram CTA section
8. Simple footer

### Key UI Patterns

- Location cards open modals with full descriptions
- Animations: fade-in-up on load, scroll-triggered reveals, card hover effects
- All transitions: 300-500ms, ease-out
- Rounded corners throughout (rounded-2xl for cards, rounded-3xl for modals)
- Generous whitespace, light/airy aesthetic

### Content Data

README contains complete content for all 10 locations including: names, local names, subtitles, elevations, seasons, card background colors, and descriptions.
