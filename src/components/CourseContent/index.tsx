import { LectureGroup, LectureGroupProps } from "./LectureGroup";

interface CourseContentProps {
  lectureGroups: LectureGroupProps[]
}

export function CourseContent({ lectureGroups }: CourseContentProps) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-extrabold">Conteúdo do curso</h2>

      <ul className="flex flex-col rounded-lg overflow-clip">
        {lectureGroups.map((item, index) => (
          <li key={index} className="flex flex-col">
            <LectureGroup
              title={item.title}
              courseId={item.courseId}
            classes={item.classes}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};