import { Link } from 'react-router-dom'
import { PageHeader, Table, Tag, Space } from 'antd'
import MainBreadcrumb from '../components/MainBreadcrumb'
import { BreadcrumbPath } from '../interfaces/layouts/BreadcrumbPath'

interface Props { }

const ApisPage = (props: Props) => {
  const { } = props
  
  const columns = [
    {
      title: 'API',
      key: 'api',
      render: (data: any) => {
        const { api, to, key } = data
        return (
          <Link to={to} key={key}>{api}</Link>
        )
      }
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags: any) => (tags.map((tag: any) => {
          const color = tag.length > 5 ? 'geekblue' : 'green'
        
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          )
        })
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (data: any) => {
        const {to, key} = data
        return (
          <Space size="middle">
            <Link to={to} key={key}>Endpoints</Link>
          </Space>
        )
      }
    },
  ];
  
  const data = [
    {
      key: 'glamit-oms',
      api: 'Glamit OMS',
      description: 'Manage orders, products, payments, rmas, etc.',
      tags: ['glamit', 'oms', 'java', 'spring', 'springboot'],
      to: '/apis/glamit-oms'
    },
    {
      key: 'carriers',
      api: 'Carriers',
      description: 'Manage carriers, shipments, tracking, sellers, tablerates, etc.',
      tags: ['glamit', 'carriers', 'java', 'spring', 'springboot'],
      to: '/apis/carriers'
    }
  ]

  const paths: BreadcrumbPath[] = [
    { to: '/', name: 'Home', key: 'home' },
    { name: 'API\'s', key: 'apis' }
  ]

  return (
    <>
      <MainBreadcrumb paths={paths} />

      <div className="site-layout-background" style={{ padding: 16 }}>
        <PageHeader
          className="site-page-header"
          title="API's"
          subTitle=" React Practice One | API's Available"
        />
      </div>

      <Table columns={columns} dataSource={data} />
    </>
  )
}

export default ApisPage
