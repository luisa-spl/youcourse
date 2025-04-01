interface PagePlayerProps {
  params: {
    courseId: string;
    classId: string;
  }
}

export default function PagePlayer({ params: { classId, courseId } }: PagePlayerProps) {
  return (
    <div>{courseId} {classId}</div>
  );
};