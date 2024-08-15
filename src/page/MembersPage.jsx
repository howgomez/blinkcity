import React from 'react'
import { useParams } from 'react-router-dom'
import { members } from '../data/members'
import NavPage from './NavPage'
import MembersCard from './MembersCard'

const MembersPage = () => {
  const { id } = useParams()
  const miembro = members.find(item => item.id === id)

  return (
    <div className='w-full bg-white p-2 flex flex-col gap-2'>
      <NavPage section='Artistas' />
      <MembersCard miembro={miembro} />
    </div>
  )
}

export default MembersPage
