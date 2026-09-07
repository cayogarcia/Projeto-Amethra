import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sobre-nos.css';

export function SobreNos() {
  return (
    <div className="sobre-container">
      <header className="sobre-header">
        <h1>SOBRE O PROJETO</h1>
      </header>

      <main className="sobre-main">
        <div className="sobre-card">
          <h2 className="sobre-titulo">AMETHRA</h2>

          <p className="sobre-introducao">
            O projeto começou por conta de uma dificuldade de aprendizado que
            notamos no curso ao realizar entrevistas com alunos e ex-alunos da
            Gemologia e da Geologia em outros estados, além da nossa própria
            vivência enquanto alunos da Gemologia. Por ser muitas vezes um
            conteúdo complexo de se entender, compreender e memorizar, decidimos
            criar o Amethra: um site educacional para facilitar ao estudante o
            entendimento das matérias de "Mineralogia I e II", "Cristalografia" e
            "Gemologia I, II e III" na Universidade Federal do Espírito Santo
            (UFES) e em outras instituições.
          </p>

          <div className="sobre-secao-equipe">
            <h3>RESPONSÁVEIS PELO PROJETO</h3>
            <p className="sobre-aviso-equipe">
              Projeto criado por estudantes, mesmo revisado por professores.
              
            </p>

            <ul className="sobre-lista-integrantes">
              <li>
                <strong>Anita Beatriz Rangel David</strong> — Aluna de Gemologia
                na UFES (desde 2023/2)
              </li>
              <li>
                <strong>Clara Magnago Kirmse</strong> — Aluna de Análise e
                Desenvolvimento de Sistemas na UVV (desde 2026/1)
              </li>
              <li>
                <strong>Ygor Alves da Conceição</strong> — Aluno de Gemologia na
                UFES (desde 2024/1)
              </li>
              <li>
                <strong>Ana Luiza Aliprandi</strong> — Aluna de Gemologia (desde
                2026/1)
              </li>
              <li>
                <strong>Cayo Gonçalves Garcia</strong> — Analista e Desenvolvedor de Sistemas
              </li>
            </ul>
          </div>
        </div>
      </main>

      <footer className="sobre-footer">
        <Link to="/" className="botao-voltar">
          VOLTAR
        </Link>
      </footer>
    </div>
  );
}