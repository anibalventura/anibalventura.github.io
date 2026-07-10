"use client"

import { useTranslations } from "next-intl"
import { BookOpen, Code2, Rocket, Smartphone } from "lucide-react"

export function About() {
  const t = useTranslations("about")
  const highlights = [
    { icon: Code2, title: t("highlights.backend.title"), description: t("highlights.backend.description"), accent: "text-primary" },
    { icon: Smartphone, title: t("highlights.swift.title"), description: t("highlights.swift.description"), accent: "text-[#a99cf8]" },
    { icon: Rocket, title: t("highlights.cleanCode.title"), description: t("highlights.cleanCode.description"), accent: "text-[#ff9770]" },
    { icon: BookOpen, title: t("highlights.learning.title"), description: t("highlights.learning.description"), accent: "text-[#7ad7f0]" },
  ]

  return (
    <section id="about" className="section-shell scroll-mt-24 border-t border-white/8">
      <div className="mx-auto max-w-7xl">
        <div className="section-heading-grid">
          <div>
            <p className="section-kicker"><span>01</span> / {t("title")}</p>
            <h2 className="section-title">{t("displayTitle")}<span className="text-primary">.</span></h2>
          </div>
          <p className="section-lede">{t("subtitle")}</p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-[1.05fr_1.95fr]">
          <article className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 md:p-10">
            <div className="mb-10 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              <span className="size-2 rounded-full bg-primary" />
              {t("philosophy")}
            </div>
            <p className="font-heading text-2xl font-medium leading-snug tracking-[-0.03em] text-foreground md:text-3xl">{t("description")}</p>
            <div className="mt-10 border-t border-white/10 pt-5 font-mono text-xs text-muted-foreground">
              {t("values")}
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <article key={item.title} className="group rounded-3xl border border-white/10 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:bg-white/[0.045] md:p-8">
                <div className="mb-10 flex items-start justify-between">
                  <span className="grid size-11 place-items-center rounded-2xl border border-white/10 bg-black/20">
                    <item.icon className={`size-5 ${item.accent}`} />
                  </span>
                  <span className="font-mono text-[10px] text-white/25">0{index + 1}</span>
                </div>
                <h3 className="font-heading text-xl font-semibold tracking-[-0.025em] text-card-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
