# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 application built with React 19, TypeScript, and shadcn/ui components. It's a marketing/landing page for HubBot, featuring AI agents and telecommunications solutions. The app is deployed on Netlify and uses the App Router architecture.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture

### App Router Structure

**Entry Point & Layout:**
- `app/layout.tsx` - Root layout with font configuration (Inter + Plus Jakarta Sans), SEO metadata, and JSON-LD structured data
- `app/globals.css` - Global styles with Tailwind directives and CSS variables for theming
- `components/Providers.tsx` - Client component wrapping app with:
  - TanStack Query (React Query) for server state
  - next-themes for theme management (default: light mode, system disabled)
  - TooltipProvider, Toaster, and Sonner for UI notifications

**Pages:** (using App Router file-based routing)
- `app/page.tsx` - Homepage composed of section components (Header, Hero, WhyHubBot, Features, AIAgents, Testimonials, CTA, Footer)
- `app/produto/page.tsx` - Product page
- `app/segmentos/page.tsx` - Segments page
- `app/robots.ts` - Dynamic robots.txt generation
- `app/sitemap.ts` - Dynamic sitemap generation

**Components:** (`components/`)
Landing page sections:
- `Header.tsx`, `Hero.tsx`, `WhyHubBot.tsx`, `Features.tsx`
- `AIAgents.tsx`, `Testimonials.tsx`, `CTA.tsx`, `Footer.tsx`, `Stats.tsx`

**UI Components:** (`components/ui/`)
- Contains ~48 shadcn/ui components (buttons, dialogs, forms, etc.)
- All use Tailwind CSS with CSS variables for theming
- Managed via `components.json` (New York style, neutral base color)

### Key Technical Details

**Path Aliases:**
- `@/` maps to project root (not `./src/`)
- Configured in both `tsconfig.json` and `components.json`
- Use `@/components`, `@/lib`, `@/hooks`, `@/app` for imports

**SEO System:** (`lib/seo.ts`)
- Centralized SEO configuration in `siteConfig` object
- `baseMetadata` - Default metadata for all pages
- `createMetadata()` - Helper for page-specific metadata
- JSON-LD schema helpers: `createOrganizationSchema()`, `createWebsiteSchema()`, `createSoftwareApplicationSchema()`
- Site URL from `NEXT_PUBLIC_SITE_URL` env var (defaults to https://hubbot.com.br)
- Each page should export its own `metadata` using `createMetadata()`

**Styling System:**
- Tailwind CSS with custom theme in `tailwind.config.ts`
- CSS variables in `app/globals.css` define brand colors:
  - Primary: Sky Blue (#0EA5E9 / HSL 199 89% 48%)
  - Accent: Teal (#2DD4BF / HSL 168 76% 50%)
- Custom fonts: Inter (sans) and Plus Jakarta Sans (heading)
- Uses `tailwindcss-animate` for animations
- Custom CSS variables for gradients and shadows

**TypeScript Configuration:**
- Strict mode enabled
- Target: ES2017
- Path alias `@/*` maps to project root
- Next.js plugin for enhanced type checking

**State Management:**
- TanStack Query (React Query) for server state
- React Hook Form with Zod for form validation
- next-themes for theme (currently light mode only, system disabled)

**Deployment:**
- Netlify with Next.js Runtime plugin
- Node version: 20.9.0 (specified in `.nvmrc`)
- Build command: `npm run build`
- Security headers configured in `netlify.toml`
- Static asset caching (1 year) for images and fonts

## Adding New Components

When adding shadcn/ui components:
1. Use `npx shadcn@latest add <component-name>`
2. Components will be added to `components/ui/` with proper path aliases
3. Configuration in `components.json`:
   - Style: "new-york"
   - Base color: "neutral"
   - RSC: enabled
   - Icon library: lucide-react

## Adding New Routes

To add a new route using App Router:
1. Create directory under `app/` (e.g., `app/nova-pagina/`)
2. Add `page.tsx` file in that directory
3. Export metadata using `createMetadata()` from `@/lib/seo`
4. Route will be automatically available at `/nova-pagina`

Example:
```typescript
// app/nova-pagina/page.tsx
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Nova Página",
  description: "Descrição da página",
  path: "/nova-pagina",
});

export default function NovaPagina() {
  return <div>Conteúdo</div>;
}
```

## Important Notes

- All pages use Brazilian Portuguese (`pt-BR`)
- SEO is critical - always add metadata to new pages
- Theme system supports dark mode but is currently disabled (enableSystem=false)
- Always use provided path aliases (`@/`) for imports
- CSS variables enable easy theming - avoid hardcoded colors
