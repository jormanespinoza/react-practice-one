import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BreadcrumbPath } from '../../../interfaces/layouts/BreadcrumbPath'
import MainBreadcrumb from '../../../components/MainBreadcrumb'
import { SellerId } from '../../../interfaces/apis/carriers/SellerId'
import { getSellersIds } from '../../../services/carriers/SellerService'
import { PageHeader, Table, notification, Space } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

const SellersIds = () => {
  const paths: Array<BreadcrumbPath> = [
    { to: '/', name: 'Home', key: 'home' },
    { to: '/apis', name: "API's", key: 'apis' },
    { to: '/apis/carriers', name: 'Carriers', key: 'carriers' },
    { name: 'Sellers Ids List', key: 'sellers-ids-list' }
  ]

  const [sellersIds, setSellersIds] = useState<Array<SellerId>>([])

  useEffect(() => {
    getSellersIds()
      .then((response) => setSellersIds(response.data))
      .catch((err) => {
        notification['error']({
          message: 'API Carriers',
          description: err.message
        })
      })
  }, [])

  const columns = [
    {
      title: 'Id',
      key: 'id',
      dataIndex: 'seller_id'
    },
    {
      title: 'Name',
      key: 'name',
      dataIndex: 'name'
    },
    {
      title: 'Action',
      key: 'action',
      render: (data: any) => {
        const { seller_id } = data
        return (
          <Space size="middle">
            <Link to={{ pathname: `/apis/carriers/seller/${seller_id}` }} key={seller_id}>
              Do request
            </Link>
          </Space>
        )
      }
    }
  ]

  return (
    <>
      <MainBreadcrumb paths={paths} />

      <div className="site-layout-background" style={{ padding: 16 }}>
        <PageHeader
          className="site-page-header"
          title="Sellers Ids List"
          subTitle=" React Practice One"
        />
      </div>

      {sellersIds.length === 0 ? (
        <div style={{ padding: 16, fontSize: 32 }}>
          <LoadingOutlined />
        </div>
      ) : (
        <Table columns={columns} dataSource={sellersIds} />
      )}
    </>
  )
}

export default SellersIds
