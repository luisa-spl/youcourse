'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdMenu, MdOutlineSettings } from "react-icons/md";

export function Header() {
  const currentPath = usePathname();

  return (
    <header className="flex items-center justify-between bg-primary p-4 px-8">
      <Image src="/youcourse.png" alt="youcourse logotipo" width={50} height={50} />
      <nav className="flex gap-8">
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link href="/" data-isactive={currentPath === '/'} className="data-[isactive=true]:underline">Home</Link>
          </li>
          <li>
            <Link href="/cursos" data-isactive={currentPath === '/cursos'} className="data-[isactive=true]:underline">Cursos</Link>
          </li>
        </ul>
        <button onClick={() => window.document.body.setAttribute('light', 'true')} className="hidden md:flex gap-8">
          <MdOutlineSettings size="24"/>
        </button>
        <button className="flex md:hidden">
          <MdMenu size="24" />
        </button>
      </nav>
    </header>
  )
}