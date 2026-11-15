# Mohammad Afrouzeh | TECHCODE

**Code • Build • Level Up**

A bilingual (English/Persian) personal portfolio built with Next.js App Router and React. The visual system follows the TECHCODE identity: deep navy surfaces, electric blue and cyan accents, subtle violet highlights, and responsive glass-inspired components.

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

## Languages and SEO

- English: <https://mohammadafrouzeh.ir/>
- Persian: <https://mohammadafrouzeh.ir/fa>
- Sitemap: <https://mohammadafrouzeh.ir/sitemap.xml>
- Robots: <https://mohammadafrouzeh.ir/robots.txt>

The site includes canonical URLs, `hreflang` alternates, Open Graph/Twitter metadata, Person/ProfilePage JSON-LD, localized custom 404 pages, localized 500 error boundaries and a root-level global error fallback. Error screens include retry/home actions and an email-based issue report link. After deployment, verify the domain in Google Search Console and Bing Webmaster Tools, then submit the sitemap. Search visibility is not guaranteed by metadata alone; keep project details accurate and publish useful technical writing over time.

## Content accuracy

Only verified public contact links are shown: GitHub, LinkedIn and the professional email address. Placeholder certificate records, unsupported performance claims and invented personal metrics have been removed.
