import type { Metadata } from 'next'
import FAQAccordion from '@/components/sections/faq/FAQAccordion'

export const metadata: Metadata = {
  title: 'الأسئلة الشائعة',
  description: 'إجابات شاملة على أكثر الأسئلة شيوعاً حول خدمات التنظيف والتعقيم في الإمارات',
}

export default function FAQPage() {
  return <FAQAccordion />
}
