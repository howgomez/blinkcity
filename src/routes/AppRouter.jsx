import { Routes, Route } from 'react-router-dom'
import NavBar from '../components/NavBar'
import MyCarousel from '../components/MyCarousel'
import { Notices } from '../components/Notices'
import Channels from '../components/Channels'
import NoticesPage from '../page/NoticesPage'
import ChannelDetails from '../page/ChannelDetails'
import YoutubePlaylist from '../components/YoutubePlaylist'
import CallToAction from '../components/CallToAction'
import ListDiaries from '../components/ListDiaries'
import { useEffect } from 'react'
const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/news' element={<NoticesPage />}>
          <Route path='/news/:id' element={<NoticesPage />} />
        </Route>
        <Route path='/channels/:id' element={<ChannelDetails />} />
      </Routes>
    </>
  )
}

const HomePage = () => {
  useEffect(() => {
    document.body.classList.add('notices-page-bg')
    document.body.classList.remove('home-page-bg')
  }, [])
  return (
    <div>
      <div className=' sticky top-0 left-0 right-0 z-50 w-full'>
        <NavBar />
      </div>
      <MyCarousel />
      <Notices />
      <YoutubePlaylist />
      <Channels />
      <CallToAction />
      <ListDiaries />
    </div>
  )
}

export default AppRouter
