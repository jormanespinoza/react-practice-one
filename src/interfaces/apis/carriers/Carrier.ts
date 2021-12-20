import { StoreCarrierHandler } from './StoreCarrierHandler'

export interface Carrier {
  id: number
  carrier_id: string
  carrier_name: string
  carrier_type: string
  has_branches: boolean
  insured_cost: number | null
  omnichannel: boolean
  status: boolean
  store_carrier_handler: StoreCarrierHandler
}
