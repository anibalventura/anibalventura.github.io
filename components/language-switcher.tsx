'use client';

import { useState } from 'react';
import { useLocale } from '@/contexts/locale-context';
import { Button } from '@/components/ui/button';
import { ChevronDown, Globe } from 'lucide-react';

const localeNames = {
  en: 'English',
  es: 'Español'
} as const;

export function LanguageSwitcher() {
  const { locale, setLocale, availableLocales } = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const handleLocaleChange = (newLocale: typeof locale) => {
    setLocale(newLocale);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-foreground hover:text-primary"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{localeNames[locale]}</span>
        <span className="sm:hidden">{locale.toUpperCase()}</span>
        <ChevronDown className="h-3 w-3" />
      </Button>
      
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-2 z-20 min-w-[120px] rounded-md border border-border bg-background shadow-lg">
            {availableLocales.map((localeOption) => (
              <button
                key={localeOption}
                onClick={() => handleLocaleChange(localeOption)}
                className={`w-full px-3 py-2 text-left text-sm hover:bg-secondary transition-colors flex items-center gap-2 ${
                  locale === localeOption ? 'bg-secondary/50' : ''
                }`}
              >
                <span>{localeNames[localeOption]}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}