import { APIYouTube } from "@/shared/services/api-youtube";
import { Metadata } from "next";
import { Section } from "../components/Section";


export const metadata: Metadata = {
  title: "YouCourse | Cursos",
};

export default async function CoursesPage() {
    const courses = await APIYouTube.course.getAll();
  
  return (
    <main className="py-8 px-12 overflow-x-hidden w-11/12 ml-auto mr-auto">
      <Section title="Veja todos os cursos" items={courses} variant="grid"/>
    </main>
  );
}