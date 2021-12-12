import { Link } from 'react-router-dom'
import { PageHeader, Table, Tag, Space } from 'antd'
import { BreadcrumbPath } from '../../../interfaces/layouts/BreadcrumbPath'
import MainBreadcrumb from '../../../components/MainBreadcrumb'

const Carriers = () => {
  const paths: Array<BreadcrumbPath> = [
    { to: '/', name: 'Home', key: 'home' },
    { to: '/apis', name: "API's", key: 'apis' },
    { name: 'Carriers', key: 'carriers' }
  ]

  const columns = [
    {
      title: 'Method',
      key: 'method',
      dataIndex: 'method',
    },
    {
      title: 'Endpoint',
      key: 'endpoint',
      render: (data: any) => {
        const { endpoint, to, key } = data
        return (
          <Link to={to} key={key}>
            {endpoint}
          </Link>
        )
      }
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags: any) =>
        tags.map((tag: any) => {
          const color = tag.length > 5 ? 'geekblue' : 'green'

          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          )
        })
    },
    {
      title: 'Action',
      key: 'action',
      render: (data: any) => {
        const { to, key } = data
        return (
          <Space size="middle">
            <Link to={to} key={key}>
              Do request
            </Link>
          </Space>
        )
      }
    }
  ]

  const data = [
    {
      key: 'get-carriers',
      endpoint: '/carriers',
      method: 'GET',
      description: 'List all carriers',
      tags: ['get', 'carriers', 'list'],
      to: '/apis/carriers/carriers-list'
    },
    {
      key: 'get-sellers-ids',
      endpoint: '/sellers/ids',
      method: 'GET',
      description: 'List all sellers ids',
      tags: ['get', 'sellers', 'ids', 'list'],
      to: '/apis/carriers/sellers-ids'
    }
  ]

  return (
    <>
      <MainBreadcrumb paths={paths} />

      <div className="site-layout-background" style={{ padding: 16 }}>
        <PageHeader
          className="site-page-header"
          title="Carriers"
          subTitle=" React Practice One"
        />
      </div>

      <Table columns={columns} dataSource={data} />
    </>
  )
}

export default Carriers
