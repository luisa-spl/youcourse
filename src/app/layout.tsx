import type { Metadata } from "next";
import { Heebo, Inter } from "next/font/google";
import { Header } from "./components/header";
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
      <body className={`${inter.className} ${heebo.className}`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
