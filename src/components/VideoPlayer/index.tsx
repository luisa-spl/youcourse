'use client'

import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export function VideoPlayer({ videoId }: { videoId: string; }) {
  return (
    <>
      <ReactPlayer 
        height="100%"
        width="100%"
        controls={true}
        playing={true}
        url={`https://www.youtube.com/watch?v=${videoId}`}
      />
    </>
  )
}