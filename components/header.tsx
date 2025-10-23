"use client"

import { useState, useEffect } from "react"
import { useTranslations } from 'next-intl'
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Menu, X } from "lucide-react"

export function Header() {
  const t = useTranslations('navigation')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Observe section visibility to highlight active item
  useEffect(() => {
    const sections = [
      { id: 'about' },
      { id: 'tech-stack' },
      { id: 'contact' },
    ]
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) {
          setActiveSection(visible.target.id)
        }
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: [0.25, 0.5, 0.75] }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-heading font-bold text-primary">Anibal Ventura</h1>

          {/* Desktop Navigation */}
          <nav aria-label="Primary" className="hidden md:flex items-center space-x-6">
            <a
              href="#about"
              onClick={(e) => { e.preventDefault(); scrollToSection('about') }}
              className={`text-foreground hover:text-primary transition-colors ${activeSection === 'about' ? 'text-primary font-semibold' : ''}`}
              aria-current={activeSection === 'about' ? 'page' : undefined}
            >
              {t('about')}
            </a>
            <a
              href="#tech-stack"
              onClick={(e) => { e.preventDefault(); scrollToSection('tech-stack') }}
              className={`text-foreground hover:text-primary transition-colors ${activeSection === 'tech-stack' ? 'text-primary font-semibold' : ''}`}
              aria-current={activeSection === 'tech-stack' ? 'page' : undefined}
            >
              {t('techStack')}
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}
              className={`text-foreground hover:text-primary transition-colors ${activeSection === 'contact' ? 'text-primary font-semibold' : ''}`}
              aria-current={activeSection === 'contact' ? 'page' : undefined}
            >
              {t('contact')}
            </a>
            <Button onClick={() => scrollToSection("contact")} className="bg-primary hover:bg-primary/90">
              {t('letsTalk')}
            </Button>
            <LanguageSwitcher />
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav aria-label="Primary" className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#about"
                onClick={(e) => { e.preventDefault(); scrollToSection('about') }}
                className={`text-left text-foreground hover:text-primary transition-colors ${activeSection === 'about' ? 'text-primary font-semibold' : ''}`}
                aria-current={activeSection === 'about' ? 'page' : undefined}
              >
                {t('about')}
              </a>
              <a
                href="#tech-stack"
                onClick={(e) => { e.preventDefault(); scrollToSection('tech-stack') }}
                className={`text-left text-foreground hover:text-primary transition-colors ${activeSection === 'tech-stack' ? 'text-primary font-semibold' : ''}`}
                aria-current={activeSection === 'tech-stack' ? 'page' : undefined}
              >
                {t('techStack')}
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}
                className={`text-left text-foreground hover:text-primary transition-colors ${activeSection === 'contact' ? 'text-primary font-semibold' : ''}`}
                aria-current={activeSection === 'contact' ? 'page' : undefined}
              >
                {t('contact')}
              </a>
              <Button onClick={() => scrollToSection("contact")} className="bg-primary hover:bg-primary/90 w-fit">
                {t('letsTalk')}
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
