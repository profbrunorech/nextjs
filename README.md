# Lista de Tarefas com Next.js

Exemplo da aula **Next.js: Framework React Full Stack**, da disciplina Frameworks Frontend.

A mesma lista de tarefas das aulas anteriores (React + Bootstrap + React Router), agora com Next.js (App Router):

- Rotas por pastas (`app/`), com rota dinâmica `tarefas/[id]` e página 404 (`not-found.js`)
- Server Components (navbar, página inicial, detalhes) e Client Component (`'use client'` na página de tarefas)
- API com Route Handlers: `GET`/`POST /api/tarefas` e `DELETE /api/tarefas/[id]`
- "Banco de dados" em memória no servidor (`lib/tarefas.js`)

## Como executar

Requer Node.js 20.9 ou superior.

```bash
npm install
npm run dev
```

Acesse http://localhost:3000 (e http://localhost:3000/api/tarefas para ver a API).

Para gerar a versão de produção:

```bash
npm run build
npm start
```

> Os dados ficam em memória: sobrevivem ao F5, mas se perdem ao reiniciar o servidor.
