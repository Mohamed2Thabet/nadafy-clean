import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  fullWidth?: boolean
}

/**
 * Reusable button component with multiple variants and sizes
 * Supports all standard HTML button attributes
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'font-cairo font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2'
  
  const variants = {
    primary: 'bg-accent text-white hover:bg-accent-hover shadow-md hover:shadow-lg',
    secondary: 'bg-light-navy dark:bg-dark-bg-elevated text-white hover:opacity-90',
    outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-white',
    ghost: 'text-light-text-primary dark:text-dark-text-primary hover:bg-light-bg-tint dark:hover:bg-dark-bg-elevated',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  
  const widthClass = fullWidth ? 'w-full' : ''
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
