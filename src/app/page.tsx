import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <WhyChooseUsSection />
      <PricingSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
