import { useState, useEffect } from 'react'
import { PageHeader, Table, notification, Tag } from 'antd'
import { BreadcrumbPath } from '../../../interfaces/layouts/BreadcrumbPath'
import MainBreadcrumb from '../../../components/MainBreadcrumb'
import { getCarriers } from '../../../services/carriers/CarrierService'
import { Carrier } from '../../../interfaces/apis/carriers/Carrier'
import { LoadingOutlined } from '@ant-design/icons'

const CarriersList = () => {
  const paths: Array<BreadcrumbPath> = [
    { to: '/', name: 'Home', key: 'home' },
    { to: '/apis', name: "API's", key: 'apis' },
    { to: '/apis/carriers', name: 'Carriers', key: 'carriers' },
    { name: 'Carriers List', key: 'carriers-list' }
  ]

  const [carriers, setCarriers] = useState<Array<Carrier>>([])

  useEffect(() => {
    getCarriers()
      .then(response => setCarriers(response.data))
      .catch(err => {
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
      dataIndex: 'id'
    },
    {
      title: 'Code',
      key: 'code',
      dataIndex: 'carrier_id'
    },
    {
      title: 'Name',
      key: 'name',
      dataIndex: 'carrier_name'
    },
    {
      title: 'Type',
      key: 'type',
      render: (carrier: Carrier) => {
        const { id, carrier_type: carrierType } = carrier
        const key = `${id}-${carrierType.toLowerCase()}`
        let color
        switch (carrierType) {
          case 'NATIVE': color = 'green'
            break
          case 'INTEGRATED': color = 'geekblue'
            break
          default: color = 'cyan'
        }

        return (
          <Tag color={color} key={key}>
            {carrierType.toUpperCase()}
          </Tag>
        )
      }
    },
    {
      title: 'Status',
      key: 'status',
      render: (carrier: Carrier) => {
        const { id, status } = carrier
        const key = `${id}-${status}`
        const active = status ? 'Active' : 'Inactive'
        const color = status ? 'darkgreen' : 'silver'

        return (
          <Tag color={color} key={key}>
            {active}
          </Tag>
        )
      }
    },
    {
      title: 'Has Branches',
      key: 'has-branches',
      render: (carrier: Carrier) => {
        const { id, has_branches } = carrier
        const key = `${id}-${has_branches}`
        const hasBranches = has_branches ? 'Yes' : 'No'
        const color = has_branches ? 'green' : 'silver'

        return (
          <Tag color={color} key={key}>
            {hasBranches}
          </Tag>
        )
      }
    },
    {
      title: 'Insired Cost',
      key: 'insured-cost',
      render: (carrier: Carrier) => (carrier.insured_cost || 0)
    },
    {
      title: 'Omnichannel',
      key: 'omnichannel',
      render: (carrier: Carrier) => {
        const { id, omnichannel } = carrier
        const key = `${id}-${omnichannel}`
        const isOmnichannel = omnichannel ? 'Yes' : 'No'
        const color = omnichannel ? 'green' : 'silver'

        return (
          <Tag color={color} key={key}>
            {isOmnichannel}
          </Tag>
        )
      }
    },
    {
      title: 'Store Carrier Handler',
      key: 'store-carrier-handler',
      render: (carrier: Carrier) => (
        carrier.store_carrier_handler && carrier.store_carrier_handler.carrier_name
      )
    }
  ]

  return (
    <>
      <MainBreadcrumb paths={paths} />

      <div className="site-layout-background" style={{ padding: 16 }}>
        <PageHeader
          className="site-page-header"
          title="Carriers List"
          subTitle=" React Practice One"
        />
      </div>

      {carriers.length === 0
        ? (
          <div style={{ padding: 16, fontSize: 32 }}><LoadingOutlined /></div>
        )
        : (
          <Table columns={columns} dataSource={carriers} />
        )
      }
    </>
  )
}

export default CarriersList
