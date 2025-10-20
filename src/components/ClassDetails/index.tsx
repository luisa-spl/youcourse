'use client'

import * as Tabs from '@radix-ui/react-tabs';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { CourseHeader } from '../CourseHeader';
import { PlayerGroupProps } from '../Playlist/PlayerGroup';
import { VideoPlayer } from "../VideoPlayer";

interface IClassDetailsProps {
  currentClassId: string;
  courseId: string;
  classGroups: Pick<PlayerGroupProps, 'classes' | 'title'>[];
  course: {
    title: string;
    description: string;
    totalClasses: number;
  }
}

export function ClassDetails({ currentClassId, courseId, classGroups, course }: IClassDetailsProps) {
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
          videoId="apXQAnFX3JM"
          onPlayNext={() => nextClassId ? router.push(`/player/${courseId}/${nextClassId}`) : {}}
        />
      </div>
      <div className="mt-2 overflow-auto">
        <Tabs.Root defaultValue="class-details">
          <Tabs.List className="flex border-paper border-b-2">
            <Tabs.Trigger value="class-details" className="p-2 border-transparent border-b-4 rounded-t-md data-[state=active]:bg-paper data-[state=active]:border-primary">
              Detalhes da aula
            </Tabs.Trigger>
            <Tabs.Trigger value="course-details" className="p-4 border-transparent border-b-4 rounded-t-md data-[state=active]:bg-paper data-[state=active]:border-primary">
              Visão geral do curso
            </Tabs.Trigger>
          </Tabs.List>
          {/* <hr className="border-e-red-800"/> */}
          <Tabs.Content value="class-details">
            Descrição da aula
          </Tabs.Content>
          <Tabs.Content value="course-details">
            <CourseHeader 
              title={course.title}             
              description={course.description}
              totalClasses={course.totalClasses}
            />
          </Tabs.Content>
        </Tabs.Root>
      </div>  
    </div>
  )
}