import type { Metadata } from "next";
import { Heebo, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });
const heebo = Heebo({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "YouCourse | Sua melhor plataforma de cursos",
  description: "Seus cursos com a melhor experiência de foco",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-Br">
      <body className={`${inter.className} ${heebo.className}`} style={{ 'minWidth': '100vw' }}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
