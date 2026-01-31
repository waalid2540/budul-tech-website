'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Minimize2, Zap, Cog, BarChart3 } from 'lucide-react'
import Link from 'next/link'
import { Navigation } from '@/components/sections/Navigation'
import { Footer } from '@/components/sections/Footer'

const principles = [
  {
    icon: Minimize2,
    title: 'Simplicity over complexity',
    description: 'Clean systems that anyone can understand and maintain.',
  },
  {
    icon: Zap,
    title: 'Speed over perfection',
    description: 'Ship fast, iterate based on real data, not assumptions.',
  },
  {
    icon: Cog,
    title: 'Automation over manual work',
    description: 'Remove repetitive tasks. Free your team to focus on growth.',
  },
  {
    icon: BarChart3,
    title: 'Data over opinions',
    description: 'Decisions backed by metrics, not guesswork.',
  },
]

export default function SystemsPage() {
  return (
    <main className="relative min-h-screen">
      <Navigation />

      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 grid-pattern" />
        <div className="glow-orb w-[600px] h-[600px] bg-primary -top-40 -left-40" />
        <div className="glow-orb w-[400px] h-[400px] bg-secondary bottom-0 right-0" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-dark-50 leading-tight mb-6"
            >
              We Build Business Systems —{' '}
              <span className="gradient-text">Not Just Software</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-dark-400"
            >
              Software without systems creates chaos. We engineer connected systems that handle leads, customers, and operations automatically.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-2xl font-bold text-dark-50 text-center mb-10">System Principles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="p-6 rounded-xl bg-dark-900/50 border border-dark-800/50 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <principle.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-dark-50 mb-2">{principle.title}</h3>
                      <p className="text-dark-400">{principle.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center"
          >
            <Link
              href="/start"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white bg-gradient-to-r from-primary to-secondary rounded-lg transition-all duration-300 hover:shadow-glow hover:scale-[1.02]"
            >
              Get Your System Audit
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
