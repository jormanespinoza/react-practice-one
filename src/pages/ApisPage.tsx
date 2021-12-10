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
      dataIndex: 'api',
      key: 'api',
      render: (text: any) => <Link key="glamit-oms" to="/apis/glamit-oms">{text}</Link>,
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
      render: (tags: any) => (
        <>
          {tags.map((tag: any) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: any) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  
  const data = [
    {
      key: '1',
      api: 'Glamit OMS',
      description: 'Manage OMS orders, products, payments, rmas, etc.',
      tags: ['glamit', 'oms', 'java', 'spring', 'springboot'],
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
