# 🚀 Deploy no Netlify - Guia Completo

## Pré-requisitos

- [ ] Conta no GitHub
- [ ] Conta no Netlify (gratuita): https://app.netlify.com/signup
- [ ] Código commitado no Git

---

## Opção 1: Deploy via GitHub (Recomendado) ⭐

### Passo 1: Preparar o Repositório GitHub

```bash
cd nextjs-app

# Inicializar git (se ainda não fez)
git init

# Adicionar todos os arquivos
git add .

# Fazer primeiro commit
git commit -m "Initial commit - HubBot Next.js"

# Criar repositório no GitHub (vá em github.com/new)
# Depois conecte:
git remote add origin https://github.com/seu-usuario/hubbot-nextjs.git
git branch -M main
git push -u origin main
```

### Passo 2: Conectar com Netlify

1. Acesse https://app.netlify.com/
2. Clique em **Add new site** → **Import an existing project**
3. Escolha **GitHub**
4. Autorize o Netlify a acessar seu GitHub
5. Selecione o repositório `hubbot-nextjs`

### Passo 3: Configurar Build Settings

O Netlify deve detectar automaticamente. Confirme:

- **Branch to deploy**: `main`
- **Build command**: `npm run build`
- **Publish directory**: `.next`

⚠️ **Importante:** O `netlify.toml` já está configurado, então pode deixar os campos vazios que ele usará o arquivo.

### Passo 4: Adicionar Variáveis de Ambiente

Antes de fazer deploy:

1. Clique em **Show advanced** → **New variable**
2. Adicione:
   - **Key**: `NEXT_PUBLIC_SITE_URL`
   - **Value**: `https://seu-site.netlify.app` (você vai pegar essa URL depois)

Por enquanto, use um placeholder:
   - **Value**: `https://placeholder.netlify.app`

### Passo 5: Deploy!

1. Clique em **Deploy site**
2. Aguarde 2-3 minutos
3. ✅ Seu site estará no ar!

### Passo 6: Configurar URL Correta

1. Após o deploy, copie a URL gerada (ex: `https://random-name-123.netlify.app`)
2. Vá em **Site settings** → **Environment variables**
3. Edite `NEXT_PUBLIC_SITE_URL` com a URL real
4. Vá em **Deploys** → **Trigger deploy** → **Clear cache and deploy**

### Passo 7: Customizar Domínio (Opcional)

1. **Site settings** → **Domain management**
2. **Add custom domain**
3. Adicione seu domínio (ex: `hubbot.io`)
4. Configure DNS conforme instruções do Netlify

---

## Opção 2: Deploy via Netlify CLI

### Passo 1: Instalar Netlify CLI

```bash
npm install -g netlify-cli
```

### Passo 2: Login

```bash
netlify login
```

### Passo 3: Inicializar

```bash
cd nextjs-app
netlify init
```

Escolha:
- **Create & configure a new site**
- **Team**: Seu time
- **Site name**: hubbot-nextjs (ou outro nome)

### Passo 4: Deploy

```bash
# Build local
npm run build

# Deploy
netlify deploy --prod
```

---

## Opção 3: Deploy Manual (Drag & Drop)

### Passo 1: Build Local

```bash
cd nextjs-app
npm run build
```

### Passo 2: Deploy

1. Acesse https://app.netlify.com/drop
2. Arraste a pasta `.next` para a área de drop
3. ⚠️ **Não recomendado** - perde integração contínua

---

## ⚙️ Configurações Pós-Deploy

### 1. Configurar Variáveis de Ambiente

Veja: `NETLIFY-ENV-VARS.md`

**Mínimo necessário:**
```
NEXT_PUBLIC_SITE_URL=https://seu-site.netlify.app
```

### 2. Atualizar robots.txt

⚠️ O `robots.txt` tem a URL hardcoded. Após o deploy:

**Opção A:** Usar variável de ambiente (requer rebuild)

