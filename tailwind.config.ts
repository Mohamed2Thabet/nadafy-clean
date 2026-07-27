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
        // Brand Colors - Matched to Logo (Navy / Sky Blue / Orange / Gold)
        primary: {
          DEFAULT: '#0B1F3A',
          hover: '#081527',
          light: '#16345C',
        },

        secondary: {
          DEFAULT: '#1E88E5',
          hover: '#1669B3',
          light: '#5EB3F5',
        },

        accent: {
          DEFAULT: '#F7941D',
          hover: '#E07C00',
          light: '#FFB74D',
        },

        gold: {
          DEFAULT: '#FFC107',
          hover: '#E5A800',
        },

        success: '#22C55E',
        danger: '#EF4444',

        // Light Theme
        light: {
          bg: {
            primary: '#F8FAFC',
            secondary: '#FFFFFF',
            tint: '#EAF4FF',
          },
          text: {
            primary: '#1F2937',
            secondary: '#6B7280',
          },
          border: '#E5E7EB',
        },

        // Dark Theme
        dark: {
          bg: {
            primary: '#0A1628',
            secondary: '#0E1F38',
            elevated: '#16304F',
          },
          text: {
            primary: '#F8FAFC',
            secondary: '#CBD5E1',
          },
          border: '#22436B',
        },
      },

      fontFamily: {
        cairo: ['var(--font-cairo)', 'sans-serif'],
      },

      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },

      boxShadow: {
        primary: '0 10px 30px rgba(11,31,58,.25)',
        accent: '0 10px 25px rgba(247,148,29,.25)',
      },

      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },

        slideUp: {
          '0%': {
            transform: 'translateY(20px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },

        float: {
          '0%,100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-8px)',
          },
        },

        glow: {
          from: {
            boxShadow: '0 0 8px rgba(255,193,7,.3)',
          },
          to: {
            boxShadow: '0 0 20px rgba(255,193,7,.8)',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config