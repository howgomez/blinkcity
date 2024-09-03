import { VOTE_STATUS } from '../data/vote'

const categories = VOTE_STATUS.map(vote => vote.categoria)

const MyCarousel = () => {
  return (
    <div className='mt-10'>
      <div className='relative'>
        {
          VOTE_STATUS.map(vote => (
            <div className='bg-black h-full' key={vote.id}>
              <img src={vote.image} alt='vote-kids' className='w-full h-full opacity-75' />
            </div>
          ))
        }
        <div className='text-sm'>
          <span className='text-white absolute top-0 text-md xl:text-xl p-2 bg-pink-300'>VOTE FOR LISA ON VMAs</span>
          <div className='absolute top-0 right-0'>
            {
              categories[0]?.map((category) => (
                <div className='mb-3 mt-2' key={category.name}>
                  <a href={category.url} target='_blank' className='bg-green-200 rounded-xl p-1 text-xs xl:text-sm' rel='noreferrer'>
                    {category.name}
                  </a>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyCarousel
