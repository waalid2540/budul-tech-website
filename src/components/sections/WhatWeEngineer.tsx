'use client'

import { motion } from 'framer-motion'
import { Globe, Zap, Code2, Target, Bot, Workflow, LayoutDashboard, Smartphone, Server } from 'lucide-react'

const categories = [
  {
    title: 'Growth Infrastructure',
    icon: Target,
    items: [
      { icon: Globe, text: 'High-performance websites' },
      { icon: Target, text: 'Lead capture & booking systems' },
      { icon: Zap, text: 'Conversion-focused architecture' },
    ],
  },
  {
    title: 'Automation & AI Systems',
    icon: Bot,
    items: [
      { icon: Zap, text: 'Missed-call recovery' },
      { icon: Bot, text: 'AI chat & instant follow-up' },
      { icon: Workflow, text: 'CRM & workflow automation' },
    ],
  },
  {
    title: 'Custom Business Software',
    icon: Code2,
    items: [
      { icon: LayoutDashboard, text: 'Internal tools & dashboards' },
      { icon: Smartphone, text: 'Web & mobile applications' },
      { icon: Server, text: 'Scalable system architecture' },
    ],
  },
]

export function WhatWeEngineer() {
  return (
    <section className="section-padding relative overflow-hidden bg-dark-900/30">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="glow-orb w-[400px] h-[400px] bg-primary/10 top-0 right-0" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-50 mb-4">
            What We Engineer
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="p-8 rounded-2xl bg-dark-900/50 border border-dark-800/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                <category.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-dark-50 mb-6">{category.title}</h3>
              <ul className="space-y-4">
                {category.items.map((item) => (
                  <li key={item.text} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-dark-500 flex-shrink-0" />
                    <span className="text-dark-300">{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl text-dark-300 font-medium">
            If it doesn&apos;t increase speed, clarity, or profit —{' '}
            <span className="text-dark-50">we don&apos;t build it.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
