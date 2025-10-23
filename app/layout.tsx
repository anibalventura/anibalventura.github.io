import type React from "react"
import type { Metadata } from "next"
import { Work_Sans, Open_Sans } from "next/font/google"
import { IntlProvider } from '@/components/providers/intl-provider'
import { DynamicBackground } from '@/components/dynamic-background'
import { HtmlLangSync } from '@/components/locale-lang'
import { TitleSync } from '@/components/title-sync'
import { SkipLink } from '@/components/skip-link'
import { ScrollProgress } from '@/components/scroll-progress'
import { BackToTop } from '@/components/back-to-top'
import "./globals.css"

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
  weight: ["400", "600", "700"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://anibalventura.com'),
  title: "Anibal Ventura - Backend & Apple Developer",
  description: "Backend specialist and Apple developer from the Dominican Republic. Open to work.",
  generator: "v0.app",
  keywords: [
    'Anibal Ventura',
    'Backend Developer',
    'Apple Developer',
    'iOS',
    'Swift',
    'Java',
    'Spring Boot',
    'Node.js',
    'TypeScript'
  ],
  authors: [{ name: 'Anibal Ventura' }],
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Anibal Ventura - Backend & Apple Developer',
    description: 'Backend specialist and Apple developer from the Dominican Republic. Open to work.',
    siteName: 'Anibal Ventura',
    images: [
      {
        url: '/placeholder.jpg',
        width: 1200,
        height: 630,
        alt: 'Anibal Ventura Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anibal Ventura - Backend & Apple Developer',
    description: 'Backend specialist and Apple developer from the Dominican Republic. Open to work.',
    images: ['/placeholder.jpg']
  },
  icons: {
    icon: [
      { url: '/placeholder-logo.png', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${workSans.variable} ${openSans.variable} antialiased`}>
      <body className="font-sans">
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
  )
}
