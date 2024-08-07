import React, { useState, useEffect } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { AiOutlineMenu } from 'react-icons/ai'

import { menu } from '../data/menu'
import MenuCard from './MenuCard'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const buttonOpen = () => (<AiOutlineMenu className=' cursor-pointer size-6' onClick={toggleMenu} />)
  const buttonClose = () => (<IoIosCloseCircleOutline className='tcursor-pointer size-6' onClick={toggleMenu} />)

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }
  }, [menuOpen])

  return (
    <nav>
      <div className='flex items-center justify-between bg-black/80 text-white p-2 navbar-buttons z-50'>
        <span>LOGO</span>
        <span>{menuOpen ? (buttonClose()) : (buttonOpen())}</span>
      </div>
      <div id='scroll-menu' className={`${menuOpen ? '' : 'hidden'}`}>
        <div className='flex  justify-between text-black font-semibold p-4'>
          <a href='/'>Home</a>
          <a href='/news' className='link-center px-12'>Noticias</a>
          <a href='/channels'>Canales</a>
        </div>
        <div className='flex flex-col gap-10'>
          <MenuCard id={menu[0].artistas} title={menu[0].id} />
          <MenuCard id={menu[1].entretenimiento} title={menu[1].id} />
          <MenuCard id={menu[2].eventos} title={menu[2].id} />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
