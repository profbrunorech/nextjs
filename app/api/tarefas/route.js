import { connection } from 'next/server';
import { listar, adicionar } from '@/lib/tarefas';

// GET /api/tarefas: lista as tarefas
export async function GET() {
  await connection(); // executa a cada requisição
  return Response.json(listar());
}

// POST /api/tarefas: cria uma tarefa
export async function POST(request) {
  const { texto } = await request.json();
  if (!texto || texto.trim() === '') {
    return Response.json({ erro: 'Texto obrigatório' },
      { status: 400 });
  }
  return Response.json(adicionar(texto), { status: 201 });
}
