# 🚀 Deploy no Netlify - Início Rápido

## 3 Passos Simples:

### 1️⃣ Preparar Git

```bash
cd nextjs-app
git init
git add .
git commit -m "Deploy inicial"
```

### 2️⃣ Push para GitHub

1. Criar repo: https://github.com/new
2. Copiar URL: `https://github.com/seu-usuario/hubbot-nextjs.git`

```bash
git remote add origin https://github.com/seu-usuario/hubbot-nextjs.git
git branch -M main
git push -u origin main
```

### 3️⃣ Deploy no Netlify

1. Acesse: https://app.netlify.com/
2. **Add new site** → **Import from Git**
3. Escolha **GitHub** → Selecione o repositório
4. Configurar:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. **Adicione variável de ambiente:**
   - Key: `NEXT_PUBLIC_SITE_URL`
   - Value: `https://placeholder.netlify.app` (atualizar depois)
6. **Deploy site**

### 4️⃣ Atualizar URL

Após o deploy:
1. Copie a URL gerada (ex: `wonderful-site-123.netlify.app`)
2. **Site settings** → **Environment variables**
3. Edite `NEXT_PUBLIC_SITE_URL` com a URL real
4. **Deploys** → **Trigger deploy** → **Clear cache**

---

## ✅ Pronto!

Seu site estará online em:
- `https://seu-site.netlify.app`

Toda vez que você fizer `git push`, o Netlify faz deploy automático! 🎉

---

## 📚 Documentação Completa

- `DEPLOY-NETLIFY.md` - Guia detalhado
- `NETLIFY-ENV-VARS.md` - Variáveis de ambiente

---

## 🆘 Problemas?

Build falhou?
```bash
# Testar local primeiro
npm run build
```

Se funcionar local mas falhar no Netlify:
- Verificar Node version (deve ser 18)
- Verificar variáveis de ambiente
- Ver logs no Netlify dashboard
