import { notices } from '../data/data'
import { NoticesItem } from './NoticesItem'
export const Notices = () => {
  return (
    <div>
      <h1 className='text-left text-md font-bold mt-4 '>Ahora</h1>
      <div className='grid grid-cols-3 gap-x-2'>
        {notices.map(item => (
          <NoticesItem key={item.title} {...item} />
        ))}
      </div>
    </div>

  )
}
