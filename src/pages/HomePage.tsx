import { Breadcrumb, PageHeader} from 'antd'

const { Item } = Breadcrumb;

interface Props { }

const HomePage = (props: Props) => {
  const { } = props

  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Item>Home</Item>
      </Breadcrumb>

      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <PageHeader
          className="site-page-header"
          title="Home Page"
          subTitle=" React Practice One"
        />
      </div>
    </>
  )
}

export default HomePage
