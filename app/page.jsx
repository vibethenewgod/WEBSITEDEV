import Navbar from "@/components/navbar"
import HeroCarousel from "@/components/hero-carousel"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import FirmCardsSection from "@/components/firm-cards-section"
import InsightsSection from "@/components/insights-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero */}
      <div className="bg-[#002548]">
        <Navbar />
      </div>
      <HeroCarousel />

      {/* 2. Our Services */}
      <ServicesSection />

      {/* 3. About Us (short) */}
      <AboutSection />

      {/* 4. Firm Cards — Our Foundation / Approach / Perspective / Working With Us */}
      <FirmCardsSection />

      {/* 5. Latest Insights */}
      <InsightsSection />

      {/* 6. CTA */}
      <CTASection />

      {/* 7. Footer */}
      <Footer />
    </main>
  )
}
