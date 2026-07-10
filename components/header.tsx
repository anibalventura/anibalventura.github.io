"use client"

import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"

const sectionIds = ["about", "tech-stack", "projects", "contact"] as const

export function Header() {
  const t = useTranslations("navigation")
  const heroT = useTranslations("hero")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  const navigation = [
    { id: "about", label: t("about") },
    { id: "tech-stack", label: t("techStack") },
    { id: "projects", label: t("projects") },
    { id: "contact", label: t("contact") },
  ]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActiveSection(visible.target.id)
      },
      { rootMargin: "-28% 0px -62% 0px", threshold: [0.2, 0.5, 0.8] },
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })
    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-5">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 md:px-5 ${
          isScrolled || isMobileMenuOpen
            ? "border border-white/10 bg-[#07101d]/90 shadow-2xl shadow-black/20 backdrop-blur-xl"
            : "border border-transparent bg-transparent"
        }`}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center gap-3 text-left"
          aria-label="Anibal Ventura — Home"
        >
          <span className="grid size-9 place-items-center rounded-xl border border-primary/30 bg-primary/10 font-heading text-sm font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            AV
          </span>
          <span className="hidden sm:block">
            <span className="block font-heading text-sm font-semibold leading-none text-foreground">Anibal Ventura</span>
            <span className="mt-1 block text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{heroT("title")}</span>
          </span>
        </button>

        <nav aria-label="Primary" className="hidden items-center gap-1 rounded-xl border border-white/8 bg-white/[0.025] p-1 md:flex">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(event) => {
                event.preventDefault()
                scrollToSection(item.id)
              }}
              className={`rounded-lg px-3 py-2 text-xs font-medium transition-all ${
                activeSection === item.id
                  ? "bg-white/10 text-foreground"
                  : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
              }`}
              aria-current={activeSection === item.id ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <LanguageSwitcher />
          <Button
            onClick={() => scrollToSection("contact")}
            className="hidden rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 lg:inline-flex"
          >
            {t("letsTalk")}
            <ArrowUpRight className="ml-1.5 size-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="rounded-xl md:hidden"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav aria-label="Mobile primary" className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-[#07101d]/95 p-3 shadow-2xl backdrop-blur-xl md:hidden">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(event) => {
                event.preventDefault()
                scrollToSection(item.id)
              }}
              className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm transition-colors ${
                activeSection === item.id ? "bg-primary/10 text-primary" : "text-foreground hover:bg-white/5"
              }`}
            >
              {item.label}
              <span aria-hidden className="font-mono text-[10px] text-muted-foreground">0{navigation.findIndex((entry) => entry.id === item.id) + 1}</span>
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
