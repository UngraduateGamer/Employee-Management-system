import React from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from 'react-router';
import { clearLoggedInUser } from '../../utils/localStorage';

const Navbar = () => {
    const navigate = useNavigate();
    function handleLogout(){
      clearLoggedInUser();
      navigate("/")
    }
  return (
   
    <div className='h-18 px-10 bg-[#52658f] w-full flex justify-between items-center'>
      <div className="left "><IoReorderThreeOutline className='text-5xl leading-loose font-normal cursor-pointer text-[#e8e8e8] flex'/></div>
      <div className="right flex gap-5 items-center">
        <button className='cursor-pointer flex items-center gap-1 rounded px-3 py-2 font-semibold bg-[#f7f5e6] text-[#333a56]' onClick={()=>{navigate("/dashboard/admin/employees/add")}}> <FaPlus/>Add New Employees</button>
        <button className='cursor-pointer rounded px-3 py-2 text-[#e8e8e8] border-[#e8e8e8]  bg-[#333a56]' onClick={handleLogout} >Logout</button>
        <FaBell className='text-xl cursor-pointer text-[#e8e8e8]'/>
        <div className="profile flex items-center justify-center w-10 h-10 rounded-full bg-[#333a56] text-[#e8e8e8]">
          <FaUser />
        </div>
      </div>
    </div>
 
  )
}

export default Navbar