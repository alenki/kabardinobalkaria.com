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
                Веб-разработчик
              </span>
            </div>

            <!-- Main heading -->
            <h1 class="animate-on-load animate-fade-in-up delay-100">
              <span class="display-xl text-stone-100 block">Из сердца</span>
              <span class="display-xl text-copper-400 block italic">Кавказа</span>
            </h1>

            <!-- Divider -->
            <div class="w-24 h-px bg-copper-500 my-8 animate-on-load animate-line-expand delay-300"></div>

            <!-- Subtitle -->
            <p class="text-stone-400 text-lg lg:text-xl max-w-xl leading-relaxed animate-on-load animate-fade-in-up delay-400">
              Создаю веб-продукты с перспективой, сформированной там, где облака ниже, чем вершины гор.
            </p>

            <!-- CTA buttons -->
            <div class="flex flex-wrap gap-4 mt-10 animate-on-load animate-fade-in-up delay-500">
              <a href="#/portfolio" class="btn-primary">
                Смотреть работы
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
              <a href="#/discover" class="btn-outline">
                Открыть КБР
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
              <span class="section-num">01 — О себе</span>

              <h2 class="display-lg text-stone-100 mt-6">
                Где горы формируют<br/>
                <span class="text-copper-400 italic">перспективу</span>
              </h2>

              <div class="mt-8 space-y-6 text-stone-400 leading-relaxed">
                <p>
                  Кабардино-Балкария — это место, где Европа встречается с небом. Эльбрус, высочайшая вершина континента, находится в часе езды от моего дома. Это формирует определённое отношение к работе.
                </p>
                <p>
                  Горы учат терпению. Вниманию к деталям. Уважению к масштабу. Каждый проект — это восхождение: тщательная подготовка, выверенные шаги, и награда на вершине.
                </p>
              </div>

              <div class="mt-12 flex items-center gap-8">
                <div>
                  <span class="display-md text-copper-400">5+</span>
                  <p class="font-mono text-xs text-stone-600 mt-1 uppercase tracking-wider">лет опыта</p>
                </div>
                <div class="w-px h-16 bg-stone-800"></div>
                <div>
                  <span class="display-md text-copper-400">50+</span>
                  <p class="font-mono text-xs text-stone-600 mt-1 uppercase tracking-wider">проектов</p>
                </div>
                <div class="w-px h-16 bg-stone-800"></div>
                <div>
                  <span class="display-md text-copper-400">∞</span>
                  <p class="font-mono text-xs text-stone-600 mt-1 uppercase tracking-wider">вдохновения</p>
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

      <!-- Services Section -->
      <section class="py-24 lg:py-40 bg-stone-900/50">
        <div class="max-w-7xl mx-auto px-6 lg:px-12">
          <div class="grid lg:grid-cols-12 gap-12">
            <!-- Header -->
            <div class="lg:col-span-4">
              <span class="section-num">02 — Услуги</span>
              <h2 class="display-lg text-stone-100 mt-6">
                Что я<br/>
                <span class="text-copper-400 italic">создаю</span>
              </h2>
            </div>

            <!-- Services grid -->
            <div class="lg:col-span-8 grid md:grid-cols-2 gap-8">
              <!-- Service 1 -->
              <div class="group p-8 border border-stone-800 hover:border-copper-500/30 transition-colors duration-500">
                <div class="flex items-start justify-between mb-6">
                  <span class="font-mono text-xs text-copper-500">01</span>
                  <svg class="w-8 h-8 text-stone-600 group-hover:text-copper-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <h3 class="font-display text-xl text-stone-100 mb-3">Веб-сайты</h3>
                <p class="text-stone-500 text-sm leading-relaxed">
                  Лендинги, корпоративные сайты, интернет-магазины. Быстрые, адаптивные, запоминающиеся.
                </p>
              </div>

              <!-- Service 2 -->
              <div class="group p-8 border border-stone-800 hover:border-copper-500/30 transition-colors duration-500">
                <div class="flex items-start justify-between mb-6">
                  <span class="font-mono text-xs text-copper-500">02</span>
                  <svg class="w-8 h-8 text-stone-600 group-hover:text-copper-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                  </svg>
                </div>
                <h3 class="font-display text-xl text-stone-100 mb-3">Веб-приложения</h3>
                <p class="text-stone-500 text-sm leading-relaxed">
                  Интерактивные приложения с современным стеком. React, Vue, Node.js — под ваши задачи.
                </p>
              </div>

              <!-- Service 3 -->
              <div class="group p-8 border border-stone-800 hover:border-copper-500/30 transition-colors duration-500">
                <div class="flex items-start justify-between mb-6">
                  <span class="font-mono text-xs text-copper-500">03</span>
                  <svg class="w-8 h-8 text-stone-600 group-hover:text-copper-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
                  </svg>
                </div>
                <h3 class="font-display text-xl text-stone-100 mb-3">UI/UX Дизайн</h3>
                <p class="text-stone-500 text-sm leading-relaxed">
                  Продуманные интерфейсы. Прототипирование, дизайн-системы, пользовательский опыт.
                </p>
              </div>

              <!-- Service 4 -->
              <div class="group p-8 border border-stone-800 hover:border-copper-500/30 transition-colors duration-500">
                <div class="flex items-start justify-between mb-6">
                  <span class="font-mono text-xs text-copper-500">04</span>
                  <svg class="w-8 h-8 text-stone-600 group-hover:text-copper-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h3 class="font-display text-xl text-stone-100 mb-3">Оптимизация</h3>
                <p class="text-stone-500 text-sm leading-relaxed">
                  Ускорение существующих сайтов. SEO, производительность, аудит кода.
                </p>
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
              <span class="section-num">03 — Регион</span>
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
          <span class="section-num">04 — Контакт</span>
          <h2 class="display-lg text-stone-100 mt-6">
            Готовы к<br/>
            <span class="text-copper-400 italic">восхождению?</span>
          </h2>
          <p class="mt-6 text-stone-400 max-w-xl mx-auto">
            Расскажите о вашем проекте. Каждое сообщение читаю лично и отвечаю в течение 24 часов.
          </p>
          <a href="#/contact" class="btn-primary mt-10">
            Начать разговор
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
