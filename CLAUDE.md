# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

An immersive single-page website for Kabardino-Balkaria, Russia. The site is structured as a vertical descent from Mount Elbrus (5,642m) to Nalchik (500m) — scrolling down equals descending in altitude. The design should feel dreamlike, cinematic, and organic rather than a typical tourism site.

## Commands

- `npm run dev` - Start development server (http://localhost:5173)
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview production build

## Tech Stack

- **Build Tool**: Vite 7.x
- **Styling**: Vanilla CSS (no framework currently)
- **Language**: Vanilla JavaScript (ES modules)

## Design Direction

### Visual Style
- Light, organic aesthetic — morning sunlight and flowing water
- Color palette shifts with altitude: whites/pale golds at summit → greens/blues at lower altitudes
- Full-screen imagery for each location with generous whitespace
- Smooth parallax scrolling with depth layers

### Typography
- Elegant serif for location names (Playfair Display, Cormorant)
- Clean sans-serif for descriptions (Inter, DM Sans)
- Minimal, poetic text — not informational blocks

### Animations
- Parallax scrolling with foreground/midground/background layers
- Subtle fade-ins for text on scroll
- Ken Burns effect or gentle opacity breathing on images (cinemagraph placeholders)
- Consider CSS scroll-snap for section alignment

## Site Structure (Top to Bottom)

Each zone has: name, elevation, one poetic line, optional "Explore" link.

1. **The Summit (5,642m)** — Mount Elbrus hero, transcendent silence
2. **The Heights (~2,500m)** — Bezengi Wall, Upper Balkaria
3. **The Waters (~1,500m)** — Jily-Su, Blue Lakes, Chegem Waterfalls
4. **The Gorges (~1,000m)** — Cherek Gorge, Baksan Valley
5. **The Gateway (~500m)** — Nalchik, final CTA, credits (Made by KARAF)

## Content Language

All content is in Russian. Keep text minimal and poetic.
