import { Card, CardContent } from "@/components/ui/card"
import { Code2, Smartphone, Rocket, BookOpen } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Backend Specialist",
      description: "Strong focus on Java/Spring Boot, Python, and Node.js/NestJS for robust API design",
    },
    {
      icon: Smartphone,
      title: "Swift & SwiftUI",
      description: "Passionate about building smooth, modern apps for iOS and macOS",
    },
    {
      icon: Rocket,
      title: "Clean Code Advocate",
      description: "Focused on scalability and great developer experience",
    },
    {
      icon: BookOpen,
      title: "Always Learning",
      description: "Currently exploring cloud-native architectures and Swift concurrency",
    },
  ]

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Backend specialist and Swift developer passionate about creating robust, scalable solutions
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
                  I'm a dedicated developer who believes in writing clean, maintainable code that scales. My experience
                  spans from building robust backend systems to crafting beautiful iOS applications. I'm always excited
                  to tackle new challenges and learn emerging technologies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
