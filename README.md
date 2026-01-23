# kabardinobalkaria.com
kabardinobalkaria.com website


# Kabardino-Balkaria Website — Build Prompt

## Project Overview

Build a single-page website for **kabardinobalkaria.com** — a digital showcase of the Kabardino-Balkaria region in the Russian Caucasus. The site should feel like looking through a window into a dream: soft, light, flowing, nature-focused. It exists to make visitors *feel* the region and want to explore it.

**Tech stack:** React with Tailwind CSS. Single page, responsive, deployable as a static site.

---

## Design Philosophy

### Core Feeling
- **Light over dark** — morning sunlight, openness, air
- **Flow over grid** — water doesn't move in boxes
- **Breath and space** — generous margins, room to rest
- **Photography as hero** — landscapes speak for themselves
- **Soft interactions** — nothing jarring, everything gentle like a breeze
- **Timeless typography** — elegant serif for headlines, feels like a beautiful travel journal

### What to Avoid
- Dark themes
- Sharp corners
- Aggressive animations
- Tech/startup aesthetics
- Portfolio or business-focused design
- Generic tourist website look

---

## Color Palette

| Name | Hex | Use |
|------|-----|-----|
| Warm Cream | #FAF8F5 | Main background |
| Soft Teal | #7FB3C4 | Primary accent (links, highlights) |
| Sage Green | #A8B5A0 | Secondary accent |
| Warm Stone | #C4B6A6 | Tertiary |
| Deep Forest | #2D3B2D | Body text |
| Stone Gray | #78716c | Secondary text |
| White | #FFFFFF | Cards, overlays |

Each location card should have a subtle unique background tint (provided in content below).

---

## Typography

- **Headlines:** Google Font "Cormorant Garamond" (weight 500) — elegant, timeless serif
- **Body:** System sans-serif stack (-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif)
- **Characteristics:** Light font weights, generous line-height (1.7 for body), tight letter-spacing on headlines

---

## Layout & Components

### 1. Navigation (Fixed, Minimal)
- Left: Site name "Kabardino-Balkaria" in Cormorant Garamond
- Right: "Discover" | "About" links (hidden on mobile) + Instagram CTA with icon
- Transparent background, becomes slightly blurred white on scroll
- No hamburger menu needed — keep it simple

### 2. Hero Section (Full viewport height)
- Full-screen background image with subtle parallax on scroll
- Soft gradient overlay (white/transparent, fading to background color at bottom)
- Optional: Floating particles animation (subtle, like pollen or light dust)
- Content centered:
  - Small caps text: "The Heart of the Caucasus"
  - Large headline: "Kabardino-Balkaria" (Cormorant Garamond, very large)
  - Subline: "Where Europe's highest peaks meet ancient villages, glacial lakes hold their secrets, and time moves to the rhythm of mountain rivers."
  - CTA button: "Begin exploring" with down arrow, rounded-full, soft white background with backdrop blur

### 3. Introduction Section
- Max-width ~800px, centered
- Single paragraph, larger text (xl or 2xl), light weight:
  "A republic in southern Russia that most people have never heard of. Home to Mount Elbrus, bottomless blue lakes, waterfalls that emerge straight from cliff faces, and villages that have stood for a thousand years."
- Below: Small stats row with dots between: "6 peaks above 5,000m · Population 870,000 · Established 1922"

### 4. Discover Section (Main Content)
- Section header:
  - Small teal uppercase label: "Discover"
  - Large headline: "Ten places that will stay with you"
  - Short description paragraph
- Grid of 10 location cards (responsive: 1 col mobile, 2 col tablet, 3 col desktop)
- Gap: 24-32px

#### Location Card Design
- Rounded-2xl corners
- Subtle shadow, increases on hover
- Each card has unique soft background color (provided in content)
- Structure:
  - Image container (aspect-ratio 4/5) with image that scales slightly on hover
  - Soft gradient overlay from bottom (white/transparent)
  - Content area below image on colored background:
    - Local name in italics if exists (e.g., "Tserik-Kel")
    - Location name (Cormorant Garamond, xl size)
    - Subtitle/tagline
    - Small stats: elevation + season
- On hover: subtle bottom border line appears (teal, gradient fade on edges)
- Clicking card opens modal

