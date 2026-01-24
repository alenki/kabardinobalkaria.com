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
      {/* Decorative top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-earth-600 to-transparent" />

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-meadow-900/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-earth-800/50 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
              <motion.div
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-10 h-10 text-meadow-400" viewBox="0 0 40 40" fill="none">
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
              <div className="w-8 h-px bg-gradient-to-r from-meadow-500 to-transparent" />
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
                href="https://t.me/"
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
                href="https://vk.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-cream-700 flex items-center justify-center text-cream-400 hover:text-white hover:border-cream-500 hover:bg-cream-800/20 transition-all duration-300"
                aria-label="VKontakte"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1.001-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4 8.57 4 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.847 2.455 2.27 4.607 2.862 4.607.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/"
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
              © 2024 Кабардино-Балкария. Создано с любовью к горам.
            </p>
            <div className="flex items-center gap-6 text-cream-600 text-xs">
              <span>Россия</span>
              <span className="w-1 h-1 rounded-full bg-cream-700" />
              <span>Кавказ</span>
              <span className="w-1 h-1 rounded-full bg-cream-700" />
              <span>КБР</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
