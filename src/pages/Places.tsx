import Hero from '../components/Hero'
import Section from '../components/Section'
import Card from '../components/Card'
import FadeIn from '../components/FadeIn'

const places = [
  {
    id: 'elbrus',
    title: 'Эльбрус и Приэльбрусье',
    description: 'Высочайшая вершина Европы и её окрестности — рай для горнолыжников, альпинистов и любителей горной природы',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80',
    tags: ['Горы', 'Лыжи', 'Альпинизм'],
    details: 'Эльбрус (5642 м) — спящий вулкан, покрытый вечными льдами. Канатные дороги поднимают до 3847 м, откуда открываются захватывающие виды. Зимой — горнолыжный курорт мирового уровня, летом — база для восхождений и треккинга.',
    highlights: ['Две вершины: Западная (5642 м) и Восточная (5621 м)', 'Канатная дорога до 3847 м', 'Горнолыжные трассы', 'Поляна Азау и Чегет'],
  },
  {
    id: 'chegem',
    title: 'Чегемские водопады',
    description: 'Каскады водопадов, срывающихся со скал живописного ущелья',
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80',
    tags: ['Водопады', 'Ущелье'],
    details: 'Чегемское ущелье — одно из красивейших мест Кавказа. Водопады обрушиваются с высоты до 60 метров, зимой превращаясь в ледяные колонны. Рядом — древние балкарские сёла и руины средневековых башен.',
    highlights: ['Высота водопадов до 60 м', 'Особенно красивы зимой', 'Древние балкарские башни', 'Парадром для парапланеристов'],
  },
  {
    id: 'blue-lakes',
    title: 'Голубые озёра',
    description: 'Загадочные карстовые озёра с водой невероятного бирюзового цвета',
    image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80',
    tags: ['Озёра', 'Природа'],
    details: 'Нижнее Голубое озеро (Церик-Кёль) — одно из глубочайших карстовых озёр мира. Его глубина превышает 250 метров, а точная цифра до сих пор неизвестна. Вода насыщена сероводородом, что придаёт ей необычный голубой цвет.',
    highlights: ['Глубина более 250 м', 'Постоянная температура 9°C', 'Дайвинг-центр', 'Форелевое хозяйство'],
  },
  {
    id: 'balkaria',
    title: 'Верхняя Балкария',
    description: 'Древнее село с башнями и удивительными горными пейзажами',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    tags: ['История', 'Горы'],
    details: 'Верхняя Балкария — место, где время остановилось. Здесь сохранились средневековые башни, древние мечети и традиционный уклад жизни. Село окружено величественными горами и ледниками.',
    highlights: ['Средневековые сторожевые башни', 'Традиционная архитектура', 'Вид на ледник Штулу', 'Гостеприимство горцев'],
  },
  {
    id: 'bezengi',
    title: 'Безенги',
    description: 'Безенгийская стена — грандиозный горный массив, мекка альпинизма',
    image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=80',
    tags: ['Альпинизм', 'Горы'],
    details: 'Безенгийская стена — 13-километровый массив с пятью пятитысячниками. Это «русские Гималаи», привлекающие альпинистов со всего мира. Здесь находится альплагерь «Безенги» — один из старейших в стране.',
    highlights: ['Пять вершин выше 5000 м', 'Альплагерь «Безенги»', 'Ледник Безенги', 'Маршруты любой сложности'],
  },
  {
    id: 'dzhily-su',
    title: 'Джилы-Су',
    description: 'Урочище с целебными минеральными источниками у подножия Эльбруса',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80',
    tags: ['Источники', 'Здоровье'],
    details: 'Джилы-Су (в переводе «тёплая вода») — уникальное место с минеральными источниками разного состава. Отсюда открываются потрясающие виды на северный склон Эльбруса. Рядом — водопад Султан.',
    highlights: ['Минеральные источники', 'Водопад Султан (40 м)', 'Вид на северный Эльбрус', 'Поляна Эммануэля'],
  },
  {
    id: 'aushiger',
    title: 'Аушигер',
    description: 'Знаменитые горячие источники с целебной водой',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
    tags: ['Источники', 'Отдых'],
    details: 'Термальные источники Аушигера — популярное место отдыха местных жителей и туристов. Температура воды достигает 50°C, она богата минералами и считается целебной.',
    highlights: ['Температура воды до 50°C', 'Открытые бассейны', 'Целебные свойства воды', 'Доступно круглый год'],
  },
]

export default function Places() {
  return (
    <>
      <Hero
        title="Места"
        subtitle="Откройте для себя"
        description="Каждый уголок Кабардино-Балкарии хранит свою историю — от заснеженных вершин Эльбруса до тихих горных озёр"
        image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80"
        height="large"
      />

      {/* Places Grid */}
      <Section
        subtitle="Достопримечательности"
        title="Куда поехать"
        description="Выберите место, которое зовёт вашу душу"
        background="gradient"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {places.slice(0, 3).map((place, index) => (
            <FadeIn key={place.id} delay={index * 0.1}>
              <Card
                title={place.title}
                description={place.description}
                image={place.image}
                tags={place.tags}
                link={`#${place.id}`}
              />
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Detailed Place Sections */}
      {places.map((place, index) => (
        <Section
          key={place.id}
          id={place.id}
          background={index % 2 === 0 ? 'white' : 'cream'}
          className="scroll-mt-20"
        >
          <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>
            <FadeIn direction={index % 2 === 0 ? 'right' : 'left'}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <img
                  src={place.image}
                  alt={place.title}
                  className="rounded-2xl shadow-soft-lg w-full aspect-[4/3] object-cover"
                />
              </div>
            </FadeIn>

            <FadeIn direction={index % 2 === 0 ? 'left' : 'right'} delay={0.2}>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="flex flex-wrap gap-2 mb-4">
                  {place.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-meadow-100 text-meadow-600 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-earth-800 mb-4">
                  {place.title}
                </h2>
                <p className="text-earth-600 leading-relaxed mb-6">
                  {place.details}
                </p>

                <div className="bg-cream-50 rounded-xl p-6">
                  <h4 className="font-medium text-earth-800 mb-3">Особенности:</h4>
                  <ul className="space-y-2">
                    {place.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3 text-earth-700 text-sm">
                        <svg className="w-4 h-4 text-meadow-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </Section>
      ))}

      {/* Map Section Placeholder */}
      <Section background="white" centered>
        <FadeIn>
          <div className="bg-cream-100 rounded-2xl p-12 text-center">
            <svg className="w-16 h-16 mx-auto text-meadow-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <h3 className="font-serif text-2xl text-earth-800 mb-2">
              Интерактивная карта
            </h3>
            <p className="text-earth-600">
              Скоро здесь появится карта со всеми достопримечательностями
            </p>
          </div>
        </FadeIn>
      </Section>
    </>
  )
}
