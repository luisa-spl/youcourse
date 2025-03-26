'use client'

import { Button } from "../Button";
import { CollapseText } from "./CollapseText";

interface CourseHeaderProps {
  title: string;
  description: string;
  totalClasses: number;
}

export function CourseHeader({ title, description, totalClasses }: CourseHeaderProps) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-extrabold text-xl">{title}</h1>
      <CollapseText numberOfLines={3}>{description}</CollapseText> 
      <div className="flex gap-4 items-center mt-1">
        <Button 
          label="Compartilhar"
          onClick={() => ('')} 
        />
        <span>{totalClasses} aulas</span>
      </div>
    </div>
  );
};