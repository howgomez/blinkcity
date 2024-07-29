export const NoticesItem = ({ title, date, image }) => {
  return (
    <div className='flex flex-col rounded-xl '>
      <div className='bg-black rounded-xl'>
        <img src={image} alt={title} className='img-carousel rounded-lg' />
      </div>
      <div className='flex gap-4 py-2'>
        <h1 className=' text-left text-sm'>{title}</h1>
        <p className=' text-xs pr-2 py-1 opacity-60'>{date}</p>
      </div>
    </div>
  )
}
