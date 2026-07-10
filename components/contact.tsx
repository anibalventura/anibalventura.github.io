"use client"

import { useTranslations } from "next-intl"
import { ArrowUpRight, Coffee, Github, Linkedin, Mail } from "lucide-react"

export function Contact() {
  const t = useTranslations("contact")
  const contactLinks = [
    { icon: Github, title: t("links.github.title"), description: t("links.github.description"), href: "https://github.com/anibalventura", value: "@anibalventura", rel: "me noopener noreferrer" },
    { icon: Linkedin, title: t("links.linkedin.title"), description: t("links.linkedin.description"), href: "https://linkedin.com/in/anibalventura", value: "/in/anibalventura", rel: "me noopener noreferrer" },
    { icon: Mail, title: t("links.email.title"), description: t("links.email.description"), href: "mailto:contact@anibalventura.com", value: "contact@anibalventura.com", rel: undefined },
    { icon: Coffee, title: t("links.coffee.title"), description: t("links.coffee.description"), href: "https://ko-fi.com/anibalventura", value: "ko-fi.com/anibalventura", rel: "noopener noreferrer" },
  ]

  return (
    <section id="contact" className="section-shell scroll-mt-24 border-t border-white/8 bg-[#081321]">
      <div className="mx-auto max-w-7xl">
        <p className="section-kicker"><span>04</span> / {t("title")}</p>
        <div className="contact-panel mt-8 overflow-hidden rounded-[2rem] border border-primary/20 bg-primary text-primary-foreground">
          <div className="grid lg:grid-cols-[1.4fr_0.6fr]">
            <div className="p-7 sm:p-10 md:p-14">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-60">{t("cta.title")}</p>
              <h2 className="mt-7 max-w-4xl font-heading text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.84] tracking-[-0.07em]">{t("displayTitle")}</h2>
              <p className="mt-8 max-w-xl text-base leading-7 opacity-70">{t("cta.description")}</p>
              <a href="mailto:contact@anibalventura.com" className="mt-9 inline-flex h-13 items-center gap-2 rounded-xl bg-[#06101d] px-6 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">
                <Mail className="size-4" />
                {t("cta.button")}
                <ArrowUpRight className="size-4" />
              </a>
            </div>
            <div className="relative hidden overflow-hidden border-l border-black/10 lg:block" aria-hidden>
              <div className="contact-orbit contact-orbit-one" />
              <div className="contact-orbit contact-orbit-two" />
              <span className="absolute left-1/2 top-1/2 grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#06101d] font-heading text-xl font-bold text-primary">AV</span>
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactLinks.map((contact) => (
            <a key={contact.title} href={contact.href} target="_blank" rel={contact.rel} className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-white/20 hover:bg-white/[0.04]">
              <div className="flex items-start justify-between">
                <contact.icon className="size-5 text-primary" />
                <ArrowUpRight className="size-4 text-white/20 transition-colors group-hover:text-primary" />
              </div>
              <h3 className="mt-7 font-heading font-semibold text-foreground">{contact.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{contact.description}</p>
              <p className="mt-4 truncate font-mono text-[10px] text-white/35">{contact.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
