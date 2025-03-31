import Link from "next/link";
import { MdPlayCircle } from "react-icons/md";

export function KeepWatching() {
  return (
    <Link 
      href={`/player/{courseId}/{classId}`}
      className="flex justify-between gap-4 bg-primary p-4 rounded-xl hover:no-underline mb-8"
    >
      <div className="flex flex-col gap-2">
        <h1 className="font-bold line-clamp-1">Curso de Figma para Devs</h1>
        <p className="line-clamp-1">Configurando seu primeiro projeto</p>
      </div>
      
      <div className="flex items-center gap-2">
        <span className="hidden md:block">Continuar assistindo</span>
        <MdPlayCircle size={24} />
      </div>
    </Link>
  );
};