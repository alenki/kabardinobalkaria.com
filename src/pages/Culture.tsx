import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Hero from '../components/Hero'
import Section from '../components/Section'
import FadeIn from '../components/FadeIn'

const traditions = [
  {
    title: 'Гостеприимство',
    description: 'Гость — посланник Бога. Этот принцип лежит в основе кавказской культуры. Гостя встречают лучшим, что есть в доме, и провожают с подарками.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Уважение к старшим',
    description: 'Адыгэ хабзэ и тау адет — кодексы поведения кабардинцев и балкарцев — ставят уважение к старшим на первое место. Слово старшего — закон.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Честь и достоинство',
    description: 'Намыс (честь) — главное достоинство горца. Лучше умереть стоя, чем жить на коленях — эта мудрость передаётся из поколения в поколение.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
]

const cuisine = [
  {
    name: 'Хычины',
    description: 'Тонкие лепёшки с начинкой из картофеля и сыра или мяса — визитная карточка балкарской кухни',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',
  },
  {
    name: 'Шашлык',
    description: 'Мясо, маринованное по особым рецептам и приготовленное на углях — искусство, передающееся веками',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80',
  },
  {
    name: 'Айран',
    description: 'Освежающий кисломолочный напиток — незаменимый спутник любой трапезы в горах',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80',
  },
  {
    name: 'Гедлибже',
    description: 'Курица в сметанном соусе — нежное и ароматное блюдо кабардинской кухни',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=600&q=80',
  },
]

const arts = [
  {
    title: 'Танцы',
    description: 'Кабардинка и лезгинка — танцы, в которых мужчины демонстрируют силу и ловкость, а женщины — грацию и достоинство. Каждое движение имеет значение.',
    image: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800&q=80',
  },
  {
    title: 'Музыка',
    description: 'Звуки шичепшина (скрипки) и пхачича (трещотки) сопровождают праздники. Народные песни рассказывают о героях, любви и родной земле.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
  },
  {
    title: 'Ремёсла',
    description: 'Золотое шитьё, изготовление кинжалов, ковроткачество — древние ремёсла живы и сегодня. Каждое изделие — произведение искусства.',
    image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&q=80',
  },
]

export default function Culture() {
  const quoteRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress: quoteScrollProgress } = useScroll({
    target: quoteRef,
    offset: ['start end', 'end start'],
  })

  const quoteY = useTransform(quoteScrollProgress, [0, 1], ['-25%', '25%'])

  return (
    <>
      <Hero
        title="Культура"
        subtitle="Традиции горного края"
        description="Веками народы Кабардино-Балкарии хранили свои обычаи, передавая из поколения в поколение мудрость предков"
        image="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1920&q=80"
        height="large"
      />

      {/* Traditions */}
      <Section
        subtitle="Адыгэ хабзэ"
        title="Традиции и обычаи"
        description="Кодекс чести горцев складывался веками и до сих пор определяет жизнь народа"
        background="gradient"
        centered
      >
        <div className="grid md:grid-cols-3 gap-8">
          {traditions.map((tradition, index) => (
            <FadeIn key={tradition.title} delay={index * 0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-soft text-center h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-meadow-100 text-meadow-500 mb-6">
                  {tradition.icon}
                </div>
                <h3 className="font-serif text-xl text-earth-800 mb-4">{tradition.title}</h3>
                <p className="text-earth-600 text-sm leading-relaxed">{tradition.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Cuisine */}
      <Section
        subtitle="Кухня"
        title="Вкус гор"
        description="Кухня Кабардино-Балкарии — это сытные мясные блюда, свежие молочные продукты и гостеприимство, превращающее каждую трапезу в праздник"
        background="white"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {cuisine.map((dish, index) => (
            <FadeIn key={dish.name} delay={index * 0.1}>
              <div className="group">
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 shadow-soft">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-earth-900/80 via-earth-900/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-serif text-2xl text-white tracking-wide">
                      {dish.name}
                    </h3>
                    <div className="w-8 h-px bg-gold-400/60 mt-2" />
                  </div>
                </div>
                <p className="text-earth-600 leading-relaxed text-[15px] tracking-wide">
                  {dish.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Arts */}
      <Section
        subtitle="Искусство"
        title="Душа народа"
        description="Музыка, танцы и ремёсла — живое воплощение духа горцев"
        background="cream"
      >
        <div className="space-y-16">
          {arts.map((art, index) => (
            <FadeIn key={art.title}>
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <img
                    src={art.image}
                    alt={art.title}
                    className="rounded-2xl shadow-soft-lg w-full aspect-video object-cover"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="font-serif text-2xl md:text-3xl text-earth-800 mb-4">
                    {art.title}
                  </h3>
                  <p className="text-earth-600 leading-relaxed text-lg">
                    {art.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Quote */}
      <section ref={quoteRef} className="relative py-24 md:py-32 overflow-hidden">
        {/* Parallax background image */}
        <motion.div
          className="absolute inset-0 -top-[30%] -bottom-[30%]"
          style={{ y: quoteY }}
        >
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-earth-900/70" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed">
              «Кто не помнит прошлого — у того нет будущего»
            </blockquote>
            <p className="mt-6 text-cream-300">— Кабардинская пословица</p>
          </FadeIn>
        </div>
      </section>

      {/* Two Peoples */}
      <Section background="white" centered>
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-earth-800 mb-6">
              Два народа — одна земля
            </h2>
            <p className="text-earth-600 leading-relaxed text-lg mb-8">
              Кабардинцы (адыги) и балкарцы (тюрки) веками живут бок о бок,
              сохраняя свои традиции и обогащая друг друга. Их культуры переплелись,
              создав уникальный мир горного края — где адыгский танец звучит
              под балкарскую мелодию, а на праздничном столе соседствуют
              кабардинские и балкарские блюда.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-cream-50 rounded-2xl p-6">
                <h4 className="font-serif text-xl text-earth-800 mb-2">Кабардинцы</h4>
                <p className="text-earth-600 text-sm">
                  Адыгский народ с богатой историей, известный своим кодексом чести
                  «Адыгэ хабзэ», искусством верховой езды и изысканными танцами
                </p>
              </div>
              <div className="bg-cream-50 rounded-2xl p-6">
                <h4 className="font-serif text-xl text-earth-800 mb-2">Балкарцы</h4>
                <p className="text-earth-600 text-sm">
                  Тюркский народ гор, хранители высокогорных пастбищ, мастера
                  овцеводства и создатели неповторимой кухни высокогорья
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  )
}
