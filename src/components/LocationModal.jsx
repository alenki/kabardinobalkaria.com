import { useEffect, useRef } from 'react';

export default function LocationModal({ location, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!location) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 modal-backdrop bg-forest/40 animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-3xl bg-white shadow-2xl animate-scale-in"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 hover:bg-white shadow-md transition-all duration-300 hover:scale-105"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image header */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img
            src={location.image}
            alt={location.name}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"
            style={{ '--tw-gradient-from': location.cardColor }}
          />
        </div>

        {/* Content */}
        <div
          className="p-6 md:p-8 -mt-12 relative overflow-y-auto"
          style={{ backgroundColor: location.cardColor, maxHeight: 'calc(90vh - 16rem)' }}
        >
          {location.localName && (
            <p className="text-sm text-gray italic mb-1">{location.localName}</p>
          )}

          <h2
            id="modal-title"
            className="font-serif text-3xl md:text-4xl text-forest mb-2"
          >
            {location.name}
          </h2>

          <p className="text-lg text-gray italic mb-6">{location.subtitle}</p>

          <p className="text-forest/90 leading-relaxed mb-8">
            {location.description}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 pt-6 border-t border-forest/10">
            <div>
              <p className="text-xs uppercase tracking-wider text-gray mb-1">Elevation</p>
              <p className="font-serif text-lg text-forest">{location.elevation}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-gray mb-1">Best Season</p>
              <p className="font-serif text-lg text-forest">{location.season}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
