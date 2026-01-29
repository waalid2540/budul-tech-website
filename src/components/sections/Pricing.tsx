'use client'

import { motion } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'

const plans = [
  {
    name: 'Starter',
    price: '$1,500',
    period: 'one-time',
    description: 'Perfect for small businesses needing a professional online presence',
    features: [
      '5-page responsive website',
      'Mobile-optimized design',
      'Contact form integration',
      'Basic SEO setup',
      '2 rounds of revisions',
      '1-week delivery',
    ],
    popular: false,
  },
  {
    name: 'Business Pro',
    price: '$3,500',
    period: 'one-time',
    description: 'Complete solution for growing businesses ready to scale',
    features: [
      '10+ page custom website',
      'AI chatbot integration',
      'E-commerce ready (up to 50 products)',
      'Advanced SEO optimization',
      'Analytics dashboard',
      'Unlimited revisions',
      '2-week delivery',
    ],
    popular: true,
  },
  {
    name: 'Growth Retainer',
    price: '$1,500',
    period: '/month',
    description: 'Ongoing partnership for continuous growth and improvement',
    features: [
      '20 hours of development/month',
      'Priority support (24h response)',
      'Monthly strategy call',
      'Performance monitoring',
      'Security updates',
      'Content updates included',
    ],
    popular: false,
  },
]

export function Pricing() {
  const handleGetStarted = () => {
    const element = document.querySelector('#contact')
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="glow-orb w-[400px] h-[400px] bg-secondary/10 top-20 left-0" />
      <div className="glow-orb w-[400px] h-[400px] bg-accent/10 bottom-20 right-0" />

      <div className="container-custom relative z-10">
        <SectionHeader
          eyebrow="PRICING"
          title="Transparent Pricing"
          subtitle="No hidden fees. No surprises. Quality work at honest prices."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-primary to-accent rounded-full text-sm font-semibold text-white shadow-glow">
                    <Sparkles className="w-4 h-4" />
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div
                className={`h-full rounded-2xl p-6 lg:p-8 transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-dark-900 to-dark-950 border-2 border-primary/50 shadow-glow'
                    : 'bg-dark-900/50 backdrop-blur-sm border border-dark-800/50 hover:border-dark-700'
                }`}
              >
                {/* Plan Header */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-dark-50 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-3">
                    <span className={`text-4xl lg:text-5xl font-extrabold ${plan.popular ? 'gradient-text' : 'text-dark-50'}`}>
                      {plan.price}
                    </span>
                    <span className="text-dark-400">{plan.period}</span>
                  </div>
                  <p className="text-dark-400 text-sm">{plan.description}</p>
                </div>

                {/* Divider */}
                <div className={`h-px mb-6 ${plan.popular ? 'bg-gradient-to-r from-transparent via-primary/50 to-transparent' : 'bg-dark-800'}`} />

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-primary' : 'text-success'}`} />
                      <span className="text-dark-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={handleGetStarted}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-glow hover:scale-[1.02]'
                      : 'bg-transparent border border-dark-700 text-dark-100 hover:border-primary hover:text-primary'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-dark-400 mt-12"
        >
          Need something custom?{' '}
          <button
            onClick={handleGetStarted}
            className="text-primary hover:text-primary/80 font-medium underline underline-offset-4 transition-colors"
          >
            Let&apos;s talk
          </button>
        </motion.p>
      </div>
    </section>
  )
}
