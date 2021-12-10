import { Route, Routes } from 'react-router-dom'
import ApisPage from '../pages/ApisPage'
import GlamitOms from '../pages/apis/GlamitOms'
import HomePage from '../pages/HomePage'
import Carriers from '../pages/apis/Carriers'

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/apis" element={<ApisPage />} />
      <Route path="/apis/glamit-oms" element={<GlamitOms />} />
      <Route path="/apis/carriers" element={<Carriers />} />
    </Routes>
  )
}

export default MainRouter
