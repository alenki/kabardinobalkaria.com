# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A beautiful, atmospheric website about Kabardino-Balkaria with a soft, dreamy style that captures the essence of the region — peaceful mountains, flowing rivers, warm sunlight, and timeless nature.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling with custom theme (defined in `src/index.css` using `@theme`)
- **Framer Motion** - Animations
- **React Router v7** - Client-side routing
- **Lenis** - Smooth scrolling

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Architecture

- `src/App.tsx` - Routes configuration using React Router nested routes
- `src/components/Layout.tsx` - Main layout wrapper with Navbar, Footer, and Lenis smooth scrolling
- `src/pages/` - Page components (Home, Nature, Places, Culture, Visit)
- `src/components/` - Reusable UI components (Hero, Card, Section, FadeIn)
- `src/index.css` - Global styles, Tailwind theme, custom animations, and utility classes

## Design System

### Aesthetic: "Mountain Reverie"
Dreamy, ethereal design inspired by morning mist, soft watercolors, and warm golden light.

### Color Palette (Custom Tailwind Colors)

- `meadow` - Muted greens (alpine meadows)
- `sky` - Soft blues (sky, water)
- `cream` - Warm cream (sunlight, stone) - **primary background**
- `gold` - Soft gold (sunset, warmth)
- `mist` - Cool grays (mountain mist)
- `lavender` - Purple accents (flowers)
- `teal` - Deep teal (Blue Lakes)
- `earth` - Warm browns (earth, wood) - **primary text**

### Typography

- **Serif**: `font-serif` → Cormorant Garamond (headings)
- **Sans**: `font-sans` → Outfit (body text)

### Key CSS Classes (defined in index.css)

```css
.noise-overlay     /* Film-like grain texture overlay */
.card-glass        /* Frosted glass morphism effect */
.card-ethereal     /* Subtle glass card with hover lift */
.btn-primary       /* Dark button with shimmer effect */
.btn-secondary     /* Light glass button */
.btn-ghost         /* Text button with underline on hover */
.section-padding   /* Consistent section spacing */
.text-gradient     /* Green-teal-blue gradient text */
.divider-mist      /* Gradient horizontal divider */
.image-dreamy      /* Image container with zoom on hover */
```

### Animation Easing

Custom easing for smooth, natural animations: `[0.16, 1, 0.3, 1]`

## Language

- **Website content**: Russian
- **Code/comments**: English
