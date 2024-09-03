import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { useEffect } from 'react'

const NavPage = ({ section }) => {
  useEffect(() => {
    document.body.classList.add('home-page-bg')
    document.body.classList.remove('notices-page-bg')
  }, [])
  return (
    <nav className='font-semibold flex gap-[40%] items-center text-slate-400 bg-black/20 p-4'>
      <Link to='/'>
        <IoIosArrowBack className='text-2xl' />
      </Link>
      <span>{section}</span>
    </nav>
  )
}

export default NavPage
