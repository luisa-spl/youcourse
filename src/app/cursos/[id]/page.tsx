import { CourseHeader } from "@/app/components/CourseHeader";
import { StartCourse } from "@/app/components/StartCourse";
import { APIYouTube } from "@/shared/services/api-youtube";
import { Metadata } from "next";

interface CourseDetailProps {
  params: { id: string };
}

export async function generateMetadata({ params }: CourseDetailProps): Promise<Metadata> {
  return {
    title: `YouCourse | params `
  }
};

export default async function CourseDetail({ params }: CourseDetailProps) {
  const course = await APIYouTube.course.getById(params.id);

  return (
    <div className="flex flex-col gap-4 lg:flex-row-reverse">
      <StartCourse 
        bgImage={course.image}
        classId="1"
        courseId={course.id}
        courseTitle={course.title}
      />
      <CourseHeader
        title={course.title}
        description={course.description}
        totalClasses={course.numberOfClasses}
      />
    </div>
  );
}