import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ApisPage from '../pages/ApisPage'
import HomePage from '../pages/HomePage'

interface Props { }

const MainRouter = (props: Props) => {
  const { } = props

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apis" element={<ApisPage />} />
      </Routes>
    </Router>
  )
}

export default MainRouter