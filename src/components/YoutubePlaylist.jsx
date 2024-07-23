import { useEffect, useState } from 'react'
import { VideoList } from './VideoList'
import { getPlaylistVideos, PLAYLIST_ID } from '../hooks/api'

export const YoutubePlaylist = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videos = await getPlaylistVideos(PLAYLIST_ID)
        const sortedVideos = videos.sort((a, b) => new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt))
        setVideos(sortedVideos)
      } catch (error) {
        console.log('error', error)
      }
    }
    fetchVideos()
  }, [])
  console.log(videos)
  return (
    <div>
      <h1>BLACKPINK HOUSE Playlist</h1>
      <VideoList videos={videos} />
    </div>
  )
}
