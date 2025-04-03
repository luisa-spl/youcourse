'use client';

import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { PlayerClass, PlayerClassProps } from "../PlayerClass";

export interface PlayerGroupProps {
  title: string;
  isOpen: boolean;
  position: number;
  currentClassId: string;
  classes: (Pick<PlayerClassProps, 'classTitle' | 'isConcluded'> & { classId: string; })[];
  onToggle: () => void;
  onPlay: (classId: string) => void;
  onCheck: (classId: string) => void;
}

export function PlayerGroup({ title, position, currentClassId, classes, isOpen, onToggle, onPlay, onCheck }: PlayerGroupProps) {
  const concludedClasses = classes.filter((item) => item.isConcluded);

  return (
    <div className="flex flex-col">
      <button className="flex gap-4 p-4 bg-paper items-center hover:opacity-70" onClick={onToggle}>
        <div className="flex bg-background h-12 w-12 rounded-full items-center justify-center">
          {position}
        </div>
        <div className="flex flex-col flex-1 items-start">
          <h1 className="font-bold line-clamp-1 text-start">{title}</h1>
          <span className="text-sm font-light text-start">
            {concludedClasses.length}/{classes.length} aulas
          </span>
        </div>
        {isOpen ?
          <MdKeyboardArrowDown size={28} />
          :  
          <MdKeyboardArrowRight size={28} />  
        }
      </button>


      <ul data-open={isOpen} className="flex flex-col data-[open=false]:hidden">
        {classes.map(item => (
          <li key={item.classTitle}>
            <PlayerClass 
              classTitle={item.classTitle}
              isPlaying={item.classId === currentClassId}
              isConcluded={item.isConcluded}
              onPlay={() => onPlay(item.classId)}
              onCheck={() => onCheck(item.classId)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};