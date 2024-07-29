import { useMediaQuery } from '@uidotdev/usehooks'

const ListCards = ({ title, image, mobileImage }) => {
  const isMobile = useMediaQuery('(min-width: 768px)')
  return (
    <>
      <div className=' flex flex-col my-8 p-1'>
        <div className='contenedor-videos py-1 px-1 rounded-lg'>
          <img src={isMobile ? mobileImage : image} alt={title} className='w-[100%] h-[100%] rounded-lg object-cover opacity-95' />
          <h1 className='text-left text-xs font-semibold text-slate-200 py-2 '>{title}</h1>
        </div>
      </div>
    </>
  )
}

export default ListCards
