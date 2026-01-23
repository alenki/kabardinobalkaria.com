import './style.css'

// ========================================
// DATA
// ========================================

const locations = [
  {
    id: 1,
    name: "Mount Elbrus",
    tagline: "Europe's highest point. My backyard.",
    excerpt: "At 5,642 meters, a dormant volcano dominating the Caucasus skyline.",
    description: "At 5,642 meters, Elbrus is a dormant volcano with twin peaks that dominate the Caucasus skyline. Most people think you need to be a mountaineer to experience it — you don't. A cable car takes you to Gara-Bashi station at 3,847 meters, where you're standing above the clouds with glaciers stretching in every direction.\n\nThe weather changes fast up here. One moment you're in blinding sun; the next, fog swallows everything. That unpredictability is part of the appeal.",
    bestTime: "Year-round. Winter for skiing, summer for hiking and views.",
    access: "Cable car from Polyana Azau. Bring layers even in July.",
    image: "https://images.unsplash.com/photo-1516655855035-d5215bcb5604?w=800&q=80"
  },
  {
    id: 2,
    name: "Chegem Waterfalls",
    tagline: "The gorge that keeps going.",
    excerpt: "Waterfalls cascading from cliffs, 250-meter walls blocking the sun.",
    description: "Chegem starts with waterfalls cascading directly from the cliff face — impressive, but just the opening act. The gorge narrows to 20 meters wide with 250-meter walls blocking out the sun. Keep driving on the dirt road and it opens into Upper Chegem: wide, sunlit, with eagles circling overhead and paragliders launching from the ridges.\n\nAt the base, local women sell handwoven wool products. There's a 222-step climb called the 'Ladder of Happiness' to a cafe at the top. In winter, the waterfalls freeze into massive ice formations.",
    bestTime: "Year-round — completely different character each season.",
    access: "55km from Nalchik. Paved road to the waterfalls, dirt beyond.",
    image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80"
  },
  {
    id: 3,
    name: "Gedmishkh Falls",
    tagline: "70 jets of water from a 100-meter cliff. Unreal.",
    excerpt: "Also called 'Avatar Falls' — it looks designed for a film set.",
    description: "Also called 'Tsar's Crown' or 'Waterfall of 70 Jets,' Gedmishkh looks like it was designed for a film set. A spring emerges directly from the rock face at 100 meters and splits into dozens of streams that fan out across the cliff. The comparison to Avatar's Pandora isn't an exaggeration.\n\nLocals believe the water has healing properties. Whether or not that's true, standing beneath it feels like something — the negative ions, maybe, or just the scale of it.",
    bestTime: "Summer for the full effect. Winter transforms it into an ice sculpture.",
    access: "60km from Nalchik. The final stretch requires some hiking.",
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=800&q=80"
  },
  {
    id: 4,
    name: "Blue Lake",
    tagline: "Russia's deepest mystery.",
    excerpt: "279+ meters deep. No fish. Water that never changes temperature.",
    description: "No one has reached the bottom. At 279+ meters recorded depth, this karst lake is one of the deepest in the world — and one of the strangest. No fish live here. The water temperature never changes, summer or winter. The color is an unnatural turquoise that looks photoshopped but isn't.\n\nJacques Cousteau himself tried to unravel its secrets. Diving expeditions still come here, pushing deeper each time. Locals historically avoided the lake. Now it draws the curious — but it still feels like a place holding something back.",
    bestTime: "Year-round. The color is consistent.",
    access: "Right off the main road in Cherek Valley. Easy to reach.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
  },
  {
    id: 5,
    name: "Tyzyl Gorge",
    tagline: "The gorge almost no one knows exists.",
    excerpt: "Jurassic Park landscapes with fossils embedded in cave walls.",
    description: "This is arguably the least-visited place in Kabardino-Balkaria, and it looks like a location from Jurassic Park. Flowering meadows, waterfalls (including Tyzyl-Su, the largest in the area), caves with actual fossils embedded in the walls. The landscape feels prehistoric — the kind of place where you half-expect something ancient to emerge from behind the rocks.\n\nLocal legends claim Bigfoot lives here. There are enough hidden grottoes and unexplored corners that you can't entirely dismiss it.",
    bestTime: "Summer, when the meadows are in bloom.",
    access: "Requires a jeep. The roads are rough, which is why it stays empty.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80"
  },
  {
    id: 6,
    name: "El-Tyubyu Village",
    tagline: "Where Balkarian history began.",
    excerpt: "Ancient watchtowers, medieval mausoleums, the Tower of Love.",
    description: "El-Tyubyu is the spiritual and historical heart of Balkaria. The village sits in the Chegem Gorge surrounded by ancient watchtowers, defensive walls, and medieval mausoleums where nobility were buried from the 8th to 18th centuries.\n\nThe most striking structure is the Balkarukov Tower, called the 'Tower of Love.' Legend says Akhtugan Balkarukov built it to defend against the relatives of Kerime — a woman he kidnapped from Dagestan. Nearby, ancient Greek stairs are carved directly into the cliff face.",
    bestTime: "Year-round. Golden hour is exceptional here.",
    access: "Continue past Chegem Waterfalls. Guesthouses available for overnight stays.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80"
  },
  {
    id: 7,
    name: "Bezengi Wall",
    tagline: "The 'Small Himalayas' of Russia.",
    excerpt: "13 kilometers of continuous ice and stone, five peaks above 5,000m.",
    description: "Bezengi is where serious mountaineers come. The wall itself is 13 kilometers of continuous ice and stone, with five peaks above 5,000 meters clustered together — the highest concentration in the Caucasus. Soviet climbers nicknamed it the 'Small Himalayas' because of its difficulty.\n\nAt the base sits Bezengi Camp, a mountaineers' village that's been operating since the USSR. It has a bathhouse, cafes, gear shops, and a kindergarten for climbing families. The vibe is utilitarian and focused — people come here to summit, not to relax.",
    bestTime: "Summer for access. Winter is for expeditions only.",
    access: "Requires transfer vehicle and a border zone permit (it's near Georgia). Plan ahead.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80"
  },
  {
    id: 8,
    name: "Upper Balkaria",
    tagline: "A village that refused to disappear.",
    excerpt: "Layers of history — medieval towers next to Soviet reconstruction.",
    description: "Upper Balkaria feels like it's hiding from the modern world — and in a sense, it is. After the Balkars were deported to Central Asia in 1944, the village was abandoned. When they returned in 1957, they rebuilt around the ancient ruins: defensive towers, stone crypts, the remnants of traditional auls.\n\nWalking through Upper Balkaria is walking through layers of history — medieval architecture next to Soviet-era reconstruction next to contemporary village life. The Cherek River runs through it all, indifferent to the centuries.",
    bestTime: "Year-round, though spring and autumn have the best light.",
    access: "Paved road from Nalchik. Combine with Blue Lake on the same trip.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
  },
  {
    id: 9,
    name: "Aushiger Hot Springs",
    tagline: "Mineral water, straight from the earth.",
    excerpt: "Therapeutic springs where locals have recovered for generations.",
    description: "Therapeutic hot springs aren't unique to Kabardino-Balkaria, but Aushiger's setting is. The mineral water surfaces naturally and forms a warm lake at the foot of the mountains. Locals have used it for healing for generations — the mineral content is genuinely medicinal, not just marketing.\n\nAfter days in the mountains, this is where you recover. The steam rising off the water against the Caucasus backdrop is worth the trip alone.",
    bestTime: "Year-round. Cold months are especially atmospheric.",
    access: "Near Upper Balkaria in the Cherek Valley. Easy detour.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80"
  },
  {
    id: 10,
    name: "Nalchik",
    tagline: "Home base.",
    excerpt: "A calm city in the foothills — where adventures begin and end.",
    description: "Nalchik doesn't try to be dramatic — it's a small, calm city in the foothills, originally built as a Soviet resort town. The main park (Atajukinsky Garden) still has that era's energy: wide paths, mineral springs, sanatoriums where Russians came to 'take the waters.'\n\nThe pedestrian 'Arbat' street is good for people-watching. The central market is good for food. It's not the destination — it's where you return to after the mountains, where you plan the next trip over coffee.",
    bestTime: "Year-round.",
    access: "Flights from Moscow, trains from various cities. The starting point for everything else.",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80"
  }
];

