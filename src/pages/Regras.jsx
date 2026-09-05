import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/regras.css';

export function Regras() {
  return (
    <div className="regras-container">
      <header className="regras-header">
        <h1>REGRAS</h1>
      </header>

      <main className="regras-main">
        <div className="caixa-de-texto">
          <h1>MANUAL DE BOAS MANEIRAS</h1>
          
          <h2 className="subtitulo-intro">
            É estranho ter que fazer regras para um site, mas a gente ainda tem
            esperança na humanidade de que elas sejam respeitadas!
          </h2>

          <p>
            <strong>1 -</strong> Não trapaceie. Você não vai estar aprendendo se
            sempre estiver vendo a resposta correta!
          </p>

          <p>
            <strong>2 -</strong> Não use o site para difamar professores ou para
            qualquer má ação contra qualquer pessoa durante o processo de
            feedback! ESTAREMOS DE OLHO!
          </p>

          <p>
            <strong>3 -</strong> O site NÃO substitui os estudos por fora! Ele foi
            feito para complementar os seus estudos!
          </p>

          <p>
            <strong>4 -</strong> Não use bots para floodar o feedback! Obrigada! Não
            queremos nenhum celular da equipe pegando fogo! Temos o orçamento de
            uma coxinha (ou menos) :D
          </p>

          <p>
            <strong>5 -</strong> Eu sei que isso não vai mudar nada, mas, por favor,
            não tentem quebrar ou hackear o site! Temos o orçamento de uma
            coxinha :(
          </p>

          <p>
            <strong>6 -</strong> O projeto já está registrado. Qualquer tentativa de
            cópia ou vazamento de dados está sujeita a medidas legais. Eu
            pensaria duas vezes antes de tentar qualquer coisa!
          </p>

          <h2 className="subtitulo-professores">
            Para os professores: o nosso projeto não tem a intenção de
            substituí-los. Muito pelo contrário: o projeto foi desenvolvido para
            ajudar vocês. Ficaremos contentes se vocês quiserem entrar em contato
            conosco e deixar seu feedback!
          </h2>
        </div>
      </main>

      <footer className="regras-footer">
        <Link to="/" className="botao-voltar">
          VOLTAR
        </Link>
      </footer>
    </div>
  );
}