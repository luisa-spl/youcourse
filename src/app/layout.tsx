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
        <main className="mt-[7.5%] flex justify-center pb-12 pl-3 pr-4">
          <div className="min-[640px]:max-w-[860px] min-[768px]:max-w-[740px] min-[1024px]:max-w-[980px]">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
