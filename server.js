const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Importar gerador de roteiros
const { gerarRoteiro } = require('./utils/gerador');

// Rota raiz
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para gerar roteiro
app.post('/api/gerar-roteiro', (req, res) => {
  try {
    const { tema, estilo } = req.body;

    // Validar entrada
    if (!tema || !estilo) {
      return res.status(400).json({
        sucesso: false,
        mensagem: 'Tema e estilo são obrigatórios'
      });
    }

    // Validar estilo
    const estilosValidos = ['curiosidade', 'storytelling', 'polemico', 'motivacional'];
    if (!estilosValidos.includes(estilo.toLowerCase())) {
      return res.status(400).json({
        sucesso: false,
        mensagem: 'Estilo inválido'
      });
    }

    // Gerar roteiro
    const roteiro = gerarRoteiro(tema, estilo.toLowerCase());

    // Responder com sucesso
    res.json({
      sucesso: true,
      roteiro: roteiro
    });
  } catch (erro) {
    console.error('Erro ao gerar roteiro:', erro);
    res.status(500).json({
      sucesso: false,
      mensagem: 'Erro ao gerar roteiro'
    });
  }
});

// Health check
app.get('/api/status', (req, res) => {
  res.json({ status: 'Servidor funcionando ✅' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  console.log(`📝 Gerar roteiro: POST http://localhost:${PORT}/api/gerar-roteiro`);
});
