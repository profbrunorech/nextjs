// "Banco de dados" em memória, guardado no servidor
// (globalThis garante um único array para todas as rotas)
const banco = globalThis;
if (!banco.tarefas) banco.tarefas = [];

export function listar() {
  return banco.tarefas;
}

export function buscar(id) {
  return banco.tarefas.find((t) => t.id === id);
}

export function adicionar(texto) {
  const nova = { id: Date.now(), texto: texto };
  banco.tarefas = [...banco.tarefas, nova];
  return nova;
}

export function remover(id) {
  banco.tarefas = banco.tarefas.filter((t) => t.id !== id);
}
