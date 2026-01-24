import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionProps {
  id?: string
  title?: string
  subtitle?: string
  description?: string
  children: ReactNode
  className?: string
  background?: 'cream' | 'white' | 'gradient' | 'pattern'
  centered?: boolean
}

export default function Section({
  id,
  title,
  subtitle,
  description,
  children,
  className = '',
  background = 'cream',
  centered = false,
}: SectionProps) {
  const bgClasses = {
    cream: 'bg-cream-100',
    white: 'bg-white',
    gradient: 'bg-gradient-to-b from-cream-100 to-white',
    pattern: 'bg-cream-50',
  }

  return (
    <section id={id} className={`section-padding ${bgClasses[background]} ${className} relative overflow-hidden`}>
      {/* Atmospheric background layers */}
      {background === 'pattern' && (
        <>
          <div className="absolute inset-0 pattern-caucasian opacity-20" />
          <div className="absolute inset-0 gradient-radial-gold" />
        </>
      )}
      {background === 'gradient' && (
        <div className="absolute inset-0 gradient-radial-soft" />
      )}

      <div className="relative max-w-7xl mx-auto">
        {(title || subtitle || description) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}
          >
            {subtitle && (
              <p className="text-gold-600 text-sm tracking-widest uppercase mb-3 font-medium">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-earth-800 mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className={`text-earth-600 text-lg leading-relaxed ${centered ? 'max-w-2xl mx-auto' : 'max-w-3xl'}`}>
                {description}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}
