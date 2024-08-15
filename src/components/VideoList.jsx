// src/components/VideoList.jsx
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { useMediaQuery } from '@uidotdev/usehooks'

const VideoList = ({ videos }) => {
  const isMobile = useMediaQuery('(min-width: 240px)')
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 3
    }
  }
  return (
    <div>
      <Carousel
        responsive={responsive}
        partialVisible
        className='z-10'
      >
        {videos.map((video) => (
          <div key={video.snippet.resourceId.videoId} className=' flex flex-col my-2 p-1'>
            <div className='contenedor-videos py-1 px-1 rounded-lg'>
              <img src={isMobile ? video.snippet.thumbnails.medium.url : video.snippet.thumbnails.high.url} alt={video.snippet.title} className=' h-[100%] rounded-lg object-cover opacity-95 w-full' />
              <div>
                <h1 className='text-left text-sm font-semibold text-slate-200 py-2 '>{video.snippet.title}</h1>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default VideoList
