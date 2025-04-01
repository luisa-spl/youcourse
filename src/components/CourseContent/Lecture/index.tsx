import Link from "next/link";
import { MdPlayCircleOutline } from "react-icons/md";

interface LectureProps {
  title: string;
  playerURL: string;
}

export function Lecture({ title, playerURL }: LectureProps) {
  return (
    <Link href={playerURL} className="flex items-center gap-6 p-4 hover:no-underline">
      <MdPlayCircleOutline size={24} />
      {title}
    </Link>
  );
};