"use client"

import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import { ArrowUpRight, Code, Github, Star } from "lucide-react"
import { FEATURED, GITHUB_USER } from "@/data/featured-projects"

type RepoInfo = {
  full_name: string
  name: string
  description: string | null
  html_url: string
  stargazers_count?: number
  language?: string | null
}

type DisplayRepo = RepoInfo & { key: string }

export function Projects() {
  const t = useTranslations("projects")
  const [repos, setRepos] = useState<DisplayRepo[] | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    async function load() {
      try {
        if (GITHUB_USER) {
          try {
            const response = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated&direction=desc`, {
              headers: { Accept: "application/vnd.github+json" },
            })
            if (response.ok) {
              const all = (await response.json()) as Array<RepoInfo & { fork?: boolean; archived?: boolean; pushed_at?: string }>
              const topThree = all
                .filter((repo) => !repo.fork && !repo.archived)
                .sort((a, b) => Date.parse(b.pushed_at ?? "") - Date.parse(a.pushed_at ?? ""))
                .slice(0, 3)
              if (!cancelled && topThree.length) {
                setRepos(topThree.map((repo) => ({ ...repo, key: repo.full_name })))
                return
              }
            }
          } catch {
            // The curated list below keeps the portfolio useful when GitHub is unavailable.
          }
        }

        const fallback = FEATURED.map((entry) => ({
          key: entry.slug ?? entry.title,
          full_name: entry.slug ?? entry.title,
          name: entry.title || entry.slug?.split("/")[1] || "Project",
          description: entry.description,
          html_url: entry.url,
          language: entry.language,
        }))
        if (!cancelled) setRepos(fallback)
      } catch (reason) {
        if (!cancelled) setError(reason instanceof Error ? reason.message : "Failed to load projects")
      }
    }
    load()
    return () => { cancelled = true }
  }, [])

  const displayItems = repos ?? Array.from({ length: 3 }, (_, index) => null as DisplayRepo | null)

  return (
    <section id="projects" className="section-shell scroll-mt-24 border-t border-white/8">
      <div className="mx-auto max-w-7xl">
        <div className="section-heading-grid">
          <div>
            <p className="section-kicker"><span>04</span> / {t("title")}</p>
            <h2 className="section-title">{t("displayTitle")}<span className="text-primary">.</span></h2>
          </div>
          <p className="section-lede">{t("subtitle")}</p>
        </div>

        {error && <p role="status" className="mt-8 text-sm text-destructive">{t("error")}</p>}

        <div className="mt-14 overflow-hidden rounded-3xl border border-white/10">
          {displayItems.map((repo, index) => (
            <article key={repo?.key ?? index} className="group border-b border-white/10 bg-card last:border-b-0">
              {repo ? (
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="grid gap-6 p-6 transition-colors hover:bg-white/[0.035] md:grid-cols-[4rem_1fr_auto] md:items-center md:p-9" aria-label={`${t("viewRepo")} ${repo.full_name}`}>
                  <span className="font-mono text-xs text-white/25">0{index + 1}</span>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <Github className="size-5 text-primary" />
                      <h3 className="font-heading text-2xl font-semibold tracking-[-0.035em] text-foreground md:text-3xl">{repo.name}</h3>
                    </div>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">{repo.description || t("noDescription")}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {repo.language && <span className="project-tag"><Code className="size-3" />{repo.language}</span>}
                      {typeof repo.stargazers_count === "number" && <span className="project-tag"><Star className="size-3" />{repo.stargazers_count}</span>}
                    </div>
                  </div>
                  <span className="grid size-12 place-items-center rounded-full border border-white/10 text-muted-foreground transition-all group-hover:border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="size-5" />
                  </span>
                </a>
              ) : (
                <div className="grid animate-pulse gap-6 p-6 md:grid-cols-[4rem_1fr_auto] md:items-center md:p-9">
                  <span className="h-3 w-5 rounded bg-muted" />
                  <div><div className="h-7 w-48 rounded bg-muted" /><div className="mt-4 h-4 max-w-xl rounded bg-muted" /></div>
                  <span className="size-12 rounded-full bg-muted" />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
