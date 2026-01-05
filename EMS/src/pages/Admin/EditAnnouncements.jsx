import React from 'react'
import Sidebar from '../../components/Admin/Sidebar'
import MainSection from '../../components/Admin/MainSection'
import Navbar from '../../components/Admin/Navbar'
import SignUpForm from '../../components/SignupForm'
import CreateEmployee from '../../components/Admin/CreateEmployee'
import CreateAttendance from '../../components/Admin/CreateAttendance'
import CreateAnnouncement from '../../components/Admin/CreateAnnouncement'
import EditAnnouncement from '../../components/Admin/EditAnnouncement'

const EditAnnouncements = () => {
  return (
    <div className='grid grid-cols-[20%_80%] bg-red-800 w-full max-h-screen overflow-hidden '>
      <Sidebar  />
       <div className="bg-[#333a56] w-full h-screen ">
      <Navbar />
      <EditAnnouncement/>
    </div>
    </div>
  )
}

export default EditAnnouncements