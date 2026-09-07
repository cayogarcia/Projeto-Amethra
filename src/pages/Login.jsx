import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.css';

export function Login() {
  return (
    <div className="login-container">
      <main className="login-main">
        <div className="caixa-de-texto">
          <h1>EM BREVE</h1>
          <h2>Página em construção!!</h2>

          <p>
            Acompanhe o Amethra nas redes sociais
            para não perder as atualizações!
          </p>

          <p className="instagram-handle">
            @projetoamethra
          </p>
        </div>
      </main>

      <footer className="login-footer">
        <Link to="/">
          <button type="button" className="botao-voltar">
            VOLTAR
          </button>
        </Link>
      </footer>
    </div>
  );
}

export default Login;