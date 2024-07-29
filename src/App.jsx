import './App.css'
import MyCarousel from './components/MyCarousel'
import NavBar from './components/NavBar'
import { Notices } from './components/Notices'
import YoutubePlaylist from './components/YoutubePlaylist'
import Channels from './components/Channels'
import CallToAction from './components/CallToAction'
import ListDiaries from './components/ListDiaries'
// eslint-disable-next-line space-before-function-paren
function App() {
  return (
    <div className='contenedor'>
      <NavBar />
      <MyCarousel />
      <Notices />
      <YoutubePlaylist />
      <Channels />
      <CallToAction />
      <ListDiaries />
    </div>
  )
}

export default App
