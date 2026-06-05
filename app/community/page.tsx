import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import MouseGlow from '@/components/ui/MouseGlow'

import CommunityHero from '@/components/community/CommunityHero'
import CommunityBenefits from '@/components/community/CommunityBenefits'
import CommunityCTA from '@/components/community/CommunityCTA'

export default function CommunityPage() {
  return (
    <main className="bg-white text-black overflow-hidden">
       <MouseGlow />
      <Navbar />

      <CommunityHero />

      <CommunityBenefits />

      <CommunityCTA />

      <Footer />
    </main>
  )
}