import { PageHeader } from 'antd'
import MainBreadcrumb from '../components/MainBreadcrumb'
import { BreadcrumbPath } from '../interfaces/layouts/BreadcrumbPath'

const HomePage = () => {
  const paths: Array<BreadcrumbPath> = [{ name: 'Home', key: 'home' }]

  return (
    <>
      <MainBreadcrumb paths={paths} />

      <div className="site-layout-background" style={{ padding: 16 }}>
        <PageHeader
          className="site-page-header"
          title="Home"
          subTitle="React Practice One"
        />
      </div>
    </>
  )
}

export default HomePage
