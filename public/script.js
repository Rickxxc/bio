// Estado da aplicação
const state = {
  roteiro: null,
  carregando: false
};

// Elementos DOM
const elements = {
  formulario: document.getElementById('formularioRoteiro'),
  temaInput: document.getElementById('tema'),
  estiloInput: document.getElementById('estilo'),
  botaoGerar: document.getElementById('btnGerar'),
  estiloBotoes: document.querySelectorAll('.estilo-btn'),

  resultadoVazio: document.getElementById('resultadoVazio'),
  resultadoConteudo: document.getElementById('resultadoConteudo'),

  metaTema: document.getElementById('metaTema'),
  metaEstilo: document.getElementById('metaEstilo'),
  metaDuracao: document.getElementById('metaDuracao'),

  scriptCompleto: document.getElementById('scriptCompleto'),
  btnCopyScript: document.getElementById('btnCopyScript'),

  secaoGancho: document.getElementById('secaoGancho'),
  secaoContexto: document.getElementById('secaoContexto'),
  secaoDesenvolvimento: document.getElementById('secaoDesenvolvimento'),
  secaoClimax: document.getElementById('secaoClimax'),
  secaoRevelacao: document.getElementById('secaoRevelacao'),
  secaoCta: document.getElementById('secaoCta'),

  botoescopiarSecao: document.querySelectorAll('.btn-copy-small'),

  btnNovoRoteiro: document.getElementById('btnNovoRoteiro'),
  btnDownloadTxt: document.getElementById('btnDownloadTxt')
};

// Inicializar event listeners
function inicializar() {
  // Seleção de estilo
  elements.estiloBotoes.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      selecionarEstilo(btn);
    });
  });

  // Formulário
  elements.formulario.addEventListener('submit', gerarRoteiro);

  // Copiar scripts
  elements.btnCopyScript.addEventListener('click', () => {
    copiarTexto(elements.scriptCompleto.textContent, 'Script copiado!');
  });

  // Copiar seções
  elements.botoescopiarSecao.forEach(btn => {
    btn.addEventListener('click', () => {
      const secao = btn.dataset.secao;
      const texto = elements[`secao${secao.charAt(0).toUpperCase() + secao.slice(1)}`].textContent;
      copiarTexto(texto, 'Seção copiada!');
    });
  });

  // Novo roteiro
  elements.btnNovoRoteiro.addEventListener('click', () => {
    elements.temaInput.value = '';
    elements.estiloInput.value = '';
    elements.estiloBotoes.forEach(btn => btn.classList.remove('active'));
    elements.resultadoVazio.style.display = 'flex';
    elements.resultadoConteudo.style.display = 'none';
    elements.temaInput.focus();
  });

  // Download
  elements.btnDownloadTxt.addEventListener('click', baixarRoteiro);
}

// Selecionar estilo
function selecionarEstilo(btn) {
  const estilo = btn.dataset.estilo;

  // Remover active de todos
  elements.estiloBotoes.forEach(b => b.classList.remove('active'));

  // Adicionar active ao clicado
  btn.classList.add('active');

  // Atualizar input hidden
  elements.estiloInput.value = estilo;
}

// Gerar roteiro
async function gerarRoteiro(e) {
  e.preventDefault();

  const tema = elements.temaInput.value.trim();
  const estilo = elements.estiloInput.value.trim();

  // Validações
  if (!tema) {
    mostrarErro('Por favor, digite um tema');
    return;
  }

  if (!estilo) {
    mostrarErro('Por favor, escolha um estilo');
    return;
  }

  try {
    // Mostrar carregamento
    state.carregando = true;
    elements.botaoGerar.disabled = true;
    elements.botaoGerar.querySelector('.btn-text').style.display = 'none';
    elements.botaoGerar.querySelector('.btn-loader').style.display = 'inline-block';

    // Fazer requisição
    const resposta = await fetch('/api/gerar-roteiro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ tema, estilo })
    });

    if (!resposta.ok) {
      throw new Error('Erro ao gerar roteiro');
    }

    const dados = await resposta.json();

    if (dados.sucesso) {
      state.roteiro = dados.roteiro;
      exibirRoteiro(dados.roteiro);
    } else {
      mostrarErro(dados.mensagem || 'Erro ao gerar roteiro');
    }
  } catch (erro) {
    console.error('Erro:', erro);
    mostrarErro('Erro ao conectar com o servidor. Verifique sua conexão.');
  } finally {
    // Restaurar botão
    state.carregando = false;
    elements.botaoGerar.disabled = false;
    elements.botaoGerar.querySelector('.btn-text').style.display = 'inline-block';
    elements.botaoGerar.querySelector('.btn-loader').style.display = 'none';
  }
}

