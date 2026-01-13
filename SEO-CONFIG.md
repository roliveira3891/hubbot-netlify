# 📊 Configuração SEO - HubBot Next.js

## ✅ Implementações Realizadas

### 1. **Arquivo de Configuração Centralizado** (`lib/seo.ts`)

Todas as configurações SEO em um único lugar:

- **siteConfig**: Informações do site (nome, URL, descrição, keywords)
- **baseMetadata**: Metadata padrão para todas as páginas
- **createMetadata()**: Helper para criar metadata de páginas específicas
- **JSON-LD Schemas**: Organization, Website, SoftwareApplication

### 2. **Variáveis de Ambiente** (`.env.local`)

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-code
```

**Em produção, altere para:**
```env
NEXT_PUBLIC_SITE_URL=https://hubbot.com.br
```

### 3. **Metadata Otimizada em Todas as Páginas**

Cada página possui metadata completa:

#### Home (`/`)
- Title: "Agentes de IA para Telecomunicações | HubBot"
- Description otimizada com números (70% redução de custos)
- Keywords específicas: "chatbot whatsapp", "SAC automatizado", etc.

#### Produto (`/produto`)
- Title: "Plataforma Completa de IA para Atendimento"
- Keywords técnicas: "inbox unificada", "workflows automação"

#### Segmentos (`/segmentos`)
- Title: "Soluções por Segmento"
- Keywords por setor: "e-commerce chatbot", "fintech atendimento"

### 4. **Open Graph & Twitter Cards**

Todas as páginas incluem:
- `og:title`, `og:description`, `og:image`
- `twitter:card`, `twitter:title`, `twitter:image`
- URLs canônicas
- Locale: pt_BR

### 5. **JSON-LD Structured Data**

Implementado no layout raiz:

```json
{
  "@type": "Organization",
  "name": "HubBot",
  "url": "https://hubbot.com.br",
  "logo": "...",
  "contactPoint": {...}
}
```

```json
{
  "@type": "WebSite",
  "name": "HubBot",
  "potentialAction": {
    "@type": "SearchAction",
    ...
  }
}
```

### 6. **Robots.txt** (`public/robots.txt`)

```txt
User-agent: *
Allow: /
Sitemap: http://localhost:3000/sitemap.xml
```

### 7. **Sitemap Dinâmico** (`app/sitemap.ts`)

Gerado automaticamente pelo Next.js:
- `/` (priority: 1.0)
- `/produto` (priority: 0.8)
- `/segmentos` (priority: 0.8)

Acesse: `http://localhost:3000/sitemap.xml`

### 8. **PWA Manifest** (`public/site.webmanifest`)

```json
{
  "name": "HubBot",
  "theme_color": "#0EA5E9",
  "background_color": "#ffffff"
}
```

### 9. **Favicons**

Configurado para:
- `/favicon.svg` (SVG adaptável)
- `/favicon-16x16.png`
- `/favicon-32x32.png`
- `/apple-touch-icon.png`

**Nota:** Você precisa gerar os PNGs a partir do favicon.svg existente.

---

## 🚀 Como Usar

### Desenvolvimento Local

```bash
npm run dev
```

Acesse:
- Site: http://localhost:3000
- Sitemap: http://localhost:3000/sitemap.xml
- Robots: http://localhost:3000/robots.txt

### Build de Produção

```bash
npm run build
npm start
```

### Deploy

**Antes do deploy:**

1. Atualizar `.env.local` ou criar variáveis no Vercel:
```env
NEXT_PUBLIC_SITE_URL=https://hubbot.com.br
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=seu-codigo-do-google
```

2. Atualizar `public/robots.txt`:
```txt
Sitemap: https://hubbot.com.br/sitemap.xml
```

3. Gerar favicons PNG:
- 16x16, 32x32, 192x192, 512x512
- Apple Touch Icon 180x180

---

## 🔍 Testar SEO

### Google Search Console

1. Adicione `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` no `.env.local`
2. Verifique a propriedade no Google Search Console
3. Envie o sitemap: `https://hubbot.com.br/sitemap.xml`

### Ferramentas de Teste

- **Rich Results Test**: https://search.google.com/test/rich-results
- **Lighthouse**: DevTools → Lighthouse → SEO
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **Open Graph Debugger**: https://www.opengraph.xyz/

### Comandos para Testar Localmente

```bash
# Ver metadata gerada
curl http://localhost:3000 | grep -i "meta"

# Ver JSON-LD
curl http://localhost:3000 | grep -i "application/ld+json"

# Ver sitemap
curl http://localhost:3000/sitemap.xml

# Ver robots
curl http://localhost:3000/robots.txt
```

---

## 📝 Checklist Pré-Deploy

- [ ] Atualizar `NEXT_PUBLIC_SITE_URL` para URL de produção
- [ ] Gerar favicons em todos os tamanhos
- [ ] Criar imagem Open Graph (1200x630px)
- [ ] Configurar Google Search Console
- [ ] Configurar Google Analytics (opcional)
- [ ] Testar todas as páginas no Rich Results Test
- [ ] Verificar sitemap.xml em produção
- [ ] Submeter sitemap no Google Search Console

---

## 🎯 Próximos Passos (Opcional)

1. **Analytics**:
   - Google Analytics 4
   - Google Tag Manager
   - Facebook Pixel

2. **Mais Structured Data**:
   - FAQPage schema
   - BreadcrumbList
   - Product schema

3. **Imagens**:
   - Criar imagens Open Graph personalizadas por página
   - Adicionar alt text em todas as imagens

4. **Performance**:
   - Otimizar imagens com next/image
   - Lazy loading
   - Code splitting

---

## 📊 Métricas SEO Esperadas

Com essa configuração, você deve obter:

- ✅ **Google Lighthouse SEO**: 95-100
- ✅ **Core Web Vitals**: Bom
- ✅ **Mobile-Friendly**: Sim
- ✅ **Structured Data**: Válido
- ✅ **Sitemap**: Descoberto
- ✅ **Robots.txt**: Válido

---

## 🆘 Troubleshooting

### Sitemap não aparece

```bash
# Verificar se está gerando
npm run build
# Checar em .next/server/app/sitemap.xml
```

### Metadata não atualiza

```bash
# Limpar cache e rebuild
rm -rf .next
npm run build
```

### Variáveis de ambiente não funcionam

- Variáveis com `NEXT_PUBLIC_` são expostas no browser
- Reinicie o servidor após alterar .env.local
- No Vercel, configure nas Environment Variables

---

## 📚 Documentação

- [Next.js Metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Google SEO Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Schema.org](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)
