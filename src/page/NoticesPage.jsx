import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import useNotices from '../hooks/useNotices'
import NoticesList from '../components/NoticesList'
import NoticesDetails from '../components/NoticesDetails'

const NoticesPage = () => {
  const { id } = useParams()

  const { selectedNotice, allNotices } = useNotices(id)

  useEffect(() => {
    document.body.classList.add('home-page-bg')
    document.body.classList.remove('notices-page-bg')
  }, [])
  useEffect(() => {
    console.log('Selected Notice:', selectedNotice)
  }, [selectedNotice])

  return (
    <div className='bg-black/10 p-2 '>
      <nav className='font-semibold p-1 flex gap-[40%] items-center text-slate-400'>
        <Link to='/'>
          <IoIosArrowBack className='text-2xl' />
        </Link>
        <span>Notices</span>
      </nav>
      <hr className='bg-[rgb(52,58,64)] h-[1px] border-none mt-5 mb-5' />
      {
        id && selectedNotice ? <NoticesDetails notices={selectedNotice} /> : <NoticesList notices={allNotices} />
      }
    </div>
  )
}

export default NoticesPage
