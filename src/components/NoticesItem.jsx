export const NoticesItem = ({ title, date, image }) => {
  return (
    <div className='flex flex-col rounded-xl bg-black/10  '>
      <div className='bg-black rounded-lg'>
        <img src={image} alt={title} className='img-carousel object-cover h-[160px] rounded-lg' />
      </div>
      <div className='flex py-1'>
        <h1 className=' text-left text-[10px] md:text-sm'>{title}</h1>
        <p className='text-[9px] md:text-xs pr-2 py-1 opacity-60'>{date}</p>
      </div>
    </div>
  )
}
