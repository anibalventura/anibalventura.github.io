export const GITHUB_USER = 'anibalventura'

export type FeaturedEntry = {
  // Optional GitHub repo slug to enrich with stars/language
  slug?: string
  // Display title
  title: string
  // Display description
  description: string
  // Link when clicking the card button
  url: string
  // Optional language badge when no GitHub data is available
  language?: string
}

export const FEATURED: ReadonlyArray<FeaturedEntry> = [
  {
    slug: 'anibalventura/anibalventura.github.io',
    title: 'Portfolio Website',
    description: 'This site – Next.js, TypeScript, Tailwind CSS, and i18n.',
    url: 'https://github.com/anibalventura/anibalventura.github.io',
    language: 'TypeScript',
  },
  {
    slug: undefined,
    title: 'iOS Task Management App',
    description: 'OS task management application built with SwiftUI.',
    url: 'https://github.com/anibalventura/to-do-list-ios',
    language: 'Swift',
  },
  {
    slug: undefined,
    title: 'User Management API',
    description: 'Simple API for register and login and user with JWT authentication and Swagger docs.',
    url: 'https://github.com/anibalventura/user-management-api',
    language: 'Java',
  },
]
