'use client'

import { useEffect, useRef, useState } from 'react'

interface StatCounterProps {
  target: number
  duration?: number
}

/**
 * Animated counter component that counts up to a target number
 * Triggers animation when element enters viewport
 */
export default function StatCounter({
  target,
  duration = 2000,
}: StatCounterProps) {
  const [count, setCount] = useState(0)
  const elementRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          let start = 0
          const increment = target / (duration / 16)
          const timer = setInterval(() => {
            start += increment

            if (start >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
        }
      },
      {
        threshold: 0.1,
      }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [target, duration])

  return <div ref={elementRef}>{count}</div>
}