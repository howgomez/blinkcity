import ChannelCard from './ChannelCard'
const Channels = () => {
  const channelIds = ['UC6-BgjsBa5R3PZQ_kZ8hKPg', 'UCNYi_zGmR519r5gYdOKLTjQ', 'UCBo1hnzxV9rz3WVsv__Rn1g', 'UCRE-097LGtx_Zo7LrHvkycA', 'UC35HKvKYPkri4Grd5KXl3wQ', 'UCOmHUn--16B90oW2L6FRR3A']

  return (
    <div>
      <h1 className='text-left text-md opacity-75 p-1 font-semibold'>Channles</h1>
      <div className='grid grid-cols-4 py-4'>
        {channelIds.map(channelid => (
          <ChannelCard key={channelid} channelid={channelid} />
        ))}
      </div>
    </div>
  )
}

export default Channels
