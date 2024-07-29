import { useState, useEffect } from 'react'

const YOUTUBE_API_KEY = 'AIzaSyAqieY8-WBX7nSzJ-r65mh8kr51huOzaiQ'

const useFetchChannelInfo = (channelId) => {
  const [channelInfo, setChannelInfo] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchChannelInfo = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${YOUTUBE_API_KEY}`)
        if (!response.ok) {
          throw new Error('Error fetching channel info')
        }
        const data = await response.json()
        setChannelInfo(data.items[0])
      } catch (error) {
        setError(error.message)
      }
    }

    fetchChannelInfo()
  }, [channelId])

  return { channelInfo, error }
}

export default useFetchChannelInfo
