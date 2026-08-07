export const GITHUB_USER = 'anibalventura'

export type FeaturedEntry = {
  // Optional GitHub repo slug to enrich with stars/language
  slug?: string
  // Stable key for localized display copy
  translationKey: string
  // Link when clicking the card button
  url: string
  // Optional language badge when no GitHub data is available
  language?: string
}

export const FEATURED: ReadonlyArray<FeaturedEntry> = [
  {
    slug: 'anibalventura/anibalventura.github.io',
    translationKey: 'portfolio',
    url: 'https://github.com/anibalventura/anibalventura.github.io',
    language: 'TypeScript',
  },
  {
    slug: undefined,
    translationKey: 'taskManager',
    url: 'https://github.com/anibalventura/to-do-list-ios',
    language: 'Swift',
  },
  {
    slug: undefined,
    translationKey: 'userManagementApi',
    url: 'https://github.com/anibalventura/user-management-api',
    language: 'Java',
  },
]
