import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/inicial.css';

import ottoImg from '../assets/Otto_FelizinhosA.png';
import siciliaImg from '../assets/Sicilia_FelizinhosA.png';

export function Home() {
  return (
    <div className="home-container">
      <header className="navbar">
        <h1 className="logo">AMETHRA</h1>
        <nav className="nav-buttons">
          <Link to="/regras" className="btn-nav">REGRAS</Link>
          <Link to="/login" className="btn-nav">LOGIN</Link>
          <Link to="/jogar" className="btn-nav">JOGAR</Link>
          <Link to="/sobre" className="btn-nav">SOBRE NÓS</Link>
        </nav>
      </header>

      <main className="main-content">
        <img src={ottoImg} alt="Mascote Otto" className="mascote mascote-left" />

        <div className="card-welcome">
          <h2>BEM-VINDOS AO AMETHRA!</h2>
          <p>
            Aqui você vai encontrar algumas questões objetivas explicadas focadas, principalmente, em testar e melhorar seu aprendizado de áreas como cristalografia, mineralogia e gemologia científica. Não se sinta mal por errar, acreditamos no seu potencial. Sintam-se à vontade para se divertir, aprender, conhecer a área. Aproveitem para seguir nossas redes sociais!
          </p>
          <p>
            Nesta versão você vai encontrar 30 questões, algumas mais fáceis e outras que possuem um pouco mais dificuldade, no final você poderá:
          </p>
          <p>• O que você precisa estudar mais dentro do que estamos oferecendo agora.</p>
          <p>• Onde você acertou mais!</p>
          <p><strong>E mais avisos:</strong></p>
          <p>Algumas questões vão exigir lápis, borracha e uma calculadora, então pegue.</p>
          <p>Você está livre para fazer as questões no seu tempo utilizando o site!</p>
          <p>
            Espero que goste! Entre em contato com a gente pelas nossas redes sociais ou então, nos diga no final das 30 questões o seu feedback de como podemos melhorar o site, as questões, e o que mais você achar que possa nos ajudar para fortalecer o aprendizado de todos.
          </p>
          <p>
            Agradecemos a todos que nos apoiaram desde o começo com essa ideia, inclusive aos professores que revisaram nossas questões.
          </p>
        </div>

        <img src={siciliaImg} alt="Mascote Sicilia" className="mascote mascote-right" />
      </main>

      <footer className="footer">
        <p>REDES SOCIAIS:</p>
        <div className="social-buttons">
          <a href="https://instagram.com/projetoamethra" target="_blank" rel="noreferrer" className="btn-social">INSTAGRAM</a>
          <a href="https://tiktok.com/@projetoamethra" target="_blank" rel="noreferrer" className="btn-social">TIKTOK</a>
        </div>
      </footer>
    </div>
  );
}