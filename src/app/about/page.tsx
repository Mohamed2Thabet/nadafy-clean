import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import WhyChooseUsSection from '@/components/sections/home/WhyChooseUsSection'
import CleaningProcessSection from '@/components/sections/about/CleaningServicePromo'
import { professionalProcessSteps } from '@/config/about'

export const metadata: Metadata = {
  title: 'من نحن',
  description: 'تعرف على نداء النظافة - شركة رائدة في خدمات التنظيف الاحترافية في جميع أنحاء الإمارات',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0F3D91]/5 via-light-bg-primary to-[#2196F3]/10 dark:from-dark-bg-primary dark:via-[#0F2744] dark:to-dark-bg-elevated">
        <Container>
          <SectionTitle subtitle="شريكك الموثوق في تقديم أفضل خدمات التنظيف في جميع إمارات الدولة">
            من نحن
          </SectionTitle>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-dark-bg-elevated rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 dark:border-slate-800">
              <p className="font-cairo text-lg text-slate-800 dark:text-slate-200 leading-relaxed mb-6">
                <strong className="text-accent text-xl">نداء النظافة</strong> هي شركة رائدة ومتخصصة في تقديم خدمات التنظيف والتعقيم الاحترافية لمختلف القطاعات السكنية والتجارية في جميع أنحاء الإمارات.
              </p>
              
              <p className="font-cairo text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                نحن نفخر بتوفير بيئة نظيفة وصحية لعملائنا في كل إمارة من إمارات الدولة من خلال فريق عمل احترافي ومدرب، ومعدات متطورة، ومنظفات آمنة ومعتمدة عالمياً.
              </p>

              <p className="font-cairo text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                نؤمن بأن النظافة هي ركيزة أساسية للصحة والراحة والإنتاجية، ولهذا نلتزم دائماً بتطبيق أحدث المعايير العالمية لضمان نتائج مبهرة ورضا تام لكل عميل.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <WhyChooseUsSection />

      <CleaningProcessSection 
        title="طريقتنا الاحترافية في العمل"
        subtitle="نظام عمل صارم يضمن أعلى معايير الجودة، من الفحص الأولي وحتى التسليم للعميل."
        steps={professionalProcessSteps}
        ctaTitle="استمتع بنظافة تدوم طويلاً من اليوم"
        ctaDescription={
          <>
            انضم لعملائنا الراضين في جميع أنحاء الإمارات. احصل على{" "}
            <span className="text-[#F59E0B] font-bold">عرض خاص</span> عند طلب باقات التنظيف المتكاملة.
          </>
        }
        ctaBtnText="احجز باقتك الآن"
        ctaWhatsappText="استشارة عبر واتساب"
      />
    </>
  )
}