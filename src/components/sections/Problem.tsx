'use client'

import { motion } from 'framer-motion'
import { PhoneMissed, Clock, Unplug, TrendingDown } from 'lucide-react'

const problems = [
  { icon: PhoneMissed, text: 'Missed calls' },
  { icon: Clock, text: 'Slow follow-ups' },
  { icon: Unplug, text: 'Disconnected systems' },
  { icon: TrendingDown, text: "Websites that don't convert" },
]

export function Problem() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-50 mb-8">
              Most businesses are{' '}
              <span className="text-red-400">leaking money</span> through:
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {problems.map((problem, index) => (
              <motion.div
                key={problem.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="p-6 rounded-xl bg-dark-900/50 border border-dark-800/50"
              >
                <problem.icon className="w-8 h-8 text-red-400 mx-auto mb-3" />
                <p className="text-dark-300 font-medium">{problem.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="space-y-4"
          >
            <p className="text-xl md:text-2xl text-dark-300">
              Technology isn&apos;t the problem.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-dark-50">
              Bad systems are.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
