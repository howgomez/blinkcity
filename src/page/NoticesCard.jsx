const NoticesCard = ({ title, date, image, id, description }) => {
  return (
    <div className='bg-[#fff] text-black  w-[280px] m-auto  md:w-[280px] h-full'>
      <div className='bg-black'>
        <img src={image} alt={title} className='opacity-65 object-cover w-full h-[260px]' />
      </div>
      <div className='p-4'>
        <h1 className='font-bold text-md '>{title}</h1>
        <p className='text-left opacity-75 text-sm text-pretty '>{description}</p>
        <span className='font-semibold text-xs opacity-65'>{date}</span>
      </div>
    </div>
  )
}
export default NoticesCard
