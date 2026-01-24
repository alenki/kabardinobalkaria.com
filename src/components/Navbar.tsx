import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { path: '/', label: 'Главная' },
  { path: '/priroda', label: 'Природа' },
  { path: '/mesta', label: 'Места' },
  { path: '/kultura', label: 'Культура' },
  { path: '/posetit', label: 'Посетить' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        isScrolled
          ? 'py-4'
          : 'py-6'
      }`}
      style={{
        animation: 'navReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        animationDelay: '0.3s',
        opacity: 0,
      }}
    >
      {/* Background blur effect when scrolled */}
      <motion.div
        initial={false}
        animate={{
          opacity: isScrolled ? 1 : 0,
          y: isScrolled ? 0 : -10,
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 bg-cream-50/80 backdrop-blur-xl border-b border-cream-200/50"
        style={{
          boxShadow: isScrolled ? '0 4px 30px rgba(41, 54, 40, 0.05)' : 'none',
        }}
      />

      <nav className="relative max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="group relative z-10">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3"
          >
            {/* Mountain icon */}
            <div className={`relative transition-colors duration-500 ${
              isScrolled ? 'text-meadow-500' : 'text-white'
            }`}>
              <svg
                className="w-10 h-10"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M20 6L6 34h28L20 6z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M20 14L12 30h16L20 14z"
                  stroke="currentColor"
                  strokeWidth="1"
                  opacity="0.5"
                  fill="none"
                />
                <circle cx="28" cy="12" r="3" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span
                className={`font-serif text-xl tracking-tight transition-colors duration-500 ${
                  isScrolled ? 'text-earth-800' : 'text-white'
                }`}
              >
                Кабардино-Балкария
              </span>
              <span
                className={`text-[10px] tracking-[0.2em] uppercase transition-colors duration-500 ${
                  isScrolled ? 'text-earth-500' : 'text-cream-200/70'
                }`}
              >
                Край гор и легенд
              </span>
            </div>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path

            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`relative px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-full ${
                    isScrolled
                      ? isActive
                        ? 'text-earth-800'
                        : 'text-earth-600 hover:text-earth-800'
                      : isActive
                      ? 'text-white'
                      : 'text-cream-100/80 hover:text-white'
                  }`}
                >
                  {link.label}

                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="navActiveIndicator"
                      className={`absolute inset-0 rounded-full -z-10 ${
                        isScrolled
                          ? 'bg-meadow-100/80'
                          : 'bg-white/10 backdrop-blur-sm'
                      }`}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`relative z-10 lg:hidden p-3 rounded-full transition-all duration-300 ${
            isScrolled
              ? 'text-earth-700 hover:bg-cream-200/50'
              : 'text-white hover:bg-white/10'
          }`}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 4 : 0,
              }}
              className={`block w-5 h-[1.5px] rounded-full transition-colors ${
                isScrolled ? 'bg-earth-700' : 'bg-white'
              }`}
            />
            <motion.span
              animate={{
                opacity: isMobileMenuOpen ? 0 : 1,
                scaleX: isMobileMenuOpen ? 0 : 1,
              }}
              className={`block w-5 h-[1.5px] rounded-full transition-colors ${
                isScrolled ? 'bg-earth-700' : 'bg-white'
              }`}
            />
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -4 : 0,
              }}
              className={`block w-5 h-[1.5px] rounded-full transition-colors ${
                isScrolled ? 'bg-earth-700' : 'bg-white'
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-earth-900/20 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full left-4 right-4 mt-2 lg:hidden bg-white/95 backdrop-blur-xl rounded-2xl shadow-dreamy border border-cream-200/50 overflow-hidden"
            >
              <ul className="py-4 px-2">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`block py-3.5 px-5 rounded-xl text-sm font-medium transition-all duration-200 ${
                        location.pathname === link.path
                          ? 'bg-meadow-100 text-meadow-700'
                          : 'text-earth-600 hover:bg-cream-100 hover:text-earth-800'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Decorative gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-meadow-200 to-transparent" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
