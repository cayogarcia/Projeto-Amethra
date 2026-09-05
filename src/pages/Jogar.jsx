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

// Banco de dados com imagens associadas
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
    respostaCorreta: 2
  },
  {
    id: 2,
    pergunta: "Quantos sistemas cristalinos temos?",
    opcoes: ["5", "8", "9", "7"],
    respostaCorreta: 3
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
    respostaCorreta: 3
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
    respostaCorreta: 1
  },
  {
    id: 5,
    pergunta: "Utilizando a Lei de Bragg, calcule:",
    imagem: imgQuestao5,
    opcoes: ["4,89 Å", "3,030 Å", "4,78 Å", "20,5 Å"],
    respostaCorreta: 0
  },
  {
    id: 6,
    pergunta: "Qual é o sistema cristalino representado abaixo?",
    imagem: imgQuestao6,
    opcoes: ["Triclínico", "Tetragonal", "Monoclínico", "Cúbico"],
    respostaCorreta: 2
  },
  {
    id: 7,
    pergunta: "Calcule o volume da cela unitária hexagonal, considerando os dados: a = 4,91 Å, c = 13,37 Å.",
    imagem: imgQuestao7,
    opcoes: ["279,14 Å³", "450,7 Å³", "150,6 Å³", "500,3 Å³"],
    respostaCorreta: 0
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
    respostaCorreta: 2
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
    respostaCorreta: 2
  },
  {
    id: 10,
    pergunta: "Seguindo as construções de Huygens do cristal tetragonal mostrado determine os raios extraordinários e os raios ordinários.",
    imagens: [imgQuestao10A, imgQuestao10B], // Suporta array de imagens para a questão 10
    opcoes: [
      "A) extraordinário, B) extraordinário, C) ordinário e ordinário, D) ordinário e extraordinário",
      "A) ordinário, B) ordinário, C) extraordinário e extraordinário, D) ordinário e extraordinário",
      "A) ordinário, B) ordinário, C) ordinário e extraordinário, D) ordinário e extraordinário",
      "A) extraordinário, B) extraordinário, C) extraordinário e extraordinário, D) extraordinário e ordinário"
    ],
    respostaCorreta: 2
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
    respostaCorreta: 2
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
    respostaCorreta: 1
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
    respostaCorreta: 2
  },
  {
    id: 14,
    pergunta: "Como são denominados os minerais que possuem a mesma composição química, mas apresentam estruturas cristalinas diferentes (arranjos atômicos distintos)?",
    opcoes: ["Isomorfos", "Polimorfos", "Pseudomorfos", "Amorfos"],
    respostaCorreta: 1
  },
  {
    id: 15,
    pergunta: "Quais das gemas a seguir NÃO pode ser considerada uma gema no sentido amplo?",
    opcoes: ["Ametista", "Pérola", "Diamante", "YAG", "Todas as alternativas estão incorretas"],
    respostaCorreta: 4
  },

  // --- ROCAS E MINERAIS GERAIS (ANA) ---
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
    respostaCorreta: 1
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
    respostaCorreta: 2
  },
  {
    id: 18,
    pergunta: "Qual mineral se apresenta em estado líquido em temperatura ambiente?",
    opcoes: ["Quartzo", "Calcita", "Mercúrio nativo", "Halita", "Diamante"],
    respostaCorreta: 2
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
    respostaCorreta: 1
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
    respostaCorreta: 2
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
    respostaCorreta: 0
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
    respostaCorreta: 0
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
    respostaCorreta: 0
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
    respostaCorreta: 1
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
    respostaCorreta: 2
  },

  // --- GEMOLOGIA E ÓPTICA (MATHEUS) ---
  {
    id: 26,
    pergunta: "Durante uma expedição, um pesquisador encontra um cristal verde translúcido associado a pegmatitos graníticos ricos em berílio. Qual gema rara provavelmente está sendo observada?",
    opcoes: ["Jadeíta", "Malaquita", "Esmeralda", "Peridoto"],
    respostaCorreta: 2
  },
  {
    id: 27,
    pergunta: "Certos diamantes naturais possuem coloração azul devido à presença de qual elemento químico em sua estrutura cristalina?",
    opcoes: ["Ferro", "Cromo", "Boro", "Titânio"],
    respostaCorreta: 2
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
    respostaCorreta: 1
  },
  {
    id: 29,
    pergunta: "Um cristal reage fortemente ao ácido clorídrico diluído e apresenta clivagem romboédrica perfeita. Qual mineral provavelmente está sendo analisado?",
    opcoes: ["Quartzo", "Feldspato", "Pirita", "Calcita"],
    respostaCorreta: 3
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
    respostaCorreta: 0
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

              {/* Renderização de Imagem Única */}
              {perguntaAtual.imagem && (
                <div className="imagem-container">
                  <img src={perguntaAtual.imagem} alt="Ilustração da pergunta" className="pergunta-imagem" />
                </div>
              )}

              {/* Renderização de Múltiplas Imagens (ex: Questão 10) */}
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

              {respondido && (
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