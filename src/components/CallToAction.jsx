import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import voteKids from '../../public/vote-kids.png'
import voteKids2 from '../../public/vote-kids-2.png'
import voteVma from '../../public/vote-vma.png'

const responsive = { desktop: { breakpoint: { max: 3000, min: 0 }, items: 1 } }

const MyCarousel = () => {
  return (
    <div className='mt-10'>
      <div>
        <Carousel
          responsive={responsive}
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={4000}
          centerMode={false}
          containerClass='container-with-dots'
          dotListClass=''
          draggable
          focusOnSelect={false}
          infinite
          itemClass=''
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          className='call-to-action h-58 z-10'
        >
          <div className='bg-red-200 h-full'>
            <img src={voteKids} alt='vote-kids' className='w-full h-full' />
          </div>
          <div className='bg-black h-full'>
            <img src={voteKids2} alt='vote-kids' className='w-full h-full' />
          </div>
          <div className='bg-green-200 h-full'>
            <img src={voteVma} alt='vote-vma' className='w-full' />
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default MyCarousel
