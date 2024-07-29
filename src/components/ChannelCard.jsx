import useFetchChannels from '../hooks/useFetchChannels'
const ChannelCard = ({ channelid }) => {
  const { channelInfo, error } = useFetchChannels(channelid)

  if (error) return <p>Error: {error}</p>
  if (!channelInfo) return <p>Loading...</p>
  console.log(channelInfo)

  return (
    <div>
      <div
        className='channel-content bg-black/10 p-2 rounded-lg'
      >
        <img src={channelInfo.snippet.thumbnails.high.url} alt={channelInfo.snippet.title} className='rounded-lg object-cover w-full h-full' />
        <div className='flex flex-col p-2'>
          <h2 className='text-sm font-semibold'>{channelInfo.snippet.title}</h2>
        </div>
      </div>
    </div>
  )
}

export default ChannelCard
