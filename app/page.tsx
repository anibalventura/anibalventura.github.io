import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { TechStack } from "@/components/tech-stack"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main id="main" tabIndex={-1} className="min-h-screen focus:outline-none">
      <Header />
      <Hero />
      <About />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  )
}
