/**
 * Home Page
 * Main landing page with all sections
 */

import HeroSection from '@/components/sections/home/HeroSection'
import WhyChooseUsSection from '@/components/sections/home/WhyChooseUsSection'
import ServicesSection from '@/components/sections/services/ServicesSection'
import BeforeAfterSection from '@/components/sections/home/BeforeAfterSection'
import ReviewsSection from '@/components/sections/home/ReviewsSection'
import ServiceForm from '@/components/sections/services/ServiceForm'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <BeforeAfterSection />
      <ReviewsSection />
      <ServiceForm />
    </>
  )
}
