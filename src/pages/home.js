/**
 * Homepage - Alpine Editorial style
 */

import { Header, initHeader } from '../components/header.js'
import { Footer } from '../components/footer.js'

export function HomePage() {
  return `
    ${Header()}

    <main>
      <!-- Hero Section -->
      <section class="relative min-h-screen flex items-end pb-24 lg:pb-32 overflow-hidden">
        <!-- Background image -->
        <div class="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=1920&q=80"
            alt="Эльбрус"
            class="w-full h-full object-cover img-dramatic"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/30"></div>
          <div class="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-transparent to-transparent"></div>
        </div>

        <!-- Grain overlay -->
        <div class="absolute inset-0 grain pointer-events-none"></div>

        <!-- Vertical text decoration -->
        <div class="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 hidden lg:block">
          <span class="vertical-text font-mono text-[0.6rem] tracking-[0.3em] text-stone-600 uppercase">
            43°21'18"N — Эльбрус — 5642m
          </span>
        </div>

        <!-- Content -->
        <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div class="max-w-4xl">
            <!-- Label -->
            <div class="animate-on-load animate-fade-in-up mb-6">
              <span class="font-mono text-[0.65rem] tracking-[0.25em] text-copper-500 uppercase">
                Кабардино-Балкария
              </span>
            </div>

            <!-- Main heading -->
            <h1 class="animate-on-load animate-fade-in-up delay-100">
              <span class="display-xl text-stone-100 block">В сердце</span>
              <span class="display-xl text-copper-400 block italic">Кавказа</span>
            </h1>

            <!-- Divider -->
            <div class="w-24 h-px bg-copper-500 my-8 animate-on-load animate-line-expand delay-300"></div>

            <!-- Subtitle -->
            <p class="text-stone-400 text-lg lg:text-xl max-w-xl leading-relaxed animate-on-load animate-fade-in-up delay-400">
              Откройте регион, где облака ниже, чем вершины гор. Эльбрус, древние башни, водопады и горячие источники.
            </p>

            <!-- CTA buttons -->
            <div class="flex flex-wrap gap-4 mt-10 animate-on-load animate-fade-in-up delay-500">
              <a href="#/discover" class="btn-primary">
                Открыть КБР
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
              <a href="#/contact" class="btn-outline">
                Связаться
              </a>
            </div>
          </div>

          <!-- Scroll indicator -->
          <div class="absolute bottom-8 right-6 lg:right-12 animate-on-load animate-fade-in delay-700">
            <div class="flex flex-col items-center gap-2">
              <span class="font-mono text-[0.6rem] tracking-wider text-stone-600 uppercase">Scroll</span>
              <div class="w-px h-12 bg-gradient-to-b from-stone-600 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section class="py-24 lg:py-40 relative">
        <div class="absolute inset-0 topo-pattern"></div>

        <div class="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div class="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            <!-- Text content -->
            <div class="lg:col-span-6 lg:col-start-1">
              <span class="section-num">01 — О регионе</span>

              <h2 class="display-lg text-stone-100 mt-6">
                Где Европа<br/>
                <span class="text-copper-400 italic">встречает небо</span>
              </h2>

              <div class="mt-8 space-y-6 text-stone-400 leading-relaxed">
                <p>
                  Кабардино-Балкария — республика на Северном Кавказе, где находится Эльбрус, высочайшая вершина Европы. Это место, где древняя история переплетается с величием природы.
                </p>
                <p>
                  Горные ущелья, водопады, ледники, термальные источники и средневековые башни — всё это в радиусе часа езды от столицы региона, Нальчика.
                </p>
              </div>

              <div class="mt-12 flex items-center gap-8">
                <div>
                  <span class="display-md text-copper-400">5 642</span>
                  <p class="font-mono text-xs text-stone-600 mt-1 uppercase tracking-wider">м — Эльбрус</p>
                </div>
                <div class="w-px h-16 bg-stone-800"></div>
                <div>
                  <span class="display-md text-copper-400">10</span>
                  <p class="font-mono text-xs text-stone-600 mt-1 uppercase tracking-wider">мест открыть</p>
                </div>
                <div class="w-px h-16 bg-stone-800"></div>
                <div>
                  <span class="display-md text-copper-400">∞</span>
                  <p class="font-mono text-xs text-stone-600 mt-1 uppercase tracking-wider">красоты</p>
                </div>
              </div>
            </div>

            <!-- Image -->
            <div class="lg:col-span-5 lg:col-start-8">
              <div class="relative">
                <div class="aspect-[4/5] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80"
                    alt="Кавказские горы"
                    class="w-full h-full object-cover img-dramatic"
                  />
                </div>
                <!-- Floating elevation card -->
                <div class="absolute -bottom-6 -left-6 lg:-left-12 bg-stone-900 border border-stone-800 p-6">
                  <span class="elevation">5 642 м</span>
                  <p class="font-display text-lg text-stone-100 mt-2">Эльбрус</p>
                  <p class="font-mono text-xs text-stone-600 mt-1">Высочайшая точка Европы</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Discover Preview Section -->
      <section class="py-24 lg:py-40 relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-6 lg:px-12">
          <div class="grid lg:grid-cols-12 gap-12 items-center">
            <!-- Text -->
            <div class="lg:col-span-5">
              <span class="section-num">02 — Места</span>
              <h2 class="display-lg text-stone-100 mt-6">
                Открой<br/>
                <span class="text-copper-400 italic">Кабардино-Балкарию</span>
              </h2>
              <p class="mt-6 text-stone-400 leading-relaxed">
                10 мест, которые я курирую лично. От вершины Эльбруса до древних башен Балкарии — моя субъективная карта региона.
              </p>
              <a href="#/discover" class="inline-flex items-center gap-3 mt-8 text-copper-400 hover:text-copper-300 transition-colors group">
                <span class="font-mono text-xs uppercase tracking-wider">Исследовать все места</span>
                <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
            </div>

            <!-- Image grid -->
            <div class="lg:col-span-7 grid grid-cols-2 gap-4">
              <div class="space-y-4">
                <div class="aspect-[3/4] overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80" alt="Горы" class="w-full h-full object-cover img-dramatic"/>
                </div>
                <div class="aspect-square overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600&q=80" alt="Озеро" class="w-full h-full object-cover img-dramatic"/>
                </div>
              </div>
              <div class="space-y-4 pt-8">
                <div class="aspect-square overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=600&q=80" alt="Водопад" class="w-full h-full object-cover img-dramatic"/>
                </div>
                <div class="aspect-[3/4] overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80" alt="Вершины" class="w-full h-full object-cover img-dramatic"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-24 lg:py-40 relative">
        <div class="absolute inset-0 bg-gradient-to-br from-copper-600/10 via-transparent to-stone-900/50"></div>
        <div class="absolute inset-0 topo-pattern opacity-30"></div>

        <div class="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <span class="section-num">03 — Контакт</span>
          <h2 class="display-lg text-stone-100 mt-6">
            Хотите узнать<br/>
            <span class="text-copper-400 italic">больше?</span>
          </h2>
          <p class="mt-6 text-stone-400 max-w-xl mx-auto">
            Есть вопросы о регионе или хотите поделиться своими впечатлениями? Напишите нам.
          </p>
          <a href="#/contact" class="btn-primary mt-10">
            Связаться
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </section>
    </main>

    ${Footer()}
  `
}

export function initHomePage() {
  initHeader()

  // Trigger animations on load
  setTimeout(() => {
    document.querySelectorAll('.animate-on-load').forEach(el => {
      el.classList.remove('animate-on-load')
    })
  }, 100)
}
