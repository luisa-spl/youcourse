'use client'

import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export function VideoPlayer({ videoId }: { videoId: string; }) {
  return (
    <>
      <ReactPlayer 
        url={`https://www.youtube.com/watch?v=${videoId}`}
      />
    </>
  )
}