import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className='flex gap-20 items-center bg-white p-4'>
      <Link to='/'>Inicio</Link>
      <Link to='/about'>Noticias</Link>
      <Link to='/contact'>Entretenimiento</Link>
    </nav>
  )
}
