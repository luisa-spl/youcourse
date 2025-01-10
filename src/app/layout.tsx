import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "YouCourse Platform",
  description: "Your courses and just it",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-Br">
      <body className={`${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
