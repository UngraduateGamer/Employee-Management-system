import React from 'react'
import Sidebar from './SideBar'
import MainSection from './MainSection'
import Navbar from './Navbar'
import SignUpForm from "../SignupForm"
import CreateEmployee from './CreateEmployee'

const AddEmployeeOnly = () => {
  return (
    <div className='grid grid-cols-[20%_80%] bg-[#e8e8e8]  w-full   '>
      <Sidebar  />
       <div className="bg-[#333a56] w-full h-screen ">
      <Navbar />
      <CreateEmployee/>
    </div>
    </div>
  )
}

export default AddEmployeeOnly