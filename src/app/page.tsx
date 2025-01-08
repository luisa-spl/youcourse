import { APIYouTube } from "@/shared/services/api-youtube";

export default async function Home() {
  const courses = await APIYouTube.course.getAll();

  return (
    <main>
      {courses.map(course => {
        return (
        <div className="mb-10">{course.title}</div>
        )
      })}
    </main>
  );
}
