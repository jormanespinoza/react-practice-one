import { MenuTheme } from 'antd'
import { createContext } from 'react'

const theme: MenuTheme = 'dark'

export const ThemeContext = createContext({ 'theme': theme , changeTheme: undefined })