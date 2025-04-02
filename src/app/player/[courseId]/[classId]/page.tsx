import { PlayerHeader } from "@/components/PlayerHeader";

interface PagePlayerProps {
  params: {
    courseId: string;
    classId: string;
  }
}

export default function PagePlayer({ params: { classId, courseId } }: PagePlayerProps) {
  return (
    <div>
      <PlayerHeader 
        courseTitle="NextJS, TailwindCSS e Typescript: #32" 
        classTitle="Criando componente de header para a tela de player" 
      />
    </div>
  );
};