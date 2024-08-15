import useFetchChannels from '../hooks/useFetchChannels'
import { useMediaQuery } from '@uidotdev/usehooks'
const ChannelCard = ({ channelid }) => {
  const { channelInfo, error } = useFetchChannels(channelid)

  const isMobile = useMediaQuery('(min-width: 840px)')
  if (error) return <p>Error: {error}</p>
  if (!channelInfo) return <p>Loading...</p>

  return (
    <a href={`https://www.youtube.com/${channelInfo.snippet.customUrl}`} target='_blank' rel='noreferrer'>
      <div className='bg-black/20 p-2 mr-1 mb-2 rounded-lg flex flex-col'>
        <img src={isMobile ? channelInfo.snippet.thumbnails.default.url : channelInfo.snippet.thumbnails.medium.url} alt={channelInfo.snippet.title} className='w-full object-cover rounded-lg' />
        <h2 className='text-left text-[8px] md:text-sm font-semibold'>{channelInfo.snippet.customUrl}</h2>
      </div>
    </a>
  )
}

export default ChannelCard
