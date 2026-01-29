'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { RefreshCw, Home } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-950">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="glow-orb w-[400px] h-[400px] bg-red-500/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
            <span className="text-4xl">⚠️</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-dark-100 mb-4">Something Went Wrong</h2>
          <p className="text-dark-400 mb-8 max-w-md mx-auto">
            We apologize for the inconvenience. Please try again or contact us if the problem persists.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => reset()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white bg-gradient-to-r from-primary to-secondary rounded-lg transition-all duration-300 hover:shadow-glow hover:scale-[1.02]"
            >
              <RefreshCw className="w-5 h-5" />
              Try Again
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-dark-100 bg-dark-800/50 border border-dark-700 rounded-lg transition-all duration-300 hover:bg-dark-800 hover:border-dark-600"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
