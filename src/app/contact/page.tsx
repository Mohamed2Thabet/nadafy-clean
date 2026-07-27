import type { Metadata } from 'next'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import ContactForm from '@/components/sections/contact/ContactForm'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'تواصل معنا',
  description: 'تواصل مع نداء النظافة للحصول على خدمات تنظيف احترافية في جميع أنحاء الإمارات',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0F3D91]/5 via-light-bg-primary to-[#2196F3]/10 dark:from-dark-bg-primary dark:via-[#0F2744] dark:to-dark-bg-elevated">
        <Container>
          <SectionTitle subtitle="فريقنا جاهز لخدمتكم في جميع إمارات الدولة على مدار الأسبوع">
            تواصل معنا
          </SectionTitle>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex flex-col items-center gap-3 p-6 bg-white dark:bg-dark-bg-elevated rounded-2xl border border-slate-100 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-accent transition-all group"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#0F3D91] group-hover:to-[#2196F3] transition-all">
                <FaPhone className="text-accent group-hover:text-white text-2xl" />
              </div>
              <h3 className="font-cairo font-bold text-slate-900 dark:text-white">
                اتصل بنا
              </h3>
              <p className="font-cairo text-slate-600 dark:text-slate-300 text-center dir-ltr text-sm font-semibold">
                {siteConfig.contact.phone}
              </p>
            </a>

            <a
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 bg-white dark:bg-dark-bg-elevated rounded-2xl border border-slate-100 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-emerald-500 transition-all group"
            >
              <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center group-hover:bg-emerald-500 transition-all">
                <FaWhatsapp className="text-emerald-500 group-hover:text-white text-2xl" />
              </div>
              <h3 className="font-cairo font-bold text-slate-900 dark:text-white">
                واتساب
              </h3>
              <p className="font-cairo text-slate-600 dark:text-slate-300 text-center text-sm font-semibold">
                تواصل فوري ومباشر
              </p>
            </a>

            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex flex-col items-center gap-3 p-6 bg-white dark:bg-dark-bg-elevated rounded-2xl border border-slate-100 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-accent transition-all group"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#0F3D91] group-hover:to-[#2196F3] transition-all">
                <FaEnvelope className="text-accent group-hover:text-white text-2xl" />
              </div>
              <h3 className="font-cairo font-bold text-slate-900 dark:text-white">
                البريد الإلكتروني
              </h3>
              <p className="font-cairo text-slate-600 dark:text-slate-300 text-center text-sm font-semibold">
                {siteConfig.contact.email}
              </p>
            </a>
          </div>
        </Container>
      </section>

      <ContactForm />
    </>
  )
}
