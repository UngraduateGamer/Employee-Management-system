import React from 'react'
import Sidebar from '../../../components/Seniors/SideBar'
import MainSection from '../../../components/Seniors/MainSection'
import Navbar from '../../../components/Seniors/Navbar'
import SignUpForm from '../../../components/SignupForm'
import CreateDepartment from '../../../components/Admin/CreateDepartment'


const CreateDepartmentOnly = () => {
  return (
    <div className='grid grid-cols-[20%_80%] bg-red-800 w-full max-h-screen overflow-hidden '>
      <Sidebar  />
       <div className="bg-[#333a56] w-full h-screen ">
      <Navbar />
      <CreateDepartment/>
    </div>
    </div>
  )
}

export default CreateDepartmentOnly