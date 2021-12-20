import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BreadcrumbPath } from '../interfaces/layouts/BreadcrumbPath'
import { MenuContext } from '../context/menu-context'
import { Breadcrumb } from 'antd'

const { Item } = Breadcrumb

interface Props {
  paths: Array<BreadcrumbPath>
}

const MainBreadcrumb = (props: Props) => {
  const { paths } = props
  const { changeActiveLink } = useContext(MenuContext)

  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {paths.map((path: BreadcrumbPath) =>
        path.to ? (
          <Item key={path.key} data-key={path.key} onClick={changeActiveLink}>
            <Link to={path.to}>{path.name}</Link>
          </Item>
        ) : (
          <Item key={path.key} data-key={path.key} onClick={changeActiveLink}>
            {path.name}
          </Item>
        )
      )}
    </Breadcrumb>
  )
}

export default MainBreadcrumb
