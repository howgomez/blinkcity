// src/components/NavBar.jsx
import React from 'react'
import useDarkMode from '../hooks/useDarkMode'
import svgLight from '../../public/logo-light.svg'
import svgDark from '../../public/logo-dark.svg'
import { TiThMenu } from 'react-icons/ti'

const NavBar = () => {
  const [theme, toggleTheme] = useDarkMode() // Utilizar el hook

  return (

    <nav className='flex items-center justify-between bg-black/20'>
      <picture onClick={toggleTheme} className='cursor-pointer bg-[#222] rounded-full p-2'>
        <source srcSet={theme === 'light' ? svgLight : svgDark} type='image/svg+xml' />
        <img src={theme === 'light' ? svgLight : svgDark} alt='logo' className='size-12' />
      </picture>
      <span>LOGO</span>
      <TiThMenu className='text-white cursor-pointer size-8' />
    </nav>
  )
}

export default NavBar
