import NoticesCard from '../page/NoticesCard'
const NoticesList = ({ notices }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4  mt-10'>
      {
        notices.map(item => (<NoticesCard key={item.id} {...item} />))
      }
    </div>
  )
}

export default NoticesList
