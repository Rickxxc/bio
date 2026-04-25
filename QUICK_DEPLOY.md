# 🚀 Deploy Rápido - RoteirAI no Railway

## ⚡ Opção 1: Railway (Recomendado - 5 minutos)

### Passo 1: Criar conta no Railway

1. Vá em **https://railway.app**
2. Clique em **"Start a New Project"**
3. Clique em **"GitHub"** para conectar sua conta

### Passo 2: Autorizar GitHub

1. Clique em **"Authorize Railway"**
2. Autorize o Railway a acessar seus repositórios

### Passo 3: Deploy do Repositório

1. Procure por **"bio"** na lista de repositórios
2. Clique em **"Import"**
3. Railway vai detectar automaticamente que é um projeto Node.js
4. Clique em **"Deploy"**

### Passo 4: Esperar

- O Railway vai buildar seu projeto
- Vai levar 2-3 minutos
- Você verá logs em tempo real

### Passo 5: Acessar seu Site

1. Após deploy, você verá um domínio como:
   ```
   https://seu-projeto-production.up.railway.app
   ```
2. **Clique nele para acessar seu site ao vivo!** 🎉

---

## 🎯 Seu Site Agora Tem:

✅ Backend funcionando  
✅ Frontend responsivo  
✅ Gerador de roteiros ao vivo  
✅ HTTPS automático  
✅ Deploy automático (a cada push)  

---

## 📝 Usar Domínio Personalizado (Opcional)

Se tiver um domínio próprio (tipo `roteirai.com`):

1. No Railway, vá em **Settings** → **Domains**
2. Clique em **"Add Custom Domain"**
3. Digite seu domínio
4. Configure DNS (Railway mostra instruções)

**Domínios baratos:**
- Namecheap: R$ 15-30/ano
- Hostinger: R$ 20-40/ano
- Google Domains: R$ 20/ano

---

## 🔄 Deploy Automático

Pronto! Agora toda vez que você faz `git push`:

1. GitHub Actions roda testes
2. Railway faz deploy automático
3. Seu site atualiza em minutos

Não precisa fazer nada! Quer testar?

```bash
# Edite algo no código
echo "// teste" >> server.js

# Faça push
git add server.js
git commit -m "test: automatic deployment"
git push origin claude/viral-script-generator-u3PKz
```

Vá em https://railway.app e veja o deploy acontecendo em tempo real!

---

## 🎁 Planos Railway

**Gratuito (Recomendado para começar):**
- Você tem R$ 5 de crédito grátis por mês
- Suficiente para rodar seu site
- Sem cartão de crédito necessário

**Depois cresce:**
- Você paga apenas o que usar
- Geralmente R$ 5-15/mês
- Sem cobranças surpresas

---

## ❌ Troubleshooting

**Site não abre?**
- Espere 5 minutos após deploy
- Atualize a página (Ctrl+F5)
- Verifique logs em Railway

**Erro 502 Bad Gateway?**
- Verifique os logs em Railway
- Pode ser variável de ambiente faltando
- Entre em contato com suporte Railway

**Quer resetar tudo?**
- Vá em **Settings** → **Delete Project**
- Crie um novo deploy

---

## 🌐 Alternativas se Railway não funcionar

**Heroku:**
```bash
heroku login
heroku create seu-app
git push heroku claude/viral-script-generator-u3PKz:main
```

**Render.com:**
- Parecido com Railway
- Vá em render.com
- Conecte GitHub
- Deploy em 2 minutos

---

## 📊 Próximos Passos

Seu site está online! Agora:

1. **Teste tudo** - Gere alguns roteiros
2. **Compartilhe** - Mande para amigos
3. **Recolha feedback** - O que pode melhorar?
4. **Adicione autenticação** - Salvar roteiros favoritos
5. **Implemente pagamento** - Começar a ganhar

---

**Parabéns! Seu SaaS está no ar! 🚀**

Compartilhe seu link:
```
https://seu-projeto.up.railway.app
```

Sucesso! 💪
