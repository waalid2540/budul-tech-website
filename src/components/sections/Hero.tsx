'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="glow-orb w-[600px] h-[600px] bg-primary -top-40 -left-40" />
      <div className="glow-orb w-[500px] h-[500px] bg-accent -bottom-40 -right-40" />
      <div className="glow-orb w-[300px] h-[300px] bg-secondary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-dark-50 leading-tight mb-6"
          >
            We Build{' '}
            <span className="gradient-text">Revenue-Driving Technology</span>{' '}
            for Businesses That Want to Win
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-dark-400 mb-10 max-w-2xl mx-auto"
          >
            Budul Tech engineers websites, automation, and AI systems that eliminate inefficiency and increase profit — fast.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/start"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white bg-gradient-to-r from-primary to-secondary rounded-lg transition-all duration-300 hover:shadow-glow hover:scale-[1.02]"
            >
              Get a Free System Audit
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-dark-700 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
