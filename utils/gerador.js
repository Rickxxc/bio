// Template para geração de roteiros virais
// Este é um sistema inteligente que gera roteiros baseado em padrões psicológicos comprovados

const rotas = {
  curiosidade: {
    gancho: [
      'Descobri algo que você NÃO sabia sobre {{tema}}...',
      'Ninguém fala sobre isso, mas {{tema}} pode mudar sua vida',
      'Esse segredo sobre {{tema}} está liberado agora',
      'Isso que vou mostrar de {{tema}} é INSANO',
      'A maioria das pessoas erra completamente em {{tema}}'
    ],
    contexto: [
      'Há pouco tempo aprendi algo surpreendente:',
      'Deixa eu te contar o que descobri:',
      'Então, aqui está a verdade:',
      'Quando soube disso, meu mundo mudou:',
      'A realidade é que:'
    ],
    desenvolvimento: [
      'Estudos mostram que {{tema}} funciona diferente do que todos pensam',
      'A maioria acredita que {{tema}} é assim, mas na verdade é assado',
      'O problema é que {{tema}} tem um lado que ngm conhece',
      'Existem 3 coisas sobre {{tema}} que vão te surpreender',
      'A verdade sobre {{tema}} é muito mais complexa'
    ],
    climax: [
      'E aqui vem o melhor...',
      'Mas espera, tem mais!',
      'Agora vem a parte que ninguém esperava...',
      'Esse é o detalhe que muda TUDO...',
      'E essa é a revelação que todos queriam:'
    ],
    revelacao: [
      'A chave do {{tema}} que todos querem saber é...',
      'O hack secreto de {{tema}} é simplesmente...',
      'Isso muda completamente como você vê {{tema}}...',
      'Essa informação sobre {{tema}} vale ouro...',
      'Esse é o passo que faz {{tema}} funcionar de verdade...'
    ],
    cta: [
      'Se você quer dominar {{tema}}, começa agora',
      'Compartilha esse conhecimento que alguém que você ama pode aproveitar {{tema}}',
      'Me conta nos comentários: já conhecia esse lado de {{tema}}?',
      'Salva esse vídeo para não esquecer esse hack de {{tema}}',
      'Qual é sua experiência com {{tema}}? Comenta aí!'
    ]
  },

  storytelling: {
    gancho: [
      'Deixa eu contar uma história sobre {{tema}} que vai mudar como você pensa',
      'Essa história de {{tema}} é 100% real e CHOCANTE',
      'Tem um dia que aconteceu comigo e {{tema}} envolvido...',
      'A história que vou contar sobre {{tema}} é incrível',
      'Você não vai acreditar no que aconteceu com {{tema}}'
    ],
    contexto: [
      'Tudo começou quando eu não sabia nada sobre {{tema}}',
      'Naquela época, eu era completamente ignorante em {{tema}}',
      'Tem alguns meses, eu batalhava bastante com {{tema}}',
      'Era um dia comum, até que {{tema}} entrou na minha vida',
      'A história começa assim:'
    ],
    desenvolvimento: [
      'Aí começou a ficar interessante... {{tema}} me mostrou algo novo',
      'No meio do processo com {{tema}}, eu percebi algo muito importante',
      'A jornada com {{tema}} foi transformadora',
      'Enquanto eu tentava lidar com {{tema}}, descubri um padrão',
      'Cada passo com {{tema}} me aproximava da verdade'
    ],
    climax: [
      'E foi aí que tudo mudou com {{tema}}...',
      'Esse foi o ponto de virada da minha relação com {{tema}}',
      'Naquele momento crítico com {{tema}}, eu aprendi...',
      'Tudo culminou em um momento que jamais vou esquecer sobre {{tema}}',
      'E então aconteceu algo que eu nunca esperava com {{tema}}'
    ],
    revelacao: [
      'A lição sobre {{tema}} que tirei disso foi profunda',
      'Depois de tudo isso, percebí que {{tema}} era na verdade...',
      'O insight sobre {{tema}} que eu ganhei transformou meu entendimento',
      'Agora eu vejo {{tema}} de uma forma completamente diferente',
      'A verdade sobre {{tema}} que descobri foi:'
    ],
    cta: [
      'Qual é sua história com {{tema}}? Comenta aí qual foi sua experiência!',
      'Você já passou por algo parecido com {{tema}}? Quer compartilhar?',
      'Se você também tem uma história sobre {{tema}}, me conta!',
      'Faz aí nos comentários: qual foi sua descoberta com {{tema}}?',
      'Marca alguém que precisa ouvir essa história sobre {{tema}}'
    ]
  },

  polemico: {
    gancho: [
      'Vou falar algo que todos têm medo de falar sobre {{tema}}',
      'Ninguém tem coragem de dizer, mas a verdade sobre {{tema}} é essa',
      'Isso vai gerar polêmica, mas preciso falar: {{tema}} é...',
      'A narrativa sobre {{tema}} está completamente errada',
      'Prepare-se: o que vou contar sobre {{tema}} vai incomodar algumas pessoas'
    ],
    contexto: [
      'Todos falam sobre {{tema}} desse jeito, mas é mentira',
      'A versão oficial de {{tema}} que vendem por aí é falsa',
      'Existe uma grande mentira sobre {{tema}} que precisa ser exposta',
      'A maioria acredita na narrativa sobre {{tema}}, mas...',
      'Aqui está a verdade que ninguém quer reconhecer sobre {{tema}}:'
    ],
    desenvolvimento: [
      'Os fatos sobre {{tema}} mostram uma realidade bem diferente',
      'Se você pesquisar além das manchetes, {{tema}} revela um padrão preocupante',
      'Os números sobre {{tema}} não mentem, diferente do que dizem',
      'Quando você juntar os pontos sobre {{tema}}, fica óbvio',
      'A evidência sobre {{tema}} aponta para uma conclusão chocante'
    ],
    climax: [
      'E aqui está o ponto que ninguém quer discutir sobre {{tema}}...',
      'Mas isso que vou dizer sobre {{tema}} vai encher a timeline de discussão...',
      'E é por isso que a verdade sobre {{tema}} é tão polêmica...',
      'Isso explica por que as pessoas têm medo de falar sobre {{tema}}...',
      'Essa é a razão real por trás de {{tema}} que todos ignoram...'
    ],
    revelacao: [
      'A verdade incômoda sobre {{tema}} é que...',
      'Se todos fossem honestos sobre {{tema}}, diriam que...',
      'O segredo escondido sobre {{tema}} é simplesmente...',
      'Ninguém admite, mas sobre {{tema}} a realidade é...',
      'A verdade nua e crua sobre {{tema}} é que...'
    ],
    cta: [
      'Vocês concordam ou discordam? Bora debater {{tema}} nos comentários!',
      'Qual é seu ponto de vista sobre {{tema}}? Sou todo ouvidos',
      'Isso vai gerar discussão: qual é sua opinião sincera sobre {{tema}}?',
      'Se você acha que estou certo ou errado sobre {{tema}}, comenta aí!',
      'Marca alguém que precisa ouvir essa verdade sobre {{tema}}'
    ]
  },

  motivacional: {
    gancho: [
      'Se você sente que está preso em {{tema}}, presta atenção nesse vídeo',
      'Toda vez que penso em desistir de {{tema}}, lembro dessa verdade',
      'Se você está lutando com {{tema}}, essa mensagem é pra você',
      'Você que quer conquistar {{tema}}, isso é o que você precisa ouvir',
      'Quando você estiver cansado de tentar {{tema}}, veja isso'
    ],
    contexto: [
      'Eu também pensava que era impossível em {{tema}}',
      'Houve um tempo que eu duvidava completamente da minha capacidade em {{tema}}',
      'Sou a prova viva de que {{tema}} é possível',
      'A jornada com {{tema}} é desafiadora, mas vale cada segundo',
      'Comecei como você, duvidando de {{tema}}'
    ],
    desenvolvimento: [
      'O segredo que ninguém te fala sobre {{tema}} é que começa pequeno',
      'Cada progresso em {{tema}}, mesmo minúsculo, conta',
      'A transformação em {{tema}} não acontece da noite pro dia',
      'Mas consistência em {{tema}} muda completamente o jogo',
      'Essa é a verdade que precisei aprender em {{tema}}'
    ],
    climax: [
      'E então, depois de tudo isso com {{tema}}, percebi...',
      'O ponto de virada na minha jornada com {{tema}} foi quando...',
      'Isso foi o momento em que tudo virou em relação a {{tema}}...',
      'Quando comecei a ver {{tema}} dessa forma, mudou tudo...',
      'E foi aí que {{tema}} finalmente começou a fazer sentido...'
    ],
    revelacao: [
      'Se você quer conquistar {{tema}}, a verdade é simples',
      'O segredo que descobri sobre {{tema}} é que a capacidade já está em você',
      'A libertação em {{tema}} começa quando você acredita em si mesmo',
      'Ninguém pode dominar {{tema}} pelos seus resultados, apenas você',
      'A transformação em {{tema}} começa com uma pequena decisão'
    ],
    cta: [
      'Sua jornada com {{tema}} começa AGORA. Qual é o primeiro passo que vai dar?',
      'Se esse vídeo te tocou, comenta aqui qual é seu maior desafio com {{tema}}',
      'Você consegue conquistar {{tema}}! Acredita em si mesmo e sai do sofa',
      'Qual é seu maior sonho com {{tema}}? Comenta e vamos vibrar junto!',
      'Se você acredita que é possível conquistar {{tema}}, marca um amigo que precisa disso'
    ]
  }
};

