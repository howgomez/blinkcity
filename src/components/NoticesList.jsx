import NoticesCard from '../page/NoticesCard'
const NoticesList = ({ notices }) => {
  return (
    <div>
      {
        notices.map(item => (
          <NoticesCard key={item.id} {...item} />
        ))
      }
    </div>
  )
}

export default NoticesList
