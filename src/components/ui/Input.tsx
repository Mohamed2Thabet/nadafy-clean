import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

/**
 * Styled input component with label and error message support
 * Uses forwardRef for form library compatibility
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-cairo font-semibold mb-2 text-light-text-primary dark:text-dark-text-primary">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`
            w-full px-4 py-3 rounded-lg font-cairo
            bg-white dark:bg-dark-bg-elevated
            border-2 border-gray-200 dark:border-dark-bg-elevated
            text-light-text-primary dark:text-dark-text-primary
            placeholder:text-gray-400 dark:placeholder:text-gray-500
            focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20
            transition-all duration-200
            ${error ? 'border-red-500' : ''}
            ${className}
          `}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-500 font-cairo">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
