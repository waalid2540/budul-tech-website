'use client'

import { motion } from 'framer-motion'
import { Phone, FileText, Code2, Rocket } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Discovery',
    description: 'Free 30-minute call to understand your vision and goals',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Proposal',
    description: 'Clear scope, timeline, and pricing delivered within 24 hours',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Build',
    description: 'AI-powered development with daily progress updates',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch',
    description: 'Deployment, testing, training, and ongoing support',
  },
]

export function Process() {
  return (
    <section id="process" className="section-padding relative overflow-hidden bg-dark-900/50">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="glow-orb w-[500px] h-[500px] bg-accent/10 bottom-0 left-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10">
        <SectionHeader
          eyebrow="HOW WE WORK"
          title="Simple. Fast. Effective."
          subtitle="Our AI-powered process gets you from idea to launch in record time"
        />

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-dark-800">
              <motion.div
                initial={{ width: '0%' }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-primary via-accent to-secondary"
              />
            </div>

            {/* Steps */}
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative flex flex-col items-center"
                >
                  {/* Number Circle */}
                  <div className="relative z-10 w-32 h-32 rounded-full bg-gradient-to-br from-primary via-accent to-secondary p-[2px] mb-6">
                    <div className="w-full h-full rounded-full bg-dark-950 flex items-center justify-center">
                      <step.icon className="w-12 h-12 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <span className="text-sm font-mono text-primary mb-2 block">{step.number}</span>
                    <h3 className="text-xl font-bold text-dark-50 mb-2">{step.title}</h3>
                    <p className="text-dark-400 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute top-0 bottom-0 left-8 w-1 bg-dark-800">
              <motion.div
                initial={{ height: '0%' }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="w-full bg-gradient-to-b from-primary via-accent to-secondary"
              />
            </div>

            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex gap-6 items-start"
                >
                  {/* Number Circle */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-primary via-accent to-secondary p-[2px] flex-shrink-0">
                    <div className="w-full h-full rounded-full bg-dark-950 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-3">
                    <span className="text-sm font-mono text-primary mb-1 block">{step.number}</span>
                    <h3 className="text-lg font-bold text-dark-50 mb-2">{step.title}</h3>
                    <p className="text-dark-400 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
