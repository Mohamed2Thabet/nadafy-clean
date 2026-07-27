import { FaUserTie, FaCog, FaLeaf, FaTag, FaHeadset, FaCertificate } from 'react-icons/fa'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import { whyChooseUs } from '@/config/whyChooseUs'

const iconMap: Record<string, any> = {
  FaUserTie,
  FaCog,
  FaLeaf,
  FaTag,
  FaHeadset,
  FaCertificate,
}

/**
 * Why Choose Us section displaying company advantages
 * Shows key benefits with updated icons and primary brand colors
 */
export default function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-white dark:bg-dark-bg-secondary">
      <Container>
        <SectionTitle subtitle="نقدم لك أفضل تجربة تنظيف احترافية في جميع أنحاء الإمارات">
          لماذا تختار خدماتنا؟
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <div
                key={item.id}
                className="group p-8 rounded-2xl bg-light-bg-primary dark:bg-dark-bg-elevated hover:bg-white dark:hover:bg-dark-bg-primary transition-all duration-300 hover:shadow-xl border border-slate-100 dark:border-slate-800 hover:border-accent"
              >
                <div className="w-16 h-16 mb-6 bg-accent/10 dark:bg-accent/20 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#0F3D91] group-hover:to-[#2196F3] group-hover:scale-110 transition-all duration-300 shadow-sm">
                  <Icon className="text-accent group-hover:text-white text-2xl transition-colors" />
                </div>
                <h3 className="font-cairo font-bold text-xl text-slate-900 dark:text-white mb-3 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="font-cairo text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
