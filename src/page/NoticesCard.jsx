import React from 'react'

const NoticesCard = ({ title, date, image, id, description }) => {
  return (
    <div>
      <div>
        <h1 className='font-bold text-xl mt-5'>{title}</h1>
        <span className='font-semibold text-sm opacity-65'>{date}</span>
        <hr className='bg-[rgb(52,58,64)] h-[1px] border-none mt-5 mb-5' />
      </div>
      <div>
        <img src={image} alt={title} className='opacity-65' />
      </div>
      <hr className='bg-[rgb(52,58,64)] h-[1px] border-none mt-5 mb-5' />
      <div>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default NoticesCard

// import { Link } from 'react-router-dom'
// const NoticesCard = ({ title, date, image, id, description }) => {
//   return (
//     <div className='flex rounded-xl flex-col bg-black/20 w-9/12 m-auto mt-4 p-2 '>
//       <div className='bg-black rounded-lg'>
//         <Link to={`news/${id}`}>
//           <img src={image} alt={title} className=' opacity-50 object-cover rounded-lg' />
//         </Link>
//       </div>
//       <div className='flex justify-between py-2'>
//         <h1 className=' text-left text-[10px] md:text-sm'>{title}</h1>
//         <p className='text-[9px] md:text-xs py-1 opacity-60'>{date}</p>
//       </div>
//       <div>
//         <p className='text-left text-[12px] opacity-85'>{description}</p>
//       </div>
//     </div>
//   )
// }

// export default NoticesCard
