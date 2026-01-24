/**
 * Footer component - Alpine Editorial style
 */

export function Footer() {
  const currentYear = new Date().getFullYear()

  return `
    <footer class="relative bg-stone-950 border-t border-stone-800">
      <!-- Topographic pattern -->
      <div class="absolute inset-0 topo-pattern opacity-50"></div>

      <div class="relative max-w-7xl mx-auto px-6 lg:px-12">
        <!-- Main footer content -->
        <div class="py-16 lg:py-24 grid md:grid-cols-12 gap-12">

          <!-- Brand column -->
          <div class="md:col-span-5">
            <div class="flex items-center gap-3 mb-6">
              <svg class="w-10 h-10" viewBox="0 0 40 40" fill="none">
                <path d="M4 32 L12 12 L20 24 L28 8 L36 32" stroke="currentColor" stroke-width="1.5" fill="none" class="text-stone-600"/>
                <path d="M20 32 L26 20 L32 32" fill="currentColor" class="text-copper-500"/>
              </svg>
              <span class="font-display text-xl text-stone-100">kabardinobalkaria.com</span>
            </div>
            <p class="text-stone-500 max-w-sm leading-relaxed">
              Откройте для себя красоту Кабардино-Балкарии — региона в самом сердце Кавказских гор.
            </p>

            <!-- Coordinates -->
            <div class="mt-8 flex items-center gap-6">
              <div>
                <p class="font-mono text-[0.6rem] text-stone-600 tracking-wider uppercase">Широта</p>
                <p class="font-mono text-sm text-stone-400">43°28'21"N</p>
              </div>
              <div class="w-px h-8 bg-stone-800"></div>
              <div>
                <p class="font-mono text-[0.6rem] text-stone-600 tracking-wider uppercase">Долгота</p>
                <p class="font-mono text-sm text-stone-400">43°36'15"E</p>
              </div>
              <div class="w-px h-8 bg-stone-800"></div>
              <div>
                <p class="font-mono text-[0.6rem] text-stone-600 tracking-wider uppercase">Высота</p>
                <p class="font-mono text-sm text-copper-400">512 м</p>
              </div>
            </div>
          </div>

          <!-- Navigation column -->
          <div class="md:col-span-3 md:col-start-7">
            <h4 class="font-mono text-[0.65rem] text-stone-600 tracking-[0.2em] uppercase mb-6">Навигация</h4>
            <nav class="flex flex-col gap-4">
              <a href="#/" class="text-stone-400 hover:text-copper-400 transition-colors">Главная</a>
              <a href="#/discover" class="text-stone-400 hover:text-copper-400 transition-colors">Открыть КБР</a>
              <a href="#/contact" class="text-stone-400 hover:text-copper-400 transition-colors">Контакты</a>
            </nav>
          </div>

          <!-- Social column -->
          <div class="md:col-span-3">
            <h4 class="font-mono text-[0.65rem] text-stone-600 tracking-[0.2em] uppercase mb-6">Связь</h4>
            <div class="flex flex-col gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 class="group flex items-center gap-3 text-stone-400 hover:text-copper-400 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram</span>
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer"
                 class="group flex items-center gap-3 text-stone-400 hover:text-copper-400 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                <span>Telegram</span>
              </a>
              <a href="mailto:hello@kabardinobalkaria.com"
                 class="group flex items-center gap-3 text-stone-400 hover:text-copper-400 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Bottom bar -->
        <div class="py-6 border-t border-stone-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="font-mono text-xs text-stone-600">
            &copy; ${currentYear} kabardinobalkaria.com
          </p>
          <p class="font-mono text-xs text-stone-700">
            Создано в Кабардино-Балкарии с ♡
          </p>
        </div>
      </div>
    </footer>
  `
}
