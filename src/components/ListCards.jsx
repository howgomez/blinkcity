import { useMediaQuery } from '@uidotdev/usehooks'

const ListCards = ({ title, image, mobileImage }) => {
  const isMobile = useMediaQuery('(min-width: 768px)')
  return (
    <div className='flex pr-1'>
      <div className='contenedor-videos p-1 rounded-lg '>
        <img src={isMobile ? mobileImage : image} alt={title} className='object-cover rounded-lg' />
        <h1 className='text-left text-[8px] md:text-[10px] font-semibold text-slate-200 pt-2 '>{title}</h1>
      </div>
    </div>

  )
}

export default ListCards
