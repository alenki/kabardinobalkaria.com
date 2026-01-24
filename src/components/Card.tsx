import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface CardProps {
  title: string
  description?: string
  image: string
  link?: string
  tags?: string[]
  size?: 'small' | 'medium' | 'large'
}

export default function Card({
  title,
  description,
  image,
  link,
  tags,
  size = 'medium',
}: CardProps) {
  const sizeClasses = {
    small: 'aspect-[4/3]',
    medium: 'aspect-[4/5]',
    large: 'aspect-[16/10]',
  }

  const content = (
    <motion.article
      whileHover={{ y: -10 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-3xl cursor-pointer"
    >
      {/* Image Container */}
      <div className={`relative ${sizeClasses[size]} overflow-hidden`}>
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Multi-layer gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-earth-900/90 via-earth-900/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-meadow-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Subtle vignette */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 40%, rgba(41, 54, 40, 0.4) 100%)',
          }}
        />

        {/* Glass border effect on hover */}
        <div className="absolute inset-0 rounded-3xl border border-white/0 group-hover:border-white/20 transition-all duration-500" />

        {/* Top shine effect */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="absolute top-5 left-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 text-[10px] tracking-[0.15em] uppercase bg-white/10 backdrop-blur-md text-white/90 rounded-full border border-white/10 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <h3 className="font-serif text-2xl md:text-3xl text-white mb-3 leading-[1.1]">
          <span className="relative inline-block">
            {title}
            {/* Animated gold underline */}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-gold-400 to-gold-500/50 group-hover:w-full transition-all duration-500 ease-out" />
          </span>
        </h3>

        {description && (
          <p className="text-cream-200/70 text-sm leading-relaxed line-clamp-2 mb-4">
            {description}
          </p>
        )}

        {/* Explore indicator with gold accent */}
        <div className="flex items-center gap-3 text-cream-200/60 group-hover:text-gold-300 transition-colors duration-300">
          <span className="text-xs tracking-[0.2em] uppercase font-medium">Открыть</span>
          <motion.div
            className="flex items-center"
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Decorative corner accents with gold */}
      <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-white/0 group-hover:border-gold-400/40 rounded-tr-xl transition-all duration-500" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-white/0 group-hover:border-gold-400/20 rounded-bl-lg transition-all duration-500 delay-100" />
    </motion.article>
  )

  if (link) {
    return <Link to={link} className="block">{content}</Link>
  }

  return content
}
