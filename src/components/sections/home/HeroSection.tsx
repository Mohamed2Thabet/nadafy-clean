"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaArrowLeft, FaShieldAlt, FaCheckCircle, FaStar } from "react-icons/fa";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

/**
 * Hero section component for the homepage
 * UAE Arabic Cleaning Services positioning with modern blue & orange brand aesthetic
 */
export default function HeroSection() {
  return (
    <section className="relative py-16 lg:py-28 bg-gradient-to-br from-[#0F3D91]/5 via-light-bg-primary to-[#2196F3]/10 dark:from-dark-bg-primary dark:via-[#0F2744] dark:to-dark-bg-elevated overflow-hidden">
      {/* Decorative Glow Ambient Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#2196F3]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-[140px] pointer-events-none" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          
          {/* Content Area */}
          <div className="text-center lg:text-right order-2 lg:order-1">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#2196F3]/10 dark:bg-[#2196F3]/20 rounded-full border border-[#2196F3]/30">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] animate-pulse" />
              <span className="font-cairo text-[#0F3D91] dark:text-[#2196F3] font-bold text-xs md:text-sm">
                نقدم خدماتنا في جميع أنحاء الإمارات
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cairo font-black text-slate-900 dark:text-white mb-6 leading-[1.2]">
              خدمات تنظيف احترافية
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0F3D91] to-[#2196F3] dark:from-[#2196F3] dark:to-sky-400">
                في جميع إمارات الدولة
              </span>
            </h1>

            <p className="text-base md:text-lg font-cairo text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              نوفر لك حلول تنظيف وتعقيم متكاملة للمنازل والفلل والمكاتب بأعلى معايير الجودة العالمية مع طاقم مدرب ومعدات حديثة ومواد آمنة معتمدة.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="group w-full sm:w-auto gap-3 bg-gradient-to-r from-[#0F3D91] to-[#2196F3] hover:from-[#0B2E70] hover:to-[#1976D2] text-white shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30 transition-all font-bold"
                >
                  احجز الخدمة الآن
                  <FaArrowLeft className="text-sm transition-transform group-hover:-translate-x-1" />
                </Button>
              </Link>

              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto gap-2 border-emerald-500/40 text-emerald-600 hover:bg-emerald-500/10 dark:text-emerald-400 font-bold"
                >
                  <FaWhatsapp className="text-xl" />
                  استشارة مجانية عبر واتساب
                </Button>
              </a>
            </div>

            {/* Feature Checkpoints */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10 pt-8 border-t border-slate-200/80 dark:border-slate-800">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <FaCheckCircle className="text-[#F59E0B] text-lg shrink-0" />
                <span className="font-cairo text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-300">
                  تغطية كافة الإمارات
                </span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <FaCheckCircle className="text-[#F59E0B] text-lg shrink-0" />
                <span className="font-cairo text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-300">
                  معدات ومواد آمنة
                </span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <FaCheckCircle className="text-[#F59E0B] text-lg shrink-0" />
                <span className="font-cairo text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-300">
                  فريق مدرب وموثوق
                </span>
              </div>
            </div>
          </div>

          {/* Hero Image Container */}
          <div className="relative order-1 lg:order-2 px-4 lg:px-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#2196F3]/30 to-[#F59E0B]/20 rounded-3xl transform rotate-2 scale-105 -z-10 blur-sm" />

            <div className="relative aspect-[4/3] md:aspect-square w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 transition-transform duration-500 hover:scale-[1.01]">
              <Image
                src="/images/leanding.png"
                alt="خدمات تنظيف احترافية في جميع إمارات الدولة"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Quality Badge */}
            <div className="absolute -bottom-6 -right-2 md:-right-4 bg-white dark:bg-dark-bg-elevated rounded-2xl shadow-2xl p-4 max-w-[250px] border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 bg-amber-500/15 text-amber-500 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                  <FaStar className="text-2xl text-[#F59E0B]" />
                </div>
                <div>
                  <div className="font-cairo font-bold text-sm text-slate-900 dark:text-white">
                    ضمان الجودة ١٠٠٪
                  </div>
                  <div className="text-xs font-cairo text-slate-500 dark:text-slate-400 mt-0.5">
                    رضاك تام أو إعادة الخدمة مجاناً
                  </div>
                </div>
              </div>
            </div>

            {/* Coverage Floating Pill */}
            <div className="absolute -top-4 -left-2 bg-gradient-to-r from-[#0F3D91] to-[#2196F3] text-white rounded-2xl shadow-xl px-4 py-3 border border-white/20 hidden sm:flex items-center gap-2.5">
              <FaShieldAlt className="text-white text-lg" />
              <span className="font-cairo font-bold text-xs">خدمة سريعة في جميع الإمارات</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
