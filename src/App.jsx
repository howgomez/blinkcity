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
    <div className='contenedor fñex flex-col w-screen md:w-[620px] max-[620px] p-5 box-border'>
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
// .contenedor {
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   max-width: 620px;
//   /* Ajusta este valor según sea necesario */
//   padding: 20px;
//   box-sizing: border-box;
// }
