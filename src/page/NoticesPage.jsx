import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useNotices from '../hooks/useNotices'
import NoticesList from '../components/NoticesList'
import NoticesDetails from '../components/NoticesDetails'
import NavPage from './NavPage'

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
    <div className='bg-black/10 p-2 flex flex-col gap-2'>
      <NavPage section='Notices' />
      <div className='animate__animated animate__fadeInLeft'>
        {
          id && selectedNotice ? <NoticesDetails notices={selectedNotice} /> : <NoticesList notices={allNotices} />
        }
      </div>
    </div>
  )
}

export default NoticesPage
