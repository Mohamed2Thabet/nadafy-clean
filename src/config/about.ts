/**
 * About Page Configuration
 * Professional process steps and company information
 */

import type { WorkStep } from '@/types'

/**
 * Detailed professional process steps for About page
 */
export const professionalProcessSteps: WorkStep[] = [
  {
    id: 'step-1',
    number: '01',
    icon: 'BiSolidPhoneCall',
    title: 'التواصل السريع',
    description: 'تواصل معنا عبر الهاتف أو الواتساب لتحديد الخدمة والموعد الأنسب لك في أي مكان بالإمارات.',
  },
  {
    id: 'step-2',
    number: '02',
    icon: 'FaClipboardCheck',
    title: 'الفحص والمعاينة المجانية',
    description: 'تقييم دقيق للمكان وتحديد تقنيات ومنظفات التنظيف المثالية دون أي تكاليف إضافية.',
  },
  {
    id: 'step-3',
    number: '03',
    icon: 'FaBroom',
    title: 'التنظيف العميق والشامل',
    description: 'استخدام أحدث معدات التنظيف العالمية ومنظفات آمنة لضمان بيئة صحية ونظافة تامة.',
  },
  {
    id: 'step-4',
    number: '04',
    icon: 'FaRegCheckCircle',
    title: 'التسليم وضمان الجودة',
    description: 'معاينة شاملة مع العميل وتوفير ضمان الجودة لضمان رضاكم التام.',
  },
]
