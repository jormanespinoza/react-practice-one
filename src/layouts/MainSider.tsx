import { useState, useContext } from 'react'
import MainMenu from '../components/MainMenu'
import { ThemeContext } from '../context/theme-context'
import { Layout } from 'antd'

const { Sider } = Layout

const MainLayout = () => {
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
      style={{ marginTop: theme === 'dark' ? 0 : -1 }}
    >
      <MainMenu mode="inline" collapsed={collapsed} />
    </Sider>
  )
}

export default MainLayout
