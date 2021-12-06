import { useContext } from 'react'
import { Layout } from 'antd'
import { Link } from 'react-router-dom'
import MainMenu from '../components/MainMenu'
import { ThemeContext } from '../context/theme-context'

const { Header } = Layout

interface Props {
}

const MainHeader = (props: Props) => {
  const { } = props
  const { theme } = useContext(ThemeContext)

  return (
    <Header
      className="header"
      style={{ backgroundColor: theme === 'dark' ? '#001529' : '#fff' }}
    >
      <Link to="/"><div className="logo" /></Link>
      <MainMenu mode="horizontal" collapsed={false} />
    </Header>
  )
}

export default MainHeader