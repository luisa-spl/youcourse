import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { PlayerClass, PlayerClassProps } from "../PlayerClass";

interface PlayerGroupProps {
  title: string;
  isOpen: boolean;
  position: number;
  classes: Omit<PlayerClassProps, 'onPlay' | 'onCheck'>[];
  onToggle: () => void;
}

export function PlayerGroup({ title, position, classes, isOpen, onToggle }: PlayerGroupProps) {
  const concludedClasses = classes.filter((item) => item.isConcluded);

  return (
    <div className="flex flex-col">
      <button className="flex gap-4 p-4 bg-paper items-center" onClick={onToggle}>
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
              isPlaying={item.isPlaying}
              isConcluded={item.isConcluded}
              onCheck={() => console.log('check')}
              onPlay={() => console.log('play')}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};