'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onClick = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
  }

  if (!visible) return null

  return (
    <button
      onClick={onClick}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors p-3"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}

