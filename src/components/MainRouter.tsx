import { Route, Routes } from 'react-router-dom'
import ApisPage from '../pages/ApisPage'
import GlamitOms from '../pages/apis/GlamitOms'
import HomePage from '../pages/HomePage'
import Carriers from '../pages/apis/carriers/Carriers'
import CarriersList from '../pages/apis/carriers/CarriersList'
import SellersIds from '../pages/apis/carriers/SellersIds'
import SellerData from '../pages/apis/carriers/SellerData'

const MainRouter = () => {
  return (
    <Routes>
      {/* home */}
      <Route path="/" element={<HomePage />} />
      {/* apis */}
      <Route path="/apis" element={<ApisPage />} />
      {/* glamit-oms */}
      <Route path="/apis/glamit-oms" element={<GlamitOms />} />
      {/* carriers */}
      <Route path="/apis/carriers" element={<Carriers />} />
      <Route path="/apis/carriers/carriers-list" element={<CarriersList />} />
      <Route path="/apis/carriers/sellers-ids" element={<SellersIds />} />
      <Route path="/apis/carriers/seller/:sellerId" element={<SellerData />} />
    </Routes>
  )
}

export default MainRouter
