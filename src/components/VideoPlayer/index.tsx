'use client'

import dynamic from 'next/dynamic';
import { useMemo, useState } from 'react';
import { MdPlayCircle } from 'react-icons/md';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

interface VideoPlayerProps {
  videoId: string;
  onPlayNext: () => void;
}

export function VideoPlayer({ videoId, onPlayNext }: VideoPlayerProps) {
  const [progress, setProgress] = useState<number | undefined>(undefined);
  const [totalDuration, setTotalDuration] = useState<number | undefined>(undefined);

  const secondsUntilEnd = useMemo(() => {
    if (!totalDuration) return undefined;
    if (!progress) return undefined;

    return Number((totalDuration - progress).toFixed(0));
  }, [progress, totalDuration]);

  const showNextButton = useMemo(() => {
        return !!secondsUntilEnd && secondsUntilEnd <= 30;
  }, [progress, totalDuration]);

  return (
    <>
      {showNextButton && (
        <button 
          onClick={onPlayNext}
          className="bg-primary p-3 px-4 rounded-lg font-bold absolute right-4 top-32"
        >
          Proxima aula em {secondsUntilEnd}
          <MdPlayCircle size={24} />
        </button>
      )}
      <ReactPlayer 
        height="92%"
        width="100%"
        controls={true}
        playing={true}
        onProgress={({ playedSeconds }) => setProgress(playedSeconds)}
        onDuration={(duration) => setTotalDuration(duration)}
        onEnd={() => onPlayNext()}
        url={`https://www.youtube.com/watch?v=${videoId}`}
      />
    </>
  )
}