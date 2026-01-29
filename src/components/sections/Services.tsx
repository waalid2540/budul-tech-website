'use client'

import { motion } from 'framer-motion'
import { Globe, Bot, Smartphone, TrendingUp, Settings, Shield } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Modern, fast, responsive websites that convert visitors into paying customers.',
    features: ['Business Sites', 'Landing Pages', 'E-commerce', 'Web Apps'],
    gradient: 'from-primary to-secondary',
  },
  {
    icon: Bot,
    title: 'AI Integration',
    description: 'Automate your business with intelligent AI chatbots, assistants, and automation tools.',
    features: ['AI Chatbots', 'Process Automation', 'Smart Assistants', 'Custom AI Tools'],
    gradient: 'from-accent to-primary',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications that users love to use.',
    features: ['iOS & Android', 'Progressive Web Apps', 'MVP Development'],
    gradient: 'from-secondary to-accent',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies that grow your online presence and revenue.',
    features: ['Social Media', 'SEO', 'Paid Ads', 'Content Marketing'],
    gradient: 'from-success to-secondary',
  },
  {
    icon: Settings,
    title: 'Custom Software',
    description: 'Tailored software solutions that solve your unique business challenges.',
    features: ['Internal Tools', 'CRM Systems', 'Dashboards', 'APIs'],
    gradient: 'from-primary to-accent',
  },
  {
    icon: Shield,
    title: 'Maintenance & Support',
    description: 'Keep your digital assets running smoothly with ongoing support and updates.',
    features: ['24/7 Monitoring', 'Security Updates', 'Performance Optimization'],
    gradient: 'from-accent to-success',
  },
]

export function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="glow-orb w-[400px] h-[400px] bg-primary/20 top-0 right-0" />

      <div className="container-custom relative z-10">
        <SectionHeader
          eyebrow="WHAT WE DO"
          title="Complete Digital Solutions"
          subtitle="From concept to launch, we deliver everything your business needs to thrive online"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full bg-dark-900/50 backdrop-blur-sm border border-dark-800/50 rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-dark-700 hover:shadow-glow overflow-hidden">
                {/* Top gradient line on hover */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} mb-5`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-dark-50 mb-3">{service.title}</h3>
                <p className="text-dark-400 mb-5">{service.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs font-medium text-dark-300 bg-dark-800/50 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