const projects = [
  {
    id: 1,
    title: "Mountain Resort Booking Platform",
    category: "Web Application",
    description: "A full-featured booking system for Caucasus mountain resorts, handling reservations, payments, and tour scheduling with real-time availability.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  {
    id: 2,
    title: "Local Artisan E-commerce",
    category: "E-commerce",
    description: "Connecting traditional Balkarian craftspeople with global buyers. Features handwoven textiles, ceramics, and jewelry from regional artisans.",
    tech: ["Next.js", "Shopify API", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
  },
  {
    id: 3,
    title: "Adventure Tourism Guide",
    category: "Mobile-First Web App",
    description: "An interactive guide to hiking trails, climbing routes, and hidden spots across Kabardino-Balkaria with offline functionality.",
    tech: ["Vue.js", "PWA", "Mapbox", "Firebase"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  }
];

// ========================================
// ICONS
// ========================================

const icons = {
  arrow: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>`,
  close: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>`,
  email: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>`,
  location: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`,
  instagram: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
  telegram: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>`,
  github: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`
};

// ========================================
// APP COMPONENT
// ========================================

function createApp() {
  const app = document.querySelector('#app');

  app.innerHTML = `
    <!-- Navigation -->
    <nav class="nav" id="nav">
      <a href="#" class="nav__logo">Kabardino-Balkaria</a>
      <ul class="nav__links" id="navLinks">
        <li><a href="#intro" class="nav__link">About</a></li>
        <li><a href="#discover" class="nav__link">Discover</a></li>
        <li><a href="#portfolio" class="nav__link">Work</a></li>
        <li><a href="#contact" class="nav__link">Contact</a></li>
      </ul>
      <button class="nav__menu-btn" id="menuBtn" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>

    <!-- Hero Section -->
    <section class="hero" id="hero">
      <div class="hero__bg">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80"
          alt="Caucasus Mountains"
          class="hero__image"
        />
      </div>
      <div class="hero__content">
        <p class="hero__tagline text-micro">Web Developer from Kabardino-Balkaria</p>
        <h1 class="hero__title text-hero">Building from the<br/>Heart of the Caucasus</h1>
        <p class="hero__subtitle text-body">I craft digital experiences shaped by mountains that touch the clouds, gorges that hold secrets, and a perspective only this land can give.</p>
      </div>
      <div class="hero__scroll">
        <span class="text-micro">Scroll</span>
        <div class="hero__scroll-line"></div>
      </div>
    </section>

    <!-- Intro Section -->
    <section class="intro" id="intro">
      <div class="intro__content">
        <div class="intro__text reveal">
          <p class="intro__label text-micro">About Me</p>
          <h2 class="intro__heading text-large">Where I build shapes<br/>how I build</h2>
          <p class="intro__description text-body">
            Living at the foot of Mount Elbrus teaches you something about scale and ambition. When your backyard holds Europe's highest peak, you learn to think bigger — and more carefully.
          </p>
          <p class="intro__description text-body">
            I'm a web developer who chose to stay. Not because there's nowhere else to go, but because this place — with its ancient towers, impossible gorges, and resilient people — gives my work meaning that a generic city never could.
          </p>
          <div class="intro__stats">
            <div class="stat">
              <div class="stat__number">5+</div>
              <div class="stat__label text-small">Years Experience</div>
            </div>
            <div class="stat">
              <div class="stat__number">30+</div>
              <div class="stat__label text-small">Projects Delivered</div>
            </div>
            <div class="stat">
              <div class="stat__number">5642m</div>
              <div class="stat__label text-small">Above Sea Level</div>
            </div>
          </div>
        </div>
        <div class="intro__visual reveal reveal--delay-2">
          <div class="intro__image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
              alt="Caucasus landscape"
              class="intro__image"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Discover Section -->
    <section class="discover" id="discover">
      <div class="discover__header">
        <div>
          <p class="discover__label text-micro">Explore</p>
          <h2 class="discover__title text-large">Discover Kabardino-Balkaria</h2>
        </div>
        <p class="discover__subtitle text-body">10 curated places that define this land. Each one earned its spot on this list.</p>
      </div>
      <div class="discover__grid" id="locationsGrid">
        ${locations.map((location, index) => `
          <article class="location-card" data-location-id="${location.id}">
            <div class="location-card__image-wrapper">
              <img
                src="${location.image}"
                alt="${location.name}"
                class="location-card__image"
                loading="lazy"
              />
              <div class="location-card__overlay">
                <span class="location-card__number">0${index + 1}</span>
                <div class="location-card__content">
                  <p class="location-card__tagline text-micro">${location.tagline}</p>
                  <h3 class="location-card__title">${location.name}</h3>
                  <p class="location-card__excerpt">${location.excerpt}</p>
                  <span class="location-card__cta">
                    Learn more ${icons.arrow}
                  </span>
                </div>
              </div>
            </div>
          </article>
        `).join('')}
      </div>
    </section>

    <!-- Portfolio Section -->
    <section class="portfolio" id="portfolio">
      <div class="portfolio__header">
        <div>
          <p class="portfolio__label text-micro">Selected Work</p>
          <h2 class="text-large">Featured Projects</h2>
          <p class="portfolio__description text-body">Building digital products that connect local stories with global audiences.</p>
        </div>
      </div>
      <div class="portfolio__projects">
        ${projects.map((project, index) => `
          <article class="project reveal">
            <div class="project__visual">
              <span class="project__number">0${index + 1}</span>
              <img
                src="${project.image}"
                alt="${project.title}"
                class="project__image"
                loading="lazy"
              />
            </div>
            <div class="project__info">
              <p class="project__category text-micro">${project.category}</p>
              <h3 class="project__title text-medium">${project.title}</h3>
              <p class="project__description text-body">${project.description}</p>
              <div class="project__tech">
                ${project.tech.map(t => `<span class="project__tech-tag">${t}</span>`).join('')}
              </div>
              <a href="#" class="project__link">
                View Project ${icons.arrow}
              </a>
            </div>
          </article>
        `).join('')}
      </div>
    </section>

    <!-- Quote Section -->
    <section class="quote-section">
      <div class="quote-section__bg">
        <svg class="quote-section__pattern" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="mountains" patternUnits="userSpaceOnUse" width="100" height="100">
              <path d="M0 100 L25 60 L50 80 L75 40 L100 70 L100 100 Z" fill="rgba(248,246,241,0.05)"/>
              <path d="M0 100 L30 70 L60 90 L100 50 L100 100 Z" fill="rgba(248,246,241,0.03)"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mountains)"/>
        </svg>
      </div>
      <div class="quote-section__content reveal">
        <span class="quote-section__mark">"</span>
        <p class="quote-section__text">
          The mountains don't care about deadlines or client expectations. They've been here for millions of years. Working in their shadow teaches you patience, precision, and respect for things bigger than yourself.
        </p>
        <p class="quote-section__author text-micro">— A perspective shaped by altitude</p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact" id="contact">
      <div class="contact__content">
        <div class="contact__info reveal">
          <p class="contact__label text-micro">Get in Touch</p>
          <h2 class="contact__title text-large">Let's Build Something Together</h2>
          <p class="contact__description text-body">
            Whether you need a website, web application, or just want to talk about the Caucasus — I'm always open to interesting conversations and collaborations.
          </p>
          <div class="contact__details">
            <div class="contact__detail">
              <div class="contact__detail-icon">${icons.email}</div>
              <div class="contact__detail-text">
                <span class="contact__detail-label">Email</span>
                <span class="contact__detail-value">hello@kabardinobalkaria.com</span>
              </div>
            </div>
            <div class="contact__detail">
              <div class="contact__detail-icon">${icons.location}</div>
              <div class="contact__detail-text">
                <span class="contact__detail-label">Location</span>
                <span class="contact__detail-value">Nalchik, Kabardino-Balkaria</span>
              </div>
            </div>
          </div>
        </div>
        <form class="contact__form reveal reveal--delay-2" id="contactForm">
          <div class="form-row">
            <div class="form-group">
              <label class="form-group__label" for="name">Name</label>
              <input type="text" id="name" name="name" class="form-group__input" required />
            </div>
            <div class="form-group">
              <label class="form-group__label" for="email">Email</label>
              <input type="email" id="email" name="email" class="form-group__input" required />
            </div>
          </div>
          <div class="form-group">
            <label class="form-group__label" for="subject">Subject</label>
            <input type="text" id="subject" name="subject" class="form-group__input" />
          </div>
          <div class="form-group">
            <label class="form-group__label" for="message">Message</label>
            <textarea id="message" name="message" class="form-group__textarea" required></textarea>
          </div>
          <button type="submit" class="btn btn--primary">
            Send Message ${icons.arrow}
          </button>
        </form>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer__content">
        <div class="footer__brand">
          <h3 class="footer__logo">Kabardino-Balkaria</h3>
          <p class="footer__tagline">Web development from the heart of the Caucasus. Building digital experiences shaped by mountains, history, and perspective.</p>
          <div class="footer__social" style="margin-top: var(--space-md);">
            <a href="#" class="footer__social-link" aria-label="Instagram">${icons.instagram}</a>
            <a href="#" class="footer__social-link" aria-label="Telegram">${icons.telegram}</a>
            <a href="#" class="footer__social-link" aria-label="GitHub">${icons.github}</a>
          </div>
        </div>
        <div class="footer__column">
          <h4 class="footer__column-title">Navigation</h4>
          <ul class="footer__links">
            <li><a href="#intro" class="footer__link">About</a></li>
            <li><a href="#discover" class="footer__link">Discover</a></li>
            <li><a href="#portfolio" class="footer__link">Work</a></li>
            <li><a href="#contact" class="footer__link">Contact</a></li>
          </ul>
        </div>
        <div class="footer__column">
          <h4 class="footer__column-title">Top Destinations</h4>
          <ul class="footer__links">
            <li><a href="#" class="footer__link">Mount Elbrus</a></li>
            <li><a href="#" class="footer__link">Chegem Waterfalls</a></li>
            <li><a href="#" class="footer__link">Blue Lake</a></li>
            <li><a href="#" class="footer__link">Bezengi Wall</a></li>
          </ul>
        </div>
        <div class="footer__column">
          <h4 class="footer__column-title">Services</h4>
          <ul class="footer__links">
            <li><a href="#" class="footer__link">Web Development</a></li>
            <li><a href="#" class="footer__link">E-commerce</a></li>
            <li><a href="#" class="footer__link">Web Applications</a></li>
            <li><a href="#" class="footer__link">Consulting</a></li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <p class="footer__copyright">© ${new Date().getFullYear()} Kabardino-Balkaria. All rights reserved.</p>
        <p class="footer__location">
          ${icons.location}
          Built in Nalchik, Kabardino-Balkaria
        </p>
      </div>
    </footer>

    <!-- Location Modal -->
    <div class="modal" id="locationModal">
      <div class="modal__backdrop" id="modalBackdrop"></div>
      <div class="modal__container">
        <button class="modal__close" id="modalClose">${icons.close}</button>
        <div class="modal__image-wrapper">
          <img src="" alt="" class="modal__image" id="modalImage" />
        </div>
        <div class="modal__content">
          <span class="modal__number" id="modalNumber"></span>
          <h2 class="modal__title text-large" id="modalTitle"></h2>
          <p class="modal__tagline" id="modalTagline"></p>
          <p class="modal__description text-body" id="modalDescription"></p>
          <div class="modal__meta">
            <div class="modal__meta-item">
              <span class="modal__meta-label">Best Time</span>
              <span class="modal__meta-value" id="modalBestTime"></span>
            </div>
            <div class="modal__meta-item">
              <span class="modal__meta-label">Access</span>
              <span class="modal__meta-value" id="modalAccess"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  initializeApp();
}

// ========================================
// INITIALIZATION
// ========================================

function initializeApp() {
  initNavigation();
  initScrollAnimations();
  initLocationModal();
  initContactForm();
}

// Navigation scroll effect
function initNavigation() {
  const nav = document.getElementById('nav');
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');

  // Scroll effect
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }

    lastScroll = currentScroll;
  });

  // Mobile menu toggle
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('nav__links--open');
  });

  // Close menu on link click
  navLinks.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('nav__links--open');
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        const offset = 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Scroll reveal animations
function initScrollAnimations() {
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal--visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

// Location modal
function initLocationModal() {
  const modal = document.getElementById('locationModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalClose = document.getElementById('modalClose');
  const locationsGrid = document.getElementById('locationsGrid');

  // Open modal
  locationsGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.location-card');
    if (card) {
      const locationId = parseInt(card.dataset.locationId);
      const location = locations.find(l => l.id === locationId);
      if (location) {
        openModal(location);
      }
    }
  });

  // Close modal
  modalBackdrop.addEventListener('click', closeModal);
  modalClose.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('modal--open')) {
      closeModal();
    }
  });

  function openModal(location) {
    document.getElementById('modalImage').src = location.image;
    document.getElementById('modalImage').alt = location.name;
    document.getElementById('modalNumber').textContent = `0${location.id} / 10`;
    document.getElementById('modalTitle').textContent = location.name;
    document.getElementById('modalTagline').textContent = location.tagline;
    document.getElementById('modalDescription').textContent = location.description;
    document.getElementById('modalBestTime').textContent = location.bestTime;
    document.getElementById('modalAccess').textContent = location.access;

    modal.classList.add('modal--open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('modal--open');
    document.body.style.overflow = '';
  }
}

// Contact form
function initContactForm() {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Here you would typically send this to a backend
    console.log('Form submitted:', data);

    // Show success feedback
    const btn = form.querySelector('.btn');
    const originalText = btn.innerHTML;
    btn.innerHTML = 'Message Sent! ✓';
    btn.style.background = 'var(--ice-blue)';

    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.background = '';
      form.reset();
    }, 3000);
  });
}

// ========================================
// INITIALIZE
// ========================================

document.addEventListener('DOMContentLoaded', createApp);
