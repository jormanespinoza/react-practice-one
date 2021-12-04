import { createElement, useState } from 'react'
import { Layout, Menu, Breadcrumb, Button, Switch, MenuTheme } from 'antd'
import {
  HomeOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ApiOutlined,
  GithubOutlined,
  CustomerServiceOutlined
} from '@ant-design/icons'

import './main-layout.css'

const { Content, Footer } = Layout
const { SubMenu, Item } = Menu

interface Props { }

const MainLayout = (props: Props) => {
  const { } = props

  const [collapsed, setCollapsed] = useState<boolean>(false)
  const [theme, setTheme] = useState<MenuTheme>('dark')
  const [current, setCurrent] = useState<string>('1')

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  const changeTheme = (darkTheme: boolean) => {
    setTheme(darkTheme ? "dark" : "light")
  }

  const handleClick = (e: any) => {
    setCurrent(e.key);
  }

  return (
    <Layout>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <div style={{ width: 256 }}>
          <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
            {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
          </Button>
          <Switch
            checked={theme === 'dark'}
            style={{ marginLeft: 10 }}
            onChange={changeTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
            size="small"
          />
          <Menu
            theme={theme}
            onClick={handleClick}
            selectedKeys={[current]}
            defaultOpenKeys={['sub1']}
            inlineCollapsed={collapsed}
            mode="inline"
          >
            <Item key="1" icon={<HomeOutlined />}>
              Home
            </Item>
            <SubMenu key="sub1" icon={<ApiOutlined />} title="API's">
              <Item key="5" icon={<ApiOutlined />}>GlamitOMS</Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<CustomerServiceOutlined />} title="Developer">
              <Item key="3" icon={<GithubOutlined />}>
                Practice One Repository
              </Item>
            </SubMenu>
          </Menu>
        </div>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          Welcome Page
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Espinoza Dev ©2021 React Practice One</Footer>
    </Layout>
  )
}

export default MainLayout