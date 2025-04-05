# Doable - Task Management Frontend

## Introdução

Doable é uma aplicação web desenvolvida para ajudar usuários a gerenciar tarefas de forma eficiente. Com uma interface intuitiva e responsiva, o Doable permite que você organize seu trabalho, defina prioridades e acompanhe o progresso de suas atividades.

## Tecnologias Utilizadas

- **Next.js** - Framework React para produção
- **React.js** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset tipado de JavaScript
- **CSS Modules** - Estilização com escopo local
- **Vercel Font (Geist)** - Sistema de fontes otimizado

## Requisitos do Sistema

- Node.js 18.x ou superior
- npm, yarn, pnpm ou bun

## Instalação

1. Clone o repositório:

   ```bash
   git clone git@github.com:G2M-Corp/doable-frontend.git
   cd doable-frontend
   ```

2. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   # ou
   bun install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   # ou
   bun dev
   ```

4. Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## Uso

A aplicação estará disponível em `http://localhost:3000`. Você pode começar a editar as páginas modificando os arquivos na pasta `app/`.

## Recursos

- Gerenciamento de tarefas
- Interface responsiva
- Atualizações em tempo real
- Temas claro/escuro

## Estrutura do Projeto

```
doable-frontend/
├── app/              # Páginas e componentes da aplicação
├── public/           # Arquivos estáticos
├── styles/           # Estilos globais
├── components/       # Componentes reutilizáveis
└── ...
```

## Deploy

O projeto está configurado para deploy automático na [Vercel](https://vercel.com). Qualquer push para a branch principal iniciará um novo deploy.
