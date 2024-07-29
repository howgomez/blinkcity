// src/components/YouTubePlaylist.jsx
import React from 'react'
import useFetch from '../hooks/useFetch'
import VideoList from './VideoList'

const YouTubePlaylist = () => {
  const playlistId = 'PLNF8K9Ddz0kJWl_ftRAo0aNJCSZlQVkRd'
  const { videos, error } = useFetch({ playlistId })
  return (
    <div>
      <div className='flex mt-8 justify-between items-center'>
        <h1 className='text-left text-lg font-semibold '>YouTube Playlist</h1>
        <span className=' opacity-50 text-xs'>más</span>
      </div>
      {error ? <p>Error: {error}</p> : <VideoList videos={videos} />}
    </div>

  )
}

export default YouTubePlaylist
