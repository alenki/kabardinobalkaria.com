import { aboutContent } from '../data/locations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const [imageRef, imageVisible] = useScrollAnimation(0.2);
  const [contentRef, contentVisible] = useScrollAnimation(0.2);

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-8 lg:px-12 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image Column */}
          <div
            ref={imageRef}
            className={`relative transition-all duration-1000 ${
              imageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80"
                alt="Mountains of Kabardino-Balkaria"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating accent image */}
            <div className="hidden md:block absolute -bottom-8 -right-8 w-40 h-40 rounded-xl overflow-hidden shadow-lg animate-float">
              <img
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&q=80"
                alt="Mountain meadow"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Column */}
          <div
            ref={contentRef}
            className={`transition-all duration-1000 delay-200 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-block text-xs tracking-[0.2em] uppercase text-teal mb-4">
              About this place
            </span>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-forest mb-8">
              A region that rewards the curious
            </h2>

            <div className="space-y-6 mb-12">
              {aboutContent.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-forest/80 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-6 p-6 bg-white/50 rounded-2xl">
              {aboutContent.info.map((item, index) => (
                <div key={index}>
                  <p className="text-xs uppercase tracking-wider text-gray mb-1">
                    {item.label}
                  </p>
                  <p className="font-serif text-lg text-forest">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
