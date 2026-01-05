import React from 'react'
import Sidebar from '../../components/Admin/Sidebar'
import MainSection from '../../components/Admin/MainSection'
import Navbar from '../../components/Admin/Navbar'
import SignUpForm from '../../components/SignupForm'
import CreateEmployee from '../../components/Admin/CreateEmployee'

const AddEmployee = () => {
  return (
    <div className='grid grid-cols-[20%_80%] bg-red-800 w-full max-h-screen overflow-hidden '>
      <Sidebar  />
       <div className="bg-[#333a56] w-full h-screen ">
      <Navbar />
      <CreateEmployee/>
    </div>
    </div>
  )
}

export default AddEmployee