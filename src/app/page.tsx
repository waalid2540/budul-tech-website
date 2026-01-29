import { Navigation } from '@/components/sections/Navigation'
import { Hero } from '@/components/sections/Hero'
import { SocialProof } from '@/components/sections/SocialProof'
import { Services } from '@/components/sections/Services'
import { Process } from '@/components/sections/Process'
import { Pricing } from '@/components/sections/Pricing'
import { About } from '@/components/sections/About'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { CTA } from '@/components/sections/CTA'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <Hero />
      <SocialProof />
      <Services />
      <Process />
      <Pricing />
      <About />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}
