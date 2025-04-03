'use client'

import { MdCheckCircle, MdOutlineBrightness1, MdPlayCircleOutline } from "react-icons/md";

export interface PlayerClassProps {
  classTitle: string;
  isPlaying: boolean;
  isConcluded: boolean;
  onPlay: () => void;
  onCheck: () => void;
}

const getIcon = ({ isConcluded, isPlaying, onCheck }: { isConcluded: boolean; isPlaying: boolean; onCheck: () => void; }) => {
  if (isConcluded) return <MdCheckCircle size={24} className="min-w-6 text-green-600"/>;
  if (isPlaying) return <MdPlayCircleOutline size={24} className="min-w-6"/>;
  
  return (
    <div onClick={e => { e.stopPropagation(); onCheck(); }}>
      <MdOutlineBrightness1 size={24} className="group-hover:hidden" />
      <MdPlayCircleOutline size={24} className="min-w-6 hidden group-hover:block group-hover:opacity-60"/>
    </div>
  );
};

export function PlayerClass({ classTitle, isPlaying, isConcluded, onPlay, onCheck }: PlayerClassProps) {
  return (
    <button onClick={onPlay} className="flex gap-6 py-5 px-7 items-center group">
      {getIcon({ isConcluded, isPlaying, onCheck })}

      <div className="flex flex-col gap-1 items-start">
        <p 
          data-concluded={isConcluded}
          className="line-clamp-2 text-start data-[concluded=false]:group-hover:opacity-60 data-[concluded=true]:text-green-600"
        >
          {classTitle}
        </p>

        {isPlaying && (
          <span className="px-2 py-1 bg-blue-700 rounded-full text-sm">
            Reproduzindo
          </span>
        )}
      </div>
    </button>
  );
};