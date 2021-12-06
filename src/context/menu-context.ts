import { createContext } from 'react'

const activeLink = 'home'

export const MenuContext = createContext({'activeLink': activeLink , changeActiveLink: undefined})