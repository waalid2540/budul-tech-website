'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Twitter, Linkedin, Github } from 'lucide-react'
import Link from 'next/link'

const footerLinks = {
  systems: [
    { name: 'Growth Infrastructure', href: '/systems' },
    { name: 'Automation & AI', href: '/systems' },
    { name: 'Custom Software', href: '/systems' },
  ],
  company: [
    { name: 'Start Here', href: '/start' },
    { name: 'Our Process', href: '/process' },
    { name: 'Contact', href: '/contact' },
  ],
}

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/budultech' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/budultech' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/budultech' },
]

export function Footer() {
  return (
    <footer className="relative pt-20 pb-8 bg-dark-950 border-t border-dark-800/50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-xl font-extrabold text-white">B</span>
              </div>
              <span className="text-xl font-bold text-dark-50">
                Budul<span className="text-primary">Tech</span>
              </span>
            </Link>
            <p className="text-dark-400 mb-6">
              We build revenue-driving technology for businesses that want to win. Systems, automation, and execution.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-dark-800/50 border border-dark-700/50 flex items-center justify-center text-dark-400 hover:text-primary hover:border-primary/50 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Systems Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-dark-50 font-semibold mb-6">What We Build</h3>
            <ul className="space-y-4">
              {footerLinks.systems.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-dark-400 hover:text-dark-200 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-dark-50 font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-dark-400 hover:text-dark-200 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-dark-50 font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@budultech.com"
                  className="flex items-center gap-3 text-dark-400 hover:text-dark-200 transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  hello@budultech.com
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-dark-400">
                  <MapPin className="w-5 h-5 text-primary" />
                  Utah, USA
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-dark-500 text-sm">
              &copy; {new Date().getFullYear()} Budul Tech. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-dark-500 hover:text-dark-300 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-dark-500 hover:text-dark-300 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
