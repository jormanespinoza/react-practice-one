import { useState } from 'react'
import { Menu, MenuTheme, Switch } from 'antd'
import {
  HomeOutlined,
  ApiOutlined,
  GithubOutlined,
  CustomerServiceOutlined
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
export declare type MenuMode = 'horizontal' | 'vertical' | 'inline';

const { SubMenu, Item } = Menu

interface Props {
  mode: MenuMode,
  collapsed: boolean
}

const MainMenu = (props: Props) => {
  const { mode, collapsed } = props

  const [theme, setTheme] = useState<MenuTheme>('dark')
  const [current, setCurrent] = useState<string>('1')

  const setActiceLink = (e: any) => {
    setCurrent(e.key);
  }

  const changeTheme = (darkTheme: boolean) => {
    setTheme(darkTheme ? "dark" : "light")
  }

  return (
    <Menu
      theme={theme}
      onClick={setActiceLink}
      selectedKeys={[current]}
      defaultSelectedKeys={['home']}
      inlineCollapsed={collapsed}
      mode={mode}
    >
      <Item key="home" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Item>
      <SubMenu key="apis" icon={<ApiOutlined />} title="API's">
        <Item key="all" icon={<ApiOutlined />}><Link to="/apis">All</Link></Item>
        <Item key="glamit-oms" icon={<ApiOutlined />}><Link to="/apis/glamit-oms">Glamit OMS</Link></Item>
      </SubMenu>
      <SubMenu key="developer" icon={<CustomerServiceOutlined />} title="Developer">
        <Item key="github" icon={<GithubOutlined />}>
          <Link to="https://github.com/jormanespinoza/react-practice-one" target="_blank">Practice One Repository</Link>
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
  )
}

export default MainMenu