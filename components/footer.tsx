"use client"

import { useTranslations } from 'next-intl'

export function Footer() {
  const t = useTranslations('footer')
  
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground">{t('copyright')}</p>
          <p className="text-sm text-muted-foreground mt-2">
            {t('location')}
          </p>
        </div>
      </div>
    </footer>
  )
}
