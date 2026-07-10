"use client"

import { useTranslations } from "next-intl"

export function Footer() {
  const t = useTranslations("footer")
  return (
    <footer className="border-t border-white/8 bg-[#081321] px-4 py-8 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>{t("copyright")}</p>
        <p className="font-mono text-[10px] uppercase tracking-[0.16em]">{t("note")}</p>
      </div>
    </footer>
  )
}
