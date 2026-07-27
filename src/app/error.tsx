'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { FaHome, FaRedo } from 'react-icons/fa'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

/**
 * Error boundary component for handling runtime errors
 * Provides options to retry or return to home page
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="py-32 bg-light-bg-primary dark:bg-dark-bg-primary min-h-screen flex items-center">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-8xl mb-6">⚠️</div>
          <h1 className="text-4xl font-cairo font-bold text-light-text-primary dark:text-dark-text-primary mb-4">
            حدث خطأ ما
          </h1>
          <p className="text-xl font-cairo text-light-text-secondary dark:text-dark-text-secondary mb-8">
            نعتذر عن الإزعاج. حدث خطأ غير متوقع.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={reset}>
              <FaRedo />
              حاول مرة أخرى
            </Button>
            
            <Link href="/">
              <Button variant="outline" size="lg">
                <FaHome />
                العودة للرئيسية
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
