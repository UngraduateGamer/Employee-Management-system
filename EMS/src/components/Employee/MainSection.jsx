import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { CiCalendarDate } from "react-icons/ci";
import { FaCalendar } from "react-icons/fa";
import { HiMiniBuildingStorefront } from "react-icons/hi2";
import { MdDashboard, MdOutlineKeyboardArrowDown, MdSpaceDashboard } from "react-icons/md";
import { NavLink, useNavigate } from 'react-router';
import { TbNotes, TbNotesOff } from "react-icons/tb";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaHornbill, FaIndianRupeeSign } from "react-icons/fa6";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaBullhorn } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa";
import { getAnnouncements, getAttendanceByEmp, getLeaves, getLoggedInUser } from '../../utils/localStorage';

const MainSection = () => {
  const [loginUser,setLoginUser] = useState({});
  const [pending,setPending] = useState(0);
  const [approved,setApproved] = useState(0);
  const [announcements ,setAnnouncements] = useState([]);
  const [leaves,setLeaves] = useState([]);
  const [attendance,setAttendance] = useState([]);


  const navigate = useNavigate();
  


  // login user Data
  useEffect(()=>{
    const loginUserData = getLoggedInUser();
    setLoginUser(loginUserData);
  },[])

  // leaves data
  useEffect(()=>{
    const leavesData = getLeaves();
    setLeaves(leavesData);
  },[])

  // approved count or state change for immadielty changing the ui
  useEffect(()=>{
    const data = leaves.filter(l=> l.empId == loginUser.id && l.status == 'approved').length
    setApproved(data)
  },[leaves,loginUser])
  

  // pending count or state change for immadielty changing the ui 
  useEffect(()=>{
    const data = leaves.filter(l => l.empId == loginUser.id && l.status == 'pending') . length;
    setPending(data)
  },[leaves,loginUser])

// announcement Data
  useEffect(()=>{
    const announcementData = getAnnouncements();
    setAnnouncements(announcementData);
  },[])


// attendance data by emp
useEffect(()=>{
  const attendanceData = getAttendanceByEmp(loginUser?.id);
  setAttendance(attendanceData);
},[loginUser])
  return (
    <div className="bg-[#f7f5e6] w-full h-screen ">
      <Navbar />
      <main className='px-10 py-5'>
        <div className="top flex justify-between items-center">
          <div className="left flex flex-col gap-0 ">
            <h2 className='text-3xl font-bold text-[#333a56]'>Welcome, {loginUser.firstName}!</h2>
            <p className='text-md text-[#526585]'>Here's a summary of your activities.</p>
          </div>
          <div className="flex items-center gap-1 bg-[#52658f] text-[#e8e8e8] shadow-xl p-2 rounded-md font-semibold">
            <FaCalendar className='text-lg '/>
            <p>{new Date(Date.now()).toLocaleDateString('en-IN')}</p>
          </div>

        </div>
        <div className="bottom my-5 flex flex-nowrap gap-5">
          <div className="card p-5 h-30 w-70 rounded-md flex gap-4 items-center bg-[#333a56]">
            <div className="icon rounded-md overflow-hidden h-10 w-10 bg-[#526585] flex items-center justify-center">
              <TbNotesOff className='text-2xl text-[#e8e8e8]'/>
            </div>
            <div onClick={()=>{navigate("http://localhost:5173/dashboard/employee/leave/history")}}>
            <p className='text-[#e8e8e8] leading-5.8 w-[80%]'>Pending Leave Requests</p>
            <h4 className='text-[#e8e8e8] text-2xl font-bold'>{pending}</h4>
            </div>
          </div>

          <div className="card p-5 h-30 w-70 rounded-md flex gap-4 items-center bg-[#52658f]">
            <div className="icon rounded-md min-h-10 min-w-10 overflow-hidden bg-[#333a56] flex items-center justify-center">
              <TbNotes className='text-2xl text-[#e8e8e8]'/>
            </div>
            <div onClick={()=>{navigate("http://localhost:5173/dashboard/employee/leave/history")}}>
            <p className='text-[#e8e8e8] leading-5.8 w-[80%]'>Approved Leaves (This Month)</p>
            <h4 className='text-[#e8e8e8] text-2xl font-bold'>{approved}</h4>
            </div>
          </div>
         
          <div className="card p-5 h-30 w-70 rounded-md flex gap-4 items-center bg-[#333a56]">
            <div className="icon rounded-md min-h-10 min-w-10 overflow-hidden bg-[#52658f] flex items-center justify-center">
              <FaUserCheck className='text-2xl text-[#e8e8e8]'/>
            </div>
            <div onClick={()=>{navigate("/dashboard/employee/attendance")}}>
            <p className='text-[#e8e8e8] leading-5.8 w-[80%]'>Attendance (This Month)</p>
            <h4 className='text-[#e8e8e8] text-2xl font-bold'>{attendance.length} Days</h4>
            </div>
          </div>

          <div className="card p-5 h-30 w-70 rounded-md flex gap-4 items-center bg-[#52658f]">
            <div className="icon rounded-md min-h-10 min-w-10 overflow-hidden bg-[#333a56] flex items-center justify-center">
              <FaBullhorn className='text-xl text-[#e8e8e8]'/>
            </div>
            <div onClick={()=>{navigate('/dashboard/employee/announcements')}}>
            <p className='text-[#e8e8e8] leading-5.8 w-[80%]'>Announcements</p>
            <h4 className='text-[#e8e8e8] text-2xl font-bold'>{announcements.length} </h4>
            </div>
          </div>
         
        </div>
      </main>
    </div>
  )
}

export default MainSection