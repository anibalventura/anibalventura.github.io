'use client';

import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';
import messages from '@/locales/en.json';

type Props = {
  children: ReactNode;
};

export function IntlProvider({ children }: Props) {
  return (
    <NextIntlClientProvider messages={messages} locale="en">
      {children}
    </NextIntlClientProvider>
  );
}