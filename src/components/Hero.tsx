import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  image: string
  children?: ReactNode
  overlay?: 'light' | 'dark' | 'mist'
  height?: 'full' | 'large' | 'medium'
}

export default function Hero({
  title,
  subtitle,
  description,
  image,
  children,
  overlay = 'mist',
  height = 'large',
}: HeroProps) {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -50])

  const heightClasses = {
    full: 'min-h-screen',
    large: 'min-h-[90vh]',
    medium: 'min-h-[70vh]',
  }

  return (
    <section
      ref={containerRef}
      className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}
    >
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0"
        style={{ y: imageY, scale: imageScale }}
      >
        <img
          src={image}
          alt=""
          className="w-full h-[120%] object-cover"
        />
      </motion.div>

      {/* Gradient Overlay - Dreamy mist effect */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/20 via-transparent to-earth-900/70" />

        {/* Top mist */}
        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-cream-50/30 to-transparent" />

        {/* Bottom atmospheric gradient */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-earth-900/60 via-earth-900/20 to-transparent" />

        {/* Vignette effect */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 40%, rgba(41, 54, 40, 0.3) 100%)',
          }}
        />
      </div>

      {/* Floating Mist Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large drifting cloud */}
        <motion.div
          className="absolute -left-20 top-1/4 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(250, 247, 242, 0.8) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Medium drifting cloud */}
        <motion.div
          className="absolute right-0 top-1/3 w-72 h-72 rounded-full opacity-15"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(250, 247, 242, 0.6) 0%, transparent 70%)',
            filter: 'blur(30px)',
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
        />

        {/* Small floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-cream-200/30"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-cream-200/90 text-xs md:text-sm tracking-[0.3em] uppercase mb-6 font-light"
          >
            {subtitle}
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-[0.9] tracking-tight"
          style={{ textShadow: '0 4px 30px rgba(0,0,0,0.2)' }}
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-cream-100/80 max-w-2xl mx-auto leading-relaxed font-light"
          >
            {description}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12"
          >
            {children}
          </motion.div>
        )}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-cream-200/60 text-xs tracking-[0.2em] uppercase">Листайте</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-12 bg-gradient-to-b from-cream-200/60 to-transparent"
        />
      </motion.div>

      {/* Decorative corner elements */}
      <div className="absolute top-8 left-8 w-24 h-24 border-l border-t border-cream-200/20" />
      <div className="absolute top-8 right-8 w-24 h-24 border-r border-t border-cream-200/20" />
      <div className="absolute bottom-8 left-8 w-24 h-24 border-l border-b border-cream-200/20" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-r border-b border-cream-200/20" />
    </section>
  )
}
