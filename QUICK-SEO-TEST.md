# 🚀 Teste Rápido de SEO

## Iniciar o Servidor

```bash
cd nextjs-app
npm run dev
```

## Testar no Navegador

### 1. Abrir DevTools (F12)

**Ver Metadata:**
```
View Page Source → Ctrl+F → buscar "meta"
```

Você deve ver:
- `<meta name="description">`
- `<meta property="og:title">`
- `<meta name="twitter:card">`

**Ver JSON-LD:**
```
View Page Source → Ctrl+F → buscar "application/ld+json"
```

Você deve ver schemas de Organization e WebSite.

### 2. Lighthouse (DevTools)

```
DevTools → Lighthouse → SEO → Generate report
```

Deve obter **95-100** de score SEO.

### 3. URLs para Testar

- Home: http://localhost:3000
- Produto: http://localhost:3000/produto
- Segmentos: http://localhost:3000/segmentos
- Sitemap: http://localhost:3000/sitemap.xml
- Robots: http://localhost:3000/robots.txt

## Testar com Curl

```bash
# Ver todas as meta tags
curl http://localhost:3000 | grep -i "<meta"

# Ver title
curl http://localhost:3000 | grep -i "<title"

# Ver JSON-LD
curl http://localhost:3000 | grep -A 20 "application/ld+json"

# Ver sitemap
curl http://localhost:3000/sitemap.xml

# Ver robots
curl http://localhost:3000/robots.txt
```

## Testar Online (Após Deploy)

### Google Rich Results Test
https://search.google.com/test/rich-results

Cole a URL do seu site.

### Open Graph Debugger
https://www.opengraph.xyz/

Teste como aparecerá no Facebook, Twitter, LinkedIn.

### PageSpeed Insights
https://pagespeed.web.dev/

Teste performance e SEO juntos.

## Checklist Visual ✅

Na página home, inspecione o `<head>`:

- [ ] `<title>` único e descritivo
- [ ] `<meta name="description">` com 150-160 caracteres
- [ ] `<meta name="keywords">` relevantes
- [ ] `<link rel="canonical">` apontando para a URL correta
- [ ] Open Graph tags (`og:title`, `og:description`, `og:image`)
- [ ] Twitter Card tags
- [ ] JSON-LD scripts (Organization, WebSite)
- [ ] Favicon links
- [ ] `<html lang="pt-BR">`

## Build de Produção

```bash
npm run build
npm start
```

Acesse http://localhost:3000 e repita os testes.

---

## ⚠️ Antes do Deploy em Produção

1. **Atualizar .env.local**:
```env
NEXT_PUBLIC_SITE_URL=https://hubbot.com.br
```

2. **Atualizar robots.txt**:
```txt
Sitemap: https://hubbot.com.br/sitemap.xml
```

3. **Verificar metadata** em todas as páginas

4. **Testar no Google Search Console** após deploy
