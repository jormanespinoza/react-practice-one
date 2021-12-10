import { Layout } from 'antd'

import MainFooter from './MainFooter'
import MainHeader from './MainHeader'
import MainSider from './MainSider'
import MainRouter from '../components/MainRouter'

import '../assets/css/main-layout.css'

const { Content } = Layout

const MainLayout = () => {
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
