import { createContext } from 'react'

export const themes = {
  dark: MenuTheme.dark,
  light: MenuTheme.light
}

export const ThemeContext = createContext(
  themes.dark
)