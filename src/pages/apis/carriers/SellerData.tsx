import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MainBreadcrumb from '../../../components/MainBreadcrumb'
import { BreadcrumbPath } from '../../../interfaces/layouts/BreadcrumbPath'
import { Seller } from '../../../interfaces/apis/carriers/Seller'
import { PageHeader, notification } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { getSellerById } from '../../../services/carriers/SellerService'


const SellerData = () => {
  const { sellerId } = useParams()

  const [seller, setSeller] = useState<Seller>()

  useEffect(() => {
    getSellerById(sellerId as string)
      .then((response) => setSeller(response.data))
      .catch((err) => {
        notification['error']({
          message: 'API Carriers',
          description: err.message
        })
      })
  })

  if (!seller) return <LoadingOutlined />

  const paths: Array<BreadcrumbPath> = [
    { to: '/', name: 'Home', key: 'home' },
    { to: '/apis', name: "API's", key: 'apis' },
    { to: '/apis/carriers', name: 'Carriers', key: 'carriers' },
    { to: '/apis/sellers-ids', name: 'Sellers Ids', key: 'sellers-ids' },
    { name: `Seller ${seller.seller_id} (${seller.name})`, key: `seller-${seller.seller_id}` }
  ]

  return (
    <>
      <MainBreadcrumb paths={paths} />

      <div className="site-layout-background" style={{ padding: 16 }}>
        <PageHeader
          className="site-page-header"
          title="Seller"
          subTitle=" React Practice One"
        />
      </div>

      <div>{ seller.name }</div>
    </>
  )
}

export default SellerData
