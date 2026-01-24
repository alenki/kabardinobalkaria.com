import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import Hero from '../components/Hero'
import Section from '../components/Section'
import FadeIn from '../components/FadeIn'

const howToGet = [
  {
    method: 'Самолёт',
    description: 'Ближайший аэропорт — Минеральные Воды (MRV). Оттуда до Нальчика около 100 км по живописной дороге.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
    details: ['Рейсы из Москвы, Санкт-Петербурга, других городов', 'Время полёта из Москвы ~2 часа', 'Трансфер или аренда авто в аэропорту'],
  },
  {
    method: 'Поезд',
    description: 'Железнодорожное сообщение с Нальчиком — столицей республики. Поезда из Москвы идут около 30 часов.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 4h8l2 6H6l2-6zM6 10h12v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6zm3 3.5a.5.5 0 100-1 .5.5 0 000 1zm6 0a.5.5 0 100-1 .5.5 0 000 1zM9 18l-2 3m8-3l2 3" />
      </svg>
    ),
    details: ['Поезда из Москвы, Санкт-Петербурга', 'Станция Нальчик', 'Романтичное путешествие через степи и предгорья'],
  },
  {
    method: 'Автомобиль',
    description: 'Отличные дороги ведут в республику. Путешествие на машине позволит увидеть красоту юга России.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    details: ['Федеральная трасса М-4 «Дон»', 'Около 1700 км от Москвы', 'Аренда авто доступна на месте'],
  },
]

const seasons = [
  {
    season: 'Весна',
    months: 'Апрель — Май',
    description: 'Цветение альпийских лугов, водопады на пике мощности после таяния снегов. Идеально для фотографии.',
    highlights: ['Цветущие рододендроны', 'Полноводные водопады', 'Мягкая погода'],
    color: 'bg-lavender-300',
  },
  {
    season: 'Лето',
    months: 'Июнь — Август',
    description: 'Высокий сезон для треккинга и альпинизма. Тёплая погода, но в горах всегда свежо.',
    highlights: ['Треккинг и альпинизм', 'Горные озёра доступны', 'Длинные дни'],
    color: 'bg-meadow-400',
  },
  {
    season: 'Осень',
    months: 'Сентябрь — Октябрь',
    description: 'Золотая пора — леса окрашиваются в яркие цвета, меньше туристов, стабильная погода.',
    highlights: ['Золотая осень в горах', 'Меньше туристов', 'Идеальные условия'],
    color: 'bg-gold-200',
  },
  {
    season: 'Зима',
    months: 'Декабрь — Март',
    description: 'Горнолыжный сезон на Эльбрусе и Чегете. Замёрзшие водопады создают сказочные пейзажи.',
    highlights: ['Горнолыжные курорты', 'Ледяные водопады', 'Новогодняя атмосфера'],
    color: 'bg-sky-300',
  },
]

const tips = [
  {
    category: 'Что взять',
    items: [
      'Удобную треккинговую обувь',
      'Тёплую куртку (в горах холодно даже летом)',
      'Солнцезащитные очки и крем',
      'Дождевик или ветровку',
      'Купальник (для термальных источников)',
      'Наличные деньги (карты принимают не везде)',
    ],
  },
  {
    category: 'Безопасность',
    items: [
      'Не ходите в горы без подготовки',
      'Пользуйтесь услугами местных гидов',
      'Следите за погодой — она меняется быстро',
      'Регистрируйтесь в МЧС перед сложными маршрутами',
      'Имейте запас воды и еды',
    ],
  },
  {
    category: 'Уважение к традициям',
    items: [
      'Приветствуйте старших первыми',
      'Не отказывайтесь от угощения',
      'Уважайте местные обычаи',
      'Спрашивайте разрешения на фото людей',
      'Не мусорьте на природе',
    ],
  },
]

