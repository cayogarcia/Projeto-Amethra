import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/jogar.css';
import imgQuestao1 from '../assets/Questao1.png';
import imgQuestao3 from '../assets/Questao3.png';
import imgQuestao5 from '../assets/Questao5.png';
import imgQuestao6 from '../assets/Questao6.jpg';
import imgQuestao7 from '../assets/Questao7.png';
import imgQuestao10A from '../assets/Questao10a.png';
import imgQuestao10B from '../assets/Questao10b.png';
import imgJustificativa2 from '../assets/Justificativa2.jpeg';
import imgJustificativa5 from '../assets/Justificativa5.jpeg';
import imgJustificativa7 from '../assets/Justificativa7.jpeg';

// Banco de dados com imagens associadas e justificativas
const BANCO_DE_PERGUNTAS = [
  // --- CRISTALOGRAFIA (ANITA BEATRIZ) ---
  {
    id: 1,
    pergunta: "Como é definido o que chamamos de “cela unitária” representada na figura abaixo?",
    imagem: imgQuestao1,
    opcoes: [
      "É a estrutura cristalina",
      "É o retículo cristalino",
      "É a menor unidade estrutural",
      "É um átomo"
    ],
    respostaCorreta: 2,
    justificativa: "A cela unitária é a menor porção do retículo cristalino que, quando repetida periodicamente nas três dimensões, reproduz toda a estrutura cristalina. Ela não é um átomo nem o retículo inteiro. Por isso, a alternativa C é a correta."
  },
  {
    id: 2,
    pergunta: "Quantos sistemas cristalinos temos?",
    opcoes: ["5", "8", "9", "7"],
    respostaCorreta: 3,
    justificativa: "Existem sete sistemas cristalinos: cúbico, tetragonal, ortorrômbico, monoclínico, triclínico, hexagonal e trigonal. Eles são definidos pelas relações entre os eixos cristalográficos e seus ângulos. Em algumas bibliografias mais antigas consideravam 6 sistemas cristalinos, incorporaram trigonais (romboédrico) dentro dos hexagonais, mas eles possuem simetria rotacional diferente (ordem 3 nos trigonais e ordem 6 no hexagonal).",
    justificativaImagem: imgJustificativa2
  },
  {
    id: 3,
    pergunta: "Utilize as relações axiais abaixo com seu determinado sistema cristalino:",
    imagem: imgQuestao3,
    opcoes: [
      "Tetragonal, cúbico e ortorrômbico",
      "Cúbico, ortorrômbico e tetragonal",
      "Ortorrômbico, cúbico e tetragonal",
      "Cúbico, tetragonal e ortorrômbico"
    ],
    respostaCorreta: 3,
    justificativa: "A questão exige reconhecer as relações entre a, b, c e α, β, γ. No cúbico, os três eixos têm o mesmo comprimento e são perpendiculares; no tetragonal, dois são iguais; no ortorrômbico, os três são diferentes, mas os ângulos continuam sendo 90°. Por isso, a sequência indicada no gabarito é D."
  },
  {
    id: 4,
    pergunta: "O que é a luz polarizada?",
    opcoes: [
      "Luz que vibra em vários planos ao mesmo tempo.",
      "Luz que vibra em apenas um plano.",
      "Luz usada para quebrar cristais com raios X.",
      "Luz que gira em forma circular ao se propagar."
    ],
    respostaCorreta: 1,
    justificativa: "A luz comum é não polarizada, pois suas vibrações ocorrem em diversos planos perpendiculares à direção de propagação. Na luz linearmente polarizada, essas vibrações ficam restritas a um único plano. Por isso, B."
  },
  {
    id: 5,
    pergunta: "Utilizando a Lei de Bragg, calcule:",
    imagem: imgQuestao5,
    opcoes: ["4,89 Å", "3,030 Å", "4,78 Å", "20,5 Å"],
    respostaCorreta: 0,
    justificativa: "Cálculo:",
    justificativaImagem: imgJustificativa5
  },
  {
    id: 6,
    pergunta: "Qual é o sistema cristalino representado abaixo?",
    imagem: imgQuestao6,
    opcoes: ["Triclínico", "Tetragonal", "Monoclínico", "Cúbico"],
    respostaCorreta: 2,
    justificativa: "O sistema monoclínico apresenta a ≠ b ≠ c com dois ângulos iguais a 90° e um diferente de 90° (α = γ = 90°, β ≠ 90°). Portanto, ao observar a representação geométrica da questão, a configuração corresponde ao sistema monoclínico. O gabarito indica C."
  },
  {
    id: 7,
    pergunta: "Calcule o volume da cela unitária hexagonal, considerando os dados: a = 4,91 Å, c = 13,37 Å.",
    imagem: imgQuestao7,
    opcoes: ["279,14 Å³", "450,7 Å³", "150,6 Å³", "500,3 Å³"],
    respostaCorreta: 0,
    justificativa: "Cálculo:",
    justificativaImagem: imgJustificativa7
  },
  {
    id: 8,
    pergunta: "Quais estruturas cristalinas possuem fator de empacotamento 0,74 e número de coordenação 12?",
    opcoes: [
      "É cúbica simples",
      "É cúbica de corpo centrado",
      "É cúbica de face centrada e hexagonal compacta",
      "Não pode ser determinada sem parâmetro de rede"
    ],
    respostaCorreta: 2,
    justificativa: "O fator de empacotamento 0,74 e o número de coordenação 12 são características de estruturas compactas. Tanto a cúbica de face centrada (CFC) quanto a hexagonal compacta (HC) possuem essas características."
  },
  {
    id: 9,
    pergunta: "Um feixe não polarizado incide de um meio 1 para meio 2 no ângulo de Brewster. Sabendo que n₁ > n₂, qual afirmação é correta?",
    opcoes: [
      "O ângulo de Brewster pode ser maior que 90°",
      "A luz refletida é parcialmente polarizada paralela ao plano de incidência",
      "A luz refletida é totalmente polarizada perpendicular ao plano de incidência",
      "Não há reflexão nesse caso."
    ],
    respostaCorreta: 2,
    justificativa: "No ângulo de Brewster, a luz refletida fica completamente polarizada perpendicularmente ao plano de incidência. A relação é dada por: tan θ_B = n₂ / n₁. Como o enunciado informa que n₁ > n₂, o ângulo continua sendo fisicamente possível; o ponto principal é que a componente paralela ao plano de incidência deixa de aparecer no feixe refletido. Assim, a alternativa C é a correta."
  },
  {
    id: 10,
    pergunta: "Seguindo as construções de Huygens do cristal tetragonal mostrado determine os raios extraordinários e os raios ordinários.",
    imagens: [imgQuestao10A, imgQuestao10B],
    opcoes: [
      "A) extraordinário, B) extraordinário, C) ordinário e ordinário, D) ordinário e extraordinário",
      "A) ordinário, B) ordinário, C) extraordinário e extraordinário, D) ordinário e extraordinário",
      "A) ordinário, B) ordinário, C) ordinário e extraordinário, D) ordinário e extraordinário",
      "A) extraordinário, B) extraordinário, C) extraordinário e extraordinário, D) extraordinário e ordinário"
    ],
    respostaCorreta: 2,
    justificativa: "Em um cristal tetragonal, a anisotropia óptica faz com que os raios ordinário e extraordinário tenham comportamentos diferentes dependendo da direção de propagação em relação ao eixo óptico. A alternativa C é a que corresponde às classificações dos raios nas quatro construções mostradas na figura."
  },

  // --- MINERALOGIA E GEMOLOGIA (YGOR) ---
  {
    id: 11,
    pergunta: "No sistema cristalino cúbico (ou isométrico), qual é a relação correta entre o comprimento de seus eixos cristalográficos e os ângulos formados entre eles?",
    opcoes: [
      "Três eixos de comprimentos desiguais (a ≠ b ≠ c) que se cortam formando ângulos oblíquos.",
      "Dois eixos horizontais de comprimentos iguais e um eixo vertical mais longo, com ângulos de 90º.",
      "Três eixos cristalográficos de comprimentos iguais (a = b = c), perpendiculares entre si (α = β = γ = 90°).",
      "Quatro eixos cristalográficos, sendo três horizontais com ângulos de 120º entre si."
    ],
    respostaCorreta: 2,
    justificativa: "A resposta é 'C' pois é essa configuração que forma um sistema cristalino isométrico/cúbico (a = b = c / α = β = γ = 90 graus)."
  },
  {
    id: 12,
    pergunta: "Exemplo correto de minerais que apresentam tenacidade quebradiça e tenacidade coesa:",
    opcoes: [
      "A dureza é a resistência ao rompimento ou esmagamento, enquanto a tenacidade é a resistência da superfície ao ser riscada; a hematita é um exemplo de mineral coeso.",
      "A dureza refere-se à resistência que a superfície do mineral oferece ao risco, enquanto a tenacidade é a resistência que ele oferece para ser rompido, esmagado ou curvado; exemplos de minerais quebradiços são quartzo e calcita, enquanto cobre nativo e prata nativa apresentam tenacidade coesa.",
      "Ambas as propriedades dependem exclusivamente da densidade do mineral; o talco é um exemplo de mineral quebradiço e o enxofre de mineral coeso.",
      "A tenacidade é medida pela escala de Mohs e a dureza define o grau de coesão atômica; a gipsita é classificada como mineral coeso e o quartzo como quebradiço."
    ],
    respostaCorreta: 1,
    justificativa: "A resposta é 'B' pois dita perfeitamente a descrição de 'Dureza' e 'Tenacidade' para a mineralogia, além de que os minerais Quartzo e Calcita SÃO minerais quebradiços e o cobre nativo e a prata nativa apresentam tenacidade coesa."
  },
  {
    id: 13,
    pergunta: "O que define um mineral como alocromático e como essa propriedade se manifesta no caso do quartzo?",
    opcoes: [
      "Minerais alocromáticos são aqueles que possuem cor própria e constante em função de sua composição química; no quartzo, isso se manifesta pela sua cor sempre branca leitosa.",
      "São minerais que apresentam o fenômeno de jogo de cores quando virados sob a luz; o quartzo manifesta essa propriedade através de reflexões metálicas em sua superfície.",
      "Minerais alocromáticos são incolores quando puros, mas apresentam cores variáveis devido a impurezas metálicas ou defeitos estruturais; o quartzo exemplifica isso ao apresentar-se em variedades como amarelo (citrino), roxo (ametista), róseo, cinza (fumê), entre outras.",
      "Define-se como alocromático o mineral que emite luz visível ao ser aquecido; o quartzo manifesta essa cor apenas quando submetido a altas temperaturas."
    ],
    respostaCorreta: 2,
    justificativa: "A resposta é 'C' pois define perfeitamente o conceito de um mineral 'alocromático'. São minerais que são incolores quando puros, ou seja, sem nenhuma interferência ou impureza dentro deles e, quando possuir alguma impureza, esses minerais ganharão tonalidades diferentes de cor, formando uma variedade."
  },
  {
    id: 14,
    pergunta: "Como são denominados os minerais que possuem a mesma composição química, mas apresentam estruturas cristalinas diferentes (arranjos atômicos distintos)?",
    opcoes: ["Isomorfos", "Polimorfos", "Pseudomorfos", "Amorfos"],
    respostaCorreta: 1,
    justificativa: "A resposta é 'B' pois minerais 'Polimorfos' é exatamente isso: Possuem a mesma composição química, mas estrutura cristalina totalmente diferentes. Isso ocorre pelo fato de como esses minerais se formam, pois, dependendo da quantidade de pressão e temperatura que haver no ambiente de formação, pode resultar em propriedades físicas diferente; Um exemplo claro disso é o Diamante e o Grafite, onde são totalmente formados por Carbono, porém apresentam estruturas cristalinas diferentes."
  },
  {
    id: 15,
    pergunta: "Quais das gemas a seguir NÃO pode ser considerada uma gema no sentido amplo?",
    opcoes: ["Ametista", "Pérola", "Diamante", "YAG", "Todas as alternativas estão incorretas"],
    respostaCorreta: 4,
    justificativa: "A resposta é 'E' pois, resumidamente, uma gema é qualquer material, de origem orgânica ou inorgânica, natural ou sintética que, por conta de sua beleza, pode ser usado para adorno pessoal. Todos as gemas à seguir podem sim serem considerados gemas no sentido amplo."
  },

  // --- ROCHAS E MINERAIS GERAIS (ANA) ---
  {
    id: 16,
    pergunta: "Rochas são apenas calhaus (pedras)?",
    opcoes: [
      "Sim, qualquer pedra é apenas uma rocha sem composição definida.",
      "Não, rochas são agregados naturais de um ou mais minerais.",
      "Sim, rochas são sempre formadas por um único mineral.",
      "Não, rochas são substâncias líquidas.",
      "Sim, rochas são materiais produzidos pelo homem."
    ],
    respostaCorreta: 1,
    justificativa: "É a resposta b, pois rochas são agregados naturais de um ou mais minerais, formados por processos geológicos naturais."
  },
  {
    id: 17,
    pergunta: "Qual a diferença entre rochas e minerais?",
    opcoes: [
      "Minerais são misturas e rochas são substâncias puras.",
      "Rochas possuem composição química definida e minerais não.",
      "Minerais possuem composição química definida; rochas são agregados de minerais.",
      "Não existe diferença entre rochas e minerais.",
      "Rochas são líquidas e minerais são sólidos."
    ],
    respostaCorreta: 2,
    justificativa: "É a resposta c, pois minerais possuem composição química e estrutura cristalina características; rochas são agregados de um ou mais minerais."
  },
  {
    id: 18,
    pergunta: "Qual mineral se apresenta em estado líquido em temperatura ambiente?",
    opcoes: ["Quartzo", "Calcita", "Mercúrio nativo", "Halita", "Diamante"],
    respostaCorreta: 2,
    justificativa: "C, pois o mercúrio nativo é um mineral que permanece líquido em condições de temperatura ambiente."
  },
  {
    id: 19,
    pergunta: "O que é halita?",
    opcoes: [
      "Um minério de ferro.",
      "Um mineral correspondente ao sal de cozinha (NaCl).",
      "Um tipo de rocha metamórfica.",
      "Um metal líquido.",
      "Um mineral orgânico."
    ],
    respostaCorreta: 1,
    justificativa: "Halita é o mineral de composição NaCl, conhecido como o principal componente mineral do sal de cozinha."
  },
  {
    id: 20,
    pergunta: "Quais são exemplos de minerais metálicos?",
    opcoes: [
      "Quartzo e diamante.",
      "Halita e gipsita.",
      "Hematita e magnetita.",
      "Calcita e fluorita.",
      "Talco e mica."
    ],
    respostaCorreta: 2,
    justificativa: "Hematita e magnetita são minerais metálicos, importantes fontes naturais de ferro."
  },
  {
    id: 21,
    pergunta: "Diamante é um mineral não metálico.",
    opcoes: [
      "Verdadeiro",
      "Falso",
      "Apenas em altas temperaturas",
      "Apenas quando bruto",
      "Apenas quando lapidado"
    ],
    respostaCorreta: 0,
    justificativa: "Verdadeiro. O diamante é um mineral não metálico constituído por carbono cristalizado."
  },
  {
    id: 22,
    pergunta: "Quais são os critérios de diferenciação dos minerais?",
    opcoes: [
      "Cor, dureza, brilho, clivagem e densidade.",
      "Tamanho e peso apenas.",
      "Forma e preço de mercado.",
      "Cor e transparência apenas.",
      "Local de extração apenas."
    ],
    respostaCorreta: 0,
    justificativa: "Cor, dureza, brilho, clivagem e densidade são propriedades utilizadas para identificar e diferenciar minerais."
  },
  {
    id: 23,
    pergunta: "Das opções abaixo, quais representam tipos de minerais?",
    opcoes: [
      "Metálicos e não metálicos.",
      "Ígneos e sedimentares.",
      "Magmáticos e metamórficos.",
      "Intrusivos e extrusivos.",
      "Ácidos e básicos."
    ],
    respostaCorreta: 0,
    justificativa: "Os minerais podem ser classificados, entre outras formas, em metálicos e não metálicos, conforme suas características e usos."
  },
  {
    id: 24,
    pergunta: "Os minerais têm origem orgânica ou inorgânica?",
    opcoes: [
      "Apenas orgânica.",
      "Predominantemente inorgânica.",
      "Orgânica e inorgânica.",
      "Sintética.",
      "Radioativa."
    ],
    respostaCorreta: 1,
    justificativa: "Minerais podem ter origem inorgânica e, em alguns casos específicos, origem relacionada a processos orgânicos."
  },
  {
    id: 25,
    pergunta: "Como é a formação das rochas metamórficas?",
    opcoes: [
      "Pela solidificação do magma.",
      "Pela deposição de sedimentos.",
      "Pela transformação de outras rochas sob pressão e temperatura elevadas.",
      "Pela evaporação da água do mar.",
      "Pela ação exclusiva do vento."
    ],
    respostaCorreta: 2,
    justificativa: "Rochas metamórficas resultam da transformação de rochas preexistentes devido principalmente à pressão e temperatura, sem fusão completa."
  },

  // --- GEMOLOGIA E ÓPTICA (MATHEUS) ---
  {
    id: 26,
    pergunta: "Durante uma expedição, um pesquisador encontra um cristal verde translúcido associado a pegmatitos graníticos ricos em berílio. Qual gema rara provavelmente está sendo observada?",
    opcoes: ["Jadeíta", "Malaquita", "Esmeralda", "Peridoto"],
    respostaCorreta: 2,
    justificativa: "A esmeralda é uma variedade verde do mineral berilo, cuja fórmula química é Be₃Al₂Si₆O₁₈. Sua cor verde intensa ocorre principalmente pela presença de pequenas quantidades de cromo e/ou vanádio. Ambientes ricos em berílio, como pegmatitos graníticos, podem favorecer a formação de minerais do grupo do berilo. Porém, a esmeralda normalmente exige uma combinação rara: berílio junto com elementos cromóforos como cromo ou vanádio. Por isso, ela é considerada uma gema rara e de alto valor gemológico."
  },
  {
    id: 27,
    pergunta: "Certos diamantes naturais possuem coloração azul devido à presença de qual elemento químico em sua estrutura cristalina?",
    opcoes: ["Ferro", "Cromo", "Boro", "Titânio"],
    respostaCorreta: 2,
    justificativa: "Boro. Diamantes são formados basicamente por carbono, mas pequenas impurezas podem alterar sua cor. No caso dos diamantes azuis, o elemento mais associado à coloração é o boro, que substitui alguns átomos de carbono na estrutura cristalina. Essa substituição muda a forma como o diamante absorve a luz, fazendo com que ele apresente tonalidades azuladas. Quanto mais intensa e uniforme for a cor azul, mais raro e valioso tende a ser o diamante."
  },
  {
    id: 28,
    pergunta: "O fenômeno óptico conhecido como “chatoyance”, observado no olho-de-tigre, ocorre principalmente devido:",
    opcoes: [
      "À radioatividade natural do mineral",
      "À presença de inclusões fibrosas alinhadas",
      "À oxidação superficial do cristal",
      "À presença de água aprisionada"
    ],
    respostaCorreta: 1,
    justificativa: "Presença de inclusões fibrosas alinhadas. O fenômeno chamado chatoyance, ou \"efeito olho-de-gato\", acontece quando a luz reflete em estruturas fibrosas ou inclusões orientadas dentro da gema. No olho-de-tigre, esse efeito cria uma faixa luminosa móvel que lembra o brilho do olho de um felino. Esse fenômeno só aparece bem quando a pedra é lapidada em formato cabochão, pois a superfície arredondada ajuda a concentrar a luz em uma linha brilhante. É um ótimo exemplo de como a beleza de uma gema depende tanto da composição quanto da estrutura interna."
  },
  {
    id: 29,
    pergunta: "Um cristal reage fortemente ao ácido clorídrico diluído e apresenta clivagem romboédrica perfeita. Qual mineral provavelmente está sendo analisado?",
    opcoes: ["Quartzo", "Feldspato", "Pirita", "Calcita"],
    respostaCorreta: 3,
    justificativa: "Calcita. A calcita é um carbonato de cálcio, com fórmula química CaCO₃. Uma de suas principais características diagnósticas é reagir com ácido clorídrico diluído, liberando bolhas de gás carbônico. Esse processo é chamado de efervescência. Além disso, a calcita possui clivagem romboédrica perfeita, ou seja, tende a se quebrar em formas inclinadas características. Por isso, a combinação \"reage ao ácido + clivagem romboédrica\" é uma pista clássica para identificar calcita em laboratório."
  },
  {
    id: 30,
    pergunta: "A famosa mudança de cor da alexandrita ocorre devido principalmente:",
    opcoes: [
      "À absorção seletiva da luz por cromo",
      "À fluorescência radioativa",
      "À presença de água na estrutura cristalina",
      "À oxidação superficial do mineral"
    ],
    respostaCorreta: 0,
    justificativa: "Absorção seletiva da luz por cromo. A alexandrita é uma variedade rara do mineral crisoberilo, famosa por mudar de cor conforme a fonte de luz. Em luz natural ou fluorescente, costuma aparecer verde a verde-azulada; em luz incandescente, pode parecer vermelha, púrpura ou arroxeada. Esse efeito ocorre devido à presença de cromo, que absorve certos comprimentos de onda da luz de maneira seletiva. Por isso, a alexandrita é conhecida pela frase clássica: \"esmeralda de dia, rubi à noite\"."
  }
];

export function Jogar() {
  const [jogoIniciado, setJogoIniciado] = useState(false);
  const [indicePergunta, setIndicePergunta] = useState(0);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);
  const [respondido, setRespondido] = useState(false);
  const [pontuacao, setPontuacao] = useState(0);
  const [fimDoJogo, setFimDoJogo] = useState(false);

  const perguntaAtual = BANCO_DE_PERGUNTAS[indicePergunta];

  const iniciarJogo = () => {
    setJogoIniciado(true);
    setIndicePergunta(0);
    setPontuacao(0);
    setRespondido(false);
    setOpcaoSelecionada(null);
    setFimDoJogo(false);
  };

  const handleConfirmarResposta = () => {
    if (opcaoSelecionada === null) return;

    setRespondido(true);
    if (opcaoSelecionada === perguntaAtual.respostaCorreta) {
      setPontuacao((prev) => prev + 1);
    }
  };

  const handleProximaPergunta = () => {
    if (indicePergunta + 1 < BANCO_DE_PERGUNTAS.length) {
      setIndicePergunta((prev) => prev + 1);
      setOpcaoSelecionada(null);
      setRespondido(false);
    } else {
      setFimDoJogo(true);
    }
  };

  return (
    <div className="jogar-container">
      <main className="jogar-main">
        <div className="jogar-card">
          {!jogoIniciado ? (
            <div className="jogar-inicio">
              <h1>QUIZ GEOCIÊNCIAS</h1>
              <p>Teste seus conhecimentos com 30 questões de Cristalografia, Mineralogia e Gemologia!</p>
              <button className="botao-padrao" onClick={iniciarJogo}>
                INICIAR
              </button>
            </div>
          ) : fimDoJogo ? (
            <div className="jogar-fim">
              <h1>FIM DO QUIZ!</h1>
              <p>
                Você acertou <strong>{pontuacao}</strong> de{' '}
                <strong>{BANCO_DE_PERGUNTAS.length}</strong> perguntas.
              </p>
              <p><strong>Por favor, preencha nosso formulário de feedback:</strong></p>
              
              {/* Botão para o Google Forms */}
              <a
                href="https://forms.gle/EjEWGUVr5GYMDeUD9"
                target="_blank"
                rel="noopener noreferrer"
                className="botao-padrao"
                style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '15px' }}
              >
                FEEDBACK DO QUIZ
              </a>

              <br />

              <button className="botao-padrao" onClick={iniciarJogo}>
                JOGAR NOVAMENTE
              </button>
            </div>
          ) : (
            <div className="jogar-pergunta-box">
              <span className="progresso">
                Pergunta {indicePergunta + 1} de {BANCO_DE_PERGUNTAS.length}
              </span>
              <h2>{perguntaAtual.pergunta}</h2>

              {/* Renderização de Imagem Única da Pergunta */}
              {perguntaAtual.imagem && (
                <div className="imagem-container">
                  <img src={perguntaAtual.imagem} alt="Ilustração da pergunta" className="pergunta-imagem" />
                </div>
              )}

              {/* Renderização de Múltiplas Imagens da Pergunta */}
              {perguntaAtual.imagens && (
                <div className="imagem-container-duplo">
                  {perguntaAtual.imagens.map((imgSrc, idx) => (
                    <img key={idx} src={imgSrc} alt={`Ilustração ${idx + 1}`} className="pergunta-imagem" />
                  ))}
                </div>
              )}

              <div className="opcoes-lista">
                {perguntaAtual.opcoes.map((opcao, index) => {
                  let classeOpcao = 'opcao-btn';

                  if (respondido) {
                    if (index === perguntaAtual.respostaCorreta) {
                      classeOpcao += ' correta';
                    } else if (index === opcaoSelecionada) {
                      classeOpcao += ' incorreta';
                    }
                  } else if (index === opcaoSelecionada) {
                    classeOpcao += ' selecionada';
                  }

                  return (
                    <button
                      key={index}
                      className={classeOpcao}
                      disabled={respondido}
                      onClick={() => setOpcaoSelecionada(index)}
                    >
                      {opcao}
                    </button>
                  );
                })}
              </div>

              {/* Caixas de feedback */}
              {respondido && (
                <>
                  <div
                    className={`feedback-box ${
                      opcaoSelecionada === perguntaAtual.respostaCorreta
                        ? 'sucesso'
                        : 'erro'
                    }`}
                  >
                    {opcaoSelecionada === perguntaAtual.respostaCorreta ? (
                      <p>🎉 Parabéns! Você acertou!</p>
                    ) : (
                      <p>
                        😕 Você errou! A resposta correta é:{' '}
                        <strong>
                          {perguntaAtual.opcoes[perguntaAtual.respostaCorreta]}
                        </strong>
                      </p>
                    )}
                  </div>

                  {/* Caixa da justificativa: Texto PRIMEIRO, depois a imagem */}
                  {perguntaAtual.justificativa && (
                    <div className="justificativa-box">
                      <strong><u>Explicação:</u></strong>
                      
                      {/* Texto da Justificativa */}
                      <p>{perguntaAtual.justificativa}</p>

                      {/* Imagem da Justificativa (Renderizada logo abaixo do texto) */}
                      {perguntaAtual.justificativaImagem && (
                        <div className="imagem-container">
                          <img 
                            src={perguntaAtual.justificativaImagem} 
                            alt="Ilustração da justificativa" 
                            className="pergunta-imagem" 
                          />
                        </div>
                      )}

                      {/* Múltiplas Imagens da Justificativa (se houver) */}
                      {perguntaAtual.justificativaImagens && (
                        <div className="imagem-container-duplo">
                          {perguntaAtual.justificativaImagens.map((imgSrc, idx) => (
                            <img 
                              key={idx} 
                              src={imgSrc} 
                              alt={`Ilustração da justificativa ${idx + 1}`} 
                              className="pergunta-imagem" 
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}

              <div className="acoes-box">
                {!respondido ? (
                  <button
                    className="botao-padrao"
                    onClick={handleConfirmarResposta}
                    disabled={opcaoSelecionada === null}
                  >
                    CONFIRMAR
                  </button>
                ) : (
                  <button
                    className="botao-padrao"
                    onClick={handleProximaPergunta}
                  >
                    {indicePergunta + 1 < BANCO_DE_PERGUNTAS.length
                      ? 'PRÓXIMA PERGUNTA'
                      : 'VER RESULTADO'}
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="jogar-footer">
        <Link to="/" className="botao-voltar">
          VOLTAR
        </Link>
      </footer>
    </div>
  );
}