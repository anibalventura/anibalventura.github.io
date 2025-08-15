"use client"

import { useTranslations } from 'next-intl'
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Smartphone, Rocket, BookOpen } from "lucide-react"

export function About() {
  const t = useTranslations('about')
  
  const highlights = [
    {
      icon: Code2,
      title: t('highlights.backend.title'),
      description: t('highlights.backend.description'),
    },
    {
      icon: Smartphone,
      title: t('highlights.swift.title'),
      description: t('highlights.swift.description'),
    },
    {
      icon: Rocket,
      title: t('highlights.cleanCode.title'),
      description: t('highlights.cleanCode.description'),
    },
    {
      icon: BookOpen,
      title: t('highlights.learning.title'),
      description: t('highlights.learning.description'),
    },
  ]

  return (
    <section id="about" className="py-20 gradient-bg-accent dynamic-bg">
      {/* Subtle floating particles for about section */}
      <div className="floating-particles">
        <div className="particle particle-3"></div>
        <div className="particle particle-5"></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">{t('title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {highlights.map((item, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-card-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Card className="bg-card border-border max-w-2xl mx-auto">
              <CardContent className="p-8">
                <p className="text-lg text-card-foreground leading-relaxed">
                  {t('description')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
