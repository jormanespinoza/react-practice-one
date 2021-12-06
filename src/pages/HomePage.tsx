import { PageHeader } from 'antd'
import MainBreadcrumb from '../components/MainBreadcrumb';
import { BreadcrumbPath } from '../interfaces/layouts/BreadcrumbPath';

interface Props { }

const HomePage = (props: Props) => {
  const { } = props

  const paths: BreadcrumbPath[] = [{ name: 'Home' }]

  return (
    <>
      <MainBreadcrumb paths={paths} />

      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
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
