import { useEffect, useState } from 'react'
export const ListYoutube = () => {
  const API_KEY = 'AIzaSyAqieY8-WBX7nSzJ-r65mh8kr51huOzaiQ'

  const [videos, setVideos] = useState([])

  const fetchVideos = async () => {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=blackpink&key=${API_KEY}&maxResults=50&type=video&videoEmbeddable=true&videoSyndicated=true`)
    const data = await response.json()
    setVideos(data.items)
    console.log(data.items)
  }

  useEffect(() => {
    fetchVideos()
    console.log('useEffect')
  }, [])
  console.log(videos)

  return (
    <div>ListYoutube</div>
  )
}
