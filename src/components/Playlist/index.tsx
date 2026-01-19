'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";
import { PlayerGroup, PlayerGroupProps } from "./PlayerGroup";

interface PlaylistProps {
  classList: Pick<PlayerGroupProps, 'classes' | 'title'>[];
  currentClassId: string;
  currentCourseId: string;
}

export function Playlist({ classList, currentClassId, currentCourseId }: PlaylistProps) {
  const [openedIndex, setOpenedIndex] = useState<number | undefined>(
    classList.findIndex(classList => classList.classes.some(classItem => classItem.classId === currentClassId))
  );
  const router = useRouter();

  return (
    <div className="flex flex-col gap-2 h-full">
      <div className="flex flex-col p-4 bg-paper">
        <h3 className="font-bold text-lg">
          Conteúdo do curso
        </h3>
      </div>

      <ul className="overflow-auto overflow-primary">
        {classList.map((item, index) => (
          <li key={`${index}-${item.title}`}>
            <PlayerGroup 
              position={index + 1}
              title={item.title}
              isOpen={openedIndex === index}
              onToggle={() => setOpenedIndex(openedIndex === index ? undefined : index)}
              classes={item.classes}
              currentClassId={currentClassId}
              onPlay={(classId) => router.push(`/player/${currentCourseId}/${classId}`)}
              onCheck={classId => console.log('check', classId)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};