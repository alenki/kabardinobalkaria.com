import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Hero from '../components/Hero'
import Section from '../components/Section'
import Card from '../components/Card'
import FadeIn from '../components/FadeIn'

const featuredPlaces = [
  {
    title: 'Эльбрус',
    description: 'Высочайшая вершина Европы, покрытая вечными снегами и ледниками',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80',
    link: '/mesta#elbrus',
    tags: ['Горы'],
  },
  {
    title: 'Чегемские водопады',
    description: 'Каскады кристально чистой воды, стекающие со скал ущелья',
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80',
    link: '/mesta#chegem',
    tags: ['Водопады'],
  },
  {
    title: 'Голубые озёра',
    description: 'Загадочные карстовые озёра с водой невероятного цвета',
    image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80',
    link: '/mesta#blue-lakes',
    tags: ['Озёра'],
  },
]

const natureStats = [
  { value: '5642', unit: 'м', label: 'высота Эльбруса' },
  { value: '100+', unit: '', label: 'вершин выше 4000 м' },
  { value: '7', unit: '', label: 'ущелий' },
  { value: '12500', unit: 'км²', label: 'площадь республики' },
]

export default function Home() {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ['start end', 'end start'],
  })

  const { scrollYProgress: statsScrollProgress } = useScroll({
    target: statsRef,
    offset: ['start end', 'end start'],
  })

  const { scrollYProgress: ctaScrollProgress } = useScroll({
    target: ctaRef,
    offset: ['start end', 'end start'],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const statsY = useTransform(statsScrollProgress, [0, 1], ['-27.5%', '27.5%'])
  const ctaY = useTransform(ctaScrollProgress, [0, 1], ['-12.5%', '12.5%'])

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Кабардино-Балкария"
        subtitle="Край гор и легенд"
        description="Место, где величественные горы встречаются с небом, где реки поют древние песни, а время течёт медленно и спокойно"
        image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80"
        height="full"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/mesta" className="btn-primary">
            Открыть места
          </Link>
          <Link to="/priroda" className="btn-ghost">
            О природе
          </Link>
        </div>
      </Hero>

      {/* Poetic Introduction */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        {/* Layered background atmosphere */}
        <div className="absolute inset-0 gradient-radial-soft" />
        <div className="absolute inset-0 gradient-radial-gold" />
        <div className="absolute inset-0 pattern-caucasian opacity-30" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-300/50 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <motion.p
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-earth-800 leading-[1.3] tracking-tight"
              style={{ textWrap: 'balance' } as React.CSSProperties}
            >
              Здесь, на склонах Большого Кавказа, природа создала свой
              величайший шедевр —{' '}
              <span className="italic text-meadow-500">землю</span>, где каждый рассвет
              дарит <span className="italic text-gold-500">надежду</span>, а каждый закат —{' '}
              <span className="italic text-teal-500">покой</span>.
            </motion.p>
          </FadeIn>

          {/* Decorative divider */}
          <FadeIn delay={0.2}>
            <div className="flex items-center justify-center gap-4 mt-12">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-cream-400" />
              <div className="w-2 h-2 rounded-full bg-meadow-300" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-cream-400" />
            </div>
          </FadeIn>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-300/50 to-transparent" />
      </section>

      {/* Nature Stats - Horizontal scroll on mobile */}
      <section ref={statsRef} className="relative py-20 overflow-hidden">
        {/* Parallax background image */}
        <motion.div
          className="absolute inset-0 -top-[30%] -bottom-[30%]"
          style={{ y: statsY }}
        >
          <img
            src="https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-earth-900/75" />
        {/* Caucasian geometric pattern */}
        <div className="absolute inset-0 pattern-caucasian opacity-5" />
        {/* Mountain ridge decorative line */}
        <div className="absolute inset-x-0 bottom-0 h-20 pattern-mountains opacity-30" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {natureStats.map((stat, index) => (
              <FadeIn key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-2">
                    {stat.value}
                    <span className="text-gold-400 text-2xl md:text-3xl ml-1">{stat.unit}</span>
                  </div>
                  <div className="text-cream-300/70 text-sm tracking-wide">
                    {stat.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Places - Asymmetric grid */}
      <Section
        subtitle="Избранные места"
        title="Откройте для себя"
        description="Каждое место здесь хранит свою историю и дарит незабываемые впечатления"
        background="gradient"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredPlaces.map((place, index) => (
            <FadeIn key={place.title} delay={index * 0.15}>
              <Card {...place} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div className="mt-16 text-center">
            <Link to="/mesta" className="btn-secondary inline-flex items-center gap-3">
              Все места
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </FadeIn>
      </Section>

      {/* Culture Preview - Overlapping layout */}
      <section ref={parallaxRef} className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-cream-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image stack with parallax */}
            <FadeIn direction="right">
              <div className="relative">
                {/* Main image */}
                <motion.div
                  style={{ y: y1 }}
                  className="relative z-10"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-dreamy">
                    <img
                      src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80"
                      alt="Традиции Кабардино-Балкарии"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Secondary image - offset */}
                <motion.div
                  style={{ y: y2 }}
                  className="absolute -bottom-12 -right-8 lg:-right-16 w-2/3 z-20"
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-soft-lg border-4 border-cream-50">
                    <img
                      src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80"
                      alt="Кухня Кабардино-Балкарии"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-meadow-100 -z-10" />
                <div className="absolute -bottom-4 left-1/4 w-24 h-24 rounded-full bg-gold-100 -z-10" />
              </div>
            </FadeIn>

            {/* Content */}
            <FadeIn direction="left" delay={0.2}>
              <div className="lg:pl-8">
                <p className="text-meadow-500 text-xs tracking-[0.3em] uppercase mb-4 font-medium">
                  Культура
                </p>
                <h2 className="font-serif text-4xl md:text-5xl text-earth-800 mb-6 leading-[1.1]">
                  Древние традиции<br />
                  <span className="text-earth-500">живого народа</span>
                </h2>
                <p className="text-earth-600 leading-relaxed mb-6 text-lg">
                  Кабардинцы и балкарцы веками хранят традиции предков — законы
                  гостеприимства, уважения к старшим, преданности родной земле.
                </p>
                <p className="text-earth-500 leading-relaxed mb-8">
                  Здесь каждый танец рассказывает историю, каждое блюдо несёт тепло
                  домашнего очага, а каждая песня — эхо горных вершин.
                </p>

                <Link to="/kultura" className="btn-secondary inline-flex items-center gap-3">
                  Узнать о культуре
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Call to Action - Immersive */}
      <section ref={ctaRef} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Parallax background image */}
        <motion.div
          className="absolute inset-0 -top-[15%] -bottom-[15%]"
          style={{ y: ctaY }}
        >
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-earth-900/90 via-earth-900/50 to-earth-900/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-earth-900/60 to-transparent" />

        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(250, 247, 242, 0.1) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-cream-300/80 text-xs tracking-[0.3em] uppercase mb-6">
              Начните путешествие
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-[1.1]">
              Горы ждут вас
            </h2>
            <p className="text-cream-200/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
              Узнайте, как спланировать идеальную поездку в Кабардино-Балкарию —
              лучшее время для визита, что взять с собой и полезные советы
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/posetit" className="btn-primary">
                Спланировать поездку
              </Link>
              <Link to="/mesta" className="btn-ghost">
                Смотреть места
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Decorative corners */}
        <div className="absolute top-8 left-8 w-20 h-20 border-l border-t border-cream-200/10" />
        <div className="absolute top-8 right-8 w-20 h-20 border-r border-t border-cream-200/10" />
        <div className="absolute bottom-8 left-8 w-20 h-20 border-l border-b border-cream-200/10" />
        <div className="absolute bottom-8 right-8 w-20 h-20 border-r border-b border-cream-200/10" />
      </section>
    </>
  )
}
