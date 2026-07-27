'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaBars, FaTimes, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import ThemeToggle from '@/components/ui/ThemeToggle'
import { navLinks, siteConfig } from '@/config/site'

/**
 * Header component with logo, navigation, theme toggle, and mobile menu
 * Premium design with brand dark blue / blue / orange styling
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-dark-bg-secondary/95 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 shadow-sm">
      <Container>
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-40 h-16 transition-transform hover:scale-105">
              <Image
                src="/images/logo.svg"
                alt="نداء النظافة - Nadafy Clean"
                fill
                priority
                className="object-contain object-right"
              />
            </div>
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-cairo font-semibold text-slate-700 dark:text-slate-200 hover:text-accent dark:hover:text-accent transition-colors py-2 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            
            <a
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex"
            >
              <Button variant="outline" size="sm" className="gap-2 border-emerald-500/40 text-emerald-600 hover:bg-emerald-500 hover:text-white dark:text-emerald-400">
                <FaWhatsapp size={18} />
                واتساب
              </Button>
            </a>

            <Link href="/contact" className="hidden md:block">
              <Button size="sm" className="gap-2 bg-gradient-to-r from-[#0F3D91] to-[#2196F3] text-white hover:opacity-95 shadow-md">
                <FaPhoneAlt size={14} />
                احجز الآن
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 dark:text-slate-200 hover:text-accent"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200 dark:border-slate-800 animate-slide-up">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-cairo font-medium text-slate-700 dark:text-slate-200 hover:text-accent transition-colors py-2 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-dark-bg-elevated"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-slate-200 dark:border-slate-800">
                <a href={siteConfig.links.whatsapp} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="md" fullWidth className="gap-2 border-emerald-500 text-emerald-600 dark:text-emerald-400">
                    <FaWhatsapp size={18} />
                    واتساب
                  </Button>
                </a>
                <Link href="/contact">
                  <Button size="md" fullWidth className="bg-gradient-to-r from-[#0F3D91] to-[#2196F3] text-white">
                    احجز الآن
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  )
}