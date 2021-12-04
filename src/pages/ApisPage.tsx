import { Breadcrumb, PageHeader } from 'antd'
import { Link } from 'react-router-dom'

const { Item } = Breadcrumb

interface Props { }

const ApisPage = (props: Props) => {
  const { } = props

  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Item>Home</Item>
        <Item>API's</Item>
      </Breadcrumb>

      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <PageHeader
          className="site-page-header"
          title="API's"
          subTitle=" React Practice One | API's Available"
        />
      </div>
    </>
  )
}

export default ApisPage
