'use client'

import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { Lecture } from "../Lecture";

type Lecture = {
  id: string;
  title: string;
}

interface LectureGroupProps {
  title: string;
  courseId: string;
  lectures: Lecture[];
}

export function LectureGroup({ title, courseId, lectures }: LectureGroupProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(!open)} className="flex items-center gap-6 p-4 bg-paper">
        {open ?  <MdKeyboardArrowDown size={24}/> : <MdKeyboardArrowRight size={24} />}
        {title}
      </button>
     
      <ul data-open={open} className="flex flex-col data-[open=false]:hidden">
        {lectures.map(item => (
          <li key={item.id}>
            <Lecture 
              playerURL={`/player/${courseId}/${item.id}`}
              title={item.title}
            />
          </li>
        ))}
      </ul>
    </>
  );
};