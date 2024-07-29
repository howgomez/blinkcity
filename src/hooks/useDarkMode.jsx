// src/hooks/useDarkMode.js
import { useState, useEffect } from 'react'

const useDarkMode = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const root = window.document.documentElement
    root.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return [theme, toggleTheme]
}

export default useDarkMode
