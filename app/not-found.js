import Link from 'next/link';

export default function NaoEncontrada() {
  return (
    <div className="text-center mt-5">
      <h1 className="display-1">404</h1>
      <p className="lead">Página não encontrada.</p>
      <Link className="btn btn-primary" href="/">Voltar ao início</Link>
    </div>
  );
}
