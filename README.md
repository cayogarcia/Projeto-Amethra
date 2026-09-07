# AMETHRA - Quiz de Geociências 💎

Um Web App interativo desenvolvido em React para testar conhecimentos nas áreas de Cristalografia, Mineralogia e Gemologia. O projeto apresenta um quiz dinâmico com 30 questões, suporte a renderização de imagens técnicas, explicações detalhadas em cada resposta e uma interface responsiva baseada em gamificação.

---

## 🚀 Funcionalidades

* **Quiz Dinâmico:** Banco de 30 perguntas com múltipla escolha e validação em tempo real.
* **Suporte a Mídia & Justificativas:** Renderização de imagens únicas e duplas tanto no enunciado das questões quanto nas imagens explicativas dentro do painel de justificativa.
* **Feedback Visual Instantâneo:** Indicadores de acerto e erro com estilização condicional e caixas explicativas destacadas.
* **Sistema de Pontuação:** Cálculo do placar final ao término da partida.
* **Página em Construção (Login):** Interface preparada para futuros módulos de autenticação e acesso de usuários.
* **Design Responsivo:** Layout adaptável otimizado para telas Desktop e Mobile.
* **Animações CSS:** Botões interativos com efeitos de transição avançados inspirados no Uiverse.

---

## 🛠️ Tecnologias Utilizadas

* **React (Vite):** Biblioteca para construção de interfaces reativas e gerenciamento de estado (`useState`).
* **React Router Dom:** Gerenciamento de rotas e navegação entre Home, Regras, Sobre Nós, Login e Jogo.
* **CSS3:** Flexbox, gradientes lineares, variáveis e Media Queries para responsividade.
* **JavaScript (ES6+):** Estrutura de dados do quiz e lógica de controle.

---

## 📂 Estrutura do Projeto

```text
src/
 ├── assets/
 │   ├── Justificativa2.jpeg  # Recursos visuais para justificativas
 │   ├── Justificativa5.jpeg
 │   ├── Justificativa7.jpeg
 │   └── ...                  # Imagens do quiz (Cristalografia, Huygens, etc.)
 ├── pages/
 │   ├── Home.jsx             # Tela inicial
 │   ├── Jogar.jsx            # Lógica do Quiz, temporizador e renderização das questões
 │   ├── Login.jsx            # Página "Em Breve" para login do usuário
 │   ├── Regras.jsx           # Instruções do jogo
 │   └── SobreNos.jsx         # Informações sobre o projeto
 ├── styles/
 │   ├── inicial.css          # Estilos da Home e páginas informativas
 │   ├── jogar.css            # Estilos do painel do jogo e caixas de justificativa
 │   └── login.css            # Estilos específicos da tela de Login
 ├── App.jsx                  # Configuração global de rotas
 └── main.jsx                 # Ponto de entrada da aplicação
⚙️ Como executar o projeto localmente
Faça o clone deste repositório:

Bash
git clone [https://github.com/cayogarcia/Projeto-Amethra.git](https://github.com/cayogarcia/Projeto-Amethra.git)
Acesse a pasta do projeto:

Bash
cd Projeto-Amethra
Instale as dependências:

Bash
npm install
Inicie o servidor de desenvolvimento:

Bash
npm run dev
Acesse http://localhost:5173 no seu navegador.

🌐 Deploy
O projeto está configurado para deploy em plataformas como Vercel ou Netlify.

Importante: Mantenha o arquivo _redirects na pasta public/ com o conteúdo /* /index.html 200 para garantir que o redirecionamento de rotas do React Router funcione corretamente em produção.

Desenvolvido por Cayo Gonçalves Garcia