import React from 'react'
const NoticesDetails = ({ notices }) => {
  return (
    <div className='text-white text-2xl'>
      <img src={notices.image} alt={notices.title} className='w-[100%] h-[100%] rounded-lg object-cover opacity-45' />
      <h1 className='text-left text-sm font-semibold text-slate-200 py-2 '>{notices.title}</h1>
      <p className='text-left text-sm font-semibold text-slate-200 py-2 '>{notices.description}</p>

    </div>
  )
}

export default NoticesDetails
