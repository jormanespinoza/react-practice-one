import { Layout } from 'antd'
import { Link } from 'react-router-dom'

const { Header } = Layout

interface Props {
}

const MainHeader = (props: Props) => {
  return (
    <Header className="header">
      <div className="logo" />
      <h2>React Practice One</h2>
    </Header>
  )
}

export default MainHeader