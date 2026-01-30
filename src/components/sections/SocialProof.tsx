'use client'

import { motion } from 'framer-motion'
import { Users, Star, Zap, Shield } from 'lucide-react'

const stats = [
  { icon: Users, value: '50+', label: 'Happy Clients' },
  { icon: Star, value: '5.0', label: 'Average Rating' },
  { icon: Zap, value: '100+', label: 'Projects Delivered' },
  { icon: Shield, value: '100%', label: 'Satisfaction' },
]

export function SocialProof() {
  return (
    <section className="py-10 md:py-14 relative overflow-hidden bg-dark-900/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center text-dark-400 mb-8">Trusted by businesses across Utah and beyond</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 mb-3">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</p>
                <p className="text-dark-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
