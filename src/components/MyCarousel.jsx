import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { trending } from '../data/trending'
import { CarouselItems } from './CarouselItems'

const responsive = { desktop: { breakpoint: { max: 3000, min: 0 }, items: 1 } }

const MyCarousel = () => {
  return (
    <div className=' w-full bg-black'>
      <div className='container-carousel'>
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
          className='z-10'
        >
          {trending.map(item => (
            <CarouselItems key={item.title} {...item} />
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default MyCarousel
