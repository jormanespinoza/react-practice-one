import { Breadcrumb, PageHeader } from 'antd'
import { BreadcrumbPath } from '../../interfaces/layouts/BreadcrumbPath'
import MainBreadcrumb from '../../components/MainBreadcrumb';

interface Props { }

const ApisPage = (props: Props) => {
  const { } = props

  const paths: BreadcrumbPath[] = [
    { to: '/', name: 'Home' },
    { to: '/apis', name: 'API\'s' },
    { name: 'Glamit OMS' },
  ]

  return (
    <>
      <MainBreadcrumb paths={paths} />

      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <PageHeader
          className="site-page-header"
          title="Glamit OMS"
          subTitle=" React Practice One"
        />
      </div>
    </>
  )
}

export default ApisPage