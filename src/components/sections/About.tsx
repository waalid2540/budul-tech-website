'use client'

import { motion } from 'framer-motion'
import { Zap, DollarSign, Users, Shield } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'

const differentiators = [
  {
    icon: Zap,
    title: '10x Faster',
    description: 'AI-powered development',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    borderColor: 'border-primary/20',
  },
  {
    icon: DollarSign,
    title: '50% Savings',
    description: 'No agency overhead',
    color: 'text-success',
    bgColor: 'bg-success/10',
    borderColor: 'border-success/20',
  },
  {
    icon: Users,
    title: 'Direct Access',
    description: 'Work with the founders',
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
    borderColor: 'border-secondary/20',
  },
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: '100% satisfaction',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    borderColor: 'border-accent/20',
  },
]

export function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-dark-900/50">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="glow-orb w-[500px] h-[500px] bg-primary/10 -top-40 -right-40" />

      <div className="container-custom relative z-10">
        <SectionHeader
          eyebrow="WHY BUDUL TECH"
          title="Family-Owned. AI-Powered. Client-Focused."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <p className="text-lg text-dark-300 leading-relaxed">
                We&apos;re a family-owned agency based in Utah, combining cutting-edge AI technology with old-fashioned values: honesty, hard work, and genuine care for our clients.
              </p>
              <p className="text-lg text-dark-300 leading-relaxed">
                Using advanced AI tools, we deliver projects 10x faster than traditional agencies—without sacrificing quality. You get enterprise-level results at small business prices.
              </p>
              <p className="text-lg text-dark-300 leading-relaxed">
                When you work with us, you&apos;re not just another ticket in a queue. You&apos;re a partner. We take the time to understand your business, your goals, and your vision—then we bring it to life.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-dark-800">
              <div>
                <p className="text-3xl lg:text-4xl font-extrabold gradient-text">50+</p>
                <p className="text-dark-400 text-sm mt-1">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-extrabold gradient-text">100+</p>
                <p className="text-dark-400 text-sm mt-1">Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-extrabold gradient-text">5.0</p>
                <p className="text-dark-400 text-sm mt-1">Average Rating</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Differentiators */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className={`p-6 rounded-2xl ${item.bgColor} border ${item.borderColor} transition-all duration-300 hover:scale-105`}
              >
                <item.icon className={`w-10 h-10 ${item.color} mb-4`} />
                <h3 className="text-lg font-bold text-dark-50 mb-1">{item.title}</h3>
                <p className="text-dark-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
