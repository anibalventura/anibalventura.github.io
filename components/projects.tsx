"use client"

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Star, Code } from 'lucide-react'
import { FEATURED, GITHUB_USER } from '@/data/featured-projects'

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
  const t = useTranslations('projects')
  const [repos, setRepos] = useState<DisplayRepo[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const SKELETON_COUNT = 3

  useEffect(() => {
    let cancelled = false
    async function load() {
      try {
        // Try to load the latest 3 public repos from the user's profile
        if (GITHUB_USER) {
          try {
            const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated&direction=desc`, {
              headers: { 'Accept': 'application/vnd.github+json' },
            })
            if (res.ok) {
              const all = (await res.json()) as Array<RepoInfo & { fork?: boolean; archived?: boolean; pushed_at?: string }>
              // Prefer non-fork, non-archived repos, newest updates first
              const filtered = all.filter((r) => !r.fork && !r.archived)
              // Already sorted by updated desc via API, but ensure order if not guaranteed
              const sorted = filtered.sort((a, b) => {
                const aDate = a as any
                const bDate = b as any
                return (bDate.pushed_at ? Date.parse(bDate.pushed_at) : 0) - (aDate.pushed_at ? Date.parse(aDate.pushed_at) : 0)
              })
              const top3 = sorted.slice(0, 3)
              if (!cancelled && top3.length > 0) {
                setRepos(
                  top3.map((r) => ({
                    key: r.full_name,
                    full_name: r.full_name,
                    name: r.name,
                    description: r.description ?? null,
                    html_url: r.html_url,
                    stargazers_count: r.stargazers_count,
                    language: r.language ?? null,
                  }))
                )
                return
              }
            }
          } catch {
            // ignore and fall back to configured entries below
          }
        }

        // Fallback: show configured featured entries (and enrich any with slug when possible)
        const base: DisplayRepo[] = FEATURED.map((entry) => {
          const name = entry.title || (entry.slug ? entry.slug.split('/')[1] : 'Project')
          const fullName = entry.slug ?? entry.title
          return {
            key: fullName,
            full_name: fullName,
            name,
            description: entry.description ?? null,
            html_url: entry.url,
            stargazers_count: undefined,
            language: entry.language ?? null,
          }
        })

        if (!cancelled) setRepos(base)
      } catch (e: any) {
        if (!cancelled) setError(e?.message || 'Failed to load projects')
      }
    }
    load()
    return () => { cancelled = true }
  }, [])

  return (
    <section id="projects" className="py-20 bg-background scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">{t('title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>

          {error && (
            <p role="status" className="text-center text-destructive mb-6">{t('error')}</p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(repos ?? Array.from({ length: SKELETON_COUNT })).map((repo, idx) => (
              <Card key={repo ? repo.key : idx} className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-card-foreground font-heading">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Github className="h-5 w-5 text-primary" />
                    </div>
                    {repo ? repo.name : <span className="h-5 w-40 bg-muted animate-pulse rounded" />}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 min-h-[3rem]">
                    {repo ? (repo.description || t('noDescription')) : <span className="block h-4 w-5/6 bg-muted animate-pulse rounded" />}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {repo && repo.language && (
                        <Badge variant="secondary" className="bg-secondary/80 text-secondary-foreground border-0 font-medium inline-flex items-center gap-1">
                          <Code className="h-3 w-3" /> {repo.language}
                        </Badge>
                      )}
                      {repo && typeof repo.stargazers_count === 'number' && (
                        <Badge variant="secondary" className="bg-accent/10 text-accent border border-accent/20 font-medium inline-flex items-center gap-1">
                          <Star className="h-3 w-3" /> {repo.stargazers_count}
                        </Badge>
                      )}
                    </div>
                    <Button asChild variant="outline">
                      <a
                        href={repo ? repo.html_url : '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={repo ? `${t('viewRepo')} ${repo.full_name}` : t('viewRepo')}
                      >
                        {t('viewRepo')}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
