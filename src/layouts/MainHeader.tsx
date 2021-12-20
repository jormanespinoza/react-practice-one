import { useContext } from 'react'
import { Link } from 'react-router-dom'
import MainMenu from '../components/MainMenu'
import { ThemeContext } from '../context/theme-context'
import { Layout, Switch } from 'antd'

const { Header } = Layout

const MainHeader = () => {
  const { theme, changeTheme } = useContext(ThemeContext)

  return (
    <Header
      className="header"
      style={{ backgroundColor: theme === 'dark' ? '#001529' : '#fff' }}
    >
      <Link to="/">
        <div className="logo" />
      </Link>
      <MainMenu mode="horizontal" collapsed={false} />

      <Switch
        checked={theme === 'dark'}
        onChange={changeTheme}
        checkedChildren="Dark Theme"
        unCheckedChildren="Light Theme"
        size="default"
        style={{ position: 'absolute', top: 23, right: 16, zIndex: 2 }}
      />
    </Header>
  )
}

export default MainHeader
