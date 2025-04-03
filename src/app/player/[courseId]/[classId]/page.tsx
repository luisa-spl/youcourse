'use client';

import { PlayerHeader } from "@/components/PlayerHeader";
import { PlayerGroup } from "@/components/Playlist/PlayerGroup";

interface PagePlayerProps {
  params: {
    courseId: string;
    classId: string;
  }
}

export default function PagePlayer({ params: { classId, courseId } }: PagePlayerProps) {
  return (
    <main className="flex flex-col gap-20">
      <PlayerHeader 
        courseTitle="NextJS, TailwindCSS e Typescript: #32" 
        classTitle="Criando componente de header para a tela de player" 
      />

      <PlayerGroup 
        position={1}
        title="NextJS, TailwindCSS e Typescript: #32"
        isOpen={true}
        onToggle={() => console.log('toggle')}
        classes={[
          {
            isConcluded: true,
            isPlaying: false,
            classTitle: 'Criando componente de header para a tela de player'
          },
          {
            isConcluded: false,
            isPlaying: true,
            classTitle: 'Criando componente de header para a tela de player 2'
          },
          {
            isConcluded: false,
            isPlaying: false,
            classTitle: 'Criando componente de header para a tela de player 3'
          }
        ]}
      />
      
    </main>
  );
};