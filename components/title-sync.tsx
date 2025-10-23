'use client'

import { useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { useLocale } from '@/contexts/locale-context'

// Sync the document title with the active locale using i18n messages
export function TitleSync() {
  const t = useTranslations('site')
  const { locale } = useLocale()

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const title = t('title')
      // Fallback to current document title if key missing
      document.title = title || document.title
    }
  }, [t, locale])

  return null
}

