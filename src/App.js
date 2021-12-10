import { useState } from 'react'
import MainLayout from './layouts/MainLayout'
import { ThemeContext } from './context/theme-context'
import { MenuContext } from './context/menu-context'

import 'antd/dist/antd.css'

const App = () => {
  const [theme, setTheme] = useState('dark')
  const [activeLink, setActiveLink] = useState('home')

  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const changeActiveLink = (e) => {
    const active = e.key || e.target.parentNode.getAttribute('data-key')
    setActiveLink(active)
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <MenuContext.Provider value={{ activeLink, changeActiveLink }}>
        <MainLayout />
      </MenuContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
