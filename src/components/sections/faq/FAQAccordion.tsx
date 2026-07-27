'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import { faqs, faqCategories } from '@/config/faq'

/**
 * FAQ accordion component with category filtering
 * UAE Arabic Cleaning Services positioning
 */
export default function FAQAccordion() {
  const [selectedCategory, setSelectedCategory] = useState('general')
  const [openId, setOpenId] = useState<string | null>(null)

  const filteredFaqs = faqs.filter((faq) => faq.category === selectedCategory)

  return (
    <section className="py-20 bg-light-bg-primary dark:bg-dark-bg-primary">
      <Container>
        <SectionTitle subtitle="إجابات شاملة على كافة تساؤلاتكم حول خدماتنا في جميع أنحاء الإمارات">
          الأسئلة الشائعة
        </SectionTitle>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Category Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-dark-bg-elevated rounded-2xl p-4 sticky top-28 border border-slate-100 dark:border-slate-800 shadow-md">
              <h3 className="font-cairo font-bold text-lg text-slate-900 dark:text-white mb-4 pr-2 border-r-4 border-accent">
                التصنيفات
              </h3>
              <div className="space-y-2">
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id)
                      setOpenId(null)
                    }}
                    className={`
                      w-full text-right px-4 py-3 rounded-xl font-cairo font-bold text-sm transition-all duration-200
                      ${
                        selectedCategory === category.id
                          ? 'bg-gradient-to-r from-[#0F3D91] to-[#2196F3] text-white shadow-md'
                          : 'bg-slate-50 dark:bg-dark-bg-primary text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }
                    `}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ List */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              {filteredFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white dark:bg-dark-bg-elevated rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-slate-100 dark:border-slate-800 transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                    className="w-full text-right p-6 flex items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-dark-bg-primary/50 transition-colors duration-200"
                  >
                    <span className="font-cairo font-bold text-base md:text-lg text-slate-900 dark:text-white">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openId === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaChevronDown className="text-accent flex-shrink-0" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openId === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 border-t border-slate-100 dark:border-slate-800 pt-4">
                          <p className="font-cairo text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
