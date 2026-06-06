import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import MouseGlow from '@/components/ui/MouseGlow'

import ServicesHero from '@/components/services/ServicesHero'
import ServicesGrid from '@/components/services/ServicesGrid'
import ProjectShowcase from '@/components/services/ProjectShowcase'
import WhyChooseUs from '@/components/services/WhyChooseUs'
import ProcessSection from '@/components/services/ProcessSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import ServicesCTA from '@/components/services/ServicesCTA'

export default function ServicesPage() {
  return (
    <main className="bg-white text-black overflow-hidden">
      <MouseGlow />
      <Navbar />

      <ServicesHero />

      <ServicesGrid />

      <ProjectShowcase />

      <WhyChooseUs />

      <ProcessSection />

      <TestimonialsSection />

      <ServicesCTA />


      <Footer />
    </main>
  )
}