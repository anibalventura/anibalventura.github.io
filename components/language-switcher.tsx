'use client';

import { useCallback, useEffect, useId, useRef, useState, type KeyboardEvent } from 'react';
import { useTranslations } from 'next-intl';
import { useLocale } from '@/contexts/locale-context';
import { Button } from '@/components/ui/button';
import { ChevronDown, Globe } from 'lucide-react';
import type { Locale } from '@/lib/locale';

const localeNames = {
  en: 'English',
  es: 'Español',
} as const;

export function LanguageSwitcher() {
  const { locale, setLocale, availableLocales } = useLocale();
  const t = useTranslations('accessibility');
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuItemRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const menuId = useId();

  const closeMenu = useCallback((restoreFocus = true) => {
    setIsOpen(false);
    if (restoreFocus) {
      requestAnimationFrame(() => triggerRef.current?.focus());
    }
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const frame = requestAnimationFrame(() => {
      const currentIndex = availableLocales.indexOf(locale);
      menuItemRefs.current[currentIndex >= 0 ? currentIndex : 0]?.focus();
    });

    const handleDocumentKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeMenu();
      } else if (event.key === 'Tab') {
        closeMenu(false);
      }
    };

    document.addEventListener('keydown', handleDocumentKeyDown);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('keydown', handleDocumentKeyDown);
    };
  }, [availableLocales, closeMenu, isOpen, locale]);

  const handleLocaleChange = (newLocale: Locale) => {
    setLocale(newLocale);
    closeMenu();
  };

  const handleMenuKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = availableLocales.indexOf(locale);
    let nextIndex: number | null = null;

    if (event.key === 'ArrowDown') {
      nextIndex = (currentIndex + 1) % availableLocales.length;
    } else if (event.key === 'ArrowUp') {
      nextIndex = (currentIndex - 1 + availableLocales.length) % availableLocales.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = availableLocales.length - 1;
    } else if (event.key === 'Enter' || event.key === ' ') {
      const focusedItem = document.activeElement;
      const focusedIndex = menuItemRefs.current.findIndex((item) => item === focusedItem);
      if (focusedIndex >= 0) {
        event.preventDefault();
        handleLocaleChange(availableLocales[focusedIndex]);
      }
      return;
    }

    if (nextIndex !== null) {
      event.preventDefault();
      menuItemRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <div className='relative'>
      <Button
        ref={triggerRef}
        variant='ghost'
        size='sm'
        onClick={() => (isOpen ? closeMenu() : setIsOpen(true))}
        className='flex items-center gap-2 text-foreground hover:text-primary'
        aria-label={t('languageMenu')}
        aria-haspopup='menu'
        aria-expanded={isOpen}
        aria-controls={menuId}
      >
        <Globe className='h-4 w-4' aria-hidden='true' />
        <span className='hidden sm:inline'>{localeNames[locale]}</span>
        <span className='sm:hidden'>{locale.toUpperCase()}</span>
        <ChevronDown className='h-3 w-3' aria-hidden='true' />
      </Button>

      {isOpen && (
        <>
          <div
            className='fixed inset-0 z-10'
            aria-hidden='true'
            onClick={() => closeMenu()}
          />

          <div
            id={menuId}
            role='menu'
            aria-label={t('languageMenu')}
            onKeyDown={handleMenuKeyDown}
            className='absolute right-0 top-full z-20 mt-2 min-w-[120px] rounded-md border border-border bg-background p-1 shadow-lg'
          >
            {availableLocales.map((localeOption, index) => (
              <button
                key={localeOption}
                ref={(element) => {
                  menuItemRefs.current[index] = element;
                }}
                type='button'
                role='menuitemradio'
                aria-checked={locale === localeOption}
                tabIndex={locale === localeOption ? 0 : -1}
                onClick={() => handleLocaleChange(localeOption)}
                className={`flex w-full items-center gap-2 rounded-sm px-3 py-2 text-left text-sm transition-colors hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none ${
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
