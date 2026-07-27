'use client'

import Link from 'next/link'
import { FaWhatsapp, FaPhone } from 'react-icons/fa'
import { siteConfig } from '@/config/site'

/**
 * Floating contact buttons component
 * Displays fixed WhatsApp and phone call buttons for quick customer actions
 */
export default function FloatingContactButtons() {
  return (
    <>
      {/* WhatsApp Button */}
      <Link
        href={siteConfig.links.whatsapp}
        target="_blank"
        aria-label="WhatsApp"
        className="
          fixed
          bottom-6
          left-6
          z-[999]
          w-14
          h-14
          rounded-full
          bg-[#25D366]
          flex
          items-center
          justify-center
          shadow-[0_8px_25px_rgba(37,211,102,0.4)]
          hover:scale-110
          active:scale-95
          transition-all
          duration-300
        "
      >
        <FaWhatsapp className="text-white text-[32px]" />
      </Link>

      {/* Call Button */}
      <a
        href={`tel:${siteConfig.contact.phone}`}
        aria-label="Call Now"
        className="
          fixed
          bottom-6
          right-6
          z-[999]
          bg-gradient-to-r
          from-[#F59E0B]
          to-[#D97706]
          hover:from-[#D97706]
          hover:to-[#F59E0B]
          text-white
          px-5
          py-3.5
          rounded-2xl
          flex
          items-center
          gap-2.5
          shadow-[0_8px_25px_rgba(245,158,11,0.4)]
          hover:scale-105
          active:scale-95
          transition-all
          duration-300
          font-cairo
          font-bold
          text-base
        "
      >
        <FaPhone className="text-lg animate-pulse" />
        <span className="hidden sm:block">
          اتصل الآن
        </span>
      </a>
    </>
  )
}