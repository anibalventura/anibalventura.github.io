# Portfolio Website

![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.9-06B6D4?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/github/license/anibalventura/anibalventura.github.io?style=flat-square)

A modern, interactive portfolio website showcasing my software development skills and projects. Built with Next.js, TypeScript, and Tailwind CSS, featuring internationalization and dynamic visual effects.

## ✨ Features

- 🎨 **Modern Dark Blue Theme** - Sophisticated color scheme using OKLCH color space
- 🌐 **Internationalization** - Support for English and Spanish with automatic browser detection
- ⚡ **Dynamic Background Effects** - Interactive particle system that follows mouse movement
- 📱 **Fully Responsive** - Optimized for all device sizes
- 🎯 **Static Site Generation** - Fast loading with Next.js static export
- 🔧 **Type Safety** - Built with TypeScript for robust development
- 🎭 **Smooth Animations** - CSS keyframe animations and transitions
- 📬 **Contact Integration** - Direct links to email, GitHub, LinkedIn, and Ko-fi
- 🏗️ **Component Architecture** - Modular and reusable UI components
- 🚀 **Automatic Deployment** - CI/CD pipeline with GitHub Actions

## 🛠️ Tech Stack

### Core Technologies

- **Framework:** Next.js 15.2.4 with App Router
- **Language:** TypeScript 5.0
- **Styling:** Tailwind CSS v4.1.9
- **Package Manager:** pnpm v9

### Key Libraries

- **UI Components:** Radix UI primitives
- **Icons:** Lucide React
- **Internationalization:** next-intl
- **Animations:** Tailwind CSS animations + custom keyframes
- **Utilities:** clsx, tailwind-merge, class-variance-authority

### Deployment

- **Platform:** GitHub Pages
- **CI/CD:** GitHub Actions
- **Build:** Static export optimized for GitHub Pages

## 🎯 Sections

1. **Hero** - Introduction with animated background effects
2. **About** - Professional background and expertise highlights
3. **Tech Stack** - Organized by categories (Frontend, Backend & APIs, Tools)
4. **Projects** - Selected work with links and details
5. **Contact** - Multiple ways to connect
6. **Footer** - Quick links and copyright

## 🌍 Internationalization

The site supports multiple languages with:

- **Automatic Detection** - Browser language preference detection
- **Manual Switching** - Language switcher component (when multiple languages are available)
- **Structured Translations** - JSON-based translation files in `/locales`
- **Client-side Rendering** - Dynamic locale loading with localStorage persistence

### Supported Languages

- 🇺🇸 English (en)
- 🇪🇸 Spanish (es)

## 🎨 Design System

### Color Palette

- **Primary:** Blue shades using OKLCH color space
- **Background:** Deep dark blue gradients
- **Text:** High contrast for optimal readability
- **Accents:** Complementary blue tones for highlights

### Typography

- **Headings:** Work Sans font family
- **Body:** Open Sans font family
- **Responsive:** Fluid typography scaling

### Interactive Elements

- **Particle System** - Mouse-following canvas animation
- **Floating Particles** - CSS-animated background elements
- **Sparkle Effects** - Star-shaped decorative animations
- **Hover States** - Smooth transitions on interactive elements

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or later
- pnpm (recommended package manager)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/anibalventura/anibalventura.github.io.git
   cd anibalventura.github.io
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Start development server:**

   ```bash
   pnpm dev
   ```

4. **Open your browser:**

   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
pnpm dev       # Start development server
pnpm build     # Build for production (static export)
pnpm start     # Next.js server (not used for static export)
pnpm lint      # Run ESLint
pnpm export    # Export static files (included in build)
pnpm preview   # Build and serve ./out for local preview
```

For static export preview locally, use `pnpm preview` which builds and serves the `out/` directory.

## 📁 Project Structure

```text
├── app/                         # Next.js App Router
│   ├── globals.css              # Global styles, theme, utilities
│   ├── layout.tsx               # Root layout, fonts, providers
│   ├── page.tsx                 # Home page composition
│   ├── robots.ts                # Robots.txt route
│   └── sitemap.ts               # Sitemap route
├── components/                  # React components
│   ├── ui/                      # Base UI components
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── toast.tsx
│   │   ├── toaster.tsx
│   │   └── use-toast.ts
│   ├── providers/
│   │   └── intl-provider.tsx    # Internationalization provider
│   ├── about.tsx                # About section
│   ├── contact.tsx              # Contact section
│   ├── dynamic-background.tsx   # Particle/visual effects
│   ├── footer.tsx               # Footer
│   ├── header.tsx               # Header / nav
│   ├── hero.tsx                 # Hero section
│   ├── language-switcher.tsx    # Language selection UI
│   ├── locale-lang.tsx          # Sync <html lang>
│   ├── back-to-top.tsx          # Floating back-to-top button
│   ├── projects.tsx             # Projects section
│   ├── scroll-progress.tsx      # Reading progress bar
│   ├── skip-link.tsx            # Accessibility skip link
│   ├── title-sync.tsx           # Dynamic <title>
│   └── tech-stack.tsx           # Technology showcase
├── contexts/
│   └── locale-context.tsx       # Locale state/context
├── data/
│   └── featured-projects.ts     # Projects data
├── hooks/
│   └── use-mobile.ts            # Mobile detection hook
├── lib/
│   ├── locale.ts                # Locale detection & messages
│   └── utils.ts                 # cn() utility
├── locales/
│   ├── en.json                  # English translations
│   └── es.json                  # Spanish translations
├── public/
│   ├── CNAME                    # GitHub Pages domain
│   └── placeholder-*.{png,svg,jpg}
├── types/
│   └── css.d.ts                 # CSS type declarations
├── .github/workflows/
│   └── deploy.yml               # Pages deployment workflow
├── components.json              # shadcn UI settings
├── next.config.js               # Next.js configuration
├── package.json                 # Scripts and dependencies
├── pnpm-lock.yaml               # Lockfile
├── postcss.config.mjs           # Tailwind v4 via PostCSS
├── tsconfig.json                # TypeScript config
└── LICENSE                      # MIT license
```

## 🚀 Deployment

### Automatic Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

**Deployment Process:**

1. **Trigger:** Push to `main` branch
2. **Build:** Next.js static export with pnpm
3. **Deploy:** Upload to GitHub Pages
4. **Live:** Available at [anibalventura.github.io](https://anibalventura.github.io)

### Manual Deployment

```bash
# Build the project
pnpm build

# Output will be in the 'out' directory
# Optionally preview locally
pnpm preview

# Push to main branch to trigger deployment
```

### GitHub Pages Configuration

- Repository Settings → Pages
- Source: GitHub Actions
- Workflow: `.github/workflows/deploy.yml`

## 🔧 Configuration

### Next.js Configuration (`next.config.js`)

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  basePath: '',
  assetPrefix: '',
};

export default nextConfig;
```

### Tailwind CSS Configuration

- Tailwind CSS v4 via PostCSS (`postcss.config.mjs`)
- Design tokens in `app/globals.css` using OKLCH
- `tw-animate-css` for animation utilities
- Responsive utilities and dark mode variants

## 🌟 Performance Optimizations

- Static generation with `next export`
- Automatic code splitting by Next.js
- Static-friendly images (`images.unoptimized: true`)
- Small dependency surface area
- Tailwind v4 CSS pruning via PostCSS

## 🔎 SEO & Metadata

- Metadata configured in `app/layout.tsx`
- `app/robots.ts` and `app/sitemap.ts` for crawlers
- Social previews via OpenGraph and Twitter cards

## 🧪 Development Tips

### Adding New Translations

1. Update translation files in `/locales/`
2. Use the `useTranslations` hook in components
3. Follow the nested structure for organization

### Customizing Animations

- Modify keyframes in `globals.css`
- Adjust particle system in `dynamic-background.tsx`
- Update color variables for theme changes

### Adding New Sections

1. Create component in `/components/`
2. Add translations to locale files
3. Import and use in `app/page.tsx`

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/anibalventura/anibalventura.github.io/issues).

### Development Guidelines

- Follow TypeScript best practices
- Maintain component modularity
- Update translations for new features
- Test responsive design
- Ensure accessibility standards

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ **Star this repository if you found it helpful!**

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/anibalventura)
