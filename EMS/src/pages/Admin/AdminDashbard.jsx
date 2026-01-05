import React from 'react'
import Sidebar from '../../components/Admin/Sidebar'
import MainSection from '../../components/Admin/MainSection'

const AdminDashboard = () => {
  return (
    <div className='grid grid-cols-[20%_80%] '>
      <Sidebar  />
      <MainSection/>
    </div>
  )
}

export default AdminDashboard