'use client' 

import Link from "next/link";
import { MdPlayCircleOutline } from "react-icons/md";
import { useInView } from 'react-intersection-observer';

interface StartCourseProps {
  bgImage: string;
  courseId: string;
  classId: string;
  courseTitle: string;
}

export function StartCourse({ bgImage, courseId, classId, courseTitle }: StartCourseProps) {
  const [ref, inView] = useInView({ threshold: 0.1, initialInView: true });

  return (
    <>
      <div ref={ref} className="flex flex-col gap-4 p-3 bg-paper rounded-md">
        <Link 
          style={{ backgroundImage: `url(${bgImage})` }}
          className="bg-no-repeat bg-cover bg-center aspect-video w-full rounded"
          href={`/player/${courseId}/${classId}`} 
        >
          <div className="w-full h-full flex items-center justify-center bg-background rounded opacity-0 hover:opacity-70 transition-opacity">
            <MdPlayCircleOutline size={58} />
          </div>
        </Link>
        <Link 
          className="bg-primary p-2 px-3 rounded text-center"
          href={`/player/${courseId}/${classId}`} 
        >
          Começar curso
        </Link>
      </div>

      {!inView && (
        <div className="pl-12 pr-12 pt-4 pb-4 bg-paper flex flex-col gap-4 absolute left-0 right-0 top-20">
          <h1 className="font-extrabold text-xl">{courseTitle}</h1>
          <Link 
            className="bg-primary p-2 px-3 rounded text-center"
            href={`/player/${courseId}/${classId}`} 
          >
            Começar curso
          </Link>
        </div>
      )}
    </>
  );
};