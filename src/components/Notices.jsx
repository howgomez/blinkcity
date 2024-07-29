import { notices } from '../data/data'
import { NoticesItem } from './NoticesItem'
export const Notices = () => {
  return (
    <div className='content-notices'>
      <h1 className='text-left font-semibold py-4 '>Noticias</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
        {notices.map(item => (
          <NoticesItem key={item.title} {...item} />
        ))}
      </div>
    </div>

  )
}
