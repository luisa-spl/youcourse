import { ReactNode } from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  icon?: ReactNode;
}

export function Button({ label, onClick, icon }: ButtonProps) {
  return(
    <button onClick={onClick} className="py-2 px-4 rounded-full bg-primary">
      {icon}
      {label}
    </button>
  )
}