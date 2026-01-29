'use client'

import { motion } from 'framer-motion'

export function SocialProof() {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden border-y border-dark-800/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-dark-400 mb-6">Trusted by businesses across Utah and beyond</p>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {/* Placeholder logos */}
            {['Company A', 'Company B', 'Company C', 'Company D', 'Company E'].map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="px-6 py-3 bg-dark-800/30 rounded-lg border border-dark-800/50"
              >
                <span className="text-dark-500 font-semibold">{company}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-dark-500 mt-8"
          >
            Join <span className="text-primary font-semibold">50+</span> happy clients who&apos;ve transformed their digital presence
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
