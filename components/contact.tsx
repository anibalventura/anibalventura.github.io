import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, ExternalLink, Coffee, Linkedin } from "lucide-react"

export function Contact() {
  const contactLinks = [
    {
      icon: Mail,
      title: "Email",
      description: "Get in touch via email",
      link: "mailto:contact@anibalventura.com",
      linkText: "contact@anibalventura.com",
    },
    {
      icon: ExternalLink,
      title: "GitHub",
      description: "Check out my code and projects",
      link: "https://github.com/anibalventura",
      linkText: "github.com/anibalventura",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Connect with me professionally",
      link: "https://linkedin.com/in/anibalventura",
      linkText: "linkedin.com/in/anibalventura",
    },
    {
      icon: Coffee,
      title: "Buy me a coffee",
      description: "Support my work",
      link: "https://ko-fi.com/anibalventura",
      linkText: "ko-fi.com/anibalventura",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Let's Connect</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm currently open to work and always interested in discussing new opportunities and projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactLinks.map((contact, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-all hover:scale-105">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-card-foreground font-heading">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <contact.icon className="h-5 w-5 text-primary" />
                    </div>
                    {contact.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{contact.description}</p>
                  <Button
                    variant="outline"
                    asChild
                    className="w-full border-primary/20 hover:bg-primary/5 bg-transparent"
                  >
                    <a
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center"
                    >
                      {contact.linkText}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Ready to work together?</h3>
                <p className="text-muted-foreground mb-6">
                  I'm available for backend development, Swift/SwiftUI projects, and consulting opportunities.
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <a href="mailto:contact@anibalventura.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Start a Conversation
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
