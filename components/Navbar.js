import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" href="/">Minhas Tarefas</Link>
        <div className="navbar-nav">
          <Link className="nav-link" href="/">Início</Link>
          <Link className="nav-link" href="/tarefas">Tarefas</Link>
        </div>
      </div>
    </nav>
  );
}
