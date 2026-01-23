export default function Footer() {
  return (
    <footer className="py-8 px-6 md:px-8 lg:px-12 border-t border-stone/30 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray">
          {/* Site Name */}
          <div className="font-serif text-lg text-forest">
            Kabardino-Balkaria
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:hello@kabardinobalkaria.com"
              className="hover:text-forest transition-colors duration-300"
            >
              Contact
            </a>
            <a
              href="https://instagram.com/your_handle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-forest transition-colors duration-300"
            >
              Instagram
            </a>
          </div>

          {/* Tagline */}
          <div className="text-gray/70">
            Made with love from the Caucasus
          </div>
        </div>
      </div>
    </footer>
  );
}
