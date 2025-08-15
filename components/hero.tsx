"use client"

import { useTranslations } from 'next-intl'
import { Button } from "@/components/ui/button"
import { ArrowDown, Mail, Github } from "lucide-react"

export function Hero() {
  const t = useTranslations('hero')
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center gradient-animated dynamic-bg interactive-bg pt-20">
      {/* Floating Particles */}
      <div className="floating-particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
      </div>

      {/* Orbiting Elements */}
      <div className="orbit-container">
        <div className="orbit-slow"></div>
        <div className="orbit-fast"></div>
      </div>

      {/* Sparkle Effects */}
      <div className="sparkle sparkle-1"></div>
      <div className="sparkle sparkle-2"></div>
      <div className="sparkle sparkle-3"></div>
      <div className="sparkle sparkle-4"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="text-lg text-muted-foreground">{t('greeting')}</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6">
            {t('name')}
          </h1>

          <h2 className="text-xl md:text-2xl lg:text-3xl text-primary font-heading font-semibold mb-8">
            {t('title')}
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-4">{t('location')}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-foreground">
              <span className="text-accent">🔭</span>
              <span>{t('status')}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="mr-2 h-4 w-4" />
              {t('getInTouch')}
            </Button>

            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/anibalventura"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Github className="mr-2 h-4 w-4" />
                {t('viewGithub')}
              </a>
            </Button>
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce text-primary hover:text-primary/80 transition-colors"
            aria-label={t('scrollToAbout')}
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
