npm install
npm run dev
npm test

Documentação de Dependências do Projeto "cards"

antd (^5.21.2)
Biblioteca de componentes UI para React, que fornece uma coleção de componentes prontos para uso que seguem as diretrizes de design do Ant Design.
Facilita a construção de interfaces de usuário consistentes e atraentes.

axios (^1.7.7)
Cliente HTTP baseado em Promises para fazer requisições para APIs.
Suporta interceptação de requisições e respostas, configuração de tempo limite e manipulação de erros.

react (^18.3.1)
Biblioteca JavaScript para construir interfaces de usuário.
Permite a criação de componentes reutilizáveis e gerencia o estado da aplicação de forma eficiente.

react-dom (^18.3.1)
Pacote que fornece métodos específicos para trabalhar com a DOM do React.
Permite renderizar componentes React no DOM.
Dependências de Desenvolvimento (devDependencies)

@babel/preset-env (^7.25.4)
Preset do Babel que permite o uso das últimas funcionalidades do JavaScript.
Compila o código para ser compatível com navegadores mais antigos.

@babel/preset-react (^7.24.7)
Preset do Babel que habilita a transformação do JSX em JavaScript regular.
Facilita o desenvolvimento de aplicações React.

@eslint/js (^9.9.0)
Ferramenta de linting para garantir a qualidade e a consistência do código JavaScript.
Ajuda a identificar e corrigir problemas de código antes da execução.

@originjs/vite-plugin-federation (^1.3.6)
Plugin para Vite que suporta micro-frontends com Module Federation.
Permite que diferentes partes de uma aplicação sejam desenvolvidas e implantadas separadamente.

@testing-library/jest-dom (^6.5.0)
Extensões para Jest que permitem usar novos matchers para testes.
Facilita a escrita de testes mais legíveis e expressivos para componentes React.

@testing-library/react (^16.0.1)
Biblioteca para testes de componentes React, focando na acessibilidade e na forma como os usuários interagem com a aplicação.
Incentiva testes que simulam o comportamento do usuário.

@types/react (^18.3.3)
Tipos TypeScript para React, permitindo o uso de tipos estáticos ao trabalhar com a biblioteca.

@types/react-dom (^18.3.0)
Tipos TypeScript para React DOM, semelhante ao acima, mas específico para o pacote react-dom.

@vitejs/plugin-react (^4.3.1)
Plugin para Vite que adiciona suporte a JSX e Fast Refresh para aplicações React.
Melhora a experiência de desenvolvimento com recarregamento rápido de módulos.

babel-jest (^29.7.0)
Adaptador do Jest para usar Babel, permitindo que os testes suportem as últimas funcionalidades do JavaScript.

eslint (^9.9.0)
Ferramenta de linting para JavaScript, ajuda a manter a qualidade e a legibilidade do código.

eslint-plugin-react (^7.35.0)
Plugin do ESLint específico para verificar práticas recomendadas no desenvolvimento de componentes React.
eslint-plugin-react-hooks (^5.1.0-rc.0)

Plugin do ESLint que aplica regras específicas para os Hooks do React, garantindo o uso correto.
eslint-plugin-react-refresh (^0.4.9)

Plugin que integra o suporte a React Refresh no ESLint, facilitando o desenvolvimento de aplicações com recarregamento rápido.
globals (^15.9.0)

Define variáveis globais que são reconhecidas pelo ESLint, evitando alertas desnecessários para variáveis pré-definidas.
jest (^29.7.0)

Framework de testes para JavaScript, que facilita a criação e execução de testes automatizados.
jest-environment-jsdom (^29.7.0)

Configuração do Jest que utiliza JSDOM como ambiente de teste, permitindo a simulação de um ambiente de navegador.
kill-port (^2.0.1)

Utilitário que permite matar processos em portas específicas, facilitando o gerenciamento de portas durante o desenvolvimento.
vite (^5.4.1)

Ferramenta de build e desenvolvimento que fornece um servidor de desenvolvimento rápido e otimizações de produção para aplicações modernas.
Scripts
start: Inicia o servidor de desenvolvimento com Vite.
build: Compila a aplicação para produção usando Vite.
test: Executa os testes com Jest.
lint: Executa o ESLint para verificar a qualidade do código.
preview: Visualiza a aplicação construída.
kill-port: Mata o processo em execução na porta 5179.
dev: Mata o processo em execução na porta 5179 e inicia o servidor de desenvolvimento.