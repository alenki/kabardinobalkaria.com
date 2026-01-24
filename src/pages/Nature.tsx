import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Hero from '../components/Hero'
import Section from '../components/Section'
import FadeIn from '../components/FadeIn'

const natureCategories = [
  {
    id: 'mountains',
    title: 'Горы',
    subtitle: 'Величие Кавказа',
    description: 'Кабардино-Балкария — горная страна. Здесь расположены высочайшие вершины Европы, включая двуглавый Эльбрус (5642 м) и красавец Дыхтау (5204 м).',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80',
    facts: [
      'Эльбрус — высочайшая вершина Европы (5642 м)',
      '7 из 10 высочайших вершин России находятся здесь',
      'Более 100 вершин выше 4000 метров',
      'Уникальная система ледников',
    ],
  },
  {
    id: 'rivers',
    title: 'Реки и водопады',
    subtitle: 'Голос гор',
    description: 'Горные реки Кабардино-Балкарии — это артерии, несущие чистейшую воду с ледников. Чегемские водопады, срывающиеся со 100-метровой высоты, завораживают путников уже много столетий.',
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=1200&q=80',
    facts: [
      'Чегемские водопады — высота до 60 метров',
      'Река Баксан — главная водная артерия региона',
      'Множество горных ручьёв с кристально чистой водой',
      'Водопады особенно красивы весной',
    ],
  },
  {
    id: 'lakes',
    title: 'Озёра',
    subtitle: 'Зеркала небес',
    description: 'Голубые озёра — одна из главных загадок Кавказа. Нижнее Голубое озеро — одно из глубочайших карстовых озёр в мире, его глубина до сих пор точно не определена.',
    image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1200&q=80',
    facts: [
      'Нижнее Голубое озеро — глубина более 250 м',
      'Постоянная температура воды около 9°C',
      'Уникальный голубой цвет из-за сероводорода',
      'Верхние Голубые озёра — популярное место отдыха',
    ],
  },
  {
    id: 'gorges',
    title: 'Ущелья',
    subtitle: 'Дороги в небо',
    description: 'Живописные ущелья — это ворота в высокогорье. Баксанское, Чегемское, Черекское ущелья открывают путь к самым красивым уголкам республики.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    facts: [
      'Баксанское ущелье — дорога к Эльбрусу',
      'Чегемское ущелье — путь к знаменитым водопадам',
      'Черекское ущелье — к Голубым озёрам',
      'Уникальная флора и фауна в каждом ущелье',
    ],
  },
  {
    id: 'flora',
    title: 'Флора',
    subtitle: 'Цветы высокогорья',
    description: 'Альпийские луга Кабардино-Балкарии — это живой ковёр из сотен видов растений. Здесь растут рододендроны, горечавки, эдельвейсы и множество редких эндемиков.',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200&q=80',
    facts: [
      'Более 3000 видов растений',
      'Множество эндемичных видов',
      'Альпийские луга на высоте 2000-3000 м',
      'Рододендроновые заросли в июне',
    ],
  },
]

export default function Nature() {
  const quoteRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress: quoteScrollProgress } = useScroll({
    target: quoteRef,
    offset: ['start end', 'end start'],
  })

  const quoteY = useTransform(quoteScrollProgress, [0, 1], ['-25%', '25%'])

  return (
    <>
      <Hero
        title="Природа"
        subtitle="Кабардино-Балкария"
        description="Здесь, где горы касаются облаков, природа создала мир удивительной красоты — мир ледников и цветущих лугов, бурных рек и тихих озёр"
        image="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1920&q=80"
        height="large"
      />

      {/* Introduction */}
      <Section background="gradient" centered>
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-earth-700 leading-relaxed">
              На территории республики расположены все климатические зоны —
              от засушливых степей до вечных льдов. За один день можно пройти
              путь от цветущих садов до снежных вершин.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Nature Categories */}
      {natureCategories.map((category, index) => (
        <Section
          key={category.id}
          background={index % 2 === 0 ? 'white' : 'cream'}
          className="overflow-hidden"
        >
          <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
            index % 2 === 1 ? 'lg:flex-row-reverse' : ''
          }`}>
            <FadeIn direction={index % 2 === 0 ? 'right' : 'left'}>
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={category.image}
                  alt={category.title}
                  className="rounded-2xl shadow-soft-lg w-full aspect-[4/3] object-cover"
                />
                <div className={`absolute -bottom-6 ${index % 2 === 0 ? '-right-6' : '-left-6'} w-48 h-48 bg-meadow-100 rounded-2xl -z-10`} />
              </div>
            </FadeIn>

            <FadeIn direction={index % 2 === 0 ? 'left' : 'right'} delay={0.2}>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <p className="text-meadow-500 text-sm tracking-widest uppercase mb-3">
                  {category.subtitle}
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-earth-800 mb-6">
                  {category.title}
                </h2>
                <p className="text-earth-600 leading-relaxed mb-8">
                  {category.description}
                </p>

                <ul className="space-y-3">
                  {category.facts.map((fact) => (
                    <li key={fact} className="flex items-start gap-3 text-earth-700">
                      <svg className="w-5 h-5 text-meadow-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </Section>
      ))}

      {/* Quote Section */}
      <section ref={quoteRef} className="relative py-24 md:py-32 overflow-hidden">
        {/* Parallax background image */}
        <motion.div
          className="absolute inset-0 -top-[30%] -bottom-[30%]"
          style={{ y: quoteY }}
        >
          <img
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-earth-900/60" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed">
              «Горы — это место, где человек может услышать голос вечности
              и понять, как мало значит суета повседневности»
            </blockquote>
            <p className="mt-6 text-cream-300">— Народная мудрость</p>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
