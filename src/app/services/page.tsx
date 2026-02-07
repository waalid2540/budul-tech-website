'use client'

import { motion } from 'framer-motion'
import { Check, Phone, MessageSquare, ArrowRight, Sparkles, Clock, MapPin, Shield } from 'lucide-react'
import Link from 'next/link'
import { Navigation } from '@/components/sections/Navigation'
import { Footer } from '@/components/sections/Footer'

const packages = [
  {
    name: 'Starter',
    price: '$500',
    description: 'Perfect for getting online fast',
    features: [
      'Professional 5-Page Website',
      'Mobile Responsive Design',
      'Contact Form + Email Alerts',
      'Google Maps Integration',
      'Social Media Links',
      'Basic SEO Setup',
      'SSL Security Certificate',
      '1 Year Free Hosting',
      '5-Day Delivery',
    ],
    popular: false,
  },
  {
    name: 'Growth',
    price: '$1,000',
    description: 'Most popular for local businesses',
    features: [
      'Everything in Starter, plus:',
      'Online Booking System',
      'Google Business Profile Setup',
      'Photo Gallery / Portfolio',
      'Customer Reviews Section',
      'WhatsApp Chat Button',
      'Click-to-Call Button',
      'Speed Optimization',
      '2 Rounds of Revisions',
      '$49/mo Maintenance (optional)',
    ],
    popular: true,
  },
  {
    name: 'Pro',
    price: '$1,500',
    description: 'Full automation & AI power',
    features: [
      'Everything in Growth, plus:',
      'AI Chatbot (24/7 Lead Capture)',
      'Automated Appointment Reminders',
      'Review Request Automation',
      'Customer Intake Forms',
      'Email Marketing Setup',
      'Social Media Profiles Setup',
      'Logo Design Included',
      'Priority Support',
      '$99/mo Maintenance',
    ],
    popular: false,
  },
]

const services = [
  {
    icon: '🌐',
    title: 'Professional Website',
    description: 'Beautiful, fast, mobile-friendly. Shows up on Google. Makes customers trust you instantly.',
  },
  {
    icon: '📅',
    title: 'Online Booking',
    description: 'Customers book 24/7 — even at 2am. No more phone tag. Syncs to your calendar.',
  },
  {
    icon: '🤖',
    title: 'AI Chatbot',
    description: 'Answers questions, captures leads, books appointments. Works while you sleep.',
  },
  {
    icon: '📍',
    title: 'Google Business',
    description: 'Show up on Google Maps. Get found when people search "[your service] near me".',
  },
  {
    icon: '⭐',
    title: 'Review Automation',
    description: 'Automatically ask happy customers for reviews. Build your reputation on autopilot.',
  },
  {
    icon: '🎨',
    title: 'Logo & Branding',
    description: 'Professional logo, colors, and graphics. Look legit everywhere you show up.',
  },
]

const industries = [
  '💈 Barber Shops',
  '💇 Hair Salons',
  '💅 Nail Salons',
  '🍔 Restaurants',
  '🔧 Handyman Services',
  '🔌 Electricians',
  '🚿 Plumbers',
  '❄️ HVAC',
  '🌿 Landscaping',
  '🧹 Cleaning Services',
  '🦷 Dental Offices',
  '💆 Massage & Spa',
  '🏋️ Fitness Studios',
  '📸 Photographers',
  '🛒 Grocery Stores',
  '🕌 Masajid & Nonprofits',
]

