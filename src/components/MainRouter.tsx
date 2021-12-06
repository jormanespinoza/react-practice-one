import { Route, Routes } from 'react-router-dom'
import ApisPage from '../pages/ApisPage'
import GlamitOms from '../pages/apis/GlamitOms'
import HomePage from '../pages/HomePage'

interface Props { }

const MainRouter = (props: Props) => {
  const { } = props

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/apis" element={<ApisPage />} />
      <Route path="/apis/glamit-oms" element={<GlamitOms />} />
    </Routes>
  )
}

export default MainRouter