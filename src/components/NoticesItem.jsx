import { Link } from 'react-router-dom'
export const NoticesItem = ({ title, date, image, id, description }) => {
  return (
    <div className='flex flex-col rounded-xl bg-black/10 px-2 pt-2 mb-2 relative '>
      <Link to={`news/${id}`}>
        <div className='bg-black rounded-lg'>
          <img src={image} alt={title} className='img-carousel object-cover h-[160px] rounded-lg' />
        </div>
        <p className='text-[7px] lg:text-[10px] font-bold py-1 absolute top-0 mt-3 ml-1 border rounded-full px-1 lg:px-2 bg-white/70'>{date}</p>
        <div className='flex py-1'>
          <h1 className=' text-left text-[8px] font-semibold lg:text-[12px] md:text-sm'>{title}</h1>
        </div>
      </Link>
    </div>
  )
}
