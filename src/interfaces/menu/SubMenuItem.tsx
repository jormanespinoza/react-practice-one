import { ReactNode } from 'react'

export interface SubMenuItem {
  to: string
  title: string
  key: string | number
  icon: ReactNode
  external?: boolean
}
