"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { MdChevronLeft } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { services } from "@/config/services";
import { siteConfig } from "@/config/site";

import "swiper/css";
import "swiper/css/navigation";
import Button from "@/components/ui/Button";

/**
 * Services section with carousel slider
 * Displays the 15 Arabic cleaning services
 */
export default function ServicesSection() {
  return (
    <section
      className="w-full py-20 px-4 md:px-8 bg-white dark:bg-dark-bg-secondary overflow-hidden"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 bg-[#F59E0B]/10 text-[#D97706] dark:text-[#F59E0B] rounded-md text-xs font-cairo font-bold mb-3">
              خدمات احترافية متكاملة
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight font-cairo">
              خدماتنا في جميع أنحاء الإمارات
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed mt-3 font-cairo">
              نقدم مجموعة واسعة ومتخصصة من خدمات التنظيف والتعقيم ومكافحة الحشرات للمنازل والفلل والمكاتب في جميع إمارات الدولة.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-accent font-bold text-sm hover:underline shrink-0 group transition-all duration-300 font-cairo"
          >
            عرض كافة الخدمات الـ 15
            <span className="transform group-hover:-translate-x-1 transition-transform">
              ←
            </span>
          </Link>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
          className="services-swiper !pb-4"
        >
          {services.map((service) => (
            <SwiperSlide key={service.id} className="h-full">
              <Link href={`/services/${service.slug}`} className="block h-full">
                <div className="bg-light-bg-primary dark:bg-dark-bg-elevated rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:border-accent hover:shadow-2xl transition-all duration-300 h-full flex flex-col group cursor-pointer">
                  {/* Image */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-accent transition-colors duration-300 font-cairo text-right">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 text-xs md:text-sm leading-relaxed mb-6 text-right line-clamp-3 font-cairo">
                      {service.description}
                    </p>

                    <div className="mt-auto space-y-2">
                      <button
                        type="button"
                        className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#0F3D91] to-[#2196F3] text-white font-bold text-xs md:text-sm transition-all duration-300 hover:opacity-95 shadow-md font-cairo"
                      >
                        التفاصيل والحجز
                        <MdChevronLeft className="text-lg" />
                      </button>

                      <a
                        href={`${siteConfig.links.whatsapp}?text=أرغب بالاستفسار عن خدمة: ${service.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="block"
                      >
                        <Button variant="outline" size="sm" fullWidth className="gap-2 border-emerald-500/40 text-emerald-600 dark:text-emerald-400 font-bold">
                          <FaWhatsapp className="text-base text-emerald-500" />
                          استفسار سريع
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
