import { CourseContent } from "@/components/CourseContent";
import { CourseHeader } from "@/components/CourseHeader";
import { StartCourse } from "@/components/StartCourse";
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
  const { id } = await params;
  const course = await APIYouTube.course.getById(id);

  return (
    <div className="flex flex-col gap-4 lg:flex-row-reverse">
      <StartCourse 
        bgImage={course.image}
        classId="1"
        courseId={course.id}
        courseTitle={course.title}
      />
      <div className="flex flex-col gap-9">
        <CourseHeader
          title={course.title}
          description={course.description}
          totalClasses={course.numberOfClasses}
        />
        <CourseContent 
          lectureGroups={course.classGroups}
        />
      </div>
    </div>
  );
}