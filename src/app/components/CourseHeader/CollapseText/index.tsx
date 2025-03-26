'use client'

import { ReactNode, useState } from "react";

interface CollapseTextProps {
  numberOfLines: number;
  children: ReactNode;
}

export function CollapseText({ numberOfLines, children }: CollapseTextProps) {
  const [open, setOpen] = useState(false);

  return (
    <div 
      data-open={open}
      className="flex data-[open=true]:flex-col items-end"
    >
      <p 
        data-open={open}
        className="data-[open=false]:line-clamp-[var(--maxNumberOfLines)]"
        style={{ '--maxNumberOfLines': numberOfLines } as any}
      >
        {children}
      </p>
      <button className="text-primary hover:text-secondary min-w-max" onClick={() => setOpen(!open)}>
        {open ? 'Ver menos' : 'Ver mais'}
      </button>
    </div>
  )
}