import useFetch from '../hooks/useFetch'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ListCards from './ListCards'

const YouTubePlaylist = () => {
  const playlistId = 'PLNF8K9Ddz0kJWl_ftRAo0aNJCSZlQVkRd'
  const { videos } = useFetch({ playlistId })

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 3,
      partialVisibilityGutter: 10
    }
  }
  return (
    <div>
      <div className='flex mt-2 justify-between items-center'>
        <h1 className='text-left text-lg font-semibold py-4'>Entretenimiento</h1>
        <span className='opacity-50 text-xs'>más</span>
      </div>
      <div>
        <Carousel
          responsive={responsive}
          partialVisible
          className='z-10'
        >
          {
            videos.map((video) => (
              <ListCards
                key={video.id}
                title={video.snippet.title}
                image={video.snippet.thumbnails.medium.url}
                mobileImage={video.snippet.thumbnails.high.url}
                link={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
              />
            ))
          }
        </Carousel>
      </div>
    </div>

  )
}

export default YouTubePlaylist
