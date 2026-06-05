import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import MouseGlow from '@/components/ui/MouseGlow'

import CoursesHero from '@/components/courses/CoursesHero'
import CourseShowcase from '@/components/courses/CourseShowcase'
import LearningJourney from '@/components/courses/LearningJourney'
import AISection from '@/components/courses/AISection'
import FAQSection from '@/components/courses/FAQSection'
import CoursesCTA from '@/components/courses/CoursesCTA'

export default function CoursesPage() {
  return (
    <main className="bg-white text-black overflow-hidden">
      <MouseGlow />
      <Navbar />

      <CoursesHero />

      <CourseShowcase />

      <LearningJourney />

      <AISection />

      <FAQSection />

      <CoursesCTA />

      <Footer />
    </main>
  )
}