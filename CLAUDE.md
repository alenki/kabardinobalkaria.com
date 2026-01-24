# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A beautiful, atmospheric website about Kabardino-Balkaria with a soft, dreamy style that captures the essence of the region — peaceful mountains, flowing rivers, warm sunlight, and timeless nature.

## Tech Stack

- **React** + **TypeScript**
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling with custom theme
- **Framer Motion** - Animations
- **React Router** - Client-side routing

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── Layout.tsx  # Main layout with Navbar and Footer
│   ├── Navbar.tsx  # Navigation
│   ├── Footer.tsx  # Footer
│   ├── Hero.tsx    # Hero sections
│   ├── Card.tsx    # Card component
│   ├── Section.tsx # Section wrapper
│   └── FadeIn.tsx  # Animation wrapper
├── pages/          # Page components
│   ├── Home.tsx    # / - Main page
│   ├── Nature.tsx  # /priroda - Nature page
│   ├── Places.tsx  # /mesta - Places page
│   ├── Culture.tsx # /kultura - Culture page
│   └── Visit.tsx   # /posetit - Visit info page
├── App.tsx         # Routes configuration
├── main.tsx        # Entry point
└── index.css       # Global styles and Tailwind
```

## Design System

### Aesthetic Direction: "Mountain Reverie"
A dreamy, ethereal design inspired by:
- Morning mist rising over valleys
- Soft watercolor-like transitions
- The quietude of ancient mountains
- Warm golden light filtering through clouds

### Color Palette

Custom Tailwind theme with soft, watercolor-inspired colors:
- `meadow` - Muted greens (alpine meadows)
- `sky` - Soft blues (sky, water)
- `cream` - Warm cream (sunlight, stone)
- `gold` - Soft gold (sunset, warmth)
- `mist` - Cool grays (mountain mist)
- `lavender` - Purple accents (flowers)
- `teal` - Deep teal (Blue Lakes)
- `earth` - Warm browns (earth, wood)

### Typography

- **Serif**: Cormorant Garamond (elegant display font for headings)
- **Sans**: Outfit (modern, soft sans-serif for body)

### Key Visual Elements

- **Noise overlay**: Subtle film-like grain texture
- **Glass morphism**: Frosted glass effects on cards
- **Parallax**: Scroll-triggered depth effects
- **Floating elements**: Animated mist clouds
- **Decorative corners**: Subtle frame elements
- **Gradient overlays**: Multi-layer atmospheric effects

### Animation Principles

- Slow, flowing animations (like water, mist)
- Custom easing: `[0.16, 1, 0.3, 1]` (smooth, natural feel)
- Scroll-triggered reveals with blur effects
- Parallax on images for depth

## Language

- Website content: Russian
- Code/comments: English
