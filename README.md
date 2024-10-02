# Projeto de Micro Front-ends 

Este projeto consiste em quatro micro front-ends construídos com React e Vite utilizando a biblioteca Module Federation para o orquestrar os micro frontends
React: Biblioteca JavaScript para construir interfaces de usuário.
Vite: Ferramenta de build rápida para projetos de front-end modernos.
Ant Design (Antd): Biblioteca de componentes UI para React.
Axios: Cliente HTTP baseado em promessas para realizar requisições.
Jest: Framework de testes em JavaScript.
ESLint: Ferramenta para garantir boas práticas e qualidade de código.
Vite Federation Plugin: Plugin para habilitar Module Federation no Vite.

Instalação
Siga as etapas abaixo para configurar o projeto localmente:

Clone o repositório:

cd nome-do-repositorio
Instale as dependências: Certifique-se de ter o Node.js instalado na sua máquina. Depois, execute o seguinte comando:

npm install
Scripts Disponíveis
No projeto, você pode executar os seguintes scripts utilizando o npm:

npm run start: Inicia o servidor de desenvolvimento com Vite.
npm run dev: Mata o processo na porta (caso esteja ocupada) e inicia o servidor de desenvolvimento.
npm run build: Gera a versão de produção do projeto.
npm run preview: Visualiza a versão de produção gerada pelo build.
npm run test: Executa os testes usando o Jest.
npm run lint: Executa o linter (ESLint) para verificar erros no código.
npm run kill-port: Mata o processo que estiver rodando na porta 5179, caso ocorra algum conflito.

# Como Rodar o Projeto
Passos para rodar o projeto em modo de desenvolvimento:
Inicie o servidor de desenvolvimento:

# npm run dev

Para criar um build de produção:
Gere o build:

npm run build
Visualize o build:

npm run preview
Para executar os testes:
Execute os testes:

npm run test


OBS.: Pontos de melhoria: 
arquitetura de pastas , criar a pasta components e _test_ 
ajustar os testes unitarios
estilizar os componentes com styled components conforme figma
