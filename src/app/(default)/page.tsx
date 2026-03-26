import { APIYouTube } from "@/shared/services/api-youtube";
import { KeepWatching } from "../../components/KeepWatching";
import { Section } from "../../components/Section";

export default async function Home() {
  const courses = await APIYouTube.course.getAll();

  return (
    <>
      <KeepWatching 
        thumbImage={courses[0].image}
        courseTitle={courses[0].title}
       />
      <Section title="Veja todos os cursos" items={courses} variant="h-list"/>
    </>
  );
}
