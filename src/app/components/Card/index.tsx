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
      <article className="flex flex-col gap-3 bg-slate-600/40 hover:bg-primary blackdrop-blur-custom rounded-2xl  h-98 px-4 py-4">
        <Image 
          src={imageURL} 
          alt={title} 
          height={400} 
          width={400} 
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