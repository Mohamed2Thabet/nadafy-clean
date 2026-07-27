"use client";

import Link from 'next/link'
import { FaWhatsapp, FaInstagram, FaFacebook, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa'
import Container from '@/components/ui/Container'
import { siteConfig, navLinks } from '@/config/site'
import Image from 'next/image'

/**
 * Footer component with company info, links, contact details, and social media
 * Designed with dark blue theme and UAE service coverage messaging
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0B1929] text-white border-t border-slate-800" dir="rtl">
      <Container>
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* 1. Brand & Description */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center self-start">
              <div className="relative w-44 h-16 transition-transform hover:scale-105">
                <Image
                  src="/images/logo_footer.png"
                  alt="نداء النظافة - Nadafy Clean"
                  fill
                  priority
                  className="object-contain object-right" 
                />
              </div>
            </Link>
            <p className="font-cairo text-slate-300 text-sm leading-relaxed">
              شركة رائدة في تقديم خدمات التنظيف والتعقيم الاحترافية للفلل والمنازل والمكاتب بأعلى معايير الجودة العالمية.
            </p>
            <div className="flex items-center gap-2 text-orange font-cairo text-xs font-semibold">
              <FaCheckCircle className="text-orange" />
              <span>نقدم خدماتنا في جميع أنحاء الإمارات</span>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="font-cairo font-bold text-lg mb-5 text-white border-r-4 border-accent pr-3">روابط سريعة</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-cairo text-slate-300 hover:text-accent transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="text-xs text-accent">❮</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Information */}
          <div>
            <h4 className="font-cairo font-bold text-lg mb-5 text-white border-r-4 border-accent pr-3">تواصل معنا</h4>
            <ul className="space-y-3.5">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <FaPhone className="text-accent text-sm" />
                </div>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="font-cairo text-slate-300 hover:text-accent transition-colors text-sm dir-ltr"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <FaEnvelope className="text-accent text-sm" />
                </div>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="font-cairo text-slate-300 hover:text-accent transition-colors text-sm"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <FaMapMarkerAlt className="text-accent text-sm" />
                </div>
                <span className="font-cairo text-slate-300 text-sm leading-relaxed">
                  {siteConfig.contact.address}
                </span>
              </li>
            </ul>
          </div>

          {/* 4. Social & Coverage */}
          <div>
            <h4 className="font-cairo font-bold text-lg mb-5 text-white border-r-4 border-accent pr-3">تابعنا</h4>
            <p className="font-cairo text-slate-300 text-xs mb-4">
              خدمات تنظيف احترافية في جميع إمارات الدولة على مدار الأسبوع.
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-emerald-600 hover:bg-emerald-500 rounded-xl flex items-center justify-center transition-all hover:scale-110 shadow-md"
                aria-label="واتساب"
              >
                <FaWhatsapp size={20} />
              </a>
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent hover:bg-accent-hover rounded-xl flex items-center justify-center transition-all hover:scale-110 shadow-md"
                aria-label="انستقرام"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href={siteConfig.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent hover:bg-accent-hover rounded-xl flex items-center justify-center transition-all hover:scale-110 shadow-md"
                aria-label="فيسبوك"
              >
                <FaFacebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-slate-800/80 py-6 text-center">
          <p className="font-cairo text-slate-400 text-sm">
            © {currentYear} نداء النظافة. جميع الحقوق محفوظة | خدمات تنظيف احترافية في جميع إمارات الدولة.
          </p>
        </div>
      </Container>
    </footer>
  )
}