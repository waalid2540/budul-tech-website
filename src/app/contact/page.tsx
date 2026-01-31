'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin, CheckCircle2, ArrowRight } from 'lucide-react'
import { Navigation } from '@/components/sections/Navigation'
import { Footer } from '@/components/sections/Footer'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@budultech.com',
    href: 'mailto:hello@budultech.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '(385) 215-9346',
    href: 'tel:+13852159346',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Utah, USA',
    href: null,
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setIsSubmitted(true)
      setFormData({ name: '', email: '', company: '', message: '' })

      setTimeout(() => setIsSubmitted(false), 5000)
    } catch {
      setError('Failed to send message. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <main className="relative min-h-screen">
      <Navigation />

      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 grid-pattern" />
        <div className="glow-orb w-[500px] h-[500px] bg-primary -top-40 -right-40" />
        <div className="glow-orb w-[400px] h-[400px] bg-secondary bottom-0 left-0" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-dark-50 leading-tight mb-6"
            >
              Let&apos;s Talk <span className="gradient-text">Systems</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-dark-400"
            >
              If your business needs better execution, automation, or scalability — reach out.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-bold text-dark-50 mb-6">Get in Touch</h2>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-dark-400 text-sm">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-dark-100 font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-dark-100 font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-xl bg-dark-900/50 border border-dark-800/50">
                <p className="text-dark-300 mb-4">Prefer a quick call?</p>
                <a
                  href="https://calendly.com/budultech/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  Book a 15-minute call
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-dark-200 text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-900/50 border border-dark-700 rounded-lg text-dark-100 placeholder-dark-500 focus:outline-none focus:border-primary transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-dark-200 text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-900/50 border border-dark-700 rounded-lg text-dark-100 placeholder-dark-500 focus:outline-none focus:border-primary transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-dark-200 text-sm font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-900/50 border border-dark-700 rounded-lg text-dark-100 placeholder-dark-500 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-dark-200 text-sm font-medium mb-2">
                    Tell us about your systems challenge *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-900/50 border border-dark-700 rounded-lg text-dark-100 placeholder-dark-500 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="What bottleneck are you facing? What would success look like?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white bg-gradient-to-r from-primary to-secondary rounded-lg transition-all duration-300 hover:shadow-glow hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                {error && (
                  <p className="mt-4 text-red-400 text-sm">{error}</p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