Edite `public/robots.txt`:
```txt
Sitemap: https://seu-site.netlify.app/sitemap.xml
```

**Opção B:** Criar robots.txt dinâmico

Crie `app/robots.ts`:
```typescript
import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/seo'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}
```

Depois delete `public/robots.txt`.

### 3. Configurar Headers de Segurança

Já está configurado no `netlify.toml` ✅

### 4. Ativar HTTPS

✅ Automático no Netlify (Let's Encrypt)

---

## 🔄 Atualizações Futuras

### Via GitHub (Deploy Automático)

```bash
# Fazer alterações
git add .
git commit -m "Descrição das mudanças"
git push

# Netlify faz deploy automaticamente!
```

### Via CLI

```bash
npm run build
netlify deploy --prod
```

---

## 📊 Monitoramento

### Verificar Deploy

1. **Deploys** → Ver logs
2. Procure por erros em vermelho
3. Deploy bem-sucedido = verde ✅

### Testar o Site

```bash
# Sua URL será algo como:
https://seu-site.netlify.app

# Testar páginas:
https://seu-site.netlify.app/
https://seu-site.netlify.app/produto
https://seu-site.netlify.app/segmentos
https://seu-site.netlify.app/sitemap.xml
https://seu-site.netlify.app/robots.txt
```

### Analytics

Netlify oferece analytics básico:
- **Analytics** tab no dashboard

---

## 🐛 Troubleshooting

### Build falhou

**Erro:** "Command failed with exit code 1"

**Solução:**
```bash
# Testar local
cd nextjs-app
rm -rf .next node_modules
npm install
npm run build

# Se funcionar local, verificar:
# 1. Node version no netlify.toml (deve ser 18)
# 2. Variáveis de ambiente
# 3. Logs do Netlify
```

### Página 404

**Problema:** Rotas do Next.js não funcionam

**Solução:** Certifique-se que:
- `netlify.toml` existe
- Plugin `@netlify/plugin-nextjs` está no toml
- Fez deploy da raiz do projeto

### Variáveis não funcionam

**Problema:** `process.env.NEXT_PUBLIC_SITE_URL` é undefined

**Solução:**
1. Variáveis devem começar com `NEXT_PUBLIC_`
2. Após adicionar variável, fazer novo deploy
3. Verificar no console do navegador

---

## 📝 Checklist Final

Após o deploy, verifique:

- [ ] Site está no ar
- [ ] Todas as páginas carregam (/, /produto, /segmentos)
- [ ] Sitemap funciona (/sitemap.xml)
- [ ] Robots.txt funciona (/robots.txt)
- [ ] Metadata está correto (View Source)
- [ ] Open Graph funciona (testar no Facebook Debugger)
- [ ] HTTPS está ativo (cadeado verde)
- [ ] Google Search Console configurado
- [ ] Sitemap submetido ao Google

---

## 🎯 Performance Tips

### 1. Habilitar Netlify Image CDN

```bash
# Já configurado no netlify.toml com cache headers
```

### 2. Deploy Previews

Toda PR no GitHub gera preview automático!

### 3. Branch Deploys

Configure branch deploys para staging:
- **Site settings** → **Build & deploy** → **Branches**

---

## 💰 Custos

**Netlify Free Tier:**
- ✅ 100 GB bandwidth/mês
- ✅ 300 build minutes/mês
- ✅ Deploy automático
- ✅ HTTPS grátis
- ✅ CDN global

**Suficiente para sites pequenos/médios!**

---

## 🆘 Suporte

- Docs: https://docs.netlify.com/
- Community: https://answers.netlify.com/
- Status: https://www.netlifystatus.com/

---

## 🎉 Pronto!

Seu site está no ar com:
- ✅ Next.js SSG/SSR
- ✅ SEO otimizado
- ✅ Deploy automático
- ✅ HTTPS
- ✅ CDN global

**URL do site:** https://seu-site.netlify.app

Compartilhe e divirta-se! 🚀
