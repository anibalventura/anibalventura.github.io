"use client"

import { useTranslations } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function TechStack() {
  const t = useTranslations('techStack')
  
  const techCategories = [
    {
      title: t('categories.backend.title'),
      icon: "🖥",
      technologies: [
        { name: "Node.js", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" },
        { name: "Express.js", color: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300" },
        { name: "NestJS", color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300" },
        { name: "Java", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300" },
        { name: "Spring Boot", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" },
        { name: "Python", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" },
        { name: "PostgreSQL", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" },
        { name: "Oracle DB", color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300" },
        { name: "MS SQL", color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300" },
        { name: "Docker", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" },
      ],
    },
    {
      title: t('categories.swift.title'),
      icon: "🍏",
      technologies: [
        { name: "Swift", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300" },
        { name: "SwiftUI", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" },
        { name: "Xcode", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" },
        { name: "iOS", color: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300" },
        { name: "macOS", color: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300" },
      ],
    },
    {
      title: t('categories.tools.title'),
      icon: "🔧",
      technologies: [
        { name: "Firebase", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" },
        { name: "IntelliJ IDEA", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300" },
        { name: "VS Code", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" },
        { name: "Postman", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300" },
        { name: "Insomnia", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300" },
        { name: "Bruno", color: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300" },
        { name: "Linux", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" },
      ],
    },
  ]

  return (
    <section id="tech-stack" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">{t('title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {techCategories.map((category, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-card-foreground font-heading">
                    <span className="text-2xl">{category.icon}</span>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className={`${tech.color} border-0 font-medium`}>
                        {tech.name}
                      </Badge>
                    ))}
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
