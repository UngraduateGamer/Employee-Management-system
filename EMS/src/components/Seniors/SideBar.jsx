import React, { useState } from 'react'
import { HiMiniBuildingStorefront } from "react-icons/hi2";
import { MdDashboard, MdOutlineKeyboardArrowDown, MdSpaceDashboard } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { FcDepartment } from "react-icons/fc";

import { TbNotesOff } from "react-icons/tb";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaBullhorn } from "react-icons/fa6";
import { NavLink, useNavigate } from 'react-router';

const Sidebar = () => {
  const navigate = useNavigate();
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
  function toggleEmployees(){
    setIsEmployeesVisible(!isEmployeesVisible);
  }
  function toggleDepartments(){
    setIsDepartmentVisible(!isDepartmentVisible);
  }
  const [isLeaveVisible,setIsLeaveVisible] = useState(false);
  const [isAttendanceVisible,setIsAttendanceVisible] = useState(false);
  const [isPayrollVisible,setIsPayrollVisible] = useState(false);
  const [isAnnouncementVisible,setIsAnnouncementVisible] = useState(false);
  const [isEmployeesVisible,setIsEmployeesVisible] = useState(false);
  const [isDepartmentVisible,setIsDepartmentVisible] = useState(false)
  return (
    <div className="w-full min-h-screen left-0 top-0  py-5  bg-[#e8e8e8] border-r-2 border-[#333a56]">
      <div className="top  px-5 flex items-center gap-3 text-[#333a56] font-bold">
        <HiMiniBuildingStorefront className='text-2xl'/> <p className='leading-tight'>Employee <br /> Management <br />System</p>
      </div>
      <div className="bottom my-10 flex flex-col gap-3">
        <p className='text-[#52658F] font-semibold  px-5'>Main</p>
        <div>

        <NavLink to="/dashboard/seniors" className={'flex items-center gap-3   text-[#333a56] hover:bg-[#52658F] hover:text-[#e8e8e8] font-semibold  py-3 px-5 hover:border-r-4 border-[#333a56]' }>
        <MdSpaceDashboard className='text-xl'/> Dashboard
        </NavLink>


        <div  className={'flex items-center gap-3    text-[#333a56]   font-semibold  ' }>
          
          <div className='w-full'>
        <div className='flex  relative items-center gap-3 hover:border-r-4 py-3 px-5  border-[#333a56] w-full hover:bg-[#52658F] hover:text-[#e8e8e8] ' onClick={toggleEmployees}>
        <FaUserGroup className='text-xl '/> Employees
         {isEmployeesVisible ? <MdOutlineKeyboardArrowDown className='text-xl absolute right-5 ' /> : <MdOutlineKeyboardArrowRight className='text-xl absolute right-5 ' />}
        </div>
        <div className={`${isEmployeesVisible ? "flex" : "hidden"} 'flex flex-col gap-0 hidden'`}>
        <p className=' px-13 py-2 cursor-pointer hover:bg-[#52658f] hover:text-[#e8e8e8]'onClick={()=>navigate("/dashboard/seniors/employee")}>View Employees</p>
        <p className=' px-13 py-2  hover:bg-[#52658f] hover:text-[#e8e8e8]'
         onClick={()=>navigate("/dashboard/seniors/employees/add")}
        >Add Employees</p>
        </div>
          </div>
        </div>

        <div  className={'flex items-center gap-3    text-[#333a56]   font-semibold  ' }>
          
          <div className='w-full'>
        <div className='flex  relative items-center gap-3 hover:border-r-4 py-3 px-5  border-[#333a56] w-full hover:bg-[#52658F] hover:text-[#e8e8e8] ' onClick={toggleDepartments}>
        <FcDepartment className='text-xl '/> Departments
         {isDepartmentVisible ? <MdOutlineKeyboardArrowDown className='text-xl absolute right-5 ' /> : <MdOutlineKeyboardArrowRight className='text-xl absolute right-5 ' />}
        </div>
        <div className={`${isDepartmentVisible ? "flex" : "hidden"} 'flex flex-col gap-0 hidden'`}>
        <p className=' px-13 py-2 cursor-pointer hover:bg-[#52658f] hover:text-[#e8e8e8]'onClick={()=>navigate("/dashboard/seniors/department")}>View Departments</p>
        <p className=' px-13 py-2  hover:bg-[#52658f] hover:text-[#e8e8e8]'
         onClick={()=>navigate("/dashboard/seniors/department/create")}
        >Add Department</p>
        </div>
          </div>
        </div>

        <div  className={'flex items-center gap-3    text-[#333a56]   font-semibold  ' }>
          
          <div className='w-full'>
        <div className='flex  relative items-center gap-3 hover:border-r-4 py-3 px-5  border-[#333a56] w-full hover:bg-[#52658F] hover:text-[#e8e8e8] ' onClick={toggleLeave}>
        <TbNotesOff className='text-xl '/> Leave Management
         {isLeaveVisible ? <MdOutlineKeyboardArrowDown className='text-xl absolute right-5 ' /> : <MdOutlineKeyboardArrowRight className='text-xl absolute right-5 ' />}
        </div>
        <div className={`${isLeaveVisible ? "flex" : "hidden"} 'flex flex-col gap-0 hidden'`}>
        <p className=' px-13 py-2 cursor-pointer hover:bg-[#52658f] hover:text-[#e8e8e8]' onClick={()=>navigate("/dashboard/seniors/leave")}>Manage leaves (emp)</p>
        <p className=' px-13 py-2 cursor-pointer hover:bg-[#52658f] hover:text-[#e8e8e8]' onClick={()=>navigate("/dashboard/seniors/leave/history")}>Leave History</p>
        <p className=' px-13 py-2  hover:bg-[#52658f] hover:text-[#e8e8e8]'
         onClick={()=>navigate("/dashboard/seniors/leave/apply")}
        >Apply for Leave</p>
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
        
        onClick={()=>navigate("/dashboard/seniors/attendance/manage")}
        
        >Manage Attendance</p>
        <p className=' px-13 py-2  hover:bg-[#52658f] hover:text-[#e8e8e8]'
        
        onClick={()=>navigate("/dashboard/seniors/attendance/add")}
        
        >Add Attendance</p>
        
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
        onClick={()=>navigate("/dashboard/seniors/announcements")}
        
        >View Announcements</p>
        <p className=' px-13 py-2  hover:bg-[#52658f] hover:text-[#e8e8e8]'
        onClick={()=>navigate("/dashboard/seniors/announcements/manage")}
        
        >Manage Announcements</p>
        
        <p className=' px-13 py-2  hover:bg-[#52658f] hover:text-[#e8e8e8]'
        onClick={()=>navigate("/dashboard/seniors/announcements/add")}
        
        >Add Announcements</p>
        
        </div>
          </div>
        </div>
        
        </div>


      </div>
    </div>
  )
}

export default Sidebar