const NoticesDetails = ({ notices }) => {
  return (
    <div className='text-white text-2xl'>
      <hr className='bg-[rgb(52,58,64)] h-[1px] border-none mt-5 mb-5' />
      <h1 className='text-left text-xl font-semibold text-slate-200 py-4 '>{notices.title}</h1>
      <img src={notices.image} alt={notices.title} className='w-[100%]  rounded-lg object-cover opacity-45' />
      <p className='text-left text-sm font-semibold text-slate-200 py-4 opacity-75 text-pretty '>{notices.description}</p>
    </div>
  )
}

export default NoticesDetails
