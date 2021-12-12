import { Route, Routes } from 'react-router-dom'
import ApisPage from '../pages/ApisPage'
import GlamitOms from '../pages/apis/GlamitOms'
import HomePage from '../pages/HomePage'
import Carriers from '../pages/apis/carriers/Carriers'
import CarriersList from '../pages/apis/carriers/CarriersList'

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/apis" element={<ApisPage />} />
      <Route path="/apis/glamit-oms" element={<GlamitOms />} />
      <Route path="/apis/carriers" element={<Carriers />} />
      <Route path="/apis/carriers/carriers-list" element={<CarriersList />} />
    </Routes>
  )
}

export default MainRouter
