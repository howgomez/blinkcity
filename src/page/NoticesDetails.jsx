import React from 'react'
import { useParams } from 'react-router-dom'
import { trending } from '../data/trending'
import { notices } from '../data/data'
const NoticesDetails = () => {
  const { id } = useParams()

  const items = [...trending, ...notices]
  const notice = items.find(item => item.id === id)
  console.log(notice)
  return (
    <div>
      NoticesDetails
      <h1>{id}</h1>
    </div>
  )
}

export default NoticesDetails
