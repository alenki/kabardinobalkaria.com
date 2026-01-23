import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Introduction() {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <section className="py-24 md:py-32 px-6 bg-cream">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <p className="text-xl md:text-2xl lg:text-3xl text-forest/90 font-light leading-relaxed mb-12">
          A republic in southern Russia that most people have never heard of. Home to Mount Elbrus,
          bottomless blue lakes, waterfalls that emerge straight from cliff faces, and villages
          that have stood for a thousand years.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm md:text-base text-gray">
          <span>6 peaks above 5,000m</span>
          <span className="w-1.5 h-1.5 rounded-full bg-teal/60" />
          <span>Population 870,000</span>
          <span className="w-1.5 h-1.5 rounded-full bg-teal/60" />
          <span>Established 1922</span>
        </div>
      </div>
    </section>
  );
}
