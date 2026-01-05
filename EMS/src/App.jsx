import React from 'react'
import { Route, Routes } from 'react-router'
import SeniorDashboard from './pages/SeniorDashboard'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Employees/Dashboard.jsx'
import LeaveHistory from './pages/Employees/LeaveHistory.jsx'
import LeaveApply from './pages/Employees/LeaveApply.jsx'
import PlaySlips from './pages/Employees/PaySlips.jsx'
import Attendance from './pages/Employees/Attendance.jsx'
import Announcements from './pages/Employees/Announcements.jsx'
import AdminDashboard from './pages/Admin/AdminDashbard.jsx'
import AddEmployee from './pages/Admin/AddEmployee.jsx'
import ViewEmployee from './pages/Admin/ViewEmployee.jsx'
import EditEmployee from './pages/Admin/EditEmployee.jsx'
import ViewDepartment from './pages/Admin/ViewDepartment.jsx'
import EditDepartment from './pages/Admin/EditDepartment.jsx'
import ManageLeaves from './pages/Admin/ManageLeaves.jsx'
import ManagePayroll from './pages/Admin/ManagePayroll.jsx'
import CreatePayroll from './components/Admin/CreatePayroll.jsx'
import AddPayroll from './pages/Admin/AddPayroll.jsx'
import ManageAttendance from './pages/Admin/ManageAttendance.jsx'
import AddAttendance from './pages/Admin/AddAttendance.jsx'
import ManageAnnouncements from './pages/Admin/ManageAnnouncements.jsx'
import AddAnnouncement from './pages/Admin/AddAnnouncement.jsx'
import EditAnnouncements from './pages/Admin/EditAnnouncements.jsx'
import AddDepartment from './pages/Admin/AddDepartment.jsx'

const App = () => {
  return (
  <div>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact-us" element={<Contact/>}/>
      <Route path="/login" element ={<Login/>} />
      <Route path="/signup" element ={<Signup/>} />
      <Route path="/dashboard/employee/leave/history" element ={<LeaveHistory/>} />
      <Route path="/dashboard/employee/leave/apply" element ={<LeaveApply/>} />
      <Route path="/dashboard/employee/payslips" element ={<PlaySlips/>} />
      <Route path="/dashboard/employee/attendance" element ={<Attendance/>} />
      <Route path="/dashboard/employee/announcements" element ={<Announcements/>} />
      <Route path="/dashboard/admin/employees/add" element ={<AddEmployee/>} />
      <Route path="/dashboard/admin/employees/edit/:id" element ={<EditEmployee/>} />
      <Route path="/dashboard/admin/announcements/edit/:id" element ={<EditAnnouncements/>} />
      <Route path="/dashboard/admin/departments/edit/:id" element ={<EditDepartment/>} />
      <Route path="/dashboard/admin/employee" element ={<ViewEmployee/>} />
      <Route path="/dashboard/admin/department" element ={<ViewDepartment/>} />
      <Route path="/dashboard/admin/department/create" element ={<AddDepartment/>} />
      <Route path="/dashboard/admin/leave" element ={<ManageLeaves/>} />
      <Route path="/dashboard/admin/payroll" element ={<ManagePayroll/>} />
      <Route path="/dashboard/admin/payroll/create" element ={<AddPayroll/>} />
      <Route path="/dashboard/admin/attendance/manage" element ={<ManageAttendance/>} />
      <Route path="/dashboard/admin/attendance/add" element ={<AddAttendance/>} />
      <Route path="/dashboard/admin/announcements" element ={<ManageAnnouncements/>} />
      <Route path="/dashboard/admin/announcements/add" element ={<AddAnnouncement/>} />

      <Route path="/dashboard">
      <Route path="employee" element={<Dashboard/>} />
      <Route path="admin" element={<AdminDashboard/>} />
      <Route path="senior" element={<SeniorDashboard/>} />
      </Route>
    </Routes>
  </div>
  )
}

export default App