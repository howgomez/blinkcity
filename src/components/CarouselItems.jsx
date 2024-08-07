import { Link } from 'react-router-dom'

export const CarouselItems = ({ title, date, image, id }) => {
  return (
    <div>
      <Link to={`news/${id}`}>
        <img src={image} alt={title} className='img-carousel' />
        <div className='text-left absolute bottom-0 left-0 bg-black/20 p-4 w-full text-slate-200'>
          <h1 className=' lg:text-2xl font-bold'>{title}</h1>
          <p className=' text-sm'>{date}</p>
        </div>
      </Link>

    </div>
  )
}
