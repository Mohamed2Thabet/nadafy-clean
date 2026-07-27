'use client'

import { FaStar, FaQuoteRight } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import { reviews } from '@/config/reviews'

/**
 * Customer reviews section with carousel slider
 * UAE Arabic Customer Testimonials
 */
export default function ReviewsSection() {
  return (
    <section className="py-20 bg-white dark:bg-dark-bg-secondary overflow-hidden">
      <Container>
        <SectionTitle subtitle="ثقة عملائنا في جميع أنحاء الإمارات هي سر نجاحنا">
          آراء عملاؤنا الكرام
        </SectionTitle>

        {/* Reviews Swiper Slider */}
        <div className="mt-10 review-swiper-container">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            dir="rtl"
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-14"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id} className="h-auto">
                <div className="bg-light-bg-primary dark:bg-dark-bg-elevated rounded-2xl p-7 hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800 hover:border-accent h-full flex flex-col justify-between">
                  <div>
                    {/* Header: Rating & Quote Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <FaStar key={i} className="text-[#F59E0B] text-lg" />
                        ))}
                      </div>
                      <FaQuoteRight className="text-accent/20 text-3xl" />
                    </div>

                    {/* Comment */}
                    <p className="font-cairo text-slate-700 dark:text-slate-200 text-sm leading-relaxed mb-6">
                      &ldquo;{review.comment}&rdquo;
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3.5 pt-4 border-t border-slate-200/80 dark:border-slate-800 mt-auto">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0F3D91] to-[#2196F3] text-white rounded-xl flex items-center justify-center shrink-0 shadow-md font-cairo font-bold text-lg">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-cairo font-bold text-slate-900 dark:text-white text-base">
                        {review.name}
                      </div>
                      <div className="text-xs font-cairo text-accent font-semibold">
                        {review.service}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  )
}