import { APIYouTube } from "@/shared/services/api-youtube";
import { Metadata } from "next";
import { Section } from "../components/Section";


export const metadata: Metadata = {
  title: "YouCourse | Cursos",
};

export default async function CoursesPage() {
    const courses = await APIYouTube.course.getAll();
  
  return (
    <main className="mt-12 flex justify-center">
      <div className="min-[880px]:max-w-max">
        <Section title="Veja todos os cursos" items={courses} variant="grid"/>
      </div>
    </main>
  );
}