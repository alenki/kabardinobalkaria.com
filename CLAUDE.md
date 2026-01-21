# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Portfolio website for a web developer from Kabardino-Balkaria, Russia. The site positions the developer as "THE web developer from the region" with a strong regional identity featuring Caucasus imagery and curated local spots.

**Design Direction:** Alpine Editorial / Geographic Magazine aesthetic — think National Geographic meets Swiss design precision. Features large typography, dramatic full-bleed imagery, editorial layouts, and topographic visual motifs.

## Commands

- `npm run dev` - Start development server (http://localhost:5173)
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview production build

## Tech Stack

- **Build Tool**: Vite 7.x
- **Styling**: Tailwind CSS 4.x (CSS-based configuration with `@theme` directive)
- **Language**: Vanilla JavaScript (ES modules)
- **Routing**: Custom hash-based SPA router

## Architecture

```
src/
├── main.js              # App entry, router initialization
├── style.css            # Tailwind imports, custom theme, animations
├── components/
│   ├── header.js        # Navigation with scroll effects, mobile menu
│   ├── footer.js        # Footer with coordinates display
│   └── spot-card.js     # Cards and modal for curated spots
├── pages/
│   ├── home.js          # Homepage (hero, about, services, CTA)
│   ├── portfolio.js     # Portfolio with alternating project layouts
│   ├── discover.js      # Discover KB page with 10 spots grid
│   └── contact.js       # Contact form with info sidebar
├── data/
│   └── spots.js         # 10 curated locations with coords/elevation
└── utils/
    └── router.js        # Hash-based SPA router
```

## Design System

**Typography:**
- Display: Playfair Display (elegant, editorial)
- Body: Source Serif 4 (readable, refined)
- Mono: JetBrains Mono (coordinates, technical data)

**Colors (defined in `@theme`):**
- `stone-*`: Slate/charcoal palette (primary UI, backgrounds)
- `copper-*`: Bronze/copper accent (CTAs, highlights, hover states)
- `cream`: Off-white for contrast elements

**Visual Motifs:**
- Topographic contour lines (`.topo-pattern`)
- Elevation badges (`.elevation`)
- Coordinate displays (`.coords`)
- Grain overlay (`.grain`)

## Content

All content is in Russian. The 10 curated spots in `src/data/spots.js` include coordinates and elevation data:
Elbrus (5642m), Chegem Waterfalls, Gedmishkh Falls, Blue Lake (279m+ depth), Tyzyl Gorge, El-Tyubyu, Bezengi (5000m+), Upper Balkaria, Aushiger Hot Springs, Nalchik (512m).
