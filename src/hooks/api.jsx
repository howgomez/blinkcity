const YOUTUBE_API_KEY = 'AIzaSyAqieY8-WBX7nSzJ-r65mh8kr51huOzaiQ'

export async function getPlaylistVideos(playlistid) {
  const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistid}&key=${YOUTUBE_API_KEY}&type=video`)
  const data = await response.json()
  return data.items
}

export const PLAYLIST_ID = 'PLR1lHcKNqZpNAR0CokbDlsP_G_T6yWJsw'
