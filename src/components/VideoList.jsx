export const VideoList = ({ videos }) => {
  return (
    <div>
      {videos.map((video) => (
        <div key={video.snippet.resourceId.videoId}>
          <h3>{video.snippet.title}</h3>
          <p>{new Date(video.snippet.publishedAt).toLocaleDateString()}</p>
          <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
        </div>
      ))}
    </div>

  )
}