export default function Visit() {
  const ctaRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress: ctaScrollProgress } = useScroll({
    target: ctaRef,
    offset: ['start end', 'end start'],
  })

  const ctaY = useTransform(ctaScrollProgress, [0, 1], ['-25%', '25%'])

  return (
    <>
      <Hero
        title="Посетить"
        subtitle="Спланируйте поездку"
        description="Всё, что нужно знать для незабываемого путешествия в Кабардино-Балкарию"
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
        height="large"
      />

      {/* How to Get */}
      <Section
        subtitle="Как добраться"
        title="Путь в горы"
        description="Несколько способов добраться до Кабардино-Балкарии"
        background="gradient"
        centered
      >
        <div className="grid md:grid-cols-3 gap-8">
          {howToGet.map((method, index) => (
            <FadeIn key={method.method} delay={index * 0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-soft h-full">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-meadow-100 text-meadow-500 mb-6">
                  {method.icon}
                </div>
                <h3 className="font-serif text-xl text-earth-800 mb-3">{method.method}</h3>
                <p className="text-earth-600 text-sm mb-4">{method.description}</p>
                <ul className="space-y-2">
                  {method.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-earth-700 text-sm">
                      <svg className="w-4 h-4 text-meadow-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Best Time */}
      <Section
        subtitle="Когда ехать"
        title="Лучшее время для визита"
        description="Каждый сезон открывает свою сторону Кабардино-Балкарии"
        background="white"
        centered
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {seasons.map((season, index) => (
            <FadeIn key={season.season} delay={index * 0.1}>
              <div className="bg-cream-50 rounded-2xl overflow-hidden h-full">
                <div className={`h-2 ${season.color}`} />
                <div className="p-6">
                  <h3 className="font-serif text-xl text-earth-800 mb-1">{season.season}</h3>
                  <p className="text-meadow-500 text-sm font-medium mb-3">{season.months}</p>
                  <p className="text-earth-600 text-sm mb-4">{season.description}</p>
                  <ul className="space-y-1">
                    {season.highlights.map((highlight) => (
                      <li key={highlight} className="text-earth-700 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-meadow-400 rounded-full" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Tips */}
      <Section
        subtitle="Советы"
        title="Полезная информация"
        background="cream"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <FadeIn key={tip.category} delay={index * 0.1}>
              <div className="bg-white rounded-2xl p-6 shadow-soft h-full">
                <h3 className="font-serif text-xl text-earth-800 mb-4 pb-4 border-b border-cream-200">
                  {tip.category}
                </h3>
                <ul className="space-y-3">
                  {tip.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-earth-700 text-sm">
                      <svg className="w-4 h-4 text-meadow-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Accommodation */}
      <Section background="white" centered>
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-earth-800 mb-6">
              Где остановиться
            </h2>
            <p className="text-earth-600 leading-relaxed text-lg mb-8">
              От уютных гостевых домов в горных сёлах до современных отелей
              Приэльбрусья — выбор жилья зависит от ваших предпочтений.
              Многие туристы останавливаются в Нальчике, Терсколе или
              на поляне Азау.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-cream-50 rounded-xl p-6">
                <h4 className="font-medium text-earth-800 mb-2">Нальчик</h4>
                <p className="text-earth-600 text-sm">
                  Столица республики. Отели разного уровня, удобная база для
                  поездок по региону
                </p>
              </div>
              <div className="bg-cream-50 rounded-xl p-6">
                <h4 className="font-medium text-earth-800 mb-2">Приэльбрусье</h4>
                <p className="text-earth-600 text-sm">
                  Терскол, Азау, Чегет. Отели и гостиницы у подъёмников,
                  идеально для горнолыжников
                </p>
              </div>
              <div className="bg-cream-50 rounded-xl p-6">
                <h4 className="font-medium text-earth-800 mb-2">Гостевые дома</h4>
                <p className="text-earth-600 text-sm">
                  Аутентичный опыт в горных сёлах. Домашняя кухня и
                  гостеприимство хозяев
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* CTA */}
      <section ref={ctaRef} className="relative py-24 md:py-32 overflow-hidden">
        {/* Parallax background image */}
        <motion.div
          className="absolute inset-0 -top-[30%] -bottom-[30%]"
          style={{ y: ctaY }}
        >
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-earth-900/80 to-earth-900/60" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 text-white">
              Горы ждут вас
            </h2>
            <p className="text-cream-200 text-lg mb-8 max-w-2xl mx-auto">
              Начните своё путешествие с изучения мест, которые хотите посетить
            </p>
            <Link to="/mesta" className="btn-primary inline-flex items-center gap-2">
              Смотреть места
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
