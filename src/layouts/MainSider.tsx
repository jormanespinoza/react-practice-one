import { useState } from 'react'
import { Layout, MenuTheme } from 'antd'

import MainMenu from '../components/MainMenu'

const { Sider } = Layout

interface Props { }

const MainLayout = (props: Props) => {
  const { } = props

  const [collapsed, setCollapsed] = useState<boolean>(false)
  const [theme, setTheme] = useState<MenuTheme>('dark')
  const [current, setCurrent] = useState<string>('1')

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={toggleCollapsed}
      theme={theme}
    >
      <MainMenu mode="inline" collapsed={collapsed} />
    </Sider>
  )
}

export default MainLayout