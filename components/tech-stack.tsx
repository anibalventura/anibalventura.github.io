"use client"

import { useTranslations } from "next-intl"
import { Code2, Server, Wrench } from "lucide-react"

export function TechStack() {
  const t = useTranslations("techStack")
  const categories = [
    {
      title: t("categories.frontend.title"),
      icon: Code2,
      color: "#52b7ff",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Ionic", "React Native", "Swift", "SwiftUI", "HTML5", "CSS3"],
    },
    {
      title: t("categories.backend.title"),
      icon: Server,
      color: "#a99cf8",
      technologies: ["Node.js", "Express.js", "NestJS", "Java", "Spring Boot", "C#", ".NET", "Python", "PostgreSQL", "Oracle DB", "MS SQL", "Docker"],
    },
    {
      title: t("categories.tools.title"),
      icon: Wrench,
      color: "#7ad7f0",
      technologies: ["Firebase", "Xcode", "IntelliJ IDEA", "DataGrip", "VS Code", "Postman", "Insomnia", "Bruno", "Linux"],
    },
  ]

  return (
    <section id="tech-stack" className="section-shell scroll-mt-24 border-t border-white/8 bg-[#081321]">
      <div className="mx-auto max-w-7xl">
        <div className="section-heading-grid">
          <div>
            <p className="section-kicker"><span>02</span> / {t("title")}</p>
            <h2 className="section-title">{t("displayTitle")}<span className="text-primary">.</span></h2>
          </div>
          <p className="section-lede">{t("subtitle")}</p>
        </div>

        <div className="mt-14 grid overflow-hidden rounded-3xl border border-white/10 lg:grid-cols-3">
          {categories.map((category, categoryIndex) => (
            <article key={category.title} className="relative bg-white/[0.018] p-7 lg:min-h-[440px] lg:border-r lg:border-white/10 lg:p-9 lg:last:border-r-0">
              <div className="absolute inset-x-0 top-0 h-px" style={{ backgroundColor: category.color }} />
              <div className="flex items-start justify-between">
                <span className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-black/25" style={{ color: category.color }}>
                  <category.icon className="size-5" />
                </span>
                <span className="font-mono text-[10px] text-white/25">0{categoryIndex + 1}</span>
              </div>
              <h3 className="mt-8 font-heading text-2xl font-semibold tracking-[-0.035em] text-foreground">{category.title}</h3>
              <div className="mt-8 flex flex-wrap gap-2">
                {category.technologies.map((technology) => (
                  <span key={technology} className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 font-mono text-[11px] text-muted-foreground transition-colors hover:border-white/20 hover:text-foreground">
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
