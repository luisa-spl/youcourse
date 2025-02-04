import { APIYouTube } from "@/shared/services/api-youtube";
import { Section } from "./components/Section";

export default async function Home() {
  const courses = await APIYouTube.course.getAll();

  return (
    <main className="mt-12 flex justify-center">
      <div className="min-[880px]:max-w-[880px]">
        <Section title="Veja todos os cursos" items={courses} variant="h-list"/>
      </div>
    </main>
  );
}
