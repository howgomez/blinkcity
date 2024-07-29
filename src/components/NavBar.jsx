// src/components/NavBar.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import useDarkMode from '../hooks/useDarkMode'
import svgLight from '../../public/logo-light.svg'
import svgDark from '../../public/logo-dark.svg'

const NavBar = () => {
  const [theme, toggleTheme] = useDarkMode() // Utilizar el hook

  return (

    <nav className='flex gap-20 items-center  p-4'>
      <picture onClick={toggleTheme} style={{ cursor: 'pointer' }}>
        <source srcSet={theme === 'light' ? svgLight : svgDark} type='image/svg+xml' />
        <img src={theme === 'light' ? svgLight : svgDark} alt='logo' className='size-12' />
      </picture>
      <Link to='/'>Inicio</Link>
      <Link to='/about'>Noticias</Link>
      <Link to='/contact'>Entretenimiento</Link>
    </nav>
  )
}

export default NavBar
