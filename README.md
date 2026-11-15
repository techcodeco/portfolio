# Mohammad Afrouzeh | TECHCODE

**Code • Build • Level Up**

A bilingual (English/Persian) personal portfolio built with Next.js App Router and React. The visual system follows the TECHCODE identity: deep navy surfaces, electric blue and cyan accents, subtle violet highlights, and responsive glass-inspired components.

## live view :

- English: <https://mohammadafrouzeh.ir/>
- Persian: <https://mohammadafrouzeh.ir/fa>

## Tech stack

- **Framework:** Next.js 16, React 19
- **Language:** JavaScript (ES modules, JSX)
- **Motion:** Framer Motion, Lenis
- **Icons:** Lucide React, React Icons
- **SEO:** canonical URLs, language alternates, Open Graph, Twitter metadata, JSON-LD, sitemap and robots rules

## Local development

Requirements: Node.js 20.9 or newer and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run lint
npm run build
npm start
```

## Project structure

- `src/app`: Next.js App Router pages, language routes, metadata, sitemap, robots, localized error boundaries and global styles
- `src/components/layout`: navigation, footer and lazy-loading primitives
- `src/components/sections`: hero, about, skills, architecture, projects and contact sections
- `src/components/effects`: motion, canvas and visual effects
- `src/components/terminal`: interactive TECHCODE profile terminal
- `src/components/seo`: structured data
- `src/data`: portfolio copy, project records, technologies and editor samples
- `public/icons`: website favicon, browser icons, and app icons
- `public/img`: social sharing artwork and website images (currently includes `opengraph-image.png`)

# File Tree: portfolio

```
├── 📁 public
│   ├── 📁 icons
│   │   ├── 🖼️ apple-touch-icon.png
│   │   ├── 🖼️ favicon-48x48.png
│   │   ├── 🖼️ favicon-96x96.png
│   │   ├── 📄 favicon.ico
│   │   ├── 🖼️ icon-192.png
│   │   ├── 🖼️ icon-512.png
│   │   └── 🖼️ icon.svg
│   └── 📁 img
│       ├── 🖼️ mohammad-afrouzeh.webp
│       └── 🖼️ opengraph-image.png
├── 📁 src
│   ├── 📁 app
│   │   ├── 📁 (en)
│   │   │   ├── 📁 [...slug]
│   │   │   │   └── 📄 page.jsx
│   │   │   ├── 📄 error.jsx
│   │   │   ├── 📄 layout.jsx
│   │   │   ├── 📄 not-found.jsx
│   │   │   └── 📄 page.jsx
│   │   ├── 📁 fa
│   │   │   ├── 📁 [...slug]
│   │   │   │   └── 📄 page.jsx
│   │   │   ├── 📄 error.jsx
│   │   │   ├── 📄 layout.jsx
│   │   │   ├── 📄 not-found.jsx
│   │   │   └── 📄 page.jsx
│   │   ├── 📄 global-error.jsx
│   │   ├── 🎨 globals.css
│   │   ├── 📄 manifest.js
│   │   ├── 📄 robots.js
│   │   └── 📄 sitemap.js
│   ├── 📁 components
│   │   ├── 📁 DepthText
│   │   │   └── 📄 DepthText.jsx
│   │   ├── 📁 ParticleText
│   │   │   └── 📄 ParticleText.jsx
│   │   ├── 📁 effects
│   │   │   ├── 📄 CodeCanvas.jsx
│   │   │   ├── 📄 CodeMotion3D.jsx
│   │   │   ├── 📄 Cursor.jsx
│   │   │   ├── 📄 DeferredVisualEffects.jsx
│   │   │   ├── 📄 Loader.jsx
│   │   │   └── 📄 SplitTitle.jsx
│   │   ├── 📁 errors
│   │   │   ├── 📄 ReportProblemLink.jsx
│   │   │   └── 📄 ServerErrorPage.jsx
│   │   ├── 📁 layout
│   │   │   ├── 📄 LazySection.jsx
│   │   │   ├── 📄 SiteFooter.jsx
│   │   │   ├── 📄 SiteHeader.jsx
│   │   │   └── 📄 TechMarquee.jsx
│   │   ├── 📁 not-found
│   │   │   ├── 📄 BackButton.jsx
│   │   │   └── 📄 NotFoundPage.jsx
│   │   ├── 📁 portfolio
│   │   │   └── 📄 PortfolioApp.jsx
│   │   ├── 📁 sections
│   │   │   ├── 📄 ArchitectureSection.jsx
│   │   │   ├── 📄 CodeEditor.jsx
│   │   │   ├── 📄 ContactSection.jsx
│   │   │   ├── 📄 HeroSection.jsx
│   │   │   ├── 📄 Marquee.jsx
│   │   │   ├── 📄 ModernTechStack.jsx
│   │   │   ├── 📄 PoweredBy.jsx
│   │   │   ├── 📄 Project.jsx
│   │   │   ├── 📄 ProjectsSection.jsx
│   │   │   ├── 📄 SkillsSection.jsx
│   │   │   ├── 📄 Social.jsx
│   │   │   ├── 📄 SystemDiagram.jsx
│   │   │   └── 📄 TechCard.jsx
│   │   ├── 📁 seo
│   │   │   └── 📄 StructuredData.jsx
│   │   ├── 📁 terminal
│   │   │   ├── 📄 TerminalLauncher.jsx
│   │   │   └── 📄 TerminalModal.jsx
│   │   └── 📁 ui
│   │       ├── 📄 Kicker.jsx
│   │       ├── 📄 Magnetic.jsx
│   │       ├── 📄 Reveal.jsx
│   │       ├── 📄 ScrollProgress.jsx
│   │       └── 📄 Stat.jsx
│   ├── 📁 data
│   │   ├── 📄 code-samples.js
│   │   ├── 📄 portfolio-data.js
│   │   └── 📄 terminal-data.js
│   └── 📁 lib
│       ├── 📄 metadata.js
│       └── 📄 site-config.js
├── ⚙️ .gitignore
├── 📝 README.md
├── 📄 eslint.config.mjs
├── ⚙️ jsconfig.json
├── 📄 next.config.mjs
└── ⚙️ package.json
```

## Content accuracy

Only verified public contact links are shown: GitHub, LinkedIn and the professional email address. Placeholder certificate records, unsupported performance claims and invented personal metrics have been removed.
