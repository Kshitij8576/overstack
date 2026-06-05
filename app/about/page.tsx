import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import MouseGlow from '@/components/ui/MouseGlow'

import AboutHero from '@/components/about/AboutHero'
import WhyOverstack from '@/components/about/WhyOverstack'
import OurApproach from '@/components/about/OurApproach'
import FounderNote from '@/components/about/FounderNote'
import AboutCTA from '@/components/about/AboutCTA'

export default function AboutPage() {
  return (
    <main className="bg-white text-black overflow-hidden">
      <MouseGlow />
      <Navbar />

      <AboutHero />

      <WhyOverstack />

      <OurApproach />

      <FounderNote />

      <AboutCTA />

      <Footer />
    </main>
  )
}