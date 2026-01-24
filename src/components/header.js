/**
 * Header component - Alpine Editorial style
 */

export function Header() {
  return `
    <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-500" id="main-header">
      <div class="absolute inset-0 bg-stone-950/80 backdrop-blur-md border-b border-stone-800/50 opacity-0 transition-opacity duration-300" id="header-bg"></div>

      <nav class="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div class="flex items-center justify-between h-20 lg:h-24">

          <!-- Logo -->
          <a href="#/" class="relative group">
            <div class="flex items-center gap-3">
              <div class="relative">
                <svg class="w-10 h-10" viewBox="0 0 40 40" fill="none">
                  <path d="M4 32 L12 12 L20 24 L28 8 L36 32" stroke="currentColor" stroke-width="1.5" fill="none" class="text-stone-400 group-hover:text-copper-400 transition-colors duration-300"/>
                  <path d="M20 32 L26 20 L32 32" fill="currentColor" class="text-copper-500"/>
                </svg>
              </div>
              <div class="hidden sm:block">
                <span class="font-mono text-[0.65rem] tracking-[0.2em] text-stone-500 uppercase block">43°28'N 43°36'E</span>
                <span class="font-display text-lg text-stone-100 -mt-1 block">КБР</span>
              </div>
            </div>
          </a>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center gap-12">
            <a href="#/" data-nav-link class="nav-link font-mono text-xs tracking-[0.15em] uppercase">
              Главная
            </a>
            <a href="#/discover" data-nav-link class="nav-link font-mono text-xs tracking-[0.15em] uppercase">
              Открыть КБР
            </a>
            <a href="#/contact" class="btn-primary">
              Связаться
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button id="mobile-menu-btn" class="md:hidden relative w-10 h-10 flex items-center justify-center">
            <div class="relative w-6 h-4 flex flex-col justify-between" id="hamburger">
              <span class="w-full h-[1px] bg-stone-300 transform transition-all duration-300 origin-center"></span>
              <span class="w-full h-[1px] bg-stone-300 transition-all duration-300"></span>
              <span class="w-full h-[1px] bg-stone-300 transform transition-all duration-300 origin-center"></span>
            </div>
          </button>
        </div>
      </nav>

      <!-- Mobile Menu -->
      <div id="mobile-menu" class="md:hidden fixed inset-0 top-20 bg-stone-950/98 backdrop-blur-lg transform translate-x-full transition-transform duration-500 ease-out">
        <div class="h-full flex flex-col justify-between p-8">
          <nav class="flex flex-col gap-8 pt-12">
            <a href="#/" data-nav-link class="mobile-nav-link group flex items-center gap-4">
              <span class="font-mono text-xs text-copper-500">01</span>
              <span class="font-display text-3xl text-stone-100 group-hover:text-copper-400 transition-colors">Главная</span>
            </a>
            <a href="#/discover" data-nav-link class="mobile-nav-link group flex items-center gap-4">
              <span class="font-mono text-xs text-copper-500">02</span>
              <span class="font-display text-3xl text-stone-100 group-hover:text-copper-400 transition-colors">Открыть КБР</span>
            </a>
            <a href="#/contact" data-nav-link class="mobile-nav-link group flex items-center gap-4">
              <span class="font-mono text-xs text-copper-500">03</span>
              <span class="font-display text-3xl text-stone-100 group-hover:text-copper-400 transition-colors">Контакты</span>
            </a>
          </nav>

          <div class="border-t border-stone-800 pt-8">
            <p class="font-mono text-xs text-stone-600 tracking-wider uppercase mb-2">Локация</p>
            <p class="font-body text-stone-400">Нальчик, Кабардино-Балкария</p>
            <p class="font-mono text-xs text-stone-600 mt-4">Россия</p>
          </div>
        </div>
      </div>
    </header>
  `
}

export function initHeader() {
  const header = document.getElementById('main-header')
  const headerBg = document.getElementById('header-bg')
  const mobileMenuBtn = document.getElementById('mobile-menu-btn')
  const mobileMenu = document.getElementById('mobile-menu')
  const hamburger = document.getElementById('hamburger')

  // Scroll effect
  let lastScroll = 0
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset

    if (currentScroll > 100) {
      headerBg.classList.remove('opacity-0')
      headerBg.classList.add('opacity-100')
    } else {
      headerBg.classList.add('opacity-0')
      headerBg.classList.remove('opacity-100')
    }

    lastScroll = currentScroll
  })

  // Mobile menu toggle
  let isMenuOpen = false

  mobileMenuBtn?.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen

    if (isMenuOpen) {
      mobileMenu.classList.remove('translate-x-full')
      mobileMenu.classList.add('translate-x-0')
      // Animate hamburger to X
      const spans = hamburger.querySelectorAll('span')
      spans[0].style.transform = 'rotate(45deg) translateY(6px)'
      spans[1].style.opacity = '0'
      spans[2].style.transform = 'rotate(-45deg) translateY(-6px)'
      document.body.style.overflow = 'hidden'
    } else {
      mobileMenu.classList.add('translate-x-full')
      mobileMenu.classList.remove('translate-x-0')
      // Reset hamburger
      const spans = hamburger.querySelectorAll('span')
      spans[0].style.transform = ''
      spans[1].style.opacity = ''
      spans[2].style.transform = ''
      document.body.style.overflow = ''
    }
  })

  // Close mobile menu on link click
  mobileMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      isMenuOpen = false
      mobileMenu.classList.add('translate-x-full')
      mobileMenu.classList.remove('translate-x-0')
      const spans = hamburger.querySelectorAll('span')
      spans[0].style.transform = ''
      spans[1].style.opacity = ''
      spans[2].style.transform = ''
      document.body.style.overflow = ''
    })
  })
}
