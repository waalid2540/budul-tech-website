'use client'

import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  withArrow?: boolean
  children: React.ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  withArrow = false,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-950 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-glow hover:scale-[1.02] focus:ring-primary/50',
    secondary: 'bg-dark-800/50 border border-dark-700 text-dark-100 hover:bg-dark-800 hover:border-dark-600 focus:ring-dark-700',
    outline: 'bg-transparent border border-dark-700 text-dark-100 hover:border-primary hover:text-primary focus:ring-primary/50',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
      {withArrow && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
    </button>
  )
}
