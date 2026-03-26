import Image from "next/image";
import Link from "next/link";

interface CardProps {
  imageURL: string;
  title: string;
  description: string;
  id: string;
}

export function CourseCard({ imageURL, title, description, id }: CardProps) {
  return (
    <Link href={`/cursos/${id}`} className="hover:no-underline">
      <article className="flex flex-col items-center gap-3 bg-zinc-700/40 rounded-2xl h-98 px-4 py-4 hover:scale-105 transition-transform duration-300 hover:border hover:border-primary">
        <Image 
          src={imageURL} 
          alt={title} 
          height={320} 
          width={320} 
          draggable={false} 
          className="rounded-2xl"
        />
        <h4 className="font-extrabold text-lg px-4">
          {title}
        </h4>
        <p className="line-clamp-3 sm:line-clamp-4 md:line-clamp-5 px-4">
          {description}
        </p>
      </article>
    </Link>
  );
};