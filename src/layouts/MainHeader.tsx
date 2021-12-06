import { Layout } from 'antd'
import { Link } from 'react-router-dom'
import MainMenu from '../components/MainMenu'

const { Header } = Layout

interface Props {
}

const MainHeader = (props: Props) => {
  const { } = props

  const collapsed = true

  return (
    <Header
      className="header"
      style={{ padding: 0 }}
    >
      <Link to="/"><div className="logo" /></Link>
      <MainMenu mode="horizontal" collapsed={collapsed} />
    </Header>
  )
}

export default MainHeader