'use client';

import { useState, useEffect } from 'react';
import ItemTarefa from '@/components/ItemTarefa';

export default function Tarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [texto, setTexto] = useState('');

  useEffect(() => {
    fetch('/api/tarefas')
      .then((resposta) => resposta.json())
      .then((dados) => setTarefas(dados));
  }, []);

  async function adicionar() {
    if (texto.trim() === '') return;
    const resposta = await fetch('/api/tarefas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ texto: texto }),
    });
    const nova = await resposta.json();
    setTarefas([...tarefas, nova]);
    setTexto('');
  }

  async function remover(id) {
    await fetch(`/api/tarefas/${id}`, { method: 'DELETE' });
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  }

  return (
    <div>
      <h1 className="mb-4">Minhas Tarefas</h1>
      <div className="input-group mb-3">
        <input
          className="form-control"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Nova tarefa"
        />
        <button className="btn btn-primary" onClick={adicionar}>
          Adicionar
        </button>
      </div>
      <ul className="list-group">
        {tarefas.map((tarefa) => (
          <ItemTarefa key={tarefa.id} tarefa={tarefa}
            onRemover={remover} />
        ))}
      </ul>
    </div>
  );
}
