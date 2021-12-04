import { useState } from 'react'
import { Layout, Menu, MenuTheme, Switch } from 'antd'
import {
  HomeOutlined,
  ApiOutlined,
  GithubOutlined,
  CustomerServiceOutlined
} from '@ant-design/icons'

const { Sider } = Layout
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
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={toggleCollapsed}
      theme={theme}
    >
      <Menu
        theme={theme}
        onClick={handleClick}
        selectedKeys={[current]}
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
            <a href="https://github.com/jormanespinoza/react-practice-one" target="_blank">
              Practice One Repository
            </a>
          </Item>
        </SubMenu>
        <Item>
          <Switch
            checked={theme === 'dark'}
            style={{ marginLeft: 10 }}
            onChange={changeTheme}
            checkedChildren="D"
            unCheckedChildren="L"
            size="small"
          />
        </Item>
      </Menu>
    </Sider>
  )
}

export default MainLayout