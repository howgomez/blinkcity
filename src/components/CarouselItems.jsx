export const CarouselItems = ({ title, date, image }) => {
  return (
    <div>
      <img src={image} alt={title} className='img-carousel' />
      <div className='text-left absolute bottom-0 left-0 bg-black/20 p-4 w-full'>
        <h1 className='text-white text-2xl font-bold'>{title}</h1>
        <p className='text-white text-sm'>{date}</p>
      </div>
    </div>
  )
}
