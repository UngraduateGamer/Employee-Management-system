import React, { useEffect } from 'react'
import Sidebar from '../../components/Admin/Sidebar'
import MainSection from '../../components/Admin/MainSection'
import { checkTlOrSeniors } from '../../utils/localStorage'

const AdminDashboard = () => {
  useEffect(()=>{
    checkTlOrSeniors()
  },[])
  return (
    <div className='grid grid-cols-[20%_80%] '>
      <Sidebar  />
      <MainSection/>
    </div>
  )
}

export default AdminDashboard