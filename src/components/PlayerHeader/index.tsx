import Link from "next/link";
import { MdArrowCircleLeft } from "react-icons/md";

interface PlayerHeaderProps {
  courseTitle: string;
  classTitle: string;
}

export function PlayerHeader({ courseTitle, classTitle }: PlayerHeaderProps) {
  return (
    <div className="flex justify-start items-center gap-8 p-4 w-full bg-paper">
      <Link href="/">
        <MdArrowCircleLeft size={32} />
      </Link>
      <div className="flex flex-col gap-1 py-1">
        <h1 className="font-bold text-lg line-clamp-1">{courseTitle}</h1>
        <h2 className="line-clamp-1">{classTitle}</h2>
      </div>
    </div>
  );
};