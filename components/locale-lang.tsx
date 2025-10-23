'use client'

import { useEffect } from 'react'
import { useLocale } from '@/contexts/locale-context'

// Sync the HTML document language attribute with the active locale
export function HtmlLangSync() {
  const { locale } = useLocale()

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale
    }
  }, [locale])

  return null
}

