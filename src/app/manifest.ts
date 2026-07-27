import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

/**
 * Web App Manifest configuration
 * Defines how the app appears when installed on mobile devices
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.nameEn,
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#F8F9FA',
    theme_color: '#00A3AD',
    orientation: 'portrait',
    lang: 'ar',
    dir: 'rtl',
    icons: [
      {
        src: '/images/logo.svg',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/images/logo.svg',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
