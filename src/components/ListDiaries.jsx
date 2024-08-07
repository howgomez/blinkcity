import useFetch from '../hooks/useFetch'
import ListCards from './ListCards'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = { desktop: { breakpoint: { max: 3000, min: 0 }, items: 3, partialVisibilityGutter: 10 } }

const ListDiaries = () => {
  const playlistId = 'PLNF8K9Ddz0kIUWvF02B4dvUyOgGO9x87D'
  const { videos } = useFetch({ playlistId })

  return (
    <div>
      <div className='flex mt-8 justify-between items-center'>
        <h1 className='text-left text-lg font-semibold my-4 '>Entretenimiento</h1>
        <span className=' opacity-50 text-xs'>más</span>
      </div>
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
              image={video.snippet.thumbnails.high.url}
              mobileImage={video.snippet.thumbnails.medium.url}
              link={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
            />
          ))
        }
      </Carousel>
    </div>
  )
}

export default ListDiaries
