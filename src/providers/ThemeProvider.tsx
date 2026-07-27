'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

/**
 * Theme provider component that manages light/dark mode state
 * Persists theme preference to localStorage and syncs with system preference
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Mark as mounted
    setMounted(true)
    
    // Get theme from localStorage or system preference
    try {
      const savedTheme = localStorage.getItem('theme') as Theme | null
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      
      const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light')
      setTheme(initialTheme)
      
      // Apply theme class
      if (initialTheme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    } catch (error) {
      console.error('Error loading theme:', error)
    }
  }, [])

  const toggleTheme = () => {
    try {
      const newTheme = theme === 'light' ? 'dark' : 'light'
      setTheme(newTheme)
      localStorage.setItem('theme', newTheme)
      
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    } catch (error) {
      console.error('Error toggling theme:', error)
    }
  }

  // Always render children, but context will be available after mount
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

/**
 * Hook to access theme context
 * Must be used within ThemeProvider
 * @throws Error if used outside ThemeProvider
 */
export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
