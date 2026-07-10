"use client"

import { useTranslations } from "next-intl"
import { Code2, Database, Server, ShieldCheck, Workflow } from "lucide-react"

export function TechStack() {
  const t = useTranslations("techStack")
  const categories = [
    {
      title: t("categories.frontend.title"),
      icon: Code2,
      color: "#52b7ff",
      technologies: [
        "Next.js", "React", "TypeScript", "Tailwind CSS", "React Native", "Ionic", "Flutter", "Dart",
        "Kotlin", "Android Jetpack", "Coroutines", "Room", "Swift", "SwiftUI", "SwiftData", "WidgetKit",
      ],
    },
    {
      title: t("categories.backend.title"),
      icon: Server,
      color: "#a99cf8",
      technologies: [
        "Node.js", "Express.js", "NestJS", "Java", "Spring Boot", "Spring Security", "JWT", "Swagger / OpenAPI",
        "C#", "ASP.NET Core", ".NET", "Python",
      ],
    },
    {
      title: t("categories.integration.title"),
      icon: Workflow,
      color: "#ff9770",
      technologies: [
        "IBM App Connect Enterprise", "Microservices", "REST APIs", "CyberSource", "Docker", "Git", "Azure DevOps", "Argo CD", "Linux",
      ],
    },
    {
      title: t("categories.data.title"),
      icon: Database,
      color: "#7ad7f0",
      technologies: [
        "PostgreSQL", "Oracle Database", "MS SQL", "MySQL", "Firebase", "Xcode", "Android Studio", "IntelliJ IDEA",
        "DataGrip", "VS Code", "Figma", "Postman", "Insomnia", "Bruno", "Bootstrap",
      ],
    },
  ]

  const practices = [
    t("engineering.microservices"),
    t("engineering.apiIntegration"),
    t("engineering.testing"),
    t("engineering.security"),
    t("engineering.architecture"),
    t("engineering.quality"),
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

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {categories.map((category, categoryIndex) => (
            <article key={category.title} className="relative min-h-[360px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.018] p-7 md:p-9">
              <div className="absolute inset-x-0 top-0 h-px" style={{ backgroundColor: category.color }} />
              <div className="flex items-start justify-between">
                <span className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-black/25" style={{ color: category.color }}>
                  <category.icon className="size-5" />
                </span>
                <span className="font-mono text-[10px] text-white/25">0{categoryIndex + 1}</span>
              </div>
              <h3 className="mt-8 font-heading text-2xl font-semibold tracking-[-0.035em] text-foreground">{category.title}</h3>
              <div className="mt-7 flex flex-wrap gap-2">
                {category.technologies.map((technology) => (
                  <span key={technology} className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 font-mono text-[11px] text-muted-foreground transition-colors hover:border-white/20 hover:text-foreground">
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <aside className="mt-4 grid gap-6 rounded-3xl border border-primary/15 bg-primary/[0.045] p-7 md:grid-cols-[0.65fr_1.35fr] md:items-center md:p-9">
          <div>
            <span className="grid size-11 place-items-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
              <ShieldCheck className="size-5" />
            </span>
            <h3 className="mt-5 font-heading text-2xl font-semibold tracking-[-0.035em] text-foreground">{t("engineering.title")}</h3>
            <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">{t("engineering.description")}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {practices.map((practice) => (
              <span key={practice} className="rounded-xl border border-primary/20 bg-primary/[0.08] px-3 py-2 font-mono text-[11px] text-primary">
                {practice}
              </span>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}
