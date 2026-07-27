import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { MdCheck, MdArrowRight } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'

import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { services } from '@/config/services'
import { siteConfig } from '@/config/site'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    return {
      title: 'الخدمة غير موجودة',
    }
  }

  return {
    title: service.title,
    description: service.description,
    keywords: [
      service.title,
      'تنظيف',
      'خدمات تنظيف',
      ...(siteConfig.keywords || []),
    ],
  }
}

export default function ServicePage({ params }: PageProps) {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative py-20 md:py-28 bg-zinc-900 overflow-hidden"
        dir="rtl"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src={service.image || '/images/placeholder.png'}
            alt={service.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-zinc-950/60 to-zinc-950 z-0" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-6 text-sm md:text-base transition"
            >
              <MdArrowRight className="text-xl" />
              العودة للخدمات
            </Link>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {service.title}
            </h1>

            <p className="text-base md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
              {service.description}
            </p>
          </div>
        </Container>
      </section>

      {/* FEATURES SECTION */}
      <section
        className="py-20 bg-white dark:bg-dark-bg-secondary"
        dir="rtl"
      >
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              ماذا تشمل الخدمة؟
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-16">
              {service.features?.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-5 rounded-xl border border-zinc-200 dark:bg-dark-bg-elevated  hover:shadow-md transition"
                >
                  <MdCheck className="text-accent text-xl mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

           {/* ARTICLE SECTION */}
{service.article && (
  <div className="mb-20">
    
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      مقال عن الخدمة
    </h2>

    {/* Article Container */}
    <div className="max-w-3xl mx-auto">
      
      <div className="
        bg-zinc-50 dark:bg-dark-bg-elevated 
        border border-zinc-200 
        rounded-2xl p-6 md:p-10
        shadow-sm
      ">
        
        <div className="
          space-y-6 
          text-base md:text-lg 
          leading-9 
          text-zinc-700 dark:text-zinc-300
          font-medium
        ">
          
          {service.article
            .trim()
            .split('\n')
            .filter((p) => p.trim())
            .map((paragraph, i) => (
              <p
                key={i}
                className="
                  relative pr-4
                  border-r-2 border-accent/40
                  pl-2
                  hover:border-accent
                  transition
                "
              >
                {paragraph}
              </p>
            ))}
        </div>
      </div>
    </div>
  </div>
)}

            {/* CTA */}
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 dark:from-accent/20 dark:to-accent/10 rounded-2xl p-8 md:p-12 text-center border border-accent/20">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                جاهز للبدء؟
              </h3>

              <p className="text-zinc-600 dark:text-zinc-300 mb-8 max-w-xl mx-auto">
                احجز الآن خدمة {service.title} واحصل على أفضل جودة من فريق
                محترف.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="px-8">
                    احجز الخدمة الآن
                  </Button>
                </Link>

                <a
                  href={`${
                    siteConfig?.links?.whatsapp || '#'
                  }?text=أرغب بحجز خدمة: ${service.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex items-center gap-2 px-8"
                  >
                    <FaWhatsapp className="text-green-500 text-lg" />
                    واتساب
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}