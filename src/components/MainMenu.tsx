import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/theme-context'
import { MenuContext } from '../context/menu-context'
import { MenuItem } from '../interfaces/menu/MenuItem'
import { SubMenuItem } from '../interfaces/menu/SubMenuItem'
import { Menu } from 'antd'
import {
  HomeOutlined,
  BarsOutlined,
  SnippetsOutlined,
  ApiOutlined,
  GithubOutlined,
  CustomerServiceOutlined
} from '@ant-design/icons'
declare type MenuMode = 'horizontal' | 'vertical' | 'inline'

const { SubMenu, Item } = Menu

interface Props {
  mode: MenuMode
  collapsed: boolean
}

const MainMenu = (props: Props) => {
  const { mode, collapsed } = props
  const { theme } = useContext(ThemeContext)
  const { activeLink, changeActiveLink } = useContext(MenuContext)
  const menu: Array<MenuItem> = [
    {
      to: '/',
      title: 'Home',
      key: 'home',
      icon: <HomeOutlined />
    },
    {
      title: "API's",
      key: 'apis-submenu',
      icon: <SnippetsOutlined />,
      submenu: [
        {
          to: '/apis',
          title: 'All',
          key: 'apis',
          icon: <BarsOutlined />
        },
        {
          to: '/apis/glamit-oms',
          title: 'Glamit OMS',
          key: 'glamit-oms',
          icon: <ApiOutlined />
        },
        {
          to: '/apis/carriers',
          title: 'Carriers',
          key: 'carriers',
          icon: <ApiOutlined />
        }
      ]
    },
    {
      title: 'Developer',
      key: 'developer',
      icon: <CustomerServiceOutlined />,
      submenu: [
        {
          to: 'https://github.com/jormanespinoza/react-practice-one',
          title: 'Practice One Repository',
          key: 'github',
          icon: <GithubOutlined />,
          external: true
        }
      ]
    }
  ]

  return (
    <Menu
      theme={theme}
      onClick={changeActiveLink}
      selectedKeys={[activeLink]}
      inlineCollapsed={collapsed}
      mode={mode}
    >
      {menu.map((item: MenuItem) =>
        item.submenu ? (
          <SubMenu key={item.key} icon={item.icon} title={item.title}>
            {item.submenu.map((subitem: SubMenuItem) => (
              <Item key={subitem.key} icon={subitem.icon}>
                {subitem.external ? (
                  <a href={subitem.to} target="_blank" rel="noreferrer">
                    {subitem.title}
                  </a>
                ) : subitem.to ? (
                  <Link to={subitem.to}>{subitem.title}</Link>
                ) : (
                  subitem.title
                )}
              </Item>
            ))}
          </SubMenu>
        ) : (
          <Item key={item.key} icon={item.icon}>
            {item.external ? (
              <a href={item.to} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            ) : item.to ? (
              <Link to={item.to}>{item.title}</Link>
            ) : (
              item.title
            )}
          </Item>
        )
      )}
    </Menu>
  )
}

export default MainMenu
