import React, { useState, useEffect } from 'react'
import { IoMdClose, IoMdHome } from 'react-icons/io'
import { AiOutlineMenu } from 'react-icons/ai'
import { SiGitbook } from 'react-icons/si'
import { HiHeart } from 'react-icons/hi2'
import MenuCard from './MenuCard'
import blinkcity from '../../public/logos/blinkcity.png'
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const buttonOpen = () => (<AiOutlineMenu className='cursor-pointer size-6' onClick={toggleMenu} />)
  const buttonClose = () => (<IoMdClose className='cursor-pointer size-6' onClick={toggleMenu} />)

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }
  }, [menuOpen])

  return (
    <nav>
      <div className='flex items-center justify-between bg-white  text-black p-2 navbar-buttons z-50 '>
        <img src={blinkcity} alt='logo' className='w-10 h-10 mr-2 rounded-full' />
        <span>{menuOpen ? (buttonClose()) : (buttonOpen())}</span>
      </div>
      <div id='scroll-menu' className={`animate__animated ${menuOpen ? 'animate__fadeInUp' : 'hidden'}`}>
        <div className='flex justify-between text-black font-semibold p-4'>
          <a href='/' className='flex items-center pr-2'>
            <span className='mr-2'>
              <IoMdHome />
            </span>Home
          </a>
          <a href='/news' className='link-center px-10 flex items-center'>
            <span className='mr-2'>
              <SiGitbook />
            </span>Noticias
          </a>
          <a href='/channels' className=' flex items-center pl-2'>
            <span className='mr-2'>
              <HiHeart />
            </span> Canales
          </a>
        </div>
        <div className='flex flex-col gap-10 ml-4'>
          <MenuCard />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
