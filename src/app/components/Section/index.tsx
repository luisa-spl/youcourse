'use client'

import { UIEvent, useRef, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
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
  const scrollRef = useRef<HTMLUListElement>(null);
  const [scrollAt, setScrollAt] = useState<'start' | 'middle' | 'end'>('start');

  const handleScroll = (scroll: number): void => {
    const currentScrollLeft = scrollRef.current?.scrollLeft || 0;
    scrollRef.current?.scrollTo({ behavior: 'smooth', left: currentScrollLeft + scroll });
  };

  const handleSetScroll = (event: UIEvent<HTMLUListElement>) => {
    if (event.currentTarget.scrollLeft === 0) {
      setScrollAt('start');
    } else if ((event.currentTarget.scrollWidth - event.currentTarget.clientWidth) === event.currentTarget.scrollLeft) {
      setScrollAt('end');
    } else {
      setScrollAt('middle');
    }
  };
  
  return (
    <section className="flex flex-col gap-8 sm:gap-4 px-4">
      <h2 className="font-bold text-3xl">
        {title}
      </h2>

      <ul 
        ref={scrollRef}
        onScroll={handleSetScroll}
        className={`overflow-primary grid grid-cols-1 md:grid-cols-none ${variant === 'grid' ? 'sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3' : 'md:grid-flow-col md:overflow-x-auto pb-3'} gap-4 md:gap-8 max-w-screen-xl`}
      >
        {variant === 'h-list' && (
          <button 
            disabled={scrollAt === 'start'}
            onClick={() => handleScroll(-350)} 
            className="h-14 w-14 bg-primary rounded-full hidden md:flex justify-center items-center sticky my-auto left-0 -ml-20 disabled:opacity-0 transition-opacity"
          >
            <MdKeyboardArrowLeft size={32}/>
          </button>
        )}

        {items.map(item => (
          <li key={item.id} className="w-96">
            <CourseCard imageURL={item.image} title={item.title} description={item.description} id={item.id}  />
          </li>
        ))}

        {variant === 'h-list' && (
          <button
            disabled={scrollAt === 'end'}
            onClick={() => handleScroll(350)} 
            className="h-14 w-14 bg-primary rounded-full hidden sm:flex justify-center items-center sticky my-auto right-0 -ml-20 disabled:opacity-0 transition-opacity"
          >
            <MdKeyboardArrowRight size={32}/>
          </button>
        )}
      </ul>
    </section>
  );
};