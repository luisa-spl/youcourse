import { APIYouTube } from "@/shared/services/api-youtube";
import { Section } from "./components/Section";

export default async function Home() {
  const courses = await APIYouTube.course.getAll();

  return (
    <main>
      <Section title="Veja todos os cursos" items={courses} variant="h-list"/>
    </main>
  );
}
