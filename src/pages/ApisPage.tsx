import { PageHeader } from 'antd'
import MainBreadcrumb from '../components/MainBreadcrumb'
import { BreadcrumbPath } from '../interfaces/layouts/BreadcrumbPath'

interface Props { }

const ApisPage = (props: Props) => {
  const { } = props

  const paths: BreadcrumbPath[] = [
    { to: '/', name: 'Home', key: 'home' },
    { name: 'API\'s', key: 'apis' }
  ]

  return (
    <>
      <MainBreadcrumb paths={paths} />

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
