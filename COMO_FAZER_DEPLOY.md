# 🌐 Como Fazer Deploy do RoteirAI - Guia Completo com Prints

## 📱 Resumo Rápido

Você vai ter seu site online em **menos de 5 minutos** usando Railway (é grátis!).

---

## 🚀 Passo 1: Criar Conta no Railway

1. Abra: **https://railway.app**

2. Clique em **"Start Free"** ou **"Sign Up"**

3. Você pode:
   - ✅ Login com GitHub (mais fácil)
   - Login com email
   - Login com Google

**Recomendação:** Use seu GitHub para conectar tudo automaticamente!

---

## 🔗 Passo 2: Conectar seu GitHub

1. Na Railway, clique em **"GitHub"** para fazer login

2. Autorize Railway a acessar seus repositórios GitHub
   - Clique em **"Authorize Railway"**

3. Você volta para Railway logado

---

## 📦 Passo 3: Importar seu Repositório

1. Clique em **"New Project"**

2. Clique em **"Deploy from GitHub"**

3. Procure por **"bio"** na lista ou seus repositórios

4. Clique em **"Import"** next to "bio"

5. Railway vai detectar:
   ```
   ✅ Node.js project detected
   ✅ Port: 3000
   ✅ Start command: npm start
   ```

---

## ⚙️ Passo 4: Configurar Variáveis de Ambiente

1. Na Railway, você vê a aba **"Variables"**

2. Adicione (se Railway não detectar automático):
   ```
   NODE_ENV = production
   PORT = 3000
   ```

3. Clique em **"Save"**

---

## 🎬 Passo 5: Deploy!

1. Clique em **"Deploy"** (ou já pode estar deployando)

2. Você vê a aba **"Deployments"**

3. Assista os logs em tempo real:
   ```
   npm install ✅
   npm start ✅
   Servidor rodando ✅
   ```

4. Quando terminar, muda para status **"Success"** ✅

---

## 🌍 Passo 6: Acessar seu Site

Quando o deploy acabar:

1. Vá para a aba **"Settings"**

2. Procure por **"Public URL"** ou **"Domains"**

3. Você verá algo como:
   ```
   https://bio-production-XXX.up.railway.app
   ```

4. **CLIQUE NO LINK!** 🎉

Seu site está online!

---

## ✅ O que Você Deve Ver

Abrindo seu URL:

```
┌─────────────────────────────────────┐
│         RoteirAI                    │
│    Roteiros Virais em Segundos      │
│                                     │
│  [Campo de tema]                   │
│  [4 botões de estilo]              │
│  [Botão Gerar Roteiro]             │
└─────────────────────────────────────┘
```

Se você for pressionando "Gerar Roteiro" e aparecer um script - **FUNCIONOU!** ✅

---

## 🔄 Passo 7: Deploy Automático (Bônus)

Agora toda vez que você faz `git push`:

```bash
git push origin claude/viral-script-generator-u3PKz
```

Railway faz deploy automático! Não precisa fazer nada manualmente.

---

## 🎨 Personalizando seu Domínio (Opcional)

Se tiver um domínio próprio:

1. No Railway: **Settings** → **Domains**

2. **Add Custom Domain**

3. Digite: `seudominio.com`

4. Railway mostra como configurar DNS

**Domínios baratos:**
- Hostinger: R$ 20-30/ano
- Namecheap: R$ 10-20/ano
- Google Domains: R$ 20/ano

---

## 💰 Custo

**Grátis os primeiros meses:**
- R$ 5 de crédito grátis/mês
- Suficiente para rodar seu site
- Depois: você só paga o que usar (geralmente R$ 5-15/mês)

---

## 🚨 Se Algo Der Errado

### Erro: "Build Failed"

Vá em:
- **Deployments** → Ver o log
- Procure por mensagens de erro
- Geralmente é falta de variável de ambiente

### Erro: "502 Bad Gateway"

- Seu site pode estar derrubando
- Verifique os logs
- Teste localmente: `npm start`

### Não Funciona Mesmo

Entre em contato:
- Railway Support: https://railway.app/support
- Abra issue no GitHub: https://github.com/Rickxxc/bio/issues

---

## 📊 Próximos Passos Depois de Online

Seu site está live! Agora:

1. **Teste tudo**
   ```
   - Digite um tema
   - Gere alguns roteiros
   - Teste no celular (abra em mobile)
   - Copie o script
   ```

2. **Compartilhe**
   ```
   Mande para amigos:
   "Criei um app que gera roteiros virais!"
   https://seu-link.up.railway.app
   ```

3. **Colete feedback**
   - O que funcionou?
   - O que pode melhorar?
   - Qual estilo é melhor?

4. **Próxima feature**
   - Adicione autenticação
   - Implemente pagamento
   - Analytics

---

## 🎯 Checklist Final

- [ ] Criei conta no Railway
- [ ] Conectei meu GitHub
- [ ] Importei o repositório "bio"
- [ ] Cliquei em Deploy
- [ ] Recebi a URL pública
- [ ] Testei o site
- [ ] Gerei alguns roteiros
- [ ] Funcionou tudo! ✅

---

## 🎉 PARABÉNS!

Você tem um **SaaS completo funcionando online!**

Seu site:
- ✅ Tem frontend bonito
- ✅ Tem backend funcionando
- ✅ Gera roteiros virais
- ✅ Está disponível 24/7
- ✅ Deploy automático

Próximo: monetização! 💰

---

**URL do seu site:**
```
https://bio-production-XXX.up.railway.app
```

**Compartilhe isso!** Você criou um produto real em poucas horas. Isso é incrível! 🚀

Qualquer dúvida: abra uma issue ou entre em contato!
