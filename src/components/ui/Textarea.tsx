import { TextareaHTMLAttributes, forwardRef } from 'react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

/**
 * Styled textarea component with label and error support
 * Uses forwardRef for form library compatibility
 */
const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-cairo font-semibold mb-2 text-light-text-primary dark:text-dark-text-primary">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={`
            w-full px-4 py-3 rounded-lg font-cairo
            bg-white dark:bg-dark-bg-elevated
            border-2 border-gray-200 dark:border-dark-bg-elevated
            text-light-text-primary dark:text-dark-text-primary
            placeholder:text-gray-400 dark:placeholder:text-gray-500
            focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20
            transition-all duration-200
            resize-vertical min-h-[120px]
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

Textarea.displayName = 'Textarea'

export default Textarea
