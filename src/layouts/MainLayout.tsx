import { Layout } from 'antd'

import MainFooter from './MainFooter'
import MainHeader from './MainHeader'
import MainSider from './MainSider'

import './main-layout.css'
import MainRouter from '../components/MainRouter'
const { Content } = Layout

interface Props {
}

const MainLayout = (props: Props) => {
  const { } = props

  return (
    <Layout>
      <MainHeader />

      <Layout style={{ minHeight: 'calc(100vh - 64px)' }}>
        <MainSider />

        <Layout className="site-layout">
          <Content style={{ margin: '0 16px' }}>
            <MainRouter />
          </Content>
          <MainFooter />
        </Layout>
      </Layout>
    </Layout>
  )
}

export default MainLayout