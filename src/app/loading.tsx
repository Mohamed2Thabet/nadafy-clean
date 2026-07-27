import Container from '@/components/ui/Container'

/**
 * Loading component displayed during page transitions
 * Shows a spinner with loading text in Arabic
 */
export default function Loading() {
  return (
    <section className="py-32 bg-light-bg-primary dark:bg-dark-bg-primary min-h-screen flex items-center justify-center">
      <Container>
        <div className="text-center">
          <div className="inline-block w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="font-cairo text-light-text-secondary dark:text-dark-text-secondary text-lg">
            جاري التحميل...
          </p>
        </div>
      </Container>
    </section>
  )
}
