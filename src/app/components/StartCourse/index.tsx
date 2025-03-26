import Link from "next/link";
import { MdPlayCircleOutline } from "react-icons/md";

interface StartCourseProps {
  bgImage: string;
  courseId: string;
  classId: string;
}

export function StartCourse({ bgImage, courseId, classId }: StartCourseProps) {
  return (
    <div className="flex flex-col gap-4 p-3 bg-paper rounded-md">
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
  );
};