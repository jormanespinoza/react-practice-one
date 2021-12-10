import { ReactNode } from 'react'
import { SubMenuItem } from './SubMenuItem'

export interface MenuItem {
  to?: string
  title: string
  key: string | number
  icon: ReactNode
  submenu?: Array<SubMenuItem>
  external?: boolean
}
