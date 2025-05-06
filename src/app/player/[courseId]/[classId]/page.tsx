import { PlayerHeader } from "@/components/PlayerHeader";
import { Playlist } from "@/components/Playlist";
import { VideoPlayer } from "@/components/VideoPlayer";

interface PagePlayerProps {
  params: {
    courseId: string;
    classId: string;
  }
}

export default function PagePlayer({ params: { classId, courseId } }: PagePlayerProps) {
  return (
    <main className="flex flex-col gap-2 h-screen">
      <PlayerHeader 
        courseTitle="NextJS, TailwindCSS e Typescript: #32" 
        classTitle="Criando componente de header para a tela de player" 
      />

      <div className="flex gap-2 h-[calc(100vh-104px)]">
        <div className="max-w-96">
          <Playlist 
            currentClassId={classId}
            currentCourseId={courseId}
            classList={[
              {
                title: "Módulo 1: Introdução ao NextJS",
                classes: [
                  {
                    isConcluded: true,
                    classTitle: 'Criando componente de header para a tela de player',
                    classId: '12', 
                  },
                  {
                    isConcluded: false,
                    classTitle: 'Criando componente de header para a tela de player 2',
                    classId: '123',

                  },
                  {
                    isConcluded: false,
                    classTitle: 'Criando componente de header para a tela de player 3',
                    classId: '1234',
                  }
                ]
              },
              {
                title: "Módulo 2: Introdução ao NextJS",
                classes: [
                  {
                    isConcluded: false,
                    classId: '12345',
                    classTitle: 'Criando componente de header para a tela de player'
                  },
                  {
                    isConcluded: false,
                    classId: '1352',
                    classTitle: 'Criando componente de header para a tela de player 2'
                  },
                  {
                    isConcluded: false,
                    classId: '1692',
                    classTitle: 'Criando componente de header para a tela de player 3'
                  }
                ]
              },
              {
                title: "Módulo 3: Introdução ao NextJS",
                classes: [
                  {
                    isConcluded: false,
                    classId: '12',
                    classTitle: 'Criando componente de header para a tela de player'
                  },
                  {
                    isConcluded: false,
                    classId: '1285',
                    classTitle: 'Criando componente de header para a tela de player 2'
                  },
                  {
                    isConcluded: false,
                    classId: '12122',
                    classTitle: 'Criando componente de header para a tela de player 3'
                  }
                ]
              },
              {
                title: "Módulo 3: Introdução ao NextJS",
                classes: [
                  {
                    isConcluded: false,
                    classId: '12',
                    classTitle: 'Criando componente de header para a tela de player'
                  },
                  {
                    isConcluded: false,
                    classId: '1285',
                    classTitle: 'Criando componente de header para a tela de player 2'
                  },
                  {
                    isConcluded: false,
                    classId: '12122',
                    classTitle: 'Criando componente de header para a tela de player 3'
                  }
                ]
              },
              {
                title: "Módulo 3: Introdução ao NextJS",
                classes: [
                  {
                    isConcluded: false,
                    classId: '12',
                    classTitle: 'Criando componente de header para a tela de player'
                  },
                  {
                    isConcluded: false,
                    classId: '1285',
                    classTitle: 'Criando componente de header para a tela de player 2'
                  },
                  {
                    isConcluded: false,
                    classId: '12122',
                    classTitle: 'Criando componente de header para a tela de player 3'
                  }
                ]
              },
              {
                title: "Módulo 3: Introdução ao NextJS",
                classes: [
                  {
                    isConcluded: false,
                    classId: '12',
                    classTitle: 'Criando componente de header para a tela de player'
                  },
                  {
                    isConcluded: false,
                    classId: '1285',
                    classTitle: 'Criando componente de header para a tela de player 2'
                  },
                  {
                    isConcluded: false,
                    classId: '12122',
                    classTitle: 'Criando componente de header para a tela de player 3'
                  }
                ]
              },
              {
                title: "Módulo 3: Introdução ao NextJS",
                classes: [
                  {
                    isConcluded: false,
                    classId: '12',
                    classTitle: 'Criando componente de header para a tela de player'
                  },
                  {
                    isConcluded: false,
                    classId: '1285',
                    classTitle: 'Criando componente de header para a tela de player 2'
                  },
                  {
                    isConcluded: false,
                    classId: '12122',
                    classTitle: 'Criando componente de header para a tela de player 3'
                  }
                ]
              },
              {
                title: "Módulo 3: Introdução ao NextJS",
                classes: [
                  {
                    isConcluded: false,
                    classId: '12',
                    classTitle: 'Criando componente de header para a tela de player'
                  },
                  {
                    isConcluded: false,
                    classId: '1285',
                    classTitle: 'Criando componente de header para a tela de player 2'
                  },
                  {
                    isConcluded: false,
                    classId: '12122',
                    classTitle: 'Criando componente de header para a tela de player 3'
                  }
                ]
              },
              {
                title: "Módulo 3: Introdução ao NextJS",
                classes: [
                  {
                    isConcluded: false,
                    classId: '12',
                    classTitle: 'Criando componente de header para a tela de player'
                  },
                  {
                    isConcluded: false,
                    classId: '1285',
                    classTitle: 'Criando componente de header para a tela de player 2'
                  },
                  {
                    isConcluded: false,
                    classId: '12122',
                    classTitle: 'Criando componente de header para a tela de player 3'
                  }
                ]
              },
            ]}
          />
        </div>
        <div className="flex-1">
          <div className="aspect-video">
            <VideoPlayer 
              videoId='apXQAnFX3JM'
            />
          </div>
        </div>
      </div>
    </main>
  );
};