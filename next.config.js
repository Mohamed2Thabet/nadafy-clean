/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  // Enable compression
  compress: true,
  // Optimize production builds
  swcMinify: true,
  // Enable experimental features
  experimental: {
    optimizePackageImports: ['react-icons'],
  },
}

module.exports = nextConfig
