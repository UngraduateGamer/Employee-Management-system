import React, { useEffect, useState } from 'react'
import { HiMiniBuildingStorefront } from "react-icons/hi2";
import { MdDashboard, MdOutlineKeyboardArrowDown, MdSpaceDashboard } from "react-icons/md";

import { TbNotesOff } from "react-icons/tb";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaBullhorn } from "react-icons/fa6";
import { NavLink, useNavigate } from 'react-router';

const Sidebar = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    const data = localStorage.getItem("LoggedInUser_"+Date.now());
  },[])
  function hello(){
    navigate("/login")
    console.log("Hello")
  }
  function toggleLeave(){
    setIsLeaveVisible(!isLeaveVisible);
  }
  function toggleAttendance(){
    setIsAttendanceVisible(!isAttendanceVisible);
  }
  function togglePayroll(){
    setIsPayrollVisible(!isPayrollVisible);
  }
  function toggleAnnouncement(){
    setIsAnnouncementVisible(!isAnnouncementVisible);
  }
  const [isLeaveVisible,setIsLeaveVisible] = useState(false);
  const [isAttendanceVisible,setIsAttendanceVisible] = useState(false);
  const [isPayrollVisible,setIsPayrollVisible] = useState(false);
  const [isAnnouncementVisible,setIsAnnouncementVisible] = useState(false);
  return (
    <div className="w-full h-screen py-5  bg-[#e8e8e8] border-r-2 border-[#333a56]">
      <div className="top  px-5 flex items-center gap-3 text-[#333a56] font-bold">
        <HiMiniBuildingStorefront className='text-2xl'/> <p className='leading-tight'>Employee <br /> Management <br />System</p>
      </div>
      <div className="bottom my-10 flex flex-col gap-3">
        <p className='text-[#52658F] font-semibold  px-5'>Main</p>
        <div>

        <NavLink to="/" className={'flex items-center gap-3   text-[#333a56] hover:bg-[#52658F] hover:text-[#e8e8e8] font-semibold  py-3 px-5 hover:border-r-4 border-[#333a56]' }>
        <MdSpaceDashboard className='text-xl'/> Dashboard
        </NavLink>


        <div  className={'flex items-center gap-3    text-[#333a56]   font-semibold  ' }>
          <div className='w-full'>
        <div className='flex  relative items-center gap-3 hover:border-r-4 py-3 px-5  border-[#333a56] w-full hover:bg-[#52658F] hover:text-[#e8e8e8] ' onClick={toggleLeave}>
        <TbNotesOff className='text-xl '/> Leave Management
         {isLeaveVisible ? <MdOutlineKeyboardArrowDown className='text-xl absolute right-5 ' /> : <MdOutlineKeyboardArrowRight className='text-xl absolute right-5 ' />}
        </div>
        <div className={`${isLeaveVisible ? "flex" : "hidden"} 'flex flex-col gap-0 hidden'`}>
        <p className=' px-13 py-2 cursor-pointer hover:bg-[#52658f] hover:text-[#e8e8e8]' onClick={()=>navigate("/dashboard/employee/leave/history")}>Leave History</p>
        <p className=' px-13 py-2  hover:bg-[#52658f] hover:text-[#e8e8e8]'
         onClick={()=>navigate("/dashboard/employee/leave/apply")}
        >Apply for Leave</p>
        </div>
          </div>
        </div>

        <div to="" className={'flex  items-center gap-3    text-[#333a56]   font-semibold  ' }>
          <div className='w-full'>
        <div className='flex relative items-center gap-3 hover:border-r-4 py-3 px-5  border-[#333a56] w-full hover:bg-[#52658F] hover:text-[#e8e8e8] ' onClick={togglePayroll}>
        <FaIndianRupeeSign className='text-xl '/> Payroll
         {isPayrollVisible ? <MdOutlineKeyboardArrowDown className='text-xl absolute right-5' /> : <MdOutlineKeyboardArrowRight className='text-xl absolute right-5' />}
        </div>
        <div className={`${isPayrollVisible ? "flex" : "hidden"} 'flex flex-col gap-0 hidden'`}>
        <p className=' px-13 py-2  hover:bg-[#52658f] hover:text-[#e8e8e8]'
        onClick={()=>navigate("/dashboard/employee/payslips")}
        >My Payslips</p>
        
        </div>
          </div>
        </div>
        
        <div to="" className={'flex items-center gap-3    text-[#333a56]   font-semibold  ' }>
          <div className='w-full'>
        <div className='flex items-center gap-3 hover:border-r-4 py-3 px-5  border-[#333a56] relative w-full hover:bg-[#52658F] hover:text-[#e8e8e8] ' onClick={toggleAttendance}>
        <MdOutlineAccessTime className='text-xl '/> Attendance
         {isAttendanceVisible ? <MdOutlineKeyboardArrowDown className='text-xl absolute right-5' /> : <MdOutlineKeyboardArrowRight className='text-xl absolute right-5' />}
        </div>
        <div className={`${isAttendanceVisible ? "flex" : "hidden"} 'flex flex-col gap-0 hidden'`}>
        <p className=' px-13 py-2  hover:bg-[#52658f] hover:text-[#e8e8e8]'
        
        onClick={()=>navigate("/dashboard/employee/attendance")}
        
        >My Attendance</p>
        
        </div>
          </div>
        </div>

        <div to="" className={'flex items-center gap-3    text-[#333a56]   font-semibold  ' }>
          <div className='w-full'>
        <div className='flex relative items-center gap-3 hover:border-r-4 py-3 px-5  border-[#333a56] w-full hover:bg-[#52658F] hover:text-[#e8e8e8] ' onClick={toggleAnnouncement}>
        <FaBullhorn className='text-xl '/> Announcements
         {isAnnouncementVisible ? <MdOutlineKeyboardArrowDown className='text-xl absolute right-5' /> : <MdOutlineKeyboardArrowRight className='text-xl absolute right-5' />}
        </div>
        <div className={`${isAnnouncementVisible ? "flex" : "hidden"} 'flex flex-col gap-0 hidden'`}>
        <p className=' px-13 py-2  hover:bg-[#52658f] hover:text-[#e8e8e8]'
        onClick={()=>navigate("/dashboard/employee/announcements")}
        
        >View Announcements</p>
        
        </div>
          </div>
        </div>
        
        </div>


      </div>
    </div>
  )
}

export default Sidebar