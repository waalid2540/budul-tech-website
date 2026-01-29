'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'How fast can you deliver my project?',
    answer: 'Most projects are delivered within 1-2 weeks, depending on complexity. Simple landing pages can be ready in as little as 3-5 days. Our AI-powered workflow allows us to work 10x faster than traditional agencies while maintaining high quality standards.',
  },
  {
    question: "What's included in the price?",
    answer: 'Our pricing is all-inclusive. You get design, development, testing, deployment, and initial training. There are no hidden fees for hosting setup, domain configuration, or basic revisions. We believe in transparent pricing—what we quote is what you pay.',
  },
  {
    question: 'Do you offer ongoing support?',
    answer: 'Yes! We offer both project-based support and monthly retainer packages. After launch, we provide 30 days of free bug fixes. For ongoing needs, our Growth Retainer plan includes 20 hours of development per month, priority support, and continuous improvements.',
  },
  {
    question: 'How does AI help you build faster?',
    answer: 'We leverage cutting-edge AI tools throughout our workflow—from code generation and testing to design iteration and content creation. This allows our experienced developers to focus on strategy and quality while AI handles repetitive tasks, resulting in faster delivery without sacrificing quality.',
  },
  {
    question: "What if I'm not satisfied?",
    answer: "Your satisfaction is guaranteed. We work closely with you throughout the project with regular check-ins and revisions. If you're not happy with the final result, we'll continue working until you are—at no extra cost. We've never had an unsatisfied client, and we intend to keep it that way.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="container-custom relative z-10">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about working with us"
        />

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={cn(
                  'w-full text-left p-6 rounded-xl transition-all duration-300',
                  'bg-dark-900/50 border border-dark-800/50',
                  'hover:border-dark-700',
                  openIndex === index && 'border-primary/30 bg-dark-900/80'
                )}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-dark-50">{faq.question}</h3>
                  <ChevronDown
                    className={cn(
                      'w-5 h-5 text-dark-400 transition-transform duration-300 flex-shrink-0',
                      openIndex === index && 'rotate-180 text-primary'
                    )}
                  />
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-dark-400 mt-4 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
