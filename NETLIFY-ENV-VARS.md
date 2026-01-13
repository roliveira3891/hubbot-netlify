# Variáveis de Ambiente para Netlify

## Configure estas variáveis no Netlify Dashboard:

**Site Settings → Environment Variables → Add a variable**

### Obrigatórias:

| Variável | Valor | Descrição |
|----------|-------|-----------|
| `NEXT_PUBLIC_SITE_URL` | `https://seu-site.netlify.app` | URL do seu site no Netlify |

### Opcionais (mas recomendadas):

| Variável | Valor | Descrição |
|----------|-------|-----------|
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | `seu-codigo-google` | Código de verificação do Google Search Console |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `G-XXXXXXXXXX` | Google Analytics 4 |
| `NEXT_PUBLIC_GTM_ID` | `GTM-XXXXXXX` | Google Tag Manager |
| `NEXT_PUBLIC_FACEBOOK_PIXEL_ID` | `XXXXXXXXXXXXXXX` | Facebook Pixel |

---

## Como adicionar no Netlify:

1. Acesse https://app.netlify.com/
2. Selecione seu site
3. Vá em **Site settings** → **Environment variables**
4. Clique em **Add a variable**
5. Adicione cada variável acima

---

## Após adicionar as variáveis:

1. Vá em **Deploys** → **Trigger deploy** → **Clear cache and deploy**
2. Aguarde o build terminar
3. Acesse seu site e verifique se tudo está funcionando

---

## Para encontrar a URL do Netlify:

Após o primeiro deploy, a URL será algo como:
- `https://nome-aleatorio-123456.netlify.app`

Você pode customizar em:
- **Site settings** → **Domain management** → **Custom domains**

---

## Verificar se as variáveis estão funcionando:

```bash
# Abra o console do navegador no seu site
console.log(process.env.NEXT_PUBLIC_SITE_URL)
```

Ou veja no source code:
- View Page Source → procure por "https://seu-site.netlify.app"
