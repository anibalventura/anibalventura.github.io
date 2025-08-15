export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export function getLocaleFromBrowser(): Locale {
  if (typeof window === 'undefined') {
    return defaultLocale;
  }

  try {
    // Get browser language
    const browserLang = navigator.language.toLowerCase();
    
    // Check for exact match first (e.g., 'en', 'es')
    if (locales.includes(browserLang as Locale)) {
      return browserLang as Locale;
    }
    
    // Check for language code only (e.g., 'en-US' -> 'en', 'es-ES' -> 'es')
    const langCode = browserLang.split('-')[0] as Locale;
    if (locales.includes(langCode)) {
      return langCode;
    }
  } catch (error) {
    console.warn('Failed to detect browser language:', error);
  }
  
  // Fall back to default locale
  return defaultLocale;
}

export function getSavedLocale(): Locale | null {
  if (typeof window === 'undefined') {
    return null;
  }
  
  try {
    const saved = localStorage.getItem('preferred-locale') as Locale;
    return saved && locales.includes(saved) ? saved : null;
  } catch (error) {
    console.warn('Failed to read saved locale:', error);
    return null;
  }
}

export async function loadMessages(locale: Locale) {
  try {
    const messages = await import(`../locales/${locale}.json`);
    return messages.default;
  } catch (error) {
    console.warn(`Failed to load messages for locale: ${locale}, falling back to ${defaultLocale}`);
    const fallbackMessages = await import(`../locales/${defaultLocale}.json`);
    return fallbackMessages.default;
  }
}