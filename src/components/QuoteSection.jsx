import { quote } from '../data/locations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function QuoteSection() {
  const [ref, isVisible] = useScrollAnimation(0.3);

  return (
    <section className="relative py-32 md:py-40 px-6 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: 0.15
        }}
      />

      {/* Content */}
      <div
        ref={ref}
        className={`relative z-10 max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Quote Mark */}
        <svg
          className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-8 text-teal/30"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>

        {/* Quote Text */}
        <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-forest italic leading-relaxed mb-8">
          "{quote.text}"
        </blockquote>

        {/* Attribution */}
        <cite className="text-gray not-italic">
          — {quote.author}
        </cite>
      </div>
    </section>
  );
}
