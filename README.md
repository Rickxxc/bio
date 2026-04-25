# 🎬 RoteirAI - Gerador de Scripts Virais para TikTok e Reels

Um SaaS moderno que gera roteiros virais de qualidade profissional em segundos usando IA. Perfeito para criadores de conteúdo que querem economizar tempo e aumentar engagement.

## ✨ Características

✅ **4 Estilos de Roteiros:**
- 🔍 **Curiosidade** - Despertam curiosidade e mistério
- 📖 **Storytelling** - Histórias emocionantes e envolventes
- ⚡ **Polêmico** - Conteúdo que gera debate
- 🚀 **Motivacional** - Inspiração e ação

✅ **Estrutura Profissional:**
- 🎣 Gancho impactante (0-2s)
- 📖 Contexto rápido (2-8s)
- 🌀 Desenvolvimento (8-20s)
- 🔥 Clímax (20-25s)
- 💎 Revelação (25-30s)
- 👍 CTA - Chamada à Ação (30-60s)

✅ **Interface Intuitiva:**
- Design moderno e responsivo
- Cópia instantânea de scripts
- Download em TXT
- Geradores infinitos (novo roteiro a cada clique)

## 🚀 Como Rodar Localmente

### Pré-requisitos
- Node.js 14+ instalado
- npm ou yarn

### Instalação Rápida

```bash
# 1. Clone ou entre no diretório do projeto
cd bio

# 2. Instale as dependências
npm install

# 3. Inicie o servidor
npm start

# 4. Abra no navegador
# http://localhost:3000
```

Pronto! 🎉 O servidor está rodando e você pode começar a gerar roteiros.

## 📁 Estrutura do Projeto

```
bio/
├── server.js                 # Servidor Express principal
├── package.json              # Dependências do projeto
├── .env                      # Variáveis de ambiente
├── README.md                 # Este arquivo
├── public/                   # Arquivos do frontend
│   ├── index.html            # Interface HTML
│   ├── styles.css            # Estilos CSS
│   └── script.js             # Lógica do frontend
└── utils/                    # Utilitários do backend
    └── gerador.js            # Motor de geração de roteiros
```

## 🔧 Configuração

### Variáveis de Ambiente (.env)

```env
PORT=3000              # Porta do servidor (padrão 3000)
NODE_ENV=development   # Ambiente (development/production)
```

## 📚 API Endpoints

### GET /api/status
Verifica se o servidor está funcionando.

```bash
curl http://localhost:3000/api/status
```

Resposta:
```json
{
  "status": "Servidor funcionando ✅"
}
```

### POST /api/gerar-roteiro
Gera um novo roteiro viral.

**Request:**
```bash
curl -X POST http://localhost:3000/api/gerar-roteiro \
  -H "Content-Type: application/json" \
  -d '{
    "tema": "inteligência artificial",
    "estilo": "curiosidade"
  }'
```

**Response (Sucesso):**
```json
{
  "sucesso": true,
  "roteiro": {
    "tema": "inteligência artificial",
    "estilo": "curiosidade",
    "timestamp": "2025-04-25T10:30:00.000Z",
    "secoes": {
      "gancho": "Descobri algo que você NÃO sabia sobre inteligência artificial...",
      "contexto": "Há pouco tempo aprendi algo surpreendente:",
      "desenvolvimento": "Estudos mostram que inteligência artificial funciona diferente...",
      "climax": "E aqui vem o melhor...",
      "revelacao": "A chave do inteligência artificial que todos querem saber é...",
      "cta": "Se você quer dominar inteligência artificial, começa agora"
    },
    "scriptCompleto": "...",
    "duracao": "2.45 minutos (para leitura em ritmo viral)"
  }
}
```

**Response (Erro):**
```json
{
  "sucesso": false,
  "mensagem": "Tema e estilo são obrigatórios"
}
```

## 🎯 Como Usar a Interface

