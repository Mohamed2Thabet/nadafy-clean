import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

/**
 * Container component for consistent page width and padding
 * @param children - Child elements to be wrapped
 * @param className - Additional CSS classes
 */
export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}
