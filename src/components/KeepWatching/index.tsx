
import { MdPlayCircle } from "react-icons/md";

interface KeepWatchingProps {
  thumbImage: string;
  courseTitle: string;
}

export function KeepWatching({ thumbImage, courseTitle }: KeepWatchingProps){
  return (
    <div className="w-full max-w-5xl mx-auto px-4 mt-2">
      <div className="group relative bg-zinc-700/40 backdrop-blur-sm border border-white/5 rounded-2xl p-4 transition-all hover:bg-zinc-900/60 hover:border-primary">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="relative w-full md:w-48 h-28 shrink-0 overflow-hidden rounded-lg shadow-lg">
            <img 
              src={thumbImage ?? "https://img.youtube.com/vi/placeholder/0.jpg"}
              alt="Thumbnail do curso"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <MdPlayCircle className="text-white fill-white" size={32} />
            </div>
          </div>

          {/* Informações do Curso */}
          <div className="flex-1 w-full space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-widest text-purple-400 font-bold">Em curso</span>
            </div>
            <h3 className="text-white font-semibold text-lg leading-tight">
              {courseTitle}
            </h3>
            <p className="text-zinc-400 text-sm">
              Módulo 01: <span className="text-zinc-300 italic">Configurando seu primeiro projeto</span>
            </p>

            <div className="pt-2">
              <div className="flex justify-between text-[10px] text-zinc-500 mb-1 font-medium">
                <span>65% CONCLUÍDO</span>
                <span>12/18 AULAS</span>
              </div>
              <div className="w-full h-1.5 bg-zinc-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"
                  style={{ width: '65%' }}
                ></div>
              </div>
            </div>
          </div>

          <button className="hidden md:flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-purple-500 hover:text-white transition-colors">
            ASSISTIR AGORA
          </button>
        </div>
      </div>
    </div>
  );
};
