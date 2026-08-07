# Repository Guidance

## Project overview

This repository contains a bilingual personal portfolio for Aníbal Ventura. It is a Next.js 15.2.4 App Router application using React 19, TypeScript, Tailwind CSS v4, `next-intl`, and Lucide icons. The application is exported as a static site to `out/` and is hosted separately from this repository.

Supported locales are English (`en`) and Spanish (`es`). The site includes a responsive portfolio layout with animated visual effects, products, projects, contact links, and accessibility helpers.

## Repository structure

- `app/` — App Router entry points, global CSS, metadata routes, and page composition.
- `components/` — page sections and shared components.
- `components/ui/` — reusable UI primitives and shadcn-style components.
- `components/providers/` — application providers, including internationalization.
- `contexts/` — React context implementations such as locale state.
- `data/` — curated products and featured-project fallback data.
- `hooks/` — reusable React hooks.
- `lib/` — shared utilities and locale-loading helpers.
- `locales/` — translation JSON files for `en` and `es`.
- `public/` — static assets.
- `types/` — TypeScript declarations.
- `next.config.mjs` — static-export and image configuration.
- `package.json` and `pnpm-lock.yaml` — package metadata, scripts, and locked dependencies.

Generated or dependency directories and files include `.next/`, `out/`, `node_modules/`, `*.tsbuildinfo`, and `next-env.d.ts`. Do not manually edit or commit generated output.

## Development commands

Use pnpm and preserve the committed `pnpm-lock.yaml`.

- `pnpm dev` — start the development server.
- `pnpm build` — build the static export into `out/`.
- `pnpm preview` — rebuild and serve `out/` locally.
- `pnpm exec tsc --noEmit --incremental false` — run the reliable typecheck without creating an incremental build-info file.
- `pnpm typecheck` — the package script equivalent of the reliable typecheck command.

`pnpm build` is the static-export validation command and writes generated output to `out/`. The obsolete `pnpm export` script has been removed. The current `pnpm lint` script still invokes the interactive/unconfigured Next.js lint flow because the existing dependency tree does not include ESLint; do not treat it as a reliable lint gate until a real ESLint setup and locked dependencies are added. There are currently no repository tests, CI workflows, or deployment workflows.

## Implementation conventions

- Keep changes narrowly scoped and reuse existing components, utilities, tokens, and data abstractions.
- Follow the formatting, quote, import, and component patterns of the file being changed. Avoid unrelated refactoring.
- Use the `@/*` path alias for repository imports where consistent with nearby code.
- Keep page composition in `app/page.tsx`; place reusable section behavior in `components/`.
- Use the existing Tailwind v4 setup and design tokens in `app/globals.css`. Avoid introducing a second styling system or an unnecessary configuration file.
- Keep static-export constraints intact: do not add server-only runtime dependencies, API routes, or features that require a long-lived server unless the scope explicitly changes the hosting model. Images must remain compatible with the configured unoptimized static setup.
- Do not modify `package.json`, the lockfile, or build configuration unless the approved scope explicitly requires it.

## Internationalization

- User-visible copy belongs in both `locales/en.json` and `locales/es.json`.
- Use `useTranslations` with the existing message namespaces in client components and preserve the locale provider/context flow.
- Keep translation keys aligned between the two locale files. Do not leave one locale missing new content.
- Locale selection first honors a valid `preferred-locale` value in `localStorage`, then browser language detection, and otherwise falls back to English.
- Preserve the existing loading and fallback behavior when locale messages cannot be loaded, and keep the document language and title synchronized with the active locale.

## Projects and external data

The Projects section fetches public repositories for `anibalventura` from the GitHub API in the browser. It filters out forks and archived repositories, sorts by recent updates, and displays up to three entries. If GitHub is unavailable, rate-limited, or produces no usable entries, it falls back to `data/featured-projects.ts`.

Changes involving this flow must retain loading, error, empty, cancellation, and curated-fallback behavior. Do not make the page depend on GitHub being available at build time.

## Accessibility and interaction requirements

- Preserve semantic landmarks, heading hierarchy, skip navigation, visible focus states, keyboard navigation, and meaningful accessible names.
- Interactive controls must work without hover, support keyboard focus, and expose state through appropriate ARIA attributes when needed.
- Keep navigation anchors and section IDs synchronized when adding or renaming sections.
- Respect reduced-motion preferences when adding or changing animations, scrolling, particle effects, or transitions.
- Check responsive behavior at narrow and wide layouts, including mobile navigation and touch-sized controls.

## Worktree safety

Inspect `git status` before changing files and preserve unrelated user work. The existing untracked `pnpm-workspace.yaml` is user-owned worktree state and must remain untouched unless explicitly included in a later scope. Do not reset, clean, or overwrite unrelated changes.

When a task has multiple planning or review stages, wait for the explicitly approved scope before modifying application code. Report every changed file and every validation command used at handoff.