// Exibir roteiro
function exibirRoteiro(roteiro) {
  // Atualizar metadados
  elements.metaTema.textContent = roteiro.tema;
  elements.metaEstilo.textContent = capitalizar(roteiro.estilo);
  elements.metaDuracao.textContent = roteiro.duracao;

  // Script completo
  elements.scriptCompleto.textContent = roteiro.scriptCompleto;

  // Seções
  elements.secaoGancho.textContent = roteiro.secoes.gancho;
  elements.secaoContexto.textContent = roteiro.secoes.contexto;
  elements.secaoDesenvolvimento.textContent = roteiro.secoes.desenvolvimento;
  elements.secaoClimax.textContent = roteiro.secoes.climax;
  elements.secaoRevelacao.textContent = roteiro.secoes.revelacao;
  elements.secaoCta.textContent = roteiro.secoes.cta;

  // Mostrar resultado
  elements.resultadoVazio.style.display = 'none';
  elements.resultadoConteudo.style.display = 'flex';
}

// Copiar texto
async function copiarTexto(texto, mensagem = 'Copiado!') {
  try {
    await navigator.clipboard.writeText(texto);
    mostrarSucesso(mensagem);
  } catch (erro) {
    console.error('Erro ao copiar:', erro);
    mostrarErro('Erro ao copiar para a área de transferência');
  }
}

// Baixar roteiro
function baixarRoteiro() {
  if (!state.roteiro) return;

  const conteudo = `ROTEIRO VIRAL - ${state.roteiro.tema.toUpperCase()}
Estilo: ${capitalizar(state.roteiro.estilo)}
Duração: ${state.roteiro.duracao}
Gerado em: ${new Date().toLocaleString('pt-BR')}

═════════════════════════════════════════════════════════

${state.roteiro.scriptCompleto}

═════════════════════════════════════════════════════════

SEÇÕES DETALHADAS:

🎣 GANCHO (0-2 segundos):
${state.roteiro.secoes.gancho}

📖 CONTEXTO (2-8 segundos):
${state.roteiro.secoes.contexto}

🌀 DESENVOLVIMENTO (8-20 segundos):
${state.roteiro.secoes.desenvolvimento}

🔥 CLÍMAX (20-25 segundos):
${state.roteiro.secoes.climax}

💎 REVELAÇÃO (25-30 segundos):
${state.roteiro.secoes.revelacao}

👍 CTA - CHAMADA À AÇÃO (30-60 segundos):
${state.roteiro.secoes.cta}

═════════════════════════════════════════════════════════

Criado com RoteirAI - Roteiros Virais em Segundos
© 2025 RoteirAI
`;

  const blob = new Blob([conteudo], { type: 'text/plain' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `roteiro-${state.roteiro.tema.replace(/\s+/g, '-').toLowerCase()}.txt`;
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);

  mostrarSucesso('Roteiro baixado!');
}

// Utilitários
function capitalizar(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

// Notificações
function mostrarErro(mensagem) {
  mostrarNotificacao(mensagem, 'erro');
}

function mostrarSucesso(mensagem) {
  mostrarNotificacao(mensagem, 'sucesso');
}

function mostrarNotificacao(mensagem, tipo = 'info') {
  // Remover notificações anteriores
  const notificacaoAnterior = document.querySelector('.notificacao');
  if (notificacaoAnterior) {
    notificacaoAnterior.remove();
  }

  const notificacao = document.createElement('div');
  notificacao.className = `notificacao notificacao-${tipo}`;
  notificacao.textContent = mensagem;
  notificacao.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 12px 20px;
    border-radius: 8px;
    font-weight: 500;
    z-index: 10000;
    animation: slideIn 0.3s ease;
    ${tipo === 'erro' ? 'background: #fee; color: #c00; border: 1px solid #fcc;' : 'background: #efe; color: #060; border: 1px solid #cfc;'}
  `;

  document.body.appendChild(notificacao);

  // Auto remover
  setTimeout(() => {
    notificacao.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notificacao.remove(), 300);
  }, 3000);
}

// Adicionar estilos de animação
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(400px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideOut {
    to {
      opacity: 0;
      transform: translateX(400px);
    }
  }

  .notificacao {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 640px) {
    .notificacao {
      right: 10px !important;
      left: 10px !important;
    }
  }
`;
document.head.appendChild(style);

// Inicializar quando DOM está pronto
document.addEventListener('DOMContentLoaded', inicializar);
