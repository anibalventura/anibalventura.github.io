import type React from "react"
import type { Metadata } from "next"
import { Work_Sans, Open_Sans } from "next/font/google"
import { IntlProvider } from '@/components/providers/intl-provider'
import { DynamicBackground } from '@/components/dynamic-background'
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
  title: "Anibal Ventura - Backend & Swift Developer",
  description: "Backend specialist and Swift/SwiftUI developer from the Dominican Republic. Open to work.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${workSans.variable} ${openSans.variable} antialiased`}>
      <body className="font-sans">
        <DynamicBackground />
        <IntlProvider>
          {children}
        </IntlProvider>
      </body>
    </html>
  )
}
