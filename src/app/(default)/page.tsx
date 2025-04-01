import { APIYouTube } from "@/shared/services/api-youtube";
import { KeepWatching } from "../../components/KeepWatching";
import { Section } from "../../components/Section";

export default async function Home() {
  const courses = await APIYouTube.course.getAll();

  return (
    // <main className="mt-12 flex justify-center">
    //   <div className="min-[640px]:max-w-[860px] min-[768px]:max-w-[740px] min-[1024px]:max-w-[980px] min-[1280px]:max-w-[1240px]">
    <>
      <KeepWatching />
      <Section title="Veja todos os cursos" items={courses} variant="h-list"/>
    </>
    //   </div>
    // </main>
  );
}
