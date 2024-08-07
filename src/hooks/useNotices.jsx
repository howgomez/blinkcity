import { useEffect, useState } from 'react'
import { notices } from '../data/data'
import { trending } from '../data/trending'
const useNotices = (id) => {
  const [selectedNotice, setSelectedNotice] = useState(null)
  const allNotices = [...trending, ...notices]

  useEffect(() => {
    if (id) {
      const notice = allNotices.find(notice => notice.id === id)
      setSelectedNotice(notice)
    }
  }, [id])

  return { selectedNotice, allNotices }
}

export default useNotices
