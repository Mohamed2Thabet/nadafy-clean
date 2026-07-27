"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MdCheck, MdArrowLeft } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { services } from "@/config/services";
import { siteConfig } from "@/config/site";

/**
 * Services grid component displaying all 15 services with feature lists
 */
export default function ServicesGrid() {
  if (!services || services.length === 0) {
    return null;
  }

  return (
    <section
      className="py-20 bg-light-bg-primary dark:bg-dark-bg-primary"
      dir="rtl"
    >
      <Container>
        <SectionTitle subtitle="نقدم خدمات تنظيف احترافية في جميع إمارات الدولة بأعلى معايير الجودة">
          جميع خدماتنا الاحترافية
        </SectionTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group block bg-white dark:bg-dark-bg-elevated rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-100 dark:border-slate-800 transition-all duration-300 flex flex-col h-full cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <Image
                  src={service.image || "/images/placeholder.png"}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-cairo font-bold text-xl text-slate-900 dark:text-white mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>

                <p className="font-cairo text-slate-600 dark:text-slate-300 mb-6 text-xs md:text-sm leading-relaxed line-clamp-2">
                  {service.description}
                </p>

                {/* Features list */}
                {service.features && service.features.length > 0 && (
                  <ul className="space-y-2.5 mb-6 flex-grow border-t border-slate-100 dark:border-slate-800/80 pt-4">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <MdCheck className="text-accent text-lg mt-0.5 shrink-0" />
                        <span className="font-cairo text-slate-700 dark:text-slate-300 text-xs leading-tight">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Buttons */}
                <div className="flex flex-col gap-2 mt-auto">
                  <Link href="/contact" onClick={(e) => e.stopPropagation()}>
                    <Button
                      variant="primary"
                      size="md"
                      fullWidth
                      className="font-cairo font-bold flex items-center justify-center gap-1 bg-gradient-to-r from-[#0F3D91] to-[#2196F3] text-white hover:opacity-95 shadow-md"
                    >
                      التفاصيل والحجز
                      <MdArrowLeft className="text-xl" />
                    </Button>
                  </Link>

                  <a
                    href={`${siteConfig?.links?.whatsapp || "#"}?text=أرغب بالاستفسار عن خدمة: ${service.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Button
                      variant="outline"
                      size="md"
                      fullWidth
                      className="font-cairo font-bold flex items-center justify-center gap-2 border-emerald-500/40 text-emerald-600 dark:text-emerald-400"
                    >
                      <FaWhatsapp className="text-emerald-500 text-base" />
                      استفسار عبر واتساب
                    </Button>
                  </a>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
