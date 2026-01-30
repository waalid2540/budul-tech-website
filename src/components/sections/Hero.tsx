'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Zap } from 'lucide-react'

export function Hero() {
  const handleClick = (href: string) => {
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

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="glow-orb w-[600px] h-[600px] bg-primary -top-40 -left-40" />
      <div className="glow-orb w-[500px] h-[500px] bg-accent -bottom-40 -right-40" />
      <div className="glow-orb w-[300px] h-[300px] bg-secondary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 border border-success/20 rounded-full text-success text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                AI-Powered Development Agency
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-dark-50 leading-tight mb-6"
            >
              We Build Your{' '}
              <span className="gradient-text">Digital Future</span> in Days, Not Months
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-dark-400 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Budul Tech delivers websites, apps, AI integrations, and marketing solutions at unprecedented speed. Powered by AI, driven by family values.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => handleClick('#contact')}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white bg-gradient-to-r from-primary to-secondary rounded-lg transition-all duration-300 hover:shadow-glow hover:scale-[1.02]"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => handleClick('#services')}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-dark-100 bg-dark-800/50 border border-dark-700 rounded-lg transition-all duration-300 hover:bg-dark-800 hover:border-dark-600"
              >
                <Play className="w-5 h-5" />
                View Our Work
              </button>
            </motion.div>
          </div>

          {/* Right Content - Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative w-full"
          >
            <div className="relative bg-dark-900/80 backdrop-blur-xl border-2 border-dark-700/50 rounded-2xl overflow-hidden shadow-2xl">
              {/* Decorative top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary z-10" />

              {/* Video */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover aspect-[4/5]"
              >
                <source src="/hero-video.mov" type="video/quicktime" />
                <source src="/hero-video.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 bg-gradient-to-br from-primary to-accent p-3 rounded-xl shadow-glow"
            >
              <Zap className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-dark-700 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
