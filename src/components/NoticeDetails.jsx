import React from 'react'
import { useParams } from 'react-router-dom'

const NoticeDetails = () => {
  const { id } = useParams()
  console.log(id)
  return (
    <div>
      <h1>Details</h1>
      {id}
    </div>
  )
}

export default NoticeDetails
