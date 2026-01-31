'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Twitter, Linkedin, Github, Instagram } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'Web Development', href: '#services' },
    { name: 'AI Integration', href: '#services' },
    { name: 'App Development', href: '#services' },
    { name: 'Digital Marketing', href: '#services' },
    { name: 'Custom Software', href: '#services' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ],
}

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/budultech' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/budultech' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/budultech' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/budultech' },
]

export function Footer() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
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
  }

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
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-xl font-extrabold text-white">B</span>
              </div>
              <span className="text-xl font-bold text-dark-50">
                Budul<span className="text-primary">Tech</span>
              </span>
            </a>
            <p className="text-dark-400 mb-6">
              AI-powered development agency delivering websites, apps, and digital solutions at unprecedented speed.
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

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-dark-50 font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-dark-400 hover:text-dark-200 transition-colors"
                  >
                    {link.name}
                  </a>
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
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-dark-400 hover:text-dark-200 transition-colors"
                  >
                    {link.name}
                  </a>
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
              &copy; {new Date().getFullYear()} Budul Tech LLC. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="/privacy" className="text-dark-500 hover:text-dark-300 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-dark-500 hover:text-dark-300 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
