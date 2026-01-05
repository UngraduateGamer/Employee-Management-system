import React from 'react'
import Sidebar from '../../components/Employee/Sidebar'
import MainSection from '../../components/Employee/MainSection'

const Dashboard = () => {
  return (
    <div className='grid grid-cols-[20%_80%] '>
      <Sidebar  />
      <MainSection/>
    </div>
  )
}

export default Dashboard