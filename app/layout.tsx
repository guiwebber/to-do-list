// app/layout.tsx
import './globals.css';  // Importa o arquivo global de CSS, incluindo o Tailwind

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head />
      <body>{children}</body>
    </html>
  );
}