#### Location Modal
- Centered overlay with backdrop blur and dark transparent background
- White modal with rounded-3xl corners
- Close button (X) top right, rounded-full
- Image header (h-64 to h-80)
- Content on location's unique background color:
  - Local name (if exists)
  - Large name headline
  - Italic subtitle
  - Full description paragraph
  - Stats row: Elevation, Best Season
- Smooth entrance animation (fade + scale + slight translateY)

### 5. Quote Interlude Section
- Full-width, generous vertical padding (py-32)
- Background: Soft landscape image, fixed position, low opacity (20%)
- Centered content:
  - Large quotation mark icon (teal, low opacity)
  - Quote in Cormorant Garamond italic, large size (3xl-4xl):
    "The nature here is more rigid and serious than in neighboring regions. Like a face that was smiling — and then suddenly became thoughtful."
  - Attribution: "— Artyem Babaritsky, local guide"

### 6. About Section
- Two-column layout (stacks on mobile)
- Left: Image with rounded corners, aspect-ratio 4/5. Optional: small floating accent image offset bottom-right
- Right:
  - Small teal label: "About this place"
  - Headline: "A region that rewards the curious"
  - 3 paragraphs of history/context (provided below)
  - Info grid (2x2): Capital, Getting there, Best season, Languages

### 7. Follow Section (Instagram CTA)
- Centered, simple
- Headline: "Follow the journey"
- Short text: "I share new places, stories, and the everyday beauty of this region on Instagram."
- Button: Dark rounded-full with Instagram icon + "@your_handle"

### 8. Footer
- Simple, single row (stacks on mobile)
- Left: Site name
- Center: Contact link, Instagram link
- Right: "Made with love from the Caucasus"
- Top border, light stone color

---

## Content for the 10 Locations

### 1. Mount Elbrus
- **Subtitle:** "Europe's Highest Peak"
- **Elevation:** 5,642m
- **Season:** Year-round
- **Card color:** #E8F4F8
- **Description:** "Twin summits of a sleeping volcano, crowned with eternal ice. At sunrise, the snow turns pink and gold. A cable car lifts you above the clouds to 3,847 meters, where the world becomes very quiet."
- **Image:** Mountain/snow peak landscape

### 2. Chegem Gorge
- **Subtitle:** "Where Water Becomes Light"
- **Elevation:** 1,200m
- **Season:** Year-round
- **Card color:** #F0F5E9
- **Description:** "Waterfalls pour directly from the cliff face, catching sunlight as they fall. The gorge narrows until the walls nearly touch — 250 meters of stone with only sky above. In winter, the falls freeze into cathedrals of ice."
- **Image:** Gorge/waterfall landscape

### 3. Blue Lake
- **Local name:** Tserik-Kel
- **Subtitle:** "The Bottomless Mystery"
- **Elevation:** 809m
- **Season:** Year-round
- **Card color:** #E5EEF3
- **Description:** "No one has reached the bottom. Over 279 meters deep, no fish, constant temperature year-round. The water is so clear it seems lit from within. Jacques Cousteau came here searching for answers. The lake kept its secrets."
- **Image:** Clear blue lake

### 4. Gedmishkh Falls
- **Local name:** Avatar Falls
- **Subtitle:** "The Crown of Water"
- **Elevation:** 1,400m
- **Season:** Year-round
- **Card color:** #F5F0E8
- **Description:** "Seventy jets of water emerge from the rock at a hundred meters, fanning out like a crown. The mist catches rainbows. Locals say the water heals. It certainly makes you stop and remember what wonder feels like."
- **Image:** Multi-stream waterfall

### 5. El-Tyubyu
- **Local name:** City of the Dead
- **Subtitle:** "The City of Silence"
- **Elevation:** 1,100m
- **Season:** Year-round
- **Card color:** #EDE8E3
- **Description:** "Ancient watchtowers still stand guard over the valley. Medieval mausoleums hold eight centuries of nobility. Greek stairs carved into cliff faces lead to lookouts abandoned long ago. The village remembers everything."
- **Image:** Ancient towers/village

### 6. Tyzyl Gorge
- **Subtitle:** "The Forgotten Valley"
- **Elevation:** 1,600m
- **Season:** Summer
- **Card color:** #E9F0E5
- **Description:** "The least-visited corner of the republic. Flowering meadows give way to caves holding fossils from when this was an ancient seabed. The landscapes feel prehistoric — as if something might emerge from behind the rocks at any moment."
- **Image:** Green valley/meadow

