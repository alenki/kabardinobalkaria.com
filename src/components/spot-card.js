/**
 * Spot card components - Alpine Editorial style
 */

export function SpotCard(spot, index) {
  return `
    <article class="spot-card group cursor-pointer relative" data-spot-id="${spot.id}">
      <!-- Image container -->
      <div class="relative aspect-[3/4] overflow-hidden">
        <img
          src="${spot.image}"
          alt="${spot.name}"
          class="spot-image w-full h-full object-cover"
          loading="lazy"
        />
        <div class="spot-overlay absolute inset-0"></div>

        <!-- Content overlay -->
        <div class="absolute inset-0 p-6 flex flex-col justify-end">
          <!-- Number badge -->
          <div class="absolute top-6 left-6">
            <span class="font-mono text-xs text-copper-400">${String(index + 1).padStart(2, '0')}</span>
          </div>

          <!-- Elevation if available -->
          ${spot.elevation ? `
            <div class="absolute top-6 right-6">
              <span class="elevation">${spot.elevation}</span>
            </div>
          ` : ''}

          <!-- Title and tagline -->
          <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <h3 class="font-display text-2xl text-stone-50">${spot.name}</h3>
            <p class="font-body text-sm text-stone-400 mt-2 italic opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              ${spot.tagline}
            </p>
          </div>

          <!-- View indicator -->
          <div class="mt-4 flex items-center gap-2 text-copper-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
            <span class="font-mono text-xs uppercase tracking-wider">Подробнее</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </div>
        </div>
      </div>
    </article>
  `
}

export function SpotModal(spot) {
  return `
    <div id="spot-modal" class="fixed inset-0 z-50 modal-backdrop flex items-center justify-center p-4 lg:p-8">
      <div class="relative bg-stone-950 border border-stone-800 max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col lg:flex-row">
        <!-- Close button -->
        <button
          id="close-modal"
          class="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center text-stone-400 hover:text-copper-400 transition-colors"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <!-- Image section -->
        <div class="lg:w-1/2 flex-shrink-0">
          <div class="aspect-[4/3] lg:aspect-auto lg:h-full">
            <img
              src="${spot.image}"
              alt="${spot.name}"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <!-- Content section -->
        <div class="lg:w-1/2 p-6 lg:p-10 overflow-y-auto">
          <!-- Header -->
          <div class="flex items-start justify-between gap-4">
            <div>
              <span class="font-mono text-xs text-copper-500">${spot.coords || '43°N 43°E'}</span>
              <h2 class="font-display text-3xl lg:text-4xl text-stone-50 mt-2">${spot.name}</h2>
            </div>
            ${spot.elevation ? `
              <div class="text-right">
                <span class="elevation">${spot.elevation}</span>
              </div>
            ` : ''}
          </div>

          <!-- Tagline -->
          <p class="font-display text-lg text-copper-400 italic mt-4">${spot.tagline}</p>

          <!-- Divider -->
          <div class="w-16 h-px bg-stone-800 my-6"></div>

          <!-- Description -->
          <div class="text-stone-400 leading-relaxed space-y-4 whitespace-pre-line">
            ${spot.description}
          </div>

          <!-- Info cards -->
          <div class="grid grid-cols-2 gap-4 mt-8">
            <div class="bg-stone-900 border border-stone-800 p-4">
              <h4 class="font-mono text-[0.6rem] text-stone-600 uppercase tracking-wider">Лучшее время</h4>
              <p class="text-stone-300 text-sm mt-2">${spot.bestTime}</p>
            </div>
            <div class="bg-stone-900 border border-stone-800 p-4">
              <h4 class="font-mono text-[0.6rem] text-stone-600 uppercase tracking-wider">Как добраться</h4>
              <p class="text-stone-300 text-sm mt-2">${spot.access}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}
