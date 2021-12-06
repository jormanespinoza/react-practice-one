import { useState, useContext } from 'react'
import { Layout } from 'antd'

import MainMenu from '../components/MainMenu'
import { ThemeContext } from '../context/theme-context'

const { Sider } = Layout

interface Props { }

const MainLayout = (props: Props) => {
  const { } = props

  const { theme } = useContext(ThemeContext)
  const [collapsed, setCollapsed] = useState<boolean>(false)
  
  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={toggleCollapsed}
      theme={theme}
      style={{ marginTop: -1 }}
    >
      <MainMenu mode="inline" collapsed={collapsed} />
    </Sider>
  )
}

export default MainLayout