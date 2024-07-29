const YOUTUBE_API_KEY = 'AIzaSyAqieY8-WBX7nSzJ-r65mh8kr51huOzaiQ'

export async function getPlaylistVideos() {
  const playlistId = 'PLR1lHcKNqZpNAR0CokbDlsP_G_T6yWJsw' // ID de la playlist "BLACKPINK HOUSE"
  const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${YOUTUBE_API_KEY}`)
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  const data = await response.json()
  return data.items
}
