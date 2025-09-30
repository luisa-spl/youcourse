'use client'

import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { PlayerGroupProps } from '../Playlist/PlayerGroup';
import { VideoPlayer } from "../VideoPlayer";

interface IClassDetailsProps {
  currentClassId: string;
  courseId: string;
  classGroups: Pick<PlayerGroupProps, 'classes' | 'title'>[]
}

export function ClassDetails({ currentClassId, courseId, classGroups }: IClassDetailsProps) {
  const router = useRouter();

  const nextClassId = useMemo(() => {
    const classes = classGroups.flatMap(classGroup => classGroup.classes);
    const currentClassIndex = classes.findIndex(classItem => classItem.classId === currentClassId);
    const nextClassIndex = currentClassIndex + 1;

    if (nextClassIndex === classes.length) return undefined;

    return classes[nextClassIndex].classId;

  }, [classGroups, currentClassId]);

  return (
    <div className="flex-1">
      <div className="aspect-video">
        <VideoPlayer 
          videoId='apXQAnFX3JM'
          onPlayNext={() => nextClassId ? router.push(`/player/${courseId}/${nextClassId}`) : {}}
        />
      </div>
      <div>
        Descrição
      </div>  
    </div>
  )
}