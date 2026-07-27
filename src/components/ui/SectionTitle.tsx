import { ReactNode } from 'react'

interface SectionTitleProps {
  children: ReactNode
  subtitle?: string
  centered?: boolean
  className?: string
}

/**
 * Section title component with optional subtitle
 * Used for consistent heading styles across sections
 */
export default function SectionTitle({
  children,
  subtitle,
  centered = true,
  className = '',
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-cairo font-bold text-light-text-primary dark:text-dark-text-primary mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary font-cairo max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
