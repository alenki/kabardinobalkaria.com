import { useState } from 'react';
import { locations } from '../data/locations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import LocationCard from './LocationCard';
import LocationModal from './LocationModal';

export default function Discover() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [headerRef, headerVisible] = useScrollAnimation(0.2);

  return (
    <section id="discover" className="py-24 md:py-32 px-6 md:px-8 lg:px-12 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 md:mb-20 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-xs tracking-[0.2em] uppercase text-teal mb-4">
            Discover
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-forest mb-6">
            Ten places that will stay with you
          </h2>
          <p className="text-gray max-w-2xl mx-auto">
            From glacier-crowned summits to medieval villages frozen in time,
            these are the landscapes that define Kabardino-Balkaria.
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {locations.map((location, index) => (
            <LocationCard
              key={location.id}
              location={location}
              index={index}
              onOpenModal={setSelectedLocation}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedLocation && (
        <LocationModal
          location={selectedLocation}
          onClose={() => setSelectedLocation(null)}
        />
      )}
    </section>
  );
}
