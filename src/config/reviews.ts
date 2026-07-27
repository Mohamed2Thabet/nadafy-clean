/**
 * Customer Reviews Configuration
 * Testimonials and customer feedback data
 */

import type { Review } from '@/types'

/**
 * Customer reviews and testimonials
 * Displayed on homepage and reviews section
 */
export const reviews: Review[] = [
  {
    id: '1',
    name: 'أحمد المنصوري',
    location: 'الإمارات',
    rating: 5,
    comment:
      'خدمة تنظيف فلل ممتازة واحترافية عالية. الفريق منظم ومحترم والنتيجة فاقت كل التوقعات. أنصح بشدة بالتعامل معهم.',
    service: 'تنظيف الفلل',
    date: '2025-06-15',
  },
  {
    id: '2',
    name: 'فاطمة الكعبي',
    location: 'الإمارات',
    rating: 5,
    comment:
      'تجربة رائعة في تنظيف الكنب! أصبح كأنه جديد تماماً. الفريق دقيق في المواعيد ومحترف جداً في العمل.',
    service: 'تنظيف الكنب',
    date: '2025-06-10',
  },
  {
    id: '3',
    name: 'محمد الهاشمي',
    location: 'الإمارات',
    rating: 5,
    comment: 'أفضل شركة تنظيف تعاملت معها في الإمارات. الأسعار معقولة والجودة عالية جداً. شكراً لكم على الخدمة المتميزة.',
    service: 'التنظيف العميق',
    date: '2025-05-28',
  },
  {
    id: '4',
    name: 'مريم العامري',
    location: 'الإمارات',
    rating: 5,
    comment:
      'خدمة التعقيم كانت شاملة وممتازة. أشعر بالأمان والراحة في منزلي الآن. فريق عمل محترف ومواد تعقيم عالية الجودة.',
    service: 'التعقيم والتطهير',
    date: '2025-05-20',
  },
  {
    id: '5',
    name: 'سعيد المزروعي',
    location: 'الإمارات',
    rating: 5,
    comment: 'تنظيف السجاد عندهم احترافي جداً. السجاد رجع يلمع كأنه جديد. ما شاء الله عليهم. سأكرر التجربة بالتأكيد.',
    service: 'تنظيف السجاد',
    date: '2025-05-15',
  },
]
