import { APIYouTube } from "@/shared/services/api-youtube";
import { Metadata } from "next";
import { Section } from "../../../components/Section";


export const metadata: Metadata = {
  title: "YouCourse | Cursos",
};

export default async function CoursesPage() {
    const courses = await APIYouTube.course.getAll();
  
  return (
    <Section title="Veja todos os cursos" items={courses} variant="h-list"/>
  );
}