'use client'

import MouseGlow from '@/components/ui/MouseGlow'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

import HeroSection from '@/components/sections/HeroSection'
import PartnersBar from '@/components/sections/PartnersBar'
import WhySection from '@/components/sections/WhySection'
import CoursesSection from '@/components/sections/CoursesSection'
import LiveLearningSection from '@/components/sections/LiveLearningSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import TransformationSection from '@/components/sections/TransformationSection'
import CTASection from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <main className="bg-white text-black overflow-hidden">
       <MouseGlow />

      <Navbar />

      <HeroSection />

      <PartnersBar />

      <WhySection />

      <CoursesSection />

      <LiveLearningSection />

      <ExperienceSection />

      <TransformationSection />

      <CTASection />

      <Footer />
    </main>
  )
}