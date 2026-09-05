# AMETHRA - Quiz de Geociências 💎

Um Web App interativo desenvolvido em React para testar conhecimentos nas áreas de Cristalografia, Mineralogia e Gemologia. O projeto apresenta um quiz dinâmico com 30 questões, suporte a renderização de imagens e ilustrações técnicas, e uma interface responsiva baseada em gamificação.

## 🚀 Funcionalidades

* **Quiz Dinâmico:** Banco de 30 perguntas com múltipla escolha e validação em tempo real.
* **Suporte a Mídia:** Renderização de imagens únicas e múltiplas (lado a lado) diretamente nos cards de perguntas.
* **Feedback Visual:** Indicadores de acerto/erro instantâneos utilizando estilização condicional.
* **Sistema de Pontuação:** Cálculo de resultados ao final da partida.
* **Design Responsivo:** Layout adaptável mantendo a proporção ideal tanto em telas Desktop quanto Mobile.
* **Animações CSS:** Botões interativos com pseudo-elementos e efeitos de transição inspirados no Uiverse.

## 🛠️ Tecnologias Utilizadas

* **React (Vite):** Biblioteca principal para construção da interface e gerenciamento de estado (`useState`).
* **React Router Dom:** Gerenciamento de rotas (Navegação entre Home, Regras, Login e Jogo).
* **CSS3:** Estilização utilizando Flexbox, gradientes lineares, variáveis e Media Queries.
* **JavaScript (ES6+):** Lógica do banco de perguntas e manipulação de arrays.

## 📂 Estrutura do Projeto

```text
src/
 ├── assets/
 │   └── images/          # Imagens das questões (Cristalografia, Huygens, etc.)
 ├── pages/
 │   ├── Home.jsx         # Página inicial
 │   ├── Jogar.jsx        # Lógica principal do Quiz e renderização do banco de dados
 │   └── Regras.jsx       # Informações do jogo
 ├── styles/
 │   ├── inicial.css      # Estilos da Home
 │   └── jogar.css        # Estilos específicos do painel do jogo
 ├── App.jsx              # Configuração das rotas
 └── main.jsx             # Ponto de entrada da aplicação

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
O projeto está configurado para deploy automático em plataformas como Netlify e Vercel.

Lembre-se de adicionar o arquivo _redirects na pasta public/ contendo /* /index.html 200 para garantir o funcionamento correto das rotas do React Router em produção.

Desenvolvido por Cayo Gonçalves Garcia