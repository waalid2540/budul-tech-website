'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Search, PenTool, Rocket, Cog, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { Navigation } from '@/components/sections/Navigation'
import { Footer } from '@/components/sections/Footer'

const steps = [
  {
    number: '01',
    title: 'Diagnose',
    icon: Search,
    description: 'We identify the core bottleneck in your business — where time, money, or leads are being lost.',
  },
  {
    number: '02',
    title: 'Architect',
    icon: PenTool,
    description: 'We design a system that solves the problem with the minimum viable complexity.',
  },
  {
    number: '03',
    title: 'Build',
    icon: Rocket,
    description: 'We build fast and ship. No bloated timelines. No scope creep. Just execution.',
  },
  {
    number: '04',
    title: 'Automate',
    icon: Cog,
    description: 'We remove manual work from your operations. Automation handles the repetitive.',
  },
  {
    number: '05',
    title: 'Scale',
    icon: TrendingUp,
    description: 'As you grow, we build custom technology to support increased volume and complexity.',
  },
]

export default function ProcessPage() {
  return (
    <main className="relative min-h-screen">
      <Navigation />

      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 grid-pattern" />
        <div className="glow-orb w-[500px] h-[500px] bg-accent -top-40 right-0" />
        <div className="glow-orb w-[400px] h-[400px] bg-primary bottom-0 -left-40" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-dark-50 leading-tight mb-6"
            >
              Our <span className="gradient-text">Engineering Process</span>
            </motion.h1>
          </div>

          <div className="max-w-3xl mx-auto mb-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-20 pb-12 last:pb-0"
              >
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-[1.875rem] top-14 w-0.5 h-[calc(100%-3rem)] bg-gradient-to-b from-primary/50 to-primary/10" />
                )}

                {/* Step Number Circle */}
                <div className="absolute left-0 top-0 w-14 h-14 rounded-full bg-dark-900 border-2 border-primary flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <div className="bg-dark-900/50 border border-dark-800/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-primary font-mono text-sm">{step.number}</span>
                    <h3 className="text-xl font-bold text-dark-50">{step.title}</h3>
                  </div>
                  <p className="text-dark-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-dark-900/50 border border-dark-800/50 rounded-xl p-8 mb-10">
              <p className="text-xl text-dark-300 mb-2">No bloated projects.</p>
              <p className="text-xl text-dark-300 mb-2">No long timelines.</p>
              <p className="text-2xl font-bold text-dark-50">Just execution.</p>
            </div>

            <Link
              href="/start"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white bg-gradient-to-r from-primary to-secondary rounded-lg transition-all duration-300 hover:shadow-glow hover:scale-[1.02]"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
