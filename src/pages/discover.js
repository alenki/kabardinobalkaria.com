/**
 * Discover Kabardino-Balkaria page - Alpine Editorial style
 */

import { Header, initHeader } from '../components/header.js'
import { Footer } from '../components/footer.js'
import { SpotCard, SpotModal } from '../components/spot-card.js'
import { spots } from '../data/spots.js'

export function DiscoverPage() {
  return `
    ${Header()}

    <main class="pt-24">
      <!-- Hero -->
      <section class="relative py-16 lg:py-24 overflow-hidden">
        <!-- Background elements -->
        <div class="absolute inset-0 topo-pattern"></div>
        <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-copper-600/5 to-transparent"></div>

        <div class="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div class="grid lg:grid-cols-12 gap-12 items-end">
            <!-- Text content -->
            <div class="lg:col-span-7">
              <div class="flex items-center gap-4 mb-6">
                <span class="section-num">10 мест</span>
                <div class="w-12 h-px bg-stone-700"></div>
                <span class="font-mono text-xs text-stone-600">Курирую лично</span>
              </div>

              <h1 class="display-xl text-stone-100">
                Открой<br/>
                <span class="text-copper-400 italic">Кабардино-Балкарию</span>
              </h1>

              <p class="mt-8 text-stone-400 text-lg leading-relaxed max-w-xl">
                Моя субъективная карта региона. От вершины Эльбруса до термальных источников Аушигера — места, которые формируют мою перспективу.
              </p>
            </div>

            <!-- Stats -->
            <div class="lg:col-span-5">
              <div class="grid grid-cols-3 gap-6 lg:gap-8">
                <div class="text-center lg:text-left">
                  <span class="display-md text-copper-400">5 642</span>
                  <p class="font-mono text-[0.6rem] text-stone-600 mt-1 uppercase tracking-wider">м макс. высота</p>
                </div>
                <div class="text-center lg:text-left">
                  <span class="display-md text-copper-400">279+</span>
                  <p class="font-mono text-[0.6rem] text-stone-600 mt-1 uppercase tracking-wider">м глубина озера</p>
                </div>
                <div class="text-center lg:text-left">
                  <span class="display-md text-copper-400">∞</span>
                  <p class="font-mono text-[0.6rem] text-stone-600 mt-1 uppercase tracking-wider">впечатлений</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured spot - Elbrus -->
      <section class="py-12 lg:py-20">
        <div class="max-w-7xl mx-auto px-6 lg:px-12">
          <div class="relative overflow-hidden cursor-pointer group" data-spot-id="elbrus">
            <!-- Image -->
            <div class="aspect-[21/9] lg:aspect-[21/7] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=1920&q=80"
                alt="Эльбрус"
                class="w-full h-full object-cover img-dramatic"
              />
            </div>

            <!-- Overlay -->
            <div class="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/50 to-transparent"></div>

            <!-- Content -->
            <div class="absolute inset-0 flex items-center">
              <div class="max-w-7xl mx-auto px-6 lg:px-12 w-full">
                <div class="max-w-xl">
                  <div class="flex items-center gap-4">
                    <span class="font-mono text-xs text-copper-400">01</span>
                    <span class="elevation">5 642 м</span>
                  </div>
                  <h2 class="font-display text-4xl lg:text-6xl text-stone-50 mt-4">Эльбрус</h2>
                  <p class="font-display text-lg text-copper-400 italic mt-2">
                    Высочайшая вершина Европы. Мой задний двор.
                  </p>
                  <div class="mt-6 flex items-center gap-2 text-stone-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span class="font-mono text-xs uppercase tracking-wider">Подробнее</span>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <!-- Coordinates -->
            <div class="absolute bottom-6 right-6 lg:right-12">
              <span class="font-mono text-xs text-stone-500">43°21'N 42°26'E</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Spots grid -->
      <section class="py-12 lg:py-20">
        <div class="max-w-7xl mx-auto px-6 lg:px-12">
          <!-- Section header -->
          <div class="flex items-center justify-between mb-12">
            <div>
              <span class="section-num">02—10</span>
              <h2 class="display-md text-stone-100 mt-2">Остальные места</h2>
            </div>
            <div class="hidden md:block">
              <span class="font-mono text-xs text-stone-600">Нажмите на карточку для подробностей</span>
            </div>
          </div>

          <!-- Grid -->
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            ${spots.slice(1).map((spot, index) => SpotCard(spot, index + 1)).join('')}
          </div>
        </div>
      </section>

      <!-- Map / Info section -->
      <section class="py-24 lg:py-40 bg-stone-900/50 relative">
        <div class="absolute inset-0 topo-pattern opacity-30"></div>

        <div class="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <!-- Info -->
            <div>
              <span class="section-num">О регионе</span>
              <h2 class="display-lg text-stone-100 mt-6">
                Кабардино-<br/>
                <span class="text-copper-400 italic">Балкария</span>
              </h2>

              <p class="mt-8 text-stone-400 leading-relaxed">
                Республика на юге России, в самом сердце Кавказских гор. Площадь всего 12 470 км², но концентрация природных чудес на квадратный километр — одна из самых высоких в мире.
              </p>

              <div class="mt-12 grid grid-cols-2 gap-8">
                <div class="border-l-2 border-copper-500 pl-6">
                  <span class="font-mono text-3xl text-stone-100">2ч</span>
                  <p class="font-mono text-xs text-stone-600 mt-1 uppercase tracking-wider">из Москвы</p>
                </div>
                <div class="border-l-2 border-stone-700 pl-6">
                  <span class="font-mono text-3xl text-stone-100">900K</span>
                  <p class="font-mono text-xs text-stone-600 mt-1 uppercase tracking-wider">население</p>
                </div>
                <div class="border-l-2 border-stone-700 pl-6">
                  <span class="font-mono text-3xl text-stone-100">7</span>
                  <p class="font-mono text-xs text-stone-600 mt-1 uppercase tracking-wider">пятитысячников</p>
                </div>
                <div class="border-l-2 border-stone-700 pl-6">
                  <span class="font-mono text-3xl text-stone-100">100+</span>
                  <p class="font-mono text-xs text-stone-600 mt-1 uppercase tracking-wider">ледников</p>
                </div>
              </div>
            </div>

            <!-- Visual element -->
            <div class="relative">
              <div class="aspect-square bg-stone-800/50 border border-stone-700 flex items-center justify-center">
                <!-- Stylized map representation -->
                <div class="text-center">
                  <div class="font-mono text-6xl lg:text-8xl text-stone-700">КБР</div>
                  <div class="mt-4 font-mono text-sm text-stone-600">43°30'N 43°30'E</div>
                  <div class="mt-8 inline-flex items-center gap-2 text-copper-500">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <span class="font-mono text-xs uppercase tracking-wider">Нальчик</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Instagram CTA -->
      <section class="py-24 lg:py-40 relative">
        <div class="absolute inset-0 bg-gradient-to-br from-copper-600/5 via-transparent to-transparent"></div>

        <div class="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <span class="section-num">Следите</span>
          <h2 class="display-lg text-stone-100 mt-6">
            Больше<br/>
            <span class="text-copper-400 italic">в Instagram</span>
          </h2>
          <p class="mt-6 text-stone-400 max-w-xl mx-auto">
            Фотографии, истории и виды из Кабардино-Балкарии. Подписывайтесь, чтобы видеть регион моими глазами.
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary mt-10"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Подписаться
          </a>
        </div>
      </section>
    </main>

    ${Footer()}

    <div id="modal-container"></div>
  `
}

export function initDiscoverPage() {
  initHeader()

  const modalContainer = document.getElementById('modal-container')
  const spotCards = document.querySelectorAll('[data-spot-id]')

  spotCards.forEach(card => {
    card.addEventListener('click', () => {
      const spotId = card.dataset.spotId
      const spot = spots.find(s => s.id === spotId)

      if (spot && modalContainer) {
        modalContainer.innerHTML = SpotModal(spot)

        // Animate in
        const modal = document.getElementById('spot-modal')
        modal.style.opacity = '0'
        requestAnimationFrame(() => {
          modal.style.transition = 'opacity 0.3s ease'
          modal.style.opacity = '1'
        })

        const closeBtn = document.getElementById('close-modal')

        const closeModal = () => {
          modal.style.opacity = '0'
          setTimeout(() => {
            modalContainer.innerHTML = ''
          }, 300)
        }

        closeBtn?.addEventListener('click', closeModal)

        modal?.addEventListener('click', (e) => {
          if (e.target === modal) {
            closeModal()
          }
        })

        document.addEventListener('keydown', function escHandler(e) {
          if (e.key === 'Escape') {
            closeModal()
            document.removeEventListener('keydown', escHandler)
          }
        })
      }
    })
  })
}