// Função para substituir placeholder
function substituir(texto, tema) {
  return texto.replace(/{{tema}}/g, tema);
}

// Função para pegar elemento aleatório de array
function aleatorio(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Função principal de geração
function gerarRoteiro(tema, estilo) {
  const rotaEscolhida = rotas[estilo];

  if (!rotaEscolhida) {
    return { erro: 'Estilo não encontrado' };
  }

  const roteiro = {
    tema: tema,
    estilo: estilo,
    timestamp: new Date().toISOString(),
    secoes: {
      gancho: substituir(aleatorio(rotaEscolhida.gancho), tema),
      contexto: substituir(aleatorio(rotaEscolhida.contexto), tema),
      desenvolvimento: substituir(aleatorio(rotaEscolhida.desenvolvimento), tema),
      climax: substituir(aleatorio(rotaEscolhida.climax), tema),
      revelacao: substituir(aleatorio(rotaEscolhida.revelacao), tema),
      cta: substituir(aleatorio(rotaEscolhida.cta), tema)
    },
    scriptCompleto: ''
  };

  // Montar script completo
  const script = [
    roteiro.secoes.gancho,
    roteiro.secoes.contexto,
    roteiro.secoes.desenvolvimento,
    roteiro.secoes.climax,
    roteiro.secoes.revelacao,
    roteiro.secoes.cta
  ].join('\n\n');

  roteiro.scriptCompleto = script;
  roteiro.duracao = calcularDuracao(script);

  return roteiro;
}

// Calcular duração aproximada do vídeo
function calcularDuracao(texto) {
  const palavras = texto.split(' ').length;
  const velocidadeFala = 120; // palavras por minuto para fala natural
  const minutos = (palavras / velocidadeFala).toFixed(2);
  return `${minutos} minutos (para leitura em ritmo viral)`;
}

module.exports = {
  gerarRoteiro
};
