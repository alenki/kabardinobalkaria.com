/**
 * Contact page - Alpine Editorial style
 */

import { Header, initHeader } from '../components/header.js'
import { Footer } from '../components/footer.js'

export function ContactPage() {
  return `
    ${Header()}

    <main class="pt-24">
      <!-- Hero -->
      <section class="relative py-16 lg:py-24 overflow-hidden">
        <div class="absolute inset-0 topo-pattern"></div>

        <div class="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div class="max-w-3xl">
            <span class="section-num">Контакт</span>

            <h1 class="display-xl text-stone-100 mt-6">
              Давайте<br/>
              <span class="text-copper-400 italic">поговорим</span>
            </h1>

            <p class="mt-8 text-stone-400 text-lg leading-relaxed max-w-xl">
              Есть проект или идея? Расскажите о ней. Каждое сообщение читаю лично и отвечаю в течение 24 часов.
            </p>
          </div>
        </div>
      </section>

      <!-- Contact Form Section -->
      <section class="py-12 lg:py-20">
        <div class="max-w-7xl mx-auto px-6 lg:px-12">
          <div class="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <!-- Form -->
            <div class="lg:col-span-7">
              <form id="contact-form" class="space-y-8">
                <!-- Name row -->
                <div class="grid md:grid-cols-2 gap-8">
                  <div>
                    <label for="name" class="block font-mono text-xs text-stone-500 uppercase tracking-wider mb-3">
                      Имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      class="input"
                      placeholder="Как вас зовут?"
                    />
                  </div>
                  <div>
                    <label for="email" class="block font-mono text-xs text-stone-500 uppercase tracking-wider mb-3">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      class="input"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <!-- Project type -->
                <div>
                  <label class="block font-mono text-xs text-stone-500 uppercase tracking-wider mb-4">
                    Тип проекта
                  </label>
                  <div class="flex flex-wrap gap-3">
                    <label class="cursor-pointer">
                      <input type="radio" name="project-type" value="website" class="sr-only peer" />
                      <span class="inline-block px-4 py-2 border border-stone-700 text-stone-400 font-mono text-xs uppercase tracking-wider peer-checked:border-copper-500 peer-checked:text-copper-400 hover:border-stone-600 transition-colors">
                        Веб-сайт
                      </span>
                    </label>
                    <label class="cursor-pointer">
                      <input type="radio" name="project-type" value="webapp" class="sr-only peer" />
                      <span class="inline-block px-4 py-2 border border-stone-700 text-stone-400 font-mono text-xs uppercase tracking-wider peer-checked:border-copper-500 peer-checked:text-copper-400 hover:border-stone-600 transition-colors">
                        Веб-приложение
                      </span>
                    </label>
                    <label class="cursor-pointer">
                      <input type="radio" name="project-type" value="ecommerce" class="sr-only peer" />
                      <span class="inline-block px-4 py-2 border border-stone-700 text-stone-400 font-mono text-xs uppercase tracking-wider peer-checked:border-copper-500 peer-checked:text-copper-400 hover:border-stone-600 transition-colors">
                        Магазин
                      </span>
                    </label>
                    <label class="cursor-pointer">
                      <input type="radio" name="project-type" value="other" class="sr-only peer" />
                      <span class="inline-block px-4 py-2 border border-stone-700 text-stone-400 font-mono text-xs uppercase tracking-wider peer-checked:border-copper-500 peer-checked:text-copper-400 hover:border-stone-600 transition-colors">
                        Другое
                      </span>
                    </label>
                  </div>
                </div>

                <!-- Message -->
                <div>
                  <label for="message" class="block font-mono text-xs text-stone-500 uppercase tracking-wider mb-3">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    required
                    class="input resize-none"
                    placeholder="Расскажите о вашем проекте..."
                  ></textarea>
                </div>

                <!-- Submit -->
                <div class="pt-4">
                  <button type="submit" class="btn-primary w-full md:w-auto">
                    Отправить сообщение
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                  </button>
                </div>
              </form>

              <!-- Success message -->
              <div id="form-success" class="hidden py-16 text-center">
                <div class="w-16 h-16 border border-copper-500 flex items-center justify-center mx-auto mb-6">
                  <svg class="w-8 h-8 text-copper-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <h3 class="font-display text-2xl text-stone-100">Сообщение отправлено</h3>
                <p class="mt-3 text-stone-500">Я свяжусь с вами в ближайшее время.</p>
              </div>
            </div>

            <!-- Contact info sidebar -->
            <div class="lg:col-span-4 lg:col-start-9">
              <div class="sticky top-32 space-y-12">
                <!-- Direct contact -->
                <div>
                  <h3 class="font-mono text-xs text-stone-600 uppercase tracking-wider mb-6">Прямая связь</h3>
                  <div class="space-y-6">
                    <a href="mailto:hello@kabardinobalkaria.com" class="group flex items-start gap-4">
                      <div class="w-10 h-10 border border-stone-800 flex items-center justify-center group-hover:border-copper-500 transition-colors">
                        <svg class="w-5 h-5 text-stone-500 group-hover:text-copper-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                      </div>
                      <div>
                        <p class="font-mono text-xs text-stone-600 uppercase tracking-wider">Email</p>
                        <p class="text-stone-300 mt-1 group-hover:text-copper-400 transition-colors">hello@kabardinobalkaria.com</p>
                      </div>
                    </a>

                    <a href="https://t.me" target="_blank" rel="noopener noreferrer" class="group flex items-start gap-4">
                      <div class="w-10 h-10 border border-stone-800 flex items-center justify-center group-hover:border-copper-500 transition-colors">
                        <svg class="w-5 h-5 text-stone-500 group-hover:text-copper-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                        </svg>
                      </div>
                      <div>
                        <p class="font-mono text-xs text-stone-600 uppercase tracking-wider">Telegram</p>
                        <p class="text-stone-300 mt-1 group-hover:text-copper-400 transition-colors">Быстрый ответ</p>
                      </div>
                    </a>

                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="group flex items-start gap-4">
                      <div class="w-10 h-10 border border-stone-800 flex items-center justify-center group-hover:border-copper-500 transition-colors">
                        <svg class="w-5 h-5 text-stone-500 group-hover:text-copper-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                      <div>
                        <p class="font-mono text-xs text-stone-600 uppercase tracking-wider">Instagram</p>
                        <p class="text-stone-300 mt-1 group-hover:text-copper-400 transition-colors">@kabardinobalkaria</p>
                      </div>
                    </a>
                  </div>
                </div>

                <!-- Location -->
                <div>
                  <h3 class="font-mono text-xs text-stone-600 uppercase tracking-wider mb-6">Локация</h3>
                  <div class="border border-stone-800 p-6">
                    <div class="flex items-center gap-3 text-copper-500 mb-4">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                      <span class="font-mono text-xs uppercase tracking-wider">Нальчик</span>
                    </div>
                    <p class="text-stone-100 font-display text-lg">Кабардино-Балкария</p>
                    <p class="text-stone-500 text-sm mt-1">Россия</p>
                    <div class="mt-4 pt-4 border-t border-stone-800">
                      <p class="font-mono text-xs text-stone-600">43°28'N 43°36'E</p>
                      <p class="font-mono text-xs text-copper-500 mt-1">▲ 512 м</p>
                    </div>
                  </div>
                </div>

                <!-- Response time -->
                <div class="bg-stone-900/50 border border-stone-800 p-6">
                  <p class="font-mono text-xs text-copper-500 uppercase tracking-wider">Время ответа</p>
                  <p class="font-display text-2xl text-stone-100 mt-2">&lt; 24 часа</p>
                  <p class="text-stone-500 text-sm mt-2">
                    Telegram — самый быстрый способ связи для срочных вопросов.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    ${Footer()}
  `
}

export function initContactPage() {
  initHeader()

  const form = document.getElementById('contact-form')
  const formSuccess = document.getElementById('form-success')

  form?.addEventListener('submit', (e) => {
    e.preventDefault()

    const name = form.querySelector('#name').value.trim()
    const email = form.querySelector('#email').value.trim()
    const message = form.querySelector('#message').value.trim()

    if (name && email && message) {
      // In production, send to backend
      form.classList.add('hidden')
      formSuccess.classList.remove('hidden')
    }
  })
}
