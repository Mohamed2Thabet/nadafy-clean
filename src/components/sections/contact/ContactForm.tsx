'use client'

import { useState, FormEvent } from 'react'
import { FaPaperPlane } from 'react-icons/fa'

import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import Textarea from '@/components/ui/Textarea'
import Button from '@/components/ui/Button'

import { services } from '@/config/services'

/**
 * Contact form component
 * UAE phone input (+971) and updated styling
 */
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const serviceOptions = [
    { value: '', label: 'اختر الخدمة' },
    ...services.map((service) => ({
      value: service.title,
      label: service.title,
    })),
  ]

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLSelectElement |
      HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '')
    if (value.length <= 9) {
      setFormData((prev) => ({
        ...prev,
        phone: value,
      }))
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          phone: `+971${formData.phone}`,
        }),
      })

      if (!res.ok) {
        setSubmitStatus('error')
        return
      }

      setSubmitStatus('success')
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: '',
      })
    } catch (error) {
      console.error(error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    }
  }

  return (
    <section className="py-20 bg-white dark:bg-dark-bg-secondary">
      <Container>
        <SectionTitle subtitle="نحن في خدمتكم في جميع أنحاء الإمارات، املأ النموذج وسنتواصل معكم فوراً">
          أرسل طلبك الآن
        </SectionTitle>

        <div className="max-w-2xl mx-auto">
          <div className="bg-light-bg-primary dark:bg-dark-bg-elevated rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-slate-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <Input
                label="الاسم الكامل"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="أدخل اسمك الكامل"
                required
              />

              {/* Phone */}
              <div>
                <label className="block mb-2 font-medium text-sm text-slate-700 dark:text-slate-200 font-cairo">
                  رقم الهاتف
                </label>
                <div className="grid grid-cols-[1fr_90px] gap-3">
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    placeholder="50xxxxxxx"
                    required
                  />
                  <div className="h-[52px] rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-dark-bg-secondary flex items-center justify-center font-bold text-slate-700 dark:text-white dir-ltr text-sm font-cairo">
                    +971
                  </div>
                </div>
              </div>

              {/* Email */}
              <Input
                label="البريد الإلكتروني"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@domain.com"
                required
              />

              {/* Service */}
              <Select
                label="نوع الخدمة"
                name="service"
                value={formData.service}
                onChange={handleChange}
                options={serviceOptions}
                required
              />

              {/* Message */}
              <Textarea
                label="تفاصيل الطلب أو الموقع"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="أخبرنا عن تفاصيل مكانك والموعد المفضل..."
                required
              />

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="p-4 rounded-xl border border-emerald-500 bg-emerald-100 dark:bg-emerald-900/20">
                  <p className="text-center text-emerald-700 dark:text-emerald-300 font-bold font-cairo">
                    ✓ تم إرسال طلبك بنجاح! سنتواصل معك قريباً.
                  </p>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="p-4 rounded-xl border border-rose-500 bg-rose-100 dark:bg-rose-900/20">
                  <p className="text-center text-rose-700 dark:text-rose-300 font-bold font-cairo">
                    حدث خطأ أثناء الإرسال، يرجى المحاولة مرة أخرى.
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                fullWidth
                disabled={isSubmitting}
                className="bg-gradient-to-r from-[#0F3D91] to-[#2196F3] text-white hover:opacity-95 font-bold shadow-lg"
              >
                {isSubmitting ? 'جاري الإرسال...' : 'إرسال الطلب'}
                <FaPaperPlane className="mr-2" />
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}