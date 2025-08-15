# Portfolio Website

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/anibalventura/anibalventura.github.io/deploy.yml?branch=main&style=flat-square)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen?style=flat-square)
![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.9-06B6D4?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/github/license/anibalventura/anibalventura.github.io?style=flat-square)

A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS, deployed automatically to GitHub Pages.

## 🚀 Tech Stack

- **Framework:** Next.js 15.2.4
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4.1.9
- **UI Components:** Radix UI primitives
- **Icons:** Lucide React
- **Deployment:** GitHub Pages via GitHub Actions

## 📦 Features

- ⚡ Static site generation with Next.js
- 🎨 Modern UI with Tailwind CSS and Radix UI
- 📱 Responsive design
- 🌗 Dark/Light theme support
- 🔧 TypeScript for type safety
- 📊 Charts and data visualization with Recharts
- 🎯 Form handling with React Hook Form
- 🚀 Automatic deployment to GitHub Pages

## 🛠️ Development

### Prerequisites

- Node.js 18 or later
- pnpm (recommended package manager)

### Getting Started

1. Clone the repository:
```bash
git clone https://github.com/anibalventura/anibalventura.github.io.git
cd anibalventura.github.io
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production (static export)
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 📁 Project Structure

```
├── app/                 # Next.js 13+ app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── ui/            # Reusable UI components
│   └── ...            # Feature-specific components
├── lib/               # Utility functions
├── public/            # Static assets
├── styles/            # Additional styles
└── .github/workflows/ # GitHub Actions
```

## 🚀 Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions whenever changes are pushed to the `main` branch.

### Deployment Process

1. **Build:** Next.js builds the application as a static export
2. **Deploy:** GitHub Actions uploads the built files to GitHub Pages
3. **Live:** Site is available at [anibalventura.github.io](https://anibalventura.github.io)

### Manual Deployment

To deploy manually:

1. Build the project:
```bash
pnpm build
```

2. The static files will be generated in the `out/` directory
3. Push changes to the `main` branch to trigger automatic deployment

## 🔧 Configuration

### Next.js Configuration

The site is configured for static export in `next.config.mjs`:

```javascript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // ... other config
}
```

### GitHub Pages Setup

1. Go to repository Settings → Pages
2. Select "GitHub Actions" as the source
3. The workflow in `.github/workflows/deploy.yml` will handle the deployment

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Anibal Ventura**
- Website: [anibalventura.github.io](https://anibalventura.github.io)
- GitHub: [@anibalventura](https://github.com/anibalventura)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/anibalventura/anibalventura.github.io/issues).

---

⭐ Star this repository if you found it helpful!