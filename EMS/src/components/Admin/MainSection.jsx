import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { CiCalendarDate } from "react-icons/ci";
import { FaCalendar } from "react-icons/fa";
import { HiMiniBuildingStorefront } from "react-icons/hi2";
import { MdDashboard, MdOutlineKeyboardArrowDown, MdSpaceDashboard } from "react-icons/md";
import { NavLink, useNavigate } from 'react-router';
import { TbNotes, TbNotesOff } from "react-icons/tb";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaHornbill, FaIndianRupeeSign, FaRupeeSign, FaUserGroup } from "react-icons/fa6";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaBullhorn } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa";
import { FcDepartment } from 'react-icons/fc';
import { BiRupee } from 'react-icons/bi';
import { approveUser, getAnnouncements, getDepartments, getEmployees, getLeaves, getOnLeaveToday, getOnPresentToday, getPendingUser, getUsers } from '../../utils/localStorage';

const MainSection = () => {
  const [data,setData] = useState({});
  const [announcement,setAnnouncement] = useState([]);
  const [attendance,setAttendance] = useState([]);
  const [pendingApproval,setPendingApproval] = useState([]);
  const [registeredUser,setRegisteredUser] = useState([]);
  const [onLeaveToday,setOnLeaveToday] = useState([]);
  const [onPresentToday,setOnPresentToday] = useState([]);
  const [leaveApproved,setLeaveApproved] = useState([]);
  const [department,setDepartment] = useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    setData(JSON.parse(localStorage.getItem("loggedInUser")) || {});
    setAttendance(JSON.parse(localStorage.getItem("attendance")) || [])
  },[])



  // fetch all registered user data jo approved ho 
  useEffect(()=>{
    let data = getUsers().filter(user => user.approved);
    setRegisteredUser(data)
    },[])
    

  // fetch all registered user data jo approved na ho 
  useEffect(()=>{
    const data = getPendingUser();
    setPendingApproval(data)
  },[])

  //fetch all registered user data jo aj leave pe ho
  useEffect(()=>{
    const data = getOnLeaveToday();
    console.log("data ",data)
    setOnLeaveToday(data);
  },[])

  // fetch all registered user data jo aj present ho
   useEffect(()=>{
    const data = getOnPresentToday();
    setOnPresentToday(data);
  },[])

  // fetch announcement data
  useEffect(()=>{
    let data = getAnnouncements();
    setAnnouncement(data)
  },[])

  // fetch approvedLeaves data
  useEffect(()=>{
    const data = getLeaves().filter(l=>l.status == 'approved');
    setLeaveApproved(data);
  },[])

  // fetch all departments data
  useEffect(()=>{
    const data = getDepartments();
    setDepartment(data);
  },[])
  return (
    <div className="bg-[#f7f5e6] w-full h-screen ">
      <Navbar />
      <main className='px-10 py-5'>
        <div className="top flex justify-between items-center">
          <div className="left flex flex-col gap-0 ">
            <h2 className='text-3xl font-bold text-[#333a56]'>Welcome, {data?.firstName}!</h2>
            <p className='text-md text-[#526585]'>Here's what's happening with your team today.</p>
          </div>
          <div className="flex items-center gap-1 bg-[#52658f] text-[#e8e8e8] shadow-xl p-2 rounded-md font-semibold">
            <FaCalendar className='text-lg '/>
            <p>{new Date(Date.now()).toLocaleDateString('en-IN')}</p>
          </div>

        </div>
        <div className="bottom my-5 flex flex-wrap gap-5">
          <div className="card p-5 h-35 w-68 rounded-md justify-center flex flex-col gap-2  bg-[#333a56]">
            <div className='flex gap-4'>
            <div className="icon rounded-md overflow-hidden h-10 w-10 bg-[#526585] flex items-center justify-center">
              <FaUserGroup className='text-2xl text-[#e8e8e8]'/>
            </div>
            <div>
            <p className='text-[#e8e8e8] leading-5.8 w-[100%]'>Total Employees</p>
            <h4 className='text-[#e8e8e8] text-2xl font-bold'>{registeredUser?.length}</h4>
            </div>
          </div>
          <div className='r1ounded-full h-fit w-fit bg-[#52658f] text-[#e8e8e8] text-sm px-2 py-1 ' onClick={()=>{navigate("/dashboard/admin/employee")}}> View List</div>
          </div>

          <div className="card p-5 h-35 w-68 rounded-md justify-center flex flex-col gap-2  bg-[#52658f]">
            <div className='flex gap-4'>
            <div className="icon rounded-md overflow-hidden h-10 w-10 bg-[#333a56] flex items-center justify-center">
              <TbNotesOff className='text-2xl text-[#e8e8e8]'/>
            </div>
            <div>
            <p className='text-[#e8e8e8] leading-5.8 w-[100%]'>On Leave Today</p>
            <h4 className='text-[#e8e8e8] text-2xl font-bold'>{onLeaveToday.length}</h4>
            </div>
          </div>
          <div className='rounded-full h-fit w-fit bg-[#333a56] text-[#e8e8e8] text-sm px-2 py-1 ' onClick={()=>{navigate("/dashboard/admin/leave")}}> View List</div>
          </div>

          <div className="card p-5 h-35 w-68 rounded-md justify-center flex flex-col gap-2  bg-[#333a56]">
            <div className='flex gap-4'>
            <div className="icon rounded-md overflow-hidden h-10 w-10 bg-[#52658f] flex items-center justify-center">
              <FcDepartment className='text-2xl text-[#e8e8e8]'/>
            </div>
            <div>
            <p className='text-[#e8e8e8] leading-5.8 w-[100%]'>Total Departments</p>
            <h4 className='text-[#e8e8e8] text-2xl font-bold'>{department?.length}</h4>
            </div>
          </div>
          <div className='rounded-full h-fit w-fit bg-[#52658f] text-[#e8e8e8] text-sm px-2 py-1 ' onClick={()=>{navigate("/dashboard/admin/department")}}> View List</div>
          </div>

          <div className="card p-5 h-35 w-68 rounded-md justify-center flex flex-col gap-2  bg-[#52658f]">
            <div className='flex gap-4'>
            <div className="icon rounded-md overflow-hidden h-10 w-10 bg-[#333a56] flex items-center justify-center">
              <FaUserCheck className='text-2xl text-[#e8e8e8]'/>
            </div>
            <div>
            <p className='text-[#e8e8e8] leading-5.8 w-[100%]'>Pending Approvals</p>
            <h4 className='text-[#e8e8e8] text-2xl font-bold'>{pendingApproval.length}</h4>
            </div>
          </div>
          <div className='rounded-full h-fit w-fit bg-[#333a56] text-[#e8e8e8] text-sm px-2 py-1 ' onClick={()=>{navigate("/dashboard/admin/employee")}}> View List</div>
          </div>




 <div className="card p-5 h-35 w-68 rounded-md justify-center flex flex-col gap-2  bg-[#333a56]">
            <div className='flex gap-4 w-full  justify-between'>
            
            <div>
            <p className='text-[#e8e8e8] leading-5.8 w-[100%]'>Present Today</p>
            <h4 className='text-[#e8e8e8] text-2xl font-bold'>{onPresentToday.length}</h4>
            </div>
            <div className="icon rounded-md overflow-hidden h-10 w-10 bg-[#52658f] flex items-center justify-center">
              <FaUserCheck className='text-2xl text-[#e8e8e8]'/>
            </div>
          </div>
          <div className='flex justify-end'>

          <div className='rounded-full h-fit w-fit text-[#e8e8e8] underline cursor-pointer text-sm px-2 py-1 ' onClick={()=>{navigate("/dashboard/admin/attendance/manage")}}> View List</div>
          </div>
          </div>

 <div className="card p-5 h-35 w-68 rounded-md justify-center flex flex-col gap-2  bg-[#333a56]">
            <div className='flex gap-4 w-full  justify-between'>
            
            <div>
            <p className='text-[#e8e8e8] leading-5.8 w-[100%]'>Total Announcements</p>
            <h4 className='text-[#e8e8e8] text-2xl font-bold'>{announcement.length}</h4>
            </div>
            <div className="icon rounded-md overflow-hidden h-10 w-10 bg-[#52658f] flex items-center justify-center">
              <FaBullhorn className='text-2xl text-[#e8e8e8]'/>
            </div>
          </div>
          <div className='flex justify-end'>

          <div className='rounded-full h-fit w-fit text-[#e8e8e8] underline cursor-pointer text-sm px-2 py-1' onClick={()=>{navigate("/dashboard/admin/announcements")}} > View List</div>
          </div>
          </div>

 <div className="card p-5 h-35 w-68 rounded-md justify-center flex flex-col gap-2  bg-[#333a56]">
            <div className='flex gap-4 w-full  justify-between'>
            
            <div>
            <p className='text-[#e8e8e8] leading-5.8 w-[100%]'>Approved Leave</p>
            <h4 className='text-[#e8e8e8] text-2xl font-bold'>{leaveApproved.length}</h4>
            </div>
            <div className="icon rounded-md overflow-hidden h-10 w-10 bg-[#52658f] flex items-center justify-center">
              <TbNotes className='text-2xl text-[#e8e8e8]'/>
            </div>
          </div>
          <div className='flex justify-end'>

          <div className='rounded-full h-fit w-fit text-[#e8e8e8] underline cursor-pointer text-sm px-2 py-1 ' onClick={()=>{navigate("/dashboard/admin/leave")}}> View List</div>
          </div>
          </div>

 <div className="card p-5 h-35 w-68 rounded-md justify-center flex flex-col gap-2  bg-[#333a56]">
            <div className='flex gap-4 w-full  justify-between'>
            
            <div>
            <p className='text-[#e8e8e8] leading-5.8 w-[100%]'>Pending Payrolls</p>
            <h4 className='text-[#e8e8e8] text-2xl font-bold'>1</h4>
            </div>
            <div className="icon rounded-md overflow-hidden h-10 w-10 bg-[#52658f] flex items-center justify-center">
              <BiRupee className='text-2xl text-[#e8e8e8]'/>
            </div>
          </div>
          <div className='flex justify-end'>

          <div className='rounded-full h-fit w-fit text-[#e8e8e8] underline cursor-pointer text-sm px-2 py-1 ' onClick={()=>{navigate("/dashboard/admin/payroll")}}> View List</div>
          </div>
          </div>

        
        </div>
      </main>
    </div>
  )
}

export default MainSection