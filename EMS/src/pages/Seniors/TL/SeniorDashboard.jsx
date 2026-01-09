import React, { useEffect } from 'react'
import Sidebar from '../../../components/Seniors/SideBar'
import MainSection from '../../../components/Seniors/MainSection'
import { checkTlOrSeniors } from '../../../utils/localStorage'

const SeniorDashboard = () => {
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

export default SeniorDashboard