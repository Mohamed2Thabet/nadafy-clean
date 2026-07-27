import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import ClientLayout from '@/components/layout/ClientLayout'
import { siteConfig } from '@/config/site'
import "./globals.css"

const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-cairo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.nameEn }],
  creator: siteConfig.nameEn,
  icons: {
    icon: '/images/logo.svg',
    shortcut: '/images/logo.svg',
    apple: '/images/logo.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M9B5MG9Q');
            `,
          }}
        />
      </head>

      <body className="font-cairo bg-light-bg-primary dark:bg-dark-bg-primary text-light-text-primary dark:text-dark-text-primary antialiased">

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M9B5MG9Q"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}