'use client'

import { motion } from 'framer-motion'
import { Search, PenTool, Rocket, Cog, TrendingUp } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Diagnose the bottleneck',
    icon: Search,
  },
  {
    number: '02',
    title: 'Design the system',
    icon: PenTool,
  },
  {
    number: '03',
    title: 'Build fast and ship',
    icon: Rocket,
  },
  {
    number: '04',
    title: 'Automate and optimize',
    icon: Cog,
  },
  {
    number: '05',
    title: 'Scale with custom technology',
    icon: TrendingUp,
  },
]

export function HowWeWork() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-50 mb-4">
            How We Work
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Desktop Steps */}
          <div className="hidden md:block">
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative">
                    <div className="w-16 h-16 mx-auto rounded-full bg-dark-900/80 border-2 border-primary/50 flex items-center justify-center mb-4">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-2rem)] h-0.5 bg-gradient-to-r from-primary/50 to-primary/20" />
                    )}
                  </div>
                  <span className="text-primary font-mono text-sm">{step.number}</span>
                  <p className="text-dark-200 text-sm mt-2">{step.title}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Steps */}
          <div className="md:hidden space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-dark-900/80 border-2 border-primary/50 flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-primary font-mono text-sm">{step.number}</span>
                  <p className="text-dark-200">{step.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
