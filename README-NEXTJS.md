# HubBot - Next.js (SSR Version)

Este é o projeto HubBot migrado de React + Vite para Next.js 15 com suporte a SSR (Server-Side Rendering) para melhorar o SEO.

## 🎯 Por que Next.js?

- **SEO Otimizado**: HTML renderizado no servidor para melhor indexação
- **Metadata por Página**: Tags meta dinâmicas para cada rota
- **Performance**: Otimizações automáticas de imagens e código
- **SSG/SSR**: Páginas estáticas geradas em build time

## 🚀 Como usar

### Desenvolvimento
\`\`\`bash
npm run dev
\`\`\`

O servidor será iniciado em \`http://localhost:3000\`

### Build de Produção
\`\`\`bash
npm run build
\`\`\`

### Preview de Produção
\`\`\`bash
npm run build
npm start
\`\`\`

## 📁 Estrutura

- **app/**: App Router do Next.js com layouts e páginas
- **components/**: Componentes React reutilizáveis
- **components/ui/**: Componentes shadcn/ui
- **public/assets/**: Imagens e assets estáticos
- **lib/**: Utilitários e helpers

## 📄 Páginas com SEO

Todas as páginas incluem metadata otimizada para SEO:

- **/** - Home (Agentes de IA para Telecomunicações)
- **/produto** - Produtos e funcionalidades
- **/segmentos** - Soluções por setor

## 🔧 Tecnologias

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui
- TanStack Query
- next-themes
