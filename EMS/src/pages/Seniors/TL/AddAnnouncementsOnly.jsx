import React from 'react'
import Sidebar from '../../../components/Seniors/SideBar'
import Navbar from '../../../components/Seniors/Navbar'
import CreateAnnouncementsOnly from "../../../components/Seniors/CreateAnnouncementOnly"

const AddAnnouncementOnly = () => {
  return (
    <div className='grid grid-cols-[20%_80%] bg-red-800 w-full max-h-screen overflow-hidden '>
      <Sidebar  />
       <div className="bg-[#333a56] w-full h-screen ">
      <Navbar />
      <CreateAnnouncementsOnly/>
    </div>
    </div>
  )
}

export default AddAnnouncementOnly