import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand Accent Colors
        accent: {
          DEFAULT: '#2196F3',
          hover: '#1976D2',
        },
        orange: {
          DEFAULT: '#F59E0B',
          hover: '#D97706',
        },
        // Light Mode Colors
        light: {
          bg: {
            primary: '#F8FAFC',
            secondary: '#FFFFFF',
            tint: '#EBF5FF',
          },
          text: {
            primary: '#1E293B',
            secondary: '#64748B',
          },
          navy: '#0F3D91',
        },
        // Dark Mode Colors
        dark: {
          bg: {
            primary: '#0B1929',
            secondary: '#0F2744',
            elevated: '#132F57',
          },
          text: {
            primary: '#F1F5F9',
            secondary: '#94A3B8',
          },
        },
      },
      fontFamily: {
        cairo: ['var(--font-cairo)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
