# 🚀 Guia Completo de Deployment e Monetização - RoteirAI

Este guia cobrirá como transformar seu SaaS de geração de roteiros em um negócio real e lucrativo.

## 📋 Índice

1. [Deploy na Nuvem](#deploy-na-nuvem)
2. [Monetização](#monetização)
3. [Escalabilidade](#escalabilidade)
4. [Integração com IA Real](#integração-com-ia-real)
5. [Segurança](#segurança)
6. [Analytics](#analytics)

---

## 🌐 Deploy na Nuvem

### Opção 1: Heroku (Recomendado para MVP)

Heroku é perfeito para começar. Deploy é automático e simples.

#### Passo a Passo:

```bash
# 1. Instale o Heroku CLI
# https://devcenter.heroku.com/articles/heroku-cli
# macOS: brew tap heroku/brew && brew install heroku
# Windows: Download do site
# Linux: curl https://cli-assets.heroku.com/install.sh | sh

# 2. Faça login
heroku login

# 3. Crie uma nova app
heroku create seu-roteiro-ai

# 4. Envie para Heroku
git push heroku claude/viral-script-generator-u3PKz:main

# 5. Abra sua app
heroku open
```

**Custo:** 
- Free: $0 (dyno gratuito dorme após 30 min)
- Hobby: $7/mês (sempre ativo)
- Professional: $25+/mês

**Vantagens:**
- ✅ Deploy em 2 minutos
- ✅ SSL automático
- ✅ Escalabilidade automática
- ✅ Logging integrado

---

### Opção 2: Railway.app (Mais Moderno)

Railway é mais barato e fácil que Heroku.

#### Passo a Passo:

```bash
# 1. Vá em railway.app
# 2. Clique em "Start a New Project"
# 3. Conecte seu repositório GitHub
# 4. Pronto! Eles fazem deploy automático a cada push
```

**Custo:**
- Você paga apenas pelo que usar
- $5 de crédito grátis por mês
- Geralmente: ~$3-10/mês

**Vantagens:**
- ✅ Mais barato
- ✅ Deploy automático
- ✅ Suporte a múltiplas linguagens
- ✅ Banco de dados incluído

---

### Opção 3: Render.com (Alternativa Heroku)

Parecido com Railway.

#### Passo a Passo:

```bash
# 1. Vá em render.com
# 2. Conecte seu GitHub
# 3. Crie um novo Web Service
# 4. Configure:
#    - Build Command: npm install
#    - Start Command: npm start
#    - Region: São Paulo (Brazil South)
```

**Custo:**
- Free (com limitações)
- Starter: $7/mês

---

### Opção 4: AWS (Para Escala)

Se você quer crescer rápido.

```bash
# 1. Crie conta em aws.amazon.com
# 2. Use Elastic Beanstalk ou App Runner
# 3. Configure CI/CD com GitHub Actions

# Comando para deploy:
eb create roteiro-ai-env
eb deploy
```

**Custo:** ~$50-200/mês dependendo do uso

**Vantagens:**
- ✅ Escalabilidade infinita
- ✅ Muitas integrações
- ✅ Confiabilidade de nível enterprise

---

## 💰 Monetização

### Modelo 1: Freemium (Recomendado para começar)

```javascript
// Adicione no backend (adicionar no server.js):

const usuariosLimites = {
  free: 10,        // 10 roteiros/mês
  pro: 500,        // Ilimitado
  premium: -1      // Ilimitado + features extras
};

// Exemplo de middleware para verificar limite
async function verificarLimite(req, res, next) {
  const usuario = req.user; // vindo do JWT
  const plano = usuario.plano || 'free';
  const limite = usuariosLimites[plano];
  const uso = usuario.rotetrosUsados;

  if (uso >= limite && limite !== -1) {
    return res.status(429).json({
      erro: 'Limite de roteiros atingido',
      limite: limite,
      uso: uso,
      upgrade: true
    });
  }
  next();
}
```

**Preços Sugeridos:**
```
Plano Free
- 10 roteiros/mês
- 1 estilo
- Sem suporte
- R$ 0,00

Plano Pro
- Roteiros ilimitados
- 4 estilos
- Prioridade na fila
- Download PDF
- Suporte por email
- R$ 29,90/mês

Plano Premium
- Tudo do Pro
- Integração com IA avançada
- Analytics detalhado
- API acesso
- Suporte prioritário
- Templates customizados
- R$ 99,90/mês
```

### Modelo 2: Pay-as-You-Go

```javascript
// Cobrança por uso
const precoPorRoteiro = 0.99; // R$ 0,99

async function gerarRoteiro(req, res) {
  // ... gerar roteiro ...

  // Registrar uso
  await registrarUso(usuario.id, 'roteiro', precoPorRoteiro);

  res.json({ sucesso: true, roteiro });
}
```

### Modelo 3: SaaS B2B (Agências)

Para agências e criadores profissionais:

```
Agência Pro
- API completa
- White label
- Suporte dedicado
- Análise de performance
- R$ 499/mês

Influencer
- 500+ roteiros/mês
- Templates exclusivos
- Suporte prioritário
- R$ 199/mês
```

---

## 🔧 Implementar Pagamento (Stripe)

### Instalação:

```bash
npm install stripe
```

### Configuração:

```javascript
// config/stripe.js
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Criar sessão de checkout
async function criarSessaoPagamento(preco, plano) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'brl',
        product_data: {
          name: `RoteirAI - Plano ${plano}`,
          description: 'Gerador de roteiros virais'
        },
        unit_amount: preco * 100 // Stripe quer em centavos
      },
      quantity: 1
    }],
    mode: 'subscription', // Para planos recorrentes
    success_url: 'https://seu-site.com/sucesso',
    cancel_url: 'https://seu-site.com/cancelado'
  });

  return session.id;
}
```

### No Frontend:

```html
<button onclick="pagar('pro')">Assinar Pro - R$ 29,90</button>

<script src="https://js.stripe.com/v3/"></script>
<script>
  const stripe = Stripe('pk_live_seu_chave_publica');

  async function pagar(plano) {
    const response = await fetch('/criar-sessao-pagamento', {
      method: 'POST',
      body: JSON.stringify({ plano })
    });
    const { sessionId } = await response.json();
    await stripe.redirectToCheckout({ sessionId });
  }
</script>
```

---

## 📈 Escalabilidade

### Adicionar Banco de Dados

Quando começar a ter usuários, adicione um banco:

```bash
npm install mongoose
```

```javascript
// models/Usuario.js
const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  nome: String,
  plano: { type: String, default: 'free' },
  rotetrosUsados: { type: Number, default: 0 },
  rotetirosFavoritos: [String],
  criadoEm: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Usuario', usuarioSchema);
```

### Adicionar Cache (Redis)

Para respostas mais rápidas:

```bash
npm install redis
```

```javascript
// services/cache.js
const redis = require('redis');
const client = redis.createClient();

async function getCache(key) {
  return await client.get(key);
}

async function setCache(key, value, expire = 3600) {
  await client.setEx(key, expire, value);
}
```

---

## 🤖 Integração com IA Real

### OpenAI (GPT-4)

Para gerar roteiros ainda melhores:

```bash
npm install openai
```

```javascript
// utils/gerador-ia.js
const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function gerarRoteiroComGPT(tema, estilo) {
  const prompt = `
    Crie um roteiro viral para TikTok/Reels com o seguinte:
    - Tema: ${tema}
    - Estilo: ${estilo}
    - Duração: 30-60 segundos
    - Tom: Envolvente e natural
    - Estrutura:
      1. Gancho (0-2s): Impactante e curiosidade
      2. Contexto (2-8s): Rápido e relevante
      3. Desenvolvimento (8-20s): Mantém interesse
      4. Clímax (20-25s): Ponto de virada
      5. Revelação (25-30s): Recompensa
      6. CTA (30-60s): Chamada à ação

    Retorne em JSON com as 6 seções.
  `;

  const message = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.8
  });

  return JSON.parse(message.choices[0].message.content);
}
```

### Anthropic Claude

Alternativa com melhor custo-benefício:

```bash
npm install @anthropic-ai/sdk
```

```javascript
const Anthropic = require('@anthropic-ai/sdk');

const client = new Anthropic();

async function gerarRoteiroComClaude(tema, estilo) {
  const message = await client.messages.create({
    model: 'claude-3-sonnet-20240229',
    max_tokens: 1024,
    messages: [
      {
        role: 'user',
        content: `Crie um roteiro viral para TikTok com tema "${tema}" e estilo "${estilo}"...`
      }
    ]
  });

  return message.content[0].text;
}
```

---

## 🔒 Segurança

### 1. Autenticação JWT

```bash
npm install jsonwebtoken bcryptjs
```

```javascript
// auth/jwt.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

function gerarToken(usuarioId) {
  return jwt.sign(
    { id: usuarioId },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
}

function verificarToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}

async function hashSenha(senha) {
  return await bcrypt.hash(senha, 10);
}
```

### 2. Rate Limiting

```bash
npm install express-rate-limit
```

```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100 // Máximo 100 requisições
});

app.use('/api/', limiter);
```

### 3. CORS e Headers de Segurança

```bash
npm install helmet
```

```javascript
const helmet = require('helmet');
app.use(helmet()); // Adiciona headers de segurança
```

### 4. Variáveis de Ambiente

Nunca commite chaves! Use `.env`:

```env
# .env (NÃO COMMITAR)
NODE_ENV=production
PORT=3000
JWT_SECRET=sua_chave_super_secreta_muito_longa
STRIPE_SECRET_KEY=sk_live_...
STRIPE_PUBLISHABLE_KEY=pk_live_...
OPENAI_API_KEY=sk-...
DATABASE_URL=mongodb://...
```

---

## 📊 Analytics

### Integração com Posthog (Grátis até certo uso)

```bash
npm install posthog-node
```

```javascript
const PostHog = require('posthog-node');

const posthog = new PostHog(
  process.env.POSTHOG_API_KEY,
  { host: 'https://app.posthog.com' }
);

// Rastrear eventos
app.post('/api/gerar-roteiro', async (req, res) => {
  posthog.capture({
    distinctId: req.user.id,
    event: 'roteiro_gerado',
    properties: {
      tema: req.body.tema,
      estilo: req.body.estilo,
      plano: req.user.plano
    }
  });

  // ... resto do código
});
```

### Métricas Importantes a Rastrear:

1. **Usuários Únicos por Dia**
2. **Roteiros Gerados por Dia**
3. **Taxa de Conversão (Free → Paid)**
4. **Retention Rate (30 dias)**
5. **Tempo Médio de Uso**
6. **Estilos Mais Populares**
7. **Temas Mais Buscados**

---

## 🎯 Checklist de Lançamento

### MVP (Semana 1-2)
- [x] Código funcionando localmente
- [ ] Deploy em staging (gratuito)
- [ ] Testar fluxo completo
- [ ] Melhorar UX baseado em feedback

### Beta (Semana 2-4)
- [ ] Implementar autenticação
- [ ] Implementar pagamento Stripe
- [ ] Criar landing page
- [ ] Configurar email marketing

### Produção (Semana 4+)
- [ ] Deploy em produção
- [ ] Configurar domínio
- [ ] SSL/HTTPS
- [ ] Backups automáticos
- [ ] Monitoramento
- [ ] Marketing e divulgação

---

## 📱 Marketing & Growth

### Estratégias Iniciais:

1. **Product Hunt**
   ```
   - Submeta seu SaaS
   - Melhor dia: Terça-feira
   - Pode gerar 1000+ usuários
   ```

2. **Twitter/X**
   ```
   - Compartilhe roteiros gerados
   - Mostre resultados virais
   - Engaje com criadores de conteúdo
   ```

3. **Email Marketing**
   ```bash
   npm install nodemailer
   ```

4. **Integração com Comunidades**
   ```
   - Discord de criadores de conteúdo
   - Comunidades de TikTokers
   - Grupos de empreendedores
   ```

5. **Parcerias com Influencers**
   ```
   - Ofereça plano premium gratuito
   - Peça feedback e testemunhos
   - Eles compartilham com audiência
   ```

---

## 💡 Próximos Passos

1. **Deploy em um dos serviços acima** (Rails é mais rápido)
2. **Teste com amigos** e colete feedback
3. **Implemente autenticação**
4. **Adicione pagamento**
5. **Marketing e growth**
6. **Monitore analytics**
7. **Itere baseado em dados**

---

**Parabéns! Você tem um SaaS pronto. Agora é escala que importa!** 🚀

Dúvidas? Abra uma issue ou entre em contato!
