'use client'

import { motion } from 'framer-motion'

export function Statement() {
  return (
    <section className="section-padding relative overflow-hidden bg-dark-900/30">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="glow-orb w-[500px] h-[500px] bg-accent/10 bottom-0 left-0" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl text-dark-300 mb-4">
            We are not a marketing agency.
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-50">
            We are a <span className="gradient-text">technology company.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
