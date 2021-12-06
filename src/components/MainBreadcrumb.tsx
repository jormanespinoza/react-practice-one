import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import { BreadcrumbPath } from '../interfaces/layouts/BreadcrumbPath';

const { Item } = Breadcrumb

interface Props {
  paths: Array<BreadcrumbPath>
}

const MainBreadcrumb = (props: Props) => {
  const { paths } = props

  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {paths.map((path: BreadcrumbPath) =>
        path.to
          ? (<Item key={path.key}><Link to={path.to}>{path.name}</Link></Item>)
          : (<Item key={path.key}>{path.name}</Item>)
      )}
    </Breadcrumb>
  )
}

export default MainBreadcrumb