import React from "react";
import { MdPhoneInTalk, MdAssignmentTurnedIn, MdOutlineCleaningServices, MdCheckCircleOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { siteConfig } from "@/config/site";
import { professionalProcessSteps as defaultSteps } from "@/config/about";
import Link from "next/link";

type IconType = React.ComponentType<{ className?: string }>;

const iconMap: Record<string, IconType> = {
  BiSolidPhoneCall: MdPhoneInTalk,
  FaClipboardCheck: MdAssignmentTurnedIn,
  FaBroom: MdOutlineCleaningServices,
  FaRegCheckCircle: MdCheckCircleOutline,
};

interface WorkStep {
  id: string | number;
  number: string;
  icon: string;
  title: string;
  description: string;
}

interface CleaningProcessSectionProps {
  title?: string;
  subtitle?: string;
  steps?: WorkStep[];
  ctaTitle?: string;
  ctaDescription?: React.ReactNode;
  ctaBtnText?: string;
  ctaWhatsappText?: string;
  ctaLink?: string;
}

export default function CleaningProcessSection({
  title = "طريقتنا الاحترافية في العمل",
  subtitle = "نظام عمل متكامل يضمن أعلى معايير الجودة في جميع إمارات الدولة",
  steps = defaultSteps as WorkStep[],
  ctaTitle = "استمتع بنظافة تدوم طويلاً من اليوم",
  ctaDescription = (
    <>
      نقدم خدماتنا في جميع أنحاء الإمارات بأعلى معايير الدقة والاحترافية. احصل على{" "}
      <span className="text-[#F59E0B] font-bold">خصم مميز</span> عند طلب باقات التنظيف المتكاملة.
    </>
  ),
  ctaBtnText = "احجز باقتك الآن",
  ctaWhatsappText = "استشارة عبر واتساب",
  ctaLink = "/contact"
}: CleaningProcessSectionProps) {
  return (
    <section className="py-20 bg-white dark:bg-dark-bg-secondary" dir="rtl">
      <Container>
        <SectionTitle subtitle={subtitle}>
          {title}
        </SectionTitle>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps && steps.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.id}
                className="group p-6 rounded-2xl bg-light-bg-primary dark:bg-dark-bg-elevated hover:bg-white dark:hover:bg-dark-bg-primary transition-all duration-300 hover:shadow-xl border border-slate-100 dark:border-slate-800 hover:border-accent relative flex flex-col items-center text-center"
              >
                <div className="w-full flex justify-between items-start mb-6">
                  <span className="font-cairo text-4xl font-black text-slate-300/70 dark:text-slate-700/50 select-none group-hover:text-accent/30 transition-colors duration-300">
                    {item.number}
                  </span>
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#0F3D91] group-hover:to-[#2196F3] group-hover:scale-110 transition-all duration-300">
                    {Icon && (
                      <Icon className="text-accent group-hover:text-white text-2xl transition-colors duration-300" />
                    )}
                  </div>
                </div>

                <h3 className="font-cairo font-bold text-lg text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="font-cairo text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#0B1929] via-[#0F3D91] to-[#0F2744] rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl border border-blue-900/50">
          <h2 className="font-cairo text-2xl md:text-3xl font-black mb-4 text-white">
            {ctaTitle}
          </h2>
          <div className="font-cairo text-slate-300 text-sm md:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
            {ctaDescription}
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href={ctaLink} className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:from-[#D97706] hover:to-[#F59E0B] text-white font-bold rounded-xl transition-all duration-200 text-sm font-cairo shadow-lg shadow-orange-500/20">
                {ctaBtnText}
              </button>
            </Link>
            
            <a
              href={siteConfig?.links?.whatsapp || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <button className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-200 text-sm border border-white/20 font-cairo flex items-center justify-center gap-2">
                <FaWhatsapp className="text-emerald-400 text-lg" />
                {ctaWhatsappText}
              </button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}