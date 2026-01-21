/**
 * Portfolio page - Alpine Editorial style
 */

import { Header, initHeader } from '../components/header.js'
import { Footer } from '../components/footer.js'

const projects = [
  {
    id: 1,
    num: '01',
    title: 'E-Commerce Platform',
    subtitle: 'Интернет-магазин',
    description: 'Полноценная платформа электронной коммерции с интеграцией платёжных систем, управлением инвентарём и аналитической панелью. Оптимизирована для конверсии и скорости загрузки.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    metrics: { conversion: '+34%', speed: '1.2s' }
  },
  {
    id: 2,
    num: '02',
    title: 'Corporate Identity',
    subtitle: 'Корпоративный сайт',
    description: 'Презентационный сайт для строительной компании с интерактивным каталогом проектов, 3D-визуализацией объектов и системой онлайн-заявок.',
    tech: ['Vue.js', 'Three.js', 'Tailwind CSS'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    metrics: { leads: '+156%', engagement: '4.2min' }
  },
  {
    id: 3,
    num: '03',
    title: 'Tourism App',
    subtitle: 'Мобильное приложение',
    description: 'Кроссплатформенное приложение для бронирования туров по Кавказу. Офлайн-карты, голосовой гид, интеграция с локальными провайдерами.',
    tech: ['React Native', 'Firebase', 'TypeScript'],
    year: '2023',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80',
    metrics: { users: '12K+', rating: '4.8★' }
  },
  {
    id: 4,
    num: '04',
    title: 'SaaS Dashboard',
    subtitle: 'Веб-приложение',
    description: 'Аналитическая панель для SaaS-продукта. Визуализация данных в реальном времени, настраиваемые виджеты, экспорт отчётов.',
    tech: ['Next.js', 'D3.js', 'PostgreSQL'],
    year: '2023',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    metrics: { efficiency: '+45%', satisfaction: '92%' }
  }
]

function ProjectCard(project, index) {
  const isEven = index % 2 === 0

  return `
    <article class="group grid lg:grid-cols-12 gap-8 lg:gap-16 items-center py-16 lg:py-24 border-b border-stone-800/50">
      <!-- Image -->
      <div class="lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}">
        <div class="relative overflow-hidden aspect-[16/10]">
          <img
            src="${project.image}"
            alt="${project.title}"
            class="w-full h-full object-cover img-dramatic"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <!-- Floating year badge -->
          <div class="absolute top-6 ${isEven ? 'right-6' : 'left-6'} bg-stone-950/80 backdrop-blur-sm px-4 py-2">
            <span class="font-mono text-xs text-copper-400">${project.year}</span>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}">
        <div class="${isEven ? '' : 'lg:text-right'}">
          <!-- Number and subtitle -->
          <div class="flex items-center gap-4 ${isEven ? '' : 'lg:justify-end'}">
            <span class="font-mono text-xs text-copper-500">${project.num}</span>
            <span class="font-mono text-xs text-stone-600 uppercase tracking-wider">${project.subtitle}</span>
          </div>

          <!-- Title -->
          <h3 class="display-md text-stone-100 mt-4 group-hover:text-copper-400 transition-colors duration-300">
            ${project.title}
          </h3>

          <!-- Description -->
          <p class="mt-4 text-stone-500 leading-relaxed">
            ${project.description}
          </p>

          <!-- Tech stack -->
          <div class="flex flex-wrap gap-2 mt-6 ${isEven ? '' : 'lg:justify-end'}">
            ${project.tech.map(t => `
              <span class="px-3 py-1 border border-stone-800 font-mono text-xs text-stone-500">${t}</span>
            `).join('')}
          </div>

          <!-- Metrics -->
          <div class="flex gap-8 mt-8 ${isEven ? '' : 'lg:justify-end'}">
            ${Object.entries(project.metrics).map(([key, value]) => `
              <div class="${isEven ? '' : 'lg:text-right'}">
                <span class="font-display text-2xl text-copper-400">${value}</span>
                <p class="font-mono text-[0.6rem] text-stone-600 uppercase tracking-wider mt-1">${key}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </article>
  `
}

export function PortfolioPage() {
  return `
    ${Header()}

    <main class="pt-24">
      <!-- Hero -->
      <section class="py-16 lg:py-24 relative">
        <div class="absolute inset-0 topo-pattern opacity-50"></div>

        <div class="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div class="max-w-3xl">
            <span class="section-num">Работы</span>

            <h1 class="display-xl text-stone-100 mt-6">
              Избранные<br/>
              <span class="text-copper-400 italic">проекты</span>
            </h1>

            <p class="mt-8 text-stone-400 text-lg leading-relaxed max-w-xl">
              Каждый проект — это история. Не просто код и пиксели, а решение реальной задачи с измеримым результатом.
            </p>
          </div>

          <!-- Stats bar -->
          <div class="mt-16 pt-8 border-t border-stone-800 flex flex-wrap gap-12">
            <div>
              <span class="display-md text-copper-400">50+</span>
              <p class="font-mono text-xs text-stone-600 mt-1 uppercase tracking-wider">проектов</p>
            </div>
            <div>
              <span class="display-md text-copper-400">30+</span>
              <p class="font-mono text-xs text-stone-600 mt-1 uppercase tracking-wider">клиентов</p>
            </div>
            <div>
              <span class="display-md text-copper-400">5</span>
              <p class="font-mono text-xs text-stone-600 mt-1 uppercase tracking-wider">лет</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects -->
      <section class="py-12 lg:py-20">
        <div class="max-w-7xl mx-auto px-6 lg:px-12">
          ${projects.map((p, i) => ProjectCard(p, i)).join('')}
        </div>
      </section>

      <!-- Process Section -->
      <section class="py-24 lg:py-40 bg-stone-900/50 relative">
        <div class="absolute inset-0 topo-pattern opacity-30"></div>

        <div class="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div class="grid lg:grid-cols-12 gap-12">
            <!-- Header -->
            <div class="lg:col-span-4">
              <span class="section-num">Процесс</span>
              <h2 class="display-lg text-stone-100 mt-6">
                Как я<br/>
                <span class="text-copper-400 italic">работаю</span>
              </h2>
              <p class="mt-6 text-stone-500">
                Структурированный подход, проверенный десятками проектов. Прозрачность на каждом этапе.
              </p>
            </div>

            <!-- Steps -->
            <div class="lg:col-span-8">
              <div class="grid md:grid-cols-2 gap-px bg-stone-800">
                <!-- Step 1 -->
                <div class="bg-stone-950 p-8 lg:p-12 group hover:bg-stone-900/50 transition-colors">
                  <span class="font-mono text-4xl text-stone-800 group-hover:text-copper-500/30 transition-colors">01</span>
                  <h3 class="font-display text-xl text-stone-100 mt-4">Исследование</h3>
                  <p class="mt-3 text-stone-500 text-sm leading-relaxed">
                    Погружаюсь в бизнес, изучаю аудиторию, анализирую конкурентов. Задаю много вопросов.
                  </p>
                </div>

                <!-- Step 2 -->
                <div class="bg-stone-950 p-8 lg:p-12 group hover:bg-stone-900/50 transition-colors">
                  <span class="font-mono text-4xl text-stone-800 group-hover:text-copper-500/30 transition-colors">02</span>
                  <h3 class="font-display text-xl text-stone-100 mt-4">Дизайн</h3>
                  <p class="mt-3 text-stone-500 text-sm leading-relaxed">
                    Прототипы, макеты, итерации. Согласовываем каждый экран до начала разработки.
                  </p>
                </div>

                <!-- Step 3 -->
                <div class="bg-stone-950 p-8 lg:p-12 group hover:bg-stone-900/50 transition-colors">
                  <span class="font-mono text-4xl text-stone-800 group-hover:text-copper-500/30 transition-colors">03</span>
                  <h3 class="font-display text-xl text-stone-100 mt-4">Разработка</h3>
                  <p class="mt-3 text-stone-500 text-sm leading-relaxed">
                    Чистый код, современный стек, регулярные демо. Вы видите прогресс в реальном времени.
                  </p>
                </div>

                <!-- Step 4 -->
                <div class="bg-stone-950 p-8 lg:p-12 group hover:bg-stone-900/50 transition-colors">
                  <span class="font-mono text-4xl text-stone-800 group-hover:text-copper-500/30 transition-colors">04</span>
                  <h3 class="font-display text-xl text-stone-100 mt-4">Запуск</h3>
                  <p class="mt-3 text-stone-500 text-sm leading-relaxed">
                    Тестирование, оптимизация, деплой. Поддержка после запуска включена.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-24 lg:py-40 relative">
        <div class="absolute inset-0 bg-gradient-to-br from-copper-600/5 via-transparent to-transparent"></div>

        <div class="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <span class="section-num">Следующий проект</span>
          <h2 class="display-lg text-stone-100 mt-6">
            Ваш проект<br/>
            <span class="text-copper-400 italic">здесь?</span>
          </h2>
          <p class="mt-6 text-stone-400 max-w-xl mx-auto">
            Расскажите о своей идее. Первая консультация — бесплатно.
          </p>
          <a href="#/contact" class="btn-primary mt-10">
            Обсудить проект
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

export function initPortfolioPage() {
  initHeader()
}
