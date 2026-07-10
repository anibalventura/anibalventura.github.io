"use client"

import { useTranslations } from "next-intl"
import { ArrowDown, ArrowUpRight, Briefcase, Github, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const codeLines = [
  ["const", " developer", " =", " {"],
  ["  focus:", " [\"web\", \"mobile\", \"APIs\"],"],
  ["  values:", " [\"clean code\", \"craft\"],"],
  ["  location:", " \"Dominican Republic\","],
  ["  available:", " true"],
  ["}"],
]

export function Hero() {
  const t = useTranslations("hero")

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="hero-grid relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-32 md:px-8 md:pt-36">
      <div className="hero-glow" aria-hidden />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-20">
        <div className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.07] px-3 py-1.5 text-xs font-medium text-primary">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            {t("status")}
          </div>

          <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">{t("greeting")}</p>
          <h1 className="max-w-4xl font-heading text-[clamp(3.8rem,10vw,8.5rem)] font-bold leading-[0.82] tracking-[-0.075em] text-foreground">
            Anibal<span className="text-primary">.</span>
          </h1>
          <h2 className="mt-6 max-w-3xl font-heading text-2xl font-semibold leading-tight tracking-[-0.035em] text-foreground sm:text-3xl md:text-5xl">
            {t("title")} <span className="text-muted-foreground">{t("titleAccent")}</span>
          </h2>
          <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground md:text-base">
            <MapPin className="size-4 text-primary" />
            {t("location")}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" onClick={() => scrollToSection("contact")} className="h-12 rounded-xl bg-primary px-6 text-primary-foreground hover:bg-primary/90">
              <Mail className="mr-2 size-4" />
              {t("getInTouch")}
              <ArrowUpRight className="ml-2 size-4" />
            </Button>
            <Button variant="outline" size="lg" asChild className="h-12 rounded-xl border-white/10 bg-white/[0.03] px-6 hover:bg-white/[0.07]">
              <a href="https://github.com/anibalventura" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 size-4" />
                {t("viewGithub")}
              </a>
            </Button>
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-lg lg:mx-0">
          <div className="code-window overflow-hidden rounded-3xl border border-white/10 bg-[#081321]/90 shadow-[0_30px_100px_rgba(0,0,0,.45)] backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
              <div className="flex gap-1.5" aria-hidden>
                <span className="size-2.5 rounded-full bg-[#ff6b6b]" />
                <span className="size-2.5 rounded-full bg-[#ffd166]" />
                <span className="size-2.5 rounded-full bg-primary" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">profile.ts</span>
              <span className="size-6" />
            </div>
            <div className="space-y-3 px-6 py-8 font-mono text-xs leading-relaxed sm:px-8 sm:text-sm">
              {codeLines.map((parts, lineIndex) => (
                <div key={lineIndex} className="grid grid-cols-[1.5rem_1fr] gap-3">
                  <span className="select-none text-right text-white/20">{lineIndex + 1}</span>
                  <span>
                    {parts.map((part, index) => (
                      <span key={index} className={index === 0 ? "text-[#a99cf8]" : index === 1 ? "text-[#52b7ff]" : "text-[#dce8f5]"}>
                        {part}
                      </span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 border-t border-white/8">
              <div className="border-r border-white/8 p-5">
                <Briefcase className="mb-3 size-4 text-primary" />
                <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{t("currentMode")}</p>
                <p className="mt-1 text-sm font-medium text-foreground">{t("openToCollaborate")}</p>
              </div>
              <div className="p-5">
                <span className="mb-3 block font-mono text-base leading-none text-[#a99cf8]">+∞</span>
                <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{t("curiosity")}</p>
                <p className="mt-1 text-sm font-medium text-foreground">{t("alwaysLearning")}</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -right-3 -z-10 h-40 w-40 rounded-full bg-primary/15 blur-3xl" aria-hidden />
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary md:flex"
        aria-label={t("scrollToAbout")}
      >
        {t("scroll")}
        <ArrowDown className="size-3.5 animate-bounce" />
      </button>
    </section>
  )
}
