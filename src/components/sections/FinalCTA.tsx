'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function FinalCTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="glow-orb w-[600px] h-[600px] bg-primary/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-50 mb-6">
            Start with a free system audit.
          </h2>
          <p className="text-lg md:text-xl text-dark-400 mb-10">
            Leave with clarity — whether you work with us or not.
          </p>
          <Link
            href="/start"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white bg-gradient-to-r from-primary to-secondary rounded-lg transition-all duration-300 hover:shadow-glow hover:scale-[1.02]"
          >
            Book Your Free Audit
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
