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
  fork?: boolean
  archived?: boolean
  pushed_at?: string
}

type DisplayRepo = RepoInfo & { key: string }

function isGithubRepo(value: unknown): value is RepoInfo {
  if (typeof value !== "object" || value === null) {
    return false
  }

  const repo = value as Partial<RepoInfo>
  return (
    typeof repo.full_name === "string" &&
    typeof repo.name === "string" &&
    typeof repo.html_url === "string" &&
    (repo.description === undefined || repo.description === null || typeof repo.description === "string") &&
    (repo.stargazers_count === undefined || typeof repo.stargazers_count === "number") &&
    (repo.language === undefined || repo.language === null || typeof repo.language === "string") &&
    (repo.fork === undefined || typeof repo.fork === "boolean") &&
    (repo.archived === undefined || typeof repo.archived === "boolean") &&
    (repo.pushed_at === undefined || typeof repo.pushed_at === "string")
  )
}

export function Projects() {
  const t = useTranslations("projects")
  const [githubRepos, setGithubRepos] = useState<DisplayRepo[] | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const fallbackRepos: DisplayRepo[] = FEATURED.map((entry) => ({
    key: entry.slug ?? entry.translationKey,
    full_name: entry.slug ?? entry.translationKey,
    name: t(`featured.${entry.translationKey}.title`),
    description: t(`featured.${entry.translationKey}.description`),
    html_url: entry.url,
    language: entry.language,
  }))

  useEffect(() => {
    const controller = new AbortController()
    let cancelled = false
    const timeoutId = window.setTimeout(() => controller.abort(), 8000)

    async function load() {
      try {
        if (!GITHUB_USER) {
          return
        }

        const response = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated&direction=desc`, {
          headers: { Accept: "application/vnd.github+json" },
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error(`GitHub request failed with status ${response.status}`)
        }

        const payload: unknown = await response.json()
        if (!Array.isArray(payload)) {
          throw new Error("GitHub response was not an array")
        }

        const topThree = payload
          .filter(isGithubRepo)
          .filter((repo) => !repo.fork && !repo.archived)
          .sort((a, b) => Date.parse(b.pushed_at ?? "") - Date.parse(a.pushed_at ?? ""))
          .slice(0, 3)

        if (!cancelled && topThree.length > 0) {
          setGithubRepos(topThree.map((repo) => ({ ...repo, key: repo.full_name })))
        }
      } catch (reason) {
        const isAbort = reason instanceof Error && reason.name === "AbortError"
        if (!cancelled && !isAbort) {
          setHasError(true)
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false)
        }
      }
    }

    void load()

    return () => {
      cancelled = true
      controller.abort()
      window.clearTimeout(timeoutId)
    }
  }, [])

  const displayItems = githubRepos ?? fallbackRepos

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

        {isLoading && <p className="sr-only" role="status" aria-live="polite">{t("loading")}</p>}
        {hasError && <p role="status" aria-live="polite" className="mt-8 text-sm text-destructive">{t("error")}</p>}

        <div className="mt-14 overflow-hidden rounded-3xl border border-white/10" aria-busy={isLoading}>
          {displayItems.length === 0 ? (
            <p className="bg-card p-7 text-sm text-muted-foreground md:p-9">{t("empty")}</p>
          ) : (
            displayItems.map((repo, index) => (
              <article key={repo.key} className="group border-b border-white/10 bg-card last:border-b-0">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="grid gap-6 p-6 transition-colors hover:bg-white/[0.035] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary md:grid-cols-[4rem_1fr_auto] md:items-center md:p-9" aria-label={`${t("viewRepo")} ${repo.full_name}`}>
                  <span className="font-mono text-xs text-white/25">0{index + 1}</span>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <Github className="size-5 text-primary" aria-hidden="true" />
                      <h3 className="font-heading text-2xl font-semibold tracking-[-0.035em] text-foreground md:text-3xl">{repo.name}</h3>
                    </div>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">{repo.description || t("noDescription")}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {repo.language && <span className="project-tag"><Code className="size-3" aria-hidden="true" />{repo.language}</span>}
                      {typeof repo.stargazers_count === "number" && <span className="project-tag"><Star className="size-3" aria-hidden="true" />{repo.stargazers_count}</span>}
                    </div>
                  </div>
                  <span className="grid size-12 place-items-center rounded-full border border-white/10 text-muted-foreground transition-all group-hover:border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="size-5" aria-hidden="true" />
                  </span>
                </a>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
