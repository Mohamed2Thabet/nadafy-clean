/**
 * Site Configuration & SEO Constants
 * Central configuration for site-wide settings
 */

import type { SiteConfig, NavLink } from '@/types'

export const siteConfig: SiteConfig = {
  name: 'نداء النظافة - خدمات تنظيف احترافية',
  nameEn: 'Nadafy Clean',
  ogImage: '/images/logo.png',
  description:
    'خدمات تنظيف احترافية في جميع إمارات الدولة - تنظيف منازل، فلل، مكاتب، كنب، سجاد، مكافحة حشرات، تعقيم وتطهير',
  url: 'https://nadafy-clean-vsnm.vercel.app',
  links: {
    whatsapp: 'https://wa.me/971501234567',
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com/nadafyclean',
    facebook: 'https://facebook.com/nadafyclean',
  },
  contact: {
    phone: '+971 50 123 4567',
    email: 'info@nadafyclean.ae',
    address: 'نقدم خدماتنا في جميع أنحاء الإمارات',
  },
  keywords: [
    'شركة تنظيف الإمارات',
    'خدمات تنظيف احترافية',
    'تنظيف منازل الإمارات',
    'تنظيف فلل',
    'تنظيف كنب',
    'تنظيف سجاد',
    'مكافحة حشرات',
    'تعقيم وتطهير',
    'تنظيف مكاتب',
    'شركة نظافة الإمارات',
    'تنظيف عميق',
    'تنظيف خزانات المياه',
  ],
}

export const navLinks: NavLink[] = [
  { href: '/', label: 'الرئيسية' },
  { href: '/services', label: 'خدماتنا' },
  { href: '/about', label: 'من نحن' },
  { href: '/faq', label: 'الأسئلة الشائعة' },
  { href: '/contact', label: 'تواصل معنا' },
]
