'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  eyebrow: string
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className={cn(
        'mb-12 md:mb-16',
        centered && 'text-center',
        className
      )}
    >
      <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark-50 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-dark-400 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
