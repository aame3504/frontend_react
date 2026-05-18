import './App.css'
import ScorePage from './pages/ScorePage.jsx'
import UserPage from './pages/UserPage.jsx'
import EmployeePage from './pages/EmployeePage.jsx'
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom'
import HeaderBar from './components/HeaderBar.jsx'

const style = {
  width:"500px",
  height:"300px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
}



function App() {
  
  return (
    <BrowserRouter>
    <HeaderBar/>
    <Routes>
      <Route path="/score" element={<ScorePage/>}/>
      <Route path="/user" element={<UserPage/>}/>
      <Route path="/employee" element={<EmployeePage/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}
export default App
