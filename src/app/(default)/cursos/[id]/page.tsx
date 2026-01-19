import { CourseContent } from "@/components/CourseContent";
import { CourseHeader } from "@/components/CourseHeader";
import { StartCourse } from "@/components/StartCourse";
import { APIYouTube } from "@/shared/services/api-youtube";
import { Metadata } from "next";

interface CourseDetailProps {
  params: { id: string };
}

export async function generateStaticParams(): Promise<CourseDetailProps['params'][]> {
  const courses = await APIYouTube.course.getAll();
  return courses.map(course => ({ id: course.id }));
}  

export async function generateMetadata(props: CourseDetailProps): Promise<Metadata> {
  const { id } = await props.params;
  const courseDetail = await APIYouTube.course.getById(id);

  return {
    title: courseDetail.title,
    description: courseDetail.description,
    openGraph: {
      locale: 'pt_BR',
      type: 'video.other',
      title: courseDetail.title,
      images: courseDetail.image,
      description: courseDetail.description,
      videos: courseDetail.classGroups
        .reduce<string[]>((previous, current) => [
          ...previous,
          ...current.classes.map(classItem => `http://localhost:3000/player/${current.courseId}/${classItem.id}`),
        ], []),
    }
  };
};

export default async function CourseDetail(props: CourseDetailProps) {
  const { id } = await props.params;
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