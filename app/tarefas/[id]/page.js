import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { buscar } from '@/lib/tarefas';

export default function Pagina({ params }) {
  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <DetalheTarefa params={params} />
    </Suspense>
  );
}

async function DetalheTarefa({ params }) {
  const { id } = await params;
  const tarefa = buscar(Number(id));
  if (!tarefa) notFound();

  return (
    <div className="card card-body">
      <h2>{tarefa.texto}</h2>
      <p className="text-muted">
        Criada em {new Date(tarefa.id).toLocaleString('pt-BR')}
      </p>
      <Link className="btn btn-secondary" href="/tarefas">Voltar</Link>
    </div>
  );
}
