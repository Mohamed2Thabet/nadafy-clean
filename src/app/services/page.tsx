import type { Metadata } from 'next'
import ServicesGrid from '@/components/sections/services/ServicesGrid'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import CleaningProcessSection from '@/components/sections/about/CleaningServicePromo'
import { simplifiedWorkSteps } from '@/config/services'

export const metadata: Metadata = {
  title: 'خدماتنا',
  description: 'تعرف على الـ 15 خدمة تنظيف احترافية التي نقدمها في جميع أنحاء الإمارات',
}

export default function ServicesPage() {
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-[#0F3D91]/5 via-light-bg-primary to-[#2196F3]/10 dark:from-dark-bg-primary dark:via-[#0F2744] dark:to-dark-bg-elevated">
        <Container>
          <SectionTitle subtitle="حلول تنظيف شاملة ومتخصصة تلبي كافة احتياجات المنازل والفلل والمكاتب في جميع أنحاء الإمارات">
            خدماتنا المتكاملة
          </SectionTitle>
        </Container>
      </section>
      
      <ServicesGrid />

      <CleaningProcessSection 
        title="كيف نعمل؟"
        subtitle="خطوات بسيطة ومنظمة تضمن لك نتائج مبهرة وراحة بال كاملة من البداية وحتى التسليم."
        steps={simplifiedWorkSteps}
        ctaTitle="هل أنت جاهز لتجربة بيئة نظيفة وصحية؟"
        ctaDescription="تواصل معنا الآن للحصول على أفضل خدمة تنظيف احترافية في جميع إمارات الدولة."
        ctaBtnText="احجز الخدمة الآن"
        ctaWhatsappText="تواصل عبر واتساب"
      />
    </>
  )
}
