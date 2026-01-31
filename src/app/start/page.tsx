'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Target, Globe, Zap, Wrench } from 'lucide-react'
import { Navigation } from '@/components/sections/Navigation'
import { Footer } from '@/components/sections/Footer'

const auditCovers = [
  { icon: Target, text: 'Lead flow & follow-up' },
  { icon: Globe, text: 'Website conversion' },
  { icon: Zap, text: 'Automation gaps' },
  { icon: Wrench, text: 'Internal inefficiencies' },
]

export default function StartPage() {
  return (
    <main className="relative min-h-screen">
      <Navigation />

      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 grid-pattern" />
        <div className="glow-orb w-[600px] h-[600px] bg-primary -top-40 -right-40" />
        <div className="glow-orb w-[400px] h-[400px] bg-accent bottom-0 left-0" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-dark-50 leading-tight mb-6">
                Start With the System —{' '}
                <span className="gradient-text">Not the Guesswork</span>
              </h1>

              <p className="text-lg md:text-xl text-dark-400 mb-8">
                Every engagement starts with a system audit. We identify where money is leaking and design the fastest path to improvement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-dark-900/50 border border-dark-800/50 rounded-2xl p-8 mb-12"
            >
              <h2 className="text-xl font-bold text-dark-50 mb-6">What the audit covers:</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {auditCovers.map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-dark-200">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center"
            >
              <a
                href="https://calendly.com/budultech/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white bg-gradient-to-r from-primary to-secondary rounded-lg transition-all duration-300 hover:shadow-glow hover:scale-[1.02]"
              >
                Book a 15-Minute Call
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

              <p className="mt-6 text-dark-500 text-sm">
                No sales pitch. Just clarity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
