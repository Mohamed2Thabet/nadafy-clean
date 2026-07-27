import { ReactNode } from 'react'
import { ThemeProvider } from '@/providers/ThemeProvider'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingContactButtons from './FloatingContactButtons'

interface ClientLayoutProps {
  children: ReactNode
}

/**
 * Client-side layout wrapper component
 * Provides theme context and common layout elements (header, footer, floating buttons)
 */
export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <ThemeProvider>
      <Header />
      <main className="min-h-screen">{children}</main>
      <FloatingContactButtons />
      <Footer />
    </ThemeProvider>
  )
}