### 7. Bezengi Wall
- **Subtitle:** "The Russian Himalayas"
- **Elevation:** 5,000m+
- **Season:** Summer
- **Card color:** #F2F5F8
- **Description:** "Thirteen kilometers of unbroken ice and stone. Five summits above 5,000 meters. Soviet mountaineers trained here for the real Himalayas. At its foot, a village of climbers with a bathhouse, a kindergarten, and a view that never gets ordinary."
- **Image:** Dramatic mountain wall

### 8. Upper Balkaria
- **Subtitle:** "The Village That Returned"
- **Elevation:** 1,050m
- **Season:** Year-round
- **Card color:** #F0EBE5
- **Description:** "In 1944, the entire population was deported. In 1957, they came back and rebuilt around the ruins of their ancestors. Defensive towers stand next to vegetable gardens. The Cherek River flows past, indifferent to centuries."
- **Image:** Mountain village

### 9. Aushiger Springs
- **Subtitle:** "Where Earth Breathes Warm"
- **Elevation:** 520m
- **Season:** Year-round
- **Card color:** #E8EDE5
- **Description:** "Mineral water rises from deep in the earth, forming pools that steam against the mountain air. The water is genuinely therapeutic — not a marketing claim but a reason people have come here for generations."
- **Image:** Hot springs/steam

### 10. Nalchik
- **Subtitle:** "The Gentle Capital"
- **Elevation:** 512m
- **Season:** Year-round
- **Card color:** #F5F2EE
- **Description:** "A small city in the foothills built around parks and mineral springs. Soviet sanatoriums where Russians once came to heal. Wide boulevards lined with trees. The place you return to after the mountains, where ordinary life continues."
- **Image:** City park/trees

---

## About Section Content

**Paragraph 1:**
"Kabardino-Balkaria sits in the central Caucasus, bordered by Georgia to the south. Two peoples — the Kabardins (Circassian) and the Balkars (Turkic) — have shared this land for centuries, each with their own language, traditions, and relationship to these mountains."

**Paragraph 2:**
"The Balkars were deported to Central Asia in 1944, accused of Nazi collaboration. They returned in 1957 to rebuild their villages around the ancient towers their ancestors had left behind. That history is visible everywhere if you know where to look."

**Paragraph 3:**
"Today, the republic draws mountaineers, seekers of hot springs, and a growing number of people who simply want to see something they've never seen before."

**Info grid:**
- Capital: Nalchik
- Getting there: Flights via Moscow
- Best season: May – October
- Languages: Russian, Kabardian, Balkar

---

## Animations & Interactions

- **Page load:** Gentle fade-in-up for hero content (staggered)
- **Scroll:** Cards fade/slide in as they enter viewport
- **Hero parallax:** Background image moves slower than scroll (subtle, ~0.3 ratio)
- **Card hover:** Image scales slightly (1.05), shadow increases, bottom accent line appears
- **Modal:** Fades in with slight scale-up and translateY
- **All transitions:** Slow and smooth (300-500ms), ease-out timing
- **Optional:** Floating particles in hero (very subtle, low count, slow movement)

---

## Responsive Behavior

- **Mobile:** Single column, stacked layout, smaller text sizes, navigation links hidden (just logo + Instagram)
- **Tablet:** 2-column grid for cards
- **Desktop:** 3-column grid for cards, side-by-side layouts for About section

---

## Placeholder Images

Use Unsplash URLs for now (user will replace with their own photos):
- Hero: `https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80`
- Locations: Use varied mountain/nature landscapes from Unsplash
- About section: `https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80`

---

## Final Notes

- The site should feel peaceful to browse — no urgency, no aggressive CTAs
- White space is a feature, not wasted space
- Every text element should be carefully considered — this is more poetry than marketing
- The Instagram handle placeholder is `@your_handle` — user will replace
- Email placeholder: `hello@kabardinobalkaria.com`
- No portfolio, no services, no "hire me" — this is purely a regional showcase
- Smooth scroll behavior enabled globally

---

Build this as a single React component file using Tailwind CSS. Make it beautiful.