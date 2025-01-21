import { CourseCard } from "../Card";

type CourseItem = {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface SectionProps {
  title: string;
  items: CourseItem[];
  variant: 'grid' | 'h-list';
}

export function Section({ title, items, variant = 'grid' }: SectionProps) {
  return (
    <section className="flex flex-col gap-4 px-4">
      <h2 className="font-bold text-3xl">
        {title}
      </h2>

      <ul 
        className={`grid grid-cols-1 sm:grid-cols-none ${variant === 'grid' ? 'sm:grid-cols-2 xl:grid-cols-3' : 'sm:grid-flow-col sm:overflow-x-auto'} gap-4 sm:gap-8 max-w-screen-xl`}
      >
        {items.map(item => (
          <li key={item.id} className="w-full sm:w-96">
            <CourseCard imageURL={item.image} title={item.title} description={item.description} id={item.id}  />
          </li>
        ))}
      </ul>
    </section>
  );
};