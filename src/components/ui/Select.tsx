import { SelectHTMLAttributes, forwardRef } from 'react'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  options: { value: string; label: string }[]
}

/**
 * Styled select dropdown component with label and error support
 * Uses forwardRef for form library compatibility
 */
const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-cairo font-semibold mb-2 text-light-text-primary dark:text-dark-text-primary">
            {label}
          </label>
        )}
        <select
          ref={ref}
          className={`
            w-full px-4 py-3 rounded-lg font-cairo
            bg-white dark:bg-dark-bg-elevated
            border-2 border-gray-200 dark:border-dark-bg-elevated
            text-light-text-primary dark:text-dark-text-primary
            focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20
            transition-all duration-200
            cursor-pointer
            ${error ? 'border-red-500' : ''}
            ${className}
          `}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="mt-1 text-sm text-red-500 font-cairo">{error}</p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'

export default Select
