import Link from 'next/link'
import { FaHome } from 'react-icons/fa'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

/**
 * 404 Not Found page component
 * Displayed when a user navigates to a non-existent route
 */
export default function NotFound() {
  return (
    <section className="py-32 bg-light-bg-primary dark:bg-dark-bg-primary min-h-screen flex items-center">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-9xl font-cairo font-bold text-accent mb-6">404</div>
          <h1 className="text-4xl font-cairo font-bold text-light-text-primary dark:text-dark-text-primary mb-4">
            الصفحة غير موجودة
          </h1>
          <p className="text-xl font-cairo text-light-text-secondary dark:text-dark-text-secondary mb-8">
            عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها
          </p>
          <Link href="/">
            <Button size="lg">
              <FaHome />
              العودة للرئيسية
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  )
}
