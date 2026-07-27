'use client'

import { useTheme } from '@/providers/ThemeProvider'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useEffect, useState } from 'react'

/**
 * Theme toggle button component
 * Switches between light and dark mode with icon animation
 */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="p-2 rounded-lg bg-light-bg-tint dark:bg-dark-bg-elevated w-10 h-10" />
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-light-bg-tint dark:bg-dark-bg-elevated text-light-text-primary dark:text-dark-text-primary hover:bg-accent hover:text-white transition-all duration-300"
      aria-label="تبديل الوضع"
    >
      {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
    </button>
  )
}