1. **Digite o Tema**: Seja específico! (ex: "dicas de economia pessoal")
2. **Escolha o Estilo**: Clique em um dos 4 estilos disponíveis
3. **Clique em "Gerar Roteiro"**: Aguarde alguns segundos
4. **Copie o Script**: Use o botão "Copiar Script" ou as seções individuais
5. **Use em seus Vídeos**: Cole no editor de vídeos ou use como base

### Dicas de Sucesso

- ✅ **Tema específico** = Melhor roteiro
- ✅ **Teste todos os estilos** para encontrar qual funciona melhor
- ✅ **Adapte a linguagem** ao seu público
- ✅ **Use o gancho** como sua primeira frase
- ✅ **Mantenha o ritmo** durante a gravação

## 🚀 Transformando em um SaaS Real

### 1. Deploy na Nuvem

#### Opção A: Heroku (Recomendado para começar)
```bash
# Instale o Heroku CLI
# https://devcenter.heroku.com/articles/heroku-cli

# Faça login
heroku login

# Crie uma nova app
heroku create seu-app-name

# Faça deploy
git push heroku main

# Abra sua app
heroku open
```

#### Opção B: Railway (Mais fácil ainda)
```bash
# Conecte seu repositório no railway.app
# Eles farão deploy automático a cada push
```

#### Opção C: Render.com
```bash
# Parecido com Railway, conecte no render.com
# Deploy automático
```

### 2. Integração com IA Real

Você pode integrar com APIs de IA para gerar roteiros ainda melhores:

#### OpenAI (ChatGPT)
```javascript
// Exemplo de integração no utils/gerador.js
const axios = require('axios');

async function gerarRoteiroComIA(tema, estilo) {
  const prompt = `Crie um roteiro viral para TikTok/Reels...`;

  const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.8
    },
    {
      headers: { 'Authorization': `Bearer ${process.env.OPENAI_API_KEY}` }
    }
  );

  return response.data.choices[0].message.content;
}
```

### 3. Monetização

#### Opção 1: Plano Freemium
```
Grátis: 10 roteiros/mês
Pro: R$ 29/mês - Roteiros ilimitados
Premium: R$ 99/mês - IA avançada + analytics
```

#### Opção 2: Por Uso
```
Pay-as-you-go: R$ 0,99 por roteiro
```

#### Opção 3: SaaS B2B
```
Agências: R$ 499/mês - API + white label
Influenciadores: R$ 99/mês - Roteiros premium
```

### 4. Adicione Banco de Dados (Opcional)

Para guardar roteiros favoritos e histórico:

```bash
npm install mongoose
```

```javascript
// models/Roteiro.js
const schema = {
  usuario_id: String,
  tema: String,
  estilo: String,
  scriptCompleto: String,
  criadoEm: Date,
  favorito: Boolean
};
```

### 5. Autenticação

```bash
npm install jsonwebtoken bcryptjs
```

Implement OAuth com Google/GitHub para login.

### 6. Analytics

Integre com Mixpanel ou Amplitude para rastrear:
- Temas mais populares
- Estilos mais usados
- Período de pico
- Taxa de conversão

### 7. Email Marketing

Envie roteiros semanais para subscritores:

```bash
npm install nodemailer
```

## 📊 Roadmap de Melhorias

- [ ] Integração com APIs de IA (GPT-4, Claude)
- [ ] Sistema de autenticação e contas de usuário
- [ ] Banco de dados para salvar roteiros favoritos
- [ ] Analytics e métricas
- [ ] Gerador de thumbnails
- [ ] Integração com TikTok/Instagram APIs
- [ ] Mobile app (React Native)
- [ ] Comunidade de criadores
- [ ] Marketplace de templates

## 🤝 Contribuindo

Encontrou um bug? Tem sugestão? Abra uma issue!

## 📝 Licença

MIT - Sinta-se livre para usar em seus projetos pessoais ou comerciais

## 🎓 Aprenda Mais

- [Node.js Documentation](https://nodejs.org/docs/)
- [Express.js Guide](https://expressjs.com/)
- [API REST Best Practices](https://restfulapi.net/)

---

**Feito com ❤️ para criadores de conteúdo viral**

Dúvidas? Abra uma issue ou entre em contato!
