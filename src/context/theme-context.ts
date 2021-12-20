import { createContext } from 'react'
import { MenuTheme } from 'antd'

const theme: MenuTheme = 'dark'

export const ThemeContext = createContext({
  theme: theme,
  changeTheme: undefined
})
