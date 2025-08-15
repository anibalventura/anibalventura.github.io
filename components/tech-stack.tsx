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
        { name: "Node.js", color: "bg-primary/10 text-primary border border-primary/20" },
        { name: "Express.js", color: "bg-secondary/80 text-secondary-foreground border border-border" },
        { name: "NestJS", color: "bg-accent/10 text-accent border border-accent/20" },
        { name: "Java", color: "bg-primary/15 text-primary border border-primary/25" },
        { name: "Spring Boot", color: "bg-primary/10 text-primary border border-primary/20" },
        { name: "Python", color: "bg-accent/15 text-accent border border-accent/25" },
        { name: "PostgreSQL", color: "bg-primary/20 text-primary border border-primary/30" },
        { name: "Oracle DB", color: "bg-accent/10 text-accent border border-accent/20" },
        { name: "MS SQL", color: "bg-accent/15 text-accent border border-accent/25" },
        { name: "Docker", color: "bg-primary/10 text-primary border border-primary/20" },
      ],
    },
    {
      title: t('categories.swift.title'),
      icon: "🍏",
      technologies: [
        { name: "Swift", color: "bg-accent/15 text-accent border border-accent/25" },
        { name: "SwiftUI", color: "bg-primary/15 text-primary border border-primary/25" },
        { name: "Xcode", color: "bg-primary/10 text-primary border border-primary/20" },
        { name: "iOS", color: "bg-secondary/80 text-secondary-foreground border border-border" },
        { name: "macOS", color: "bg-secondary/80 text-secondary-foreground border border-border" },
      ],
    },
    {
      title: t('categories.tools.title'),
      icon: "🔧",
      technologies: [
        { name: "Firebase", color: "bg-accent/10 text-accent border border-accent/20" },
        { name: "IntelliJ IDEA", color: "bg-primary/15 text-primary border border-primary/25" },
        { name: "VS Code", color: "bg-primary/10 text-primary border border-primary/20" },
        { name: "Postman", color: "bg-accent/15 text-accent border border-accent/25" },
        { name: "Insomnia", color: "bg-primary/20 text-primary border border-primary/30" },
        { name: "Bruno", color: "bg-accent/10 text-accent border border-accent/20" },
        { name: "Linux", color: "bg-secondary/80 text-secondary-foreground border border-border" },
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
