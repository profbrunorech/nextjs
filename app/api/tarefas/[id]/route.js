import { remover } from '@/lib/tarefas';

// DELETE /api/tarefas/123: remove a tarefa 123
export async function DELETE(request, { params }) {
  const { id } = await params;
  remover(Number(id));
  return new Response(null, { status: 204 });
}
