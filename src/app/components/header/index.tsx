'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdClear, MdMenu, MdOutlineSettings } from "react-icons/md";

export function Header() {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const currentPath = usePathname();
  
  useEffect(() => {
    setOpenDrawer(false);
  }, [currentPath]);

  return (
    <header className="flex items-center justify-between bg-primary p-4 px-8">
      <Image src="/youcourse.png" alt="youcourse logotipo" width={50} height={50} />
      <nav className="flex gap-8">
        <ul className="hidden md:flex items-center gap-8" tabIndex={openDrawer ? -1 : undefined}>
          <li>
            <Link href="/" data-isactive={currentPath === '/'} className="data-[isactive=true]:underline">Home</Link>
          </li>
          <li>
            <Link href="/cursos" data-isactive={currentPath === '/cursos'} className="data-[isactive=true]:underline">Cursos</Link>
          </li>
        </ul>
        
        <button onClick={() => window.document.body.setAttribute('light', 'true')} className="hidden md:flex gap-8">
          <MdOutlineSettings size={24} />
        </button>
        
        <button className="flex md:hidden" onClick={() => setOpenDrawer(!openDrawer)}>
          <MdMenu size={24} />
        </button>

        <div
          data-open={openDrawer} 
          tabIndex={openDrawer ? undefined : -1}
          onClick={() => setOpenDrawer(false)}
          className="flex flex-col bg-gradient-to-l from-background fixed top-0 right-0 bottom-0 left-0 data-[open=false]:-translate-x-full"
        >
          <ul 
            onClick={e => e.stopPropagation()}
            className="flex flex-col justify-start items-center p-6 gap-6 w-40 bg-background ml-auto"
          >
            <button onClick={() => setOpenDrawer(!openDrawer)} className="mb-4">
              <MdClear size={24} />
            </button>
            <li>
              <Link href="/" data-isactive={currentPath === '/'} className="data-[isactive=true]:underline">Home</Link>
            </li>
            <li>
              <Link href="/cursos" data-isactive={currentPath === '/cursos'} className="data-[isactive=true]:underline">Cursos</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}