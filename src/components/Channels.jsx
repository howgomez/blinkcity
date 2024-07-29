import ChannelCard from './ChannelCard'
const Channels = () => {
  const channelIds = ['UC6-BgjsBa5R3PZQ_kZ8hKPg', 'UCNYi_zGmR519r5gYdOKLTjQ', 'UCBo1hnzxV9rz3WVsv__Rn1g', 'UCRE-097LGtx_Zo7LrHvkycA']

  console.log(channelIds)
  return (
    <div>
      <h1 className='text-left text-md opacity-65 font-semibold  py-4'>Channles</h1>
      <div className='flex gap-4'>
        {channelIds.map(channelid => (
          <ChannelCard key={channelid} channelid={channelid} />
        ))}
      </div>
    </div>
  )
}

export default Channels
