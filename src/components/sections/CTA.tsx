'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'

export function CTA() {
  const handleClick = () => {
    const element = document.querySelector('#contact')
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Glow Orbs */}
      <div className="glow-orb w-[400px] h-[400px] bg-primary/30 -top-40 -left-40" />
      <div className="glow-orb w-[400px] h-[400px] bg-accent/30 -bottom-40 -right-40" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark-50 mb-6">
            Ready to Build Something{' '}
            <span className="gradient-text">Amazing</span>?
          </h2>
          <p className="text-lg md:text-xl text-dark-300 mb-10">
            Book a free 30-minute discovery call and let&apos;s discuss your project.
            No pressure, no commitment—just a friendly conversation about your goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={handleClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 font-semibold text-dark-950 bg-white rounded-lg transition-all duration-300 hover:shadow-xl"
            >
              <Calendar className="w-5 h-5" />
              Schedule Free Call
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </div>

          <p className="text-dark-400 text-sm mt-6">
            No credit card required. Cancel anytime.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
