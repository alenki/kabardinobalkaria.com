import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function LocationCard({ location, index, onOpenModal }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <article
      ref={ref}
      className={`group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{
        transitionDelay: isVisible ? `${(index % 3) * 100}ms` : '0ms',
        backgroundColor: location.cardColor
      }}
      onClick={() => onOpenModal(location)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden">
        {/* Loading placeholder */}
        {!imageLoaded && (
          <div className="absolute inset-0 img-loading" />
        )}

        <img
          src={location.image}
          alt={location.name}
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />

        {/* Gradient overlay on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative p-5 md:p-6" style={{ backgroundColor: location.cardColor }}>
        {location.localName && (
          <p className="text-sm text-gray italic mb-1">{location.localName}</p>
        )}

        <h3 className="font-serif text-xl md:text-2xl text-forest mb-1">
          {location.name}
        </h3>

        <p className="text-sm md:text-base text-gray mb-4">
          {location.subtitle}
        </p>

        <div className="flex items-center gap-4 text-xs text-gray/80">
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
            </svg>
            {location.elevation}
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
            {location.season}
          </span>
        </div>

        {/* Hover line effect */}
        <div className="card-line" />
      </div>
    </article>
  );
}
