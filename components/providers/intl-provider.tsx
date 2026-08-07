'use client';

import { NextIntlClientProvider } from 'next-intl';
import enMessages from '@/locales/en.json';
import { ReactNode, useState, useEffect, useCallback, useRef } from 'react';
import { getLocaleFromBrowser, getSavedLocale, loadMessages, defaultLocale, locales, type Locale, type Messages } from '@/lib/locale';
import { LocaleProvider } from '@/contexts/locale-context';

type Props = {
  children: ReactNode;
};

export function IntlProvider({ children }: Props) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [messages, setMessages] = useState<Messages>(enMessages);
  const localeRequestRef = useRef(0);

  const changeLocale = useCallback(async (newLocale: Locale) => {
    const requestId = ++localeRequestRef.current;

    try {
      const loadedMessages = await loadMessages(newLocale);

      if (requestId !== localeRequestRef.current) {
        return;
      }

      setLocaleState(newLocale);
      setMessages(loadedMessages);
      
      // Save preference to localStorage
      try {
        localStorage.setItem('preferred-locale', newLocale);
      } catch (error) {
        console.warn('Failed to save locale preference:', error);
      }
    } catch (error) {
      if (requestId === localeRequestRef.current) {
        console.error('Failed to change locale:', error);
      }
    }
  }, []);

  useEffect(() => {
    const requestId = ++localeRequestRef.current;
    let active = true;

    const initializeLocale = async () => {
      try {
        // Check for saved preference first
        const savedLocale = getSavedLocale();
        const detectedLocale = savedLocale || getLocaleFromBrowser();

        const loadedMessages = await loadMessages(detectedLocale);

        if (!active || requestId !== localeRequestRef.current) {
          return;
        }

        setLocaleState(detectedLocale);
        setMessages(loadedMessages);
      } catch (error) {
        if (active && requestId === localeRequestRef.current) {
          console.error('Failed to initialize locale:', error);
        }
      }
    };

    void initializeLocale();

    return () => {
      active = false;
      if (requestId === localeRequestRef.current) {
        localeRequestRef.current += 1;
      }
    };
  }, []);

  return (
    <LocaleProvider 
      value={{
        locale,
        setLocale: changeLocale,
        availableLocales: locales
      }}
    >
      <NextIntlClientProvider messages={messages} locale={locale} timeZone="UTC">
        {children}
      </NextIntlClientProvider>
    </LocaleProvider>
  );
}