const whyUs = [
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'Stupid Fast',
    description: 'Most agencies take weeks. We deliver in days. Your website live in 3-7 days, guaranteed.',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Fair Pricing',
    description: 'No $5,000 websites. No hidden fees. Honest pricing that small businesses can afford.',
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'AI-Powered',
    description: 'We use AI to build faster and smarter. Chatbots, automation, and tools that work 24/7.',
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: 'Local & Personal',
    description: "We are in Utah. We answer the phone. You are not a ticket number — you are a neighbor.",
  },
]

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-dark-950">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Get More Customers{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                With a Website That Works
              </span>
            </h1>
            <p className="text-xl text-dark-300 mb-10 max-w-2xl mx-auto">
              Professional websites, online booking, and AI chatbots for Utah small businesses.
              Your customers are online — are you?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13852159346"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white bg-gradient-to-r from-primary to-secondary rounded-xl transition-all duration-300 hover:shadow-glow hover:scale-[1.02]"
              >
                <Phone className="w-5 h-5" />
                (385) 215-9346
              </a>
              <a
                href="sms:+13852159346"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-dark-50 border-2 border-dark-700 rounded-xl transition-all duration-300 hover:border-primary hover:text-primary"
              >
                <MessageSquare className="w-5 h-5" />
                Text Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 border-y border-dark-800 bg-dark-900/50">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center items-center gap-8 text-dark-400 text-sm">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-primary" />
              Fast Delivery (3-7 Days)
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-primary" />
              Utah-Based
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-primary" />
              Affordable Pricing
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-primary" />
              AI-Powered
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Businesses Choose Us</h2>
            <p className="text-dark-400 text-lg">We are not like other agencies</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-dark-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-dark-900/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Win Online</h2>
            <p className="text-dark-400 text-lg">We bundle it all together so you do not have to figure it out</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-dark-800/50 border border-dark-700 hover:border-primary/50 transition-colors"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-dark-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-dark-400 mt-12 text-lg">
            👇 See what is included in each package below 👇
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Package</h2>
            <p className="text-dark-400 text-lg">Everything you need to get more customers — no hidden fees</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-8 rounded-2xl border ${
                  pkg.popular
                    ? 'border-primary bg-gradient-to-b from-primary/10 to-transparent scale-105'
                    : 'border-dark-700 bg-dark-800/50'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm font-bold rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">
                    {pkg.price}
                  </div>
                  <p className="text-dark-400">{pkg.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-dark-200">
                      {feature.includes('Everything') ? (
                        <span className="font-semibold text-primary">{feature}</span>
                      ) : (
                        <>
                          <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          {feature}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:+13852159346"
                  className="block w-full text-center px-6 py-3 font-semibold text-white bg-gradient-to-r from-primary to-secondary rounded-xl transition-all duration-300 hover:shadow-glow"
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-dark-900/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Local Businesses</h2>
            <p className="text-dark-400 text-lg">We specialize in helping these Utah businesses grow</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
          >
            {industries.map((industry) => (
              <span
                key={industry}
                className="px-5 py-3 rounded-full bg-dark-800 border border-dark-700 text-dark-200 hover:border-primary hover:text-primary transition-colors"
              >
                {industry}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-dark-400 text-lg">Simple process. Fast results.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {[
              { step: '1', title: 'Free Consultation', desc: "We will discuss your business needs and recommend the best solution. Takes 15 minutes." },
              { step: '2', title: 'We Build It', desc: 'You answer a quick questionnaire. We design and build your site. You approve.' },
              { step: '3', title: 'Go Live', desc: 'Your new website goes live. Start getting more customers immediately.' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-primary text-primary text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-dark-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-dark-900 to-dark-950">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow Your Business?</h2>
            <p className="text-dark-400 text-lg mb-10">
              Let us talk about what you need. No pressure, no commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="tel:+13852159346"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white bg-gradient-to-r from-primary to-secondary rounded-xl transition-all duration-300 hover:shadow-glow hover:scale-[1.02]"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="sms:+13852159346"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-dark-50 border-2 border-dark-700 rounded-xl transition-all duration-300 hover:border-primary hover:text-primary"
              >
                <MessageSquare className="w-5 h-5" />
                Text Us
              </a>
            </div>
            <a
              href="tel:+13852159346"
              className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
            >
              (385) 215-9346
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
