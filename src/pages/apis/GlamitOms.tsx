import { PageHeader } from 'antd'
import { BreadcrumbPath } from '../../interfaces/layouts/BreadcrumbPath'
import MainBreadcrumb from '../../components/MainBreadcrumb'

const GlamitOms = () => {
  const paths: BreadcrumbPath[] = [
    { to: '/', name: 'Home', key: 'home' },
    { to: '/apis', name: "API's", key: 'apis' },
    { name: 'Glamit OMS', key: 'glamit-oms' }
  ]

  return (
    <>
      <MainBreadcrumb paths={paths} />

      <div className="site-layout-background" style={{ padding: 16 }}>
        <PageHeader
          className="site-page-header"
          title="Glamit OMS"
          subTitle=" React Practice One"
        />
      </div>
    </>
  )
}

export default GlamitOms
