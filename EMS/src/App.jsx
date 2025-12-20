import React from 'react'
import { Route, Routes } from 'react-router'
import EmployeeDashboard from './pages/EmployeeDashboard'
import AdminDashboard from './pages/AdminDashboard'
import SeniorDashboard from './pages/SeniorDashboard'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'

const App = () => {
  return (
  <div>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact-us" element={<Contact/>}/>
      <Route path="/login" element ={<Login/>} />
      <Route path="/signup" element ={<Signup/>} />
      <Route path="/dashboard">
      <Route path="employee" element={<EmployeeDashboard/>} />
      <Route path="admin" element={<AdminDashboard/>} />
      <Route path="senior" element={<SeniorDashboard/>} />
      </Route>
    </Routes>
  </div>
  )
}

export default App