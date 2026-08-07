import type React from 'react';
import type { Metadata } from 'next';
import { IntlProvider } from '@/components/providers/intl-provider';
import { DynamicBackground } from '@/components/dynamic-background';
import { HtmlLangSync } from '@/components/locale-lang';
import { TitleSync } from '@/components/title-sync';
import { SkipLink } from '@/components/skip-link';
import { ScrollProgress } from '@/components/scroll-progress';
import { BackToTop } from '@/components/back-to-top';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://anibalventura.com'),
  title: 'Anibal Ventura - Software Developer',
  description:
    'Software developer from the Dominican Republic building frontend, backend, and mobile applications. Open to work.',
  generator: 'v0.app',
  keywords: [
    'Anibal Ventura',
    'Software Developer',
    'Backend Developer',
    'Frontend Developer',
    'Next.js',
    'React',
    'Ionic',
    'React Native',
    'Tailwind CSS',
    'API Development',
    'C#',
    '.NET',
    'iOS',
    'Swift',
    'SwiftUI',
    'Java',
    'Spring Boot',
    'Node.js',
    'TypeScript',
  ],
  authors: [{ name: 'Anibal Ventura' }],
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Anibal Ventura - Software Developer',
    description:
      'Software developer from the Dominican Republic building frontend, backend, and mobile applications. Open to work.',
    siteName: 'Anibal Ventura',
    images: [
      {
        url: '/placeholder.jpg',
        width: 1200,
        height: 630,
        alt: 'Anibal Ventura Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anibal Ventura - Software Developer',
    description:
      'Software developer from the Dominican Republic building frontend, backend, and mobile applications. Open to work.',
    images: ['/placeholder.jpg'],
  },
  icons: {
    icon: [{ url: '/placeholder-logo.png', type: 'image/png' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className='antialiased'
    >
      <body className='font-sans'>
        <SkipLink />
        <ScrollProgress />
        <DynamicBackground />
        <IntlProvider>
          <HtmlLangSync />
          <TitleSync />
          {children}
        </IntlProvider>
        <BackToTop />
      </body>
    </html>
  );
}
