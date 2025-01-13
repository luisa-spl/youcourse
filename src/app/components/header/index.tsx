'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const currentPath = usePathname();

  return (
    <header className="flex items-center justify-between bg-primary p-4 px-8">
      <Image src="/youcourse.png" alt="youcourse logotipo" width={50} height={50} />
      <nav className="flex gap-8">
        <ul className="flex items-center gap-8">
          <li>
            <Link href="/" data-isActive={currentPath === '/'} className="data-[isActive=true]:underline">Home</Link>
          </li>
          <li>
            <Link href="/cursos" data-isActive={currentPath === '/cursos'} className="data-[isActive=true]:underline">Cursos</Link>
          </li>
        </ul>
        <button onClick={() => window.document.body.setAttribute('light', 'true')}>
          <Image src="/settings.png" alt="youcourse logotipo" width={25} height={25} />
        </button>
      </nav>
    </header>
  )
}