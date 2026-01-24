import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const footerLinks = {
  explore: [
    { path: '/priroda', label: 'Природа' },
    { path: '/mesta', label: 'Места' },
    { path: '/kultura', label: 'Культура' },
    { path: '/posetit', label: 'Посетить' },
  ],
  places: [
    { path: '/mesta#elbrus', label: 'Эльбрус' },
    { path: '/mesta#chegem', label: 'Чегемские водопады' },
    { path: '/mesta#blue-lakes', label: 'Голубые озёра' },
    { path: '/mesta#bezengi', label: 'Безенги' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative bg-earth-900 text-cream-100 overflow-hidden">
      {/* Decorative top gradient with gold accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-meadow-900/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-earth-800/50 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-15">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
              <motion.div
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-10 h-10 text-gold-400" viewBox="0 0 40 40" fill="none">
                  <path d="M20 6L6 34h28L20 6z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <path d="M20 14L12 30h16L20 14z" stroke="currentColor" strokeWidth="1" opacity="0.5" fill="none" />
                  <circle cx="28" cy="12" r="3" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6" />
                </svg>
              </motion.div>
              <div>
                <span className="font-serif text-2xl text-white block leading-tight">
                  Кабардино-Балкария
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-cream-400">
                  Край гор и легенд
                </span>
              </div>
            </Link>
            <p className="text-cream-400 text-sm leading-relaxed max-w-sm mb-8">
              Край величественных гор, чистейших рек и древних традиций.
              Откройте для себя красоту Кавказа — место, где время течёт медленнее,
              а природа дарит покой душе.
            </p>

            {/* Newsletter signup teaser */}
            <div className="flex items-center gap-3 text-cream-500 text-sm">
              <div className="w-8 h-px bg-gradient-to-r from-gold-500 to-transparent" />
              <span className="italic">Приезжайте и убедитесь сами</span>
            </div>
          </div>

          {/* Explore Links */}
          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="text-xs tracking-[0.2em] uppercase text-cream-500 mb-6">Разделы</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-cream-300 hover:text-white transition-colors text-sm link-elegant"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Places Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs tracking-[0.2em] uppercase text-cream-500 mb-6">Места</h4>
            <ul className="space-y-3">
              {footerLinks.places.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-cream-300 hover:text-white transition-colors text-sm link-elegant"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="lg:col-span-3">
            <h4 className="text-xs tracking-[0.2em] uppercase text-cream-500 mb-6">Следите за нами</h4>
            <div className="flex items-center gap-3">
              <a
                href="https://t.me/karafco"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-cream-700 flex items-center justify-center text-cream-400 hover:text-white hover:border-cream-500 hover:bg-cream-800/20 transition-all duration-300"
                aria-label="Telegram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
              </a>
              <a
                href="mailto:okaraf07@gmail.com"
                className="w-10 h-10 rounded-full border border-cream-700 flex items-center justify-center text-cream-400 hover:text-white hover:border-cream-500 hover:bg-cream-800/20 transition-all duration-300"
                aria-label="Email"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/okaraf_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-cream-700 flex items-center justify-center text-cream-400 hover:text-white hover:border-cream-500 hover:bg-cream-800/20 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-earth-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream-600 text-xs tracking-wide">
              © 2026 Кабардино-Балкария. Создано с любовью к горам.
            </p>
            <div className="flex items-center gap-6 text-cream-600 text-xs">
              <span>Россия</span>
              <span className="w-1 h-1 rounded-full bg-cream-700" />
              <span>Кавказ</span>
              <span className="w-1 h-1 rounded-full bg-cream-700" />
              <span>КБР</span>
            </div>
          </div>

          {/* Made by KARAF badge */}
          <a
            href="https://okaraf.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex justify-center items-center gap-4 text-cream-600 hover:text-cream-400 transition-colors duration-300 group"
          >
            <span className="w-9 h-px bg-gradient-to-r from-transparent to-cream-700 group-hover:to-gold-500/50 transition-colors duration-300" />
            <span className="text-[15px] tracking-[0.3em] uppercase">
              made by <span className="text-cream-400 group-hover:text-gold-400 transition-colors duration-300 font-medium">KARAF</span>
            </span>
            <span className="w-9 h-px bg-gradient-to-l from-transparent to-cream-700 group-hover:to-gold-500/50 transition-colors duration-300" />
          </a>
        </div>
      </div>
    </footer>
  )
}
