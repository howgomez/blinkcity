import useFetch from '../hooks/useFetch'
import ListCards from './ListCards'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 0 },
    items: 3
  }
}

const ListDiaries = () => {
  const { videos, error } = useFetch({ playlistId: 'PLNF8K9Ddz0kIUWvF02B4dvUyOgGO9x87D' })

  console.log(videos)
  console.log(error)

  return (
    <div>
      <h1> Diaries</h1>
      <Carousel
        responsive={responsive}
        partialVisible
      >
        {
          videos.map(video => (
            <ListCards
              key={video.id}
              title={video.snippet.title}
              image={video.snippet.thumbnails.high.url}
              mobileImage={video.snippet.thumbnails.medium.url}
            />
          ))
        }

      </Carousel>
    </div>
  )
}

export default ListDiaries
