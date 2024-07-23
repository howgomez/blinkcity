import './App.css'
import MyCarousel from './components/MyCarousel'
import { NavBar } from './components/NavBar'
import { Notices } from './components/Notices'
import { YoutubePlaylist } from './components/YoutubePlaylist'
// eslint-disable-next-line space-before-function-paren
function App() {
  return (
    <div className='container'>
      <NavBar />
      <MyCarousel />
      <Notices />
      <YoutubePlaylist />
    </div>
  )
}

export default App
