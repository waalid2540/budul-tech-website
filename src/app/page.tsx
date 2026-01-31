import { Navigation } from '@/components/sections/Navigation'
import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { WhatWeEngineer } from '@/components/sections/WhatWeEngineer'
import { HowWeWork } from '@/components/sections/HowWeWork'
import { Statement } from '@/components/sections/Statement'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <Hero />
      <Problem />
      <WhatWeEngineer />
      <HowWeWork />
      <Statement />
      <FinalCTA />
      <Footer />
    </main>
  )
}
