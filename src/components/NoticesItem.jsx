export const NoticesItem = ({ title, date, image }) => {
  return (
    <div className='flex flex-col rounded-xl'>
      <img src={image} alt={title} className='img-carousel rounded-lg' />
      <div className='flex p-1'>
        <h1 className='text-white text-left text-sm'>{title}</h1>
        <p className='text-white text-xs pr-2 py-1 opacity-60'>{date}</p>
      </div>
    </div>
  )
}
