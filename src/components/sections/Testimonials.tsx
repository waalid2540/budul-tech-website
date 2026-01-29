'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    image: null,
    content: 'Budul Tech transformed our outdated website into a modern, high-converting machine. The AI chatbot they built increased our lead generation by 300%. Incredible work!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Founder',
    company: 'GrowthLabs',
    image: null,
    content: 'I was skeptical about their fast delivery claims, but they delivered our MVP in just 10 days. The quality was exceptional, and the communication was flawless throughout.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'Retail Plus',
    image: null,
    content: 'Working with a family-owned agency was refreshing. They genuinely cared about our success. Our e-commerce site now loads 3x faster and conversions are up 150%.',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="glow-orb w-[400px] h-[400px] bg-accent/10 top-0 left-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10">
        <SectionHeader
          eyebrow="TESTIMONIALS"
          title="What Our Clients Say"
          subtitle="Don't just take our word for it—hear from businesses we've helped succeed"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="h-full bg-dark-900/50 backdrop-blur-sm border border-dark-800/50 rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:border-dark-700">
                {/* Quote Icon */}
                <div className="absolute -top-4 right-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Quote className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-dark-300 mb-6 leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-dark-800">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-dark-100">{testimonial.name}</p>
                    <p className="text-dark-400 text-sm">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
