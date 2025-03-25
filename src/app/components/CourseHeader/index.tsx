'use client'

import { Button } from "../Button";

interface CourseHeaderProps {
  title: string;
  description: string;
  totalClasses: number;
}

export function CourseHeader({ title, description, totalClasses }: CourseHeaderProps) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-extrabold text-xl">{title}</h1>
      <p>{description}</p>
      <div className="flex gap-2 items-center mt-1">
        <Button 
          label="Compartilhar"
          onClick={() => ('')} 
        />
        <span>{totalClasses} aulas</span>
      </div>
    </div>
  );
};