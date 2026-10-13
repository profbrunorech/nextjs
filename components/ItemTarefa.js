import Link from 'next/link';

export default function ItemTarefa({ tarefa, onRemover }) {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <Link href={`/tarefas/${tarefa.id}`}>{tarefa.texto}</Link>
      <button className="btn btn-danger btn-sm"
        onClick={() => onRemover(tarefa.id)}>
        X
      </button>
    </li>
  );
}
