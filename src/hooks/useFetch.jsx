import { useState, useEffect } from 'react'

const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY

const useFetch = ({ playlistId }) => {
  const [videos, setVideos] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${playlistId}&key=${YOUTUBE_API_KEY}`)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setVideos(data.items)
      } catch (error) {
        setError(error.message)
        console.error('Error fetching playlist from YouTube API', error)
      }
    }

    fetchVideos()
  }, [playlistId])

  return { videos, error }
}

export default useFetch
