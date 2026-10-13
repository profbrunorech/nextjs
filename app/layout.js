import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Minhas Tarefas',
  description: 'Lista de tarefas com Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <main className="container mt-4">{children}</main>
      </body>
    </html>
  );
}
