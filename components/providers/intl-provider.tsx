'use client';

import { NextIntlClientProvider } from 'next-intl';
import { ReactNode, useState, useEffect, useCallback } from 'react';
import { getLocaleFromBrowser, getSavedLocale, loadMessages, defaultLocale, locales, type Locale } from '@/lib/locale';
import { LocaleProvider } from '@/contexts/locale-context';

type Props = {
  children: ReactNode;
};

export function IntlProvider({ children }: Props) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [messages, setMessages] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const changeLocale = useCallback(async (newLocale: Locale) => {
    try {
      setIsLoading(true);
      const loadedMessages = await loadMessages(newLocale);
      setLocaleState(newLocale);
      setMessages(loadedMessages);
      
      // Save preference to localStorage
      try {
        localStorage.setItem('preferred-locale', newLocale);
      } catch (error) {
        console.warn('Failed to save locale preference:', error);
      }
    } catch (error) {
      console.error('Failed to change locale:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const initializeLocale = async () => {
      try {
        // Check for saved preference first
        const savedLocale = getSavedLocale();
        const detectedLocale = savedLocale || getLocaleFromBrowser();
          
        const loadedMessages = await loadMessages(detectedLocale);
        
        setLocaleState(detectedLocale);
        setMessages(loadedMessages);
      } catch (error) {
        console.error('Failed to initialize locale:', error);
        // Fallback to default
        const fallbackMessages = await loadMessages(defaultLocale);
        setLocaleState(defaultLocale);
        setMessages(fallbackMessages);
      } finally {
        setIsLoading(false);
      }
    };

    initializeLocale();
  }, []);

  // Show loading or fallback while messages are being loaded
  if (isLoading || !messages) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <LocaleProvider 
      value={{
        locale,
        setLocale: changeLocale,
        availableLocales: locales
      }}
    >
      <NextIntlClientProvider messages={messages} locale={locale}>
        {children}
      </NextIntlClientProvider>
    </LocaleProvider>
  );
}