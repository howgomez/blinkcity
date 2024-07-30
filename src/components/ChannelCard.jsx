import useFetchChannels from '../hooks/useFetchChannels'
const ChannelCard = ({ channelid }) => {
  const { channelInfo, error } = useFetchChannels(channelid)

  if (error) return <p>Error: {error}</p>
  if (!channelInfo) return <p>Loading...</p>
  console.log(channelInfo)

  return (
    <div>
      <div className='bg-black/20 p-2 ml-1 rounded-lg flex flex-col my-1'>
        <img src={channelInfo.snippet.thumbnails.high.url} alt={channelInfo.snippet.title} className='rounded-lg object-cover' />
        <h2 className='text-left text-[8px] md:text-sm font-semibold'>{channelInfo.snippet.customUrl}</h2>
      </div>
    </div>
  )
}

export default ChannelCard
