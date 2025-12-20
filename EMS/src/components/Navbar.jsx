import React from 'react'
import { NavLink, useNavigate } from 'react-router'
import { HiMiniBuildingStorefront } from "react-icons/hi2";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='shadow-md bg-[#f7f5e6] relative z-10'>
        <nav className='w-[85%] mx-auto'>
            <ul className='py-3 flex justify-between items-center'>
                <li className=''><NavLink to="/" className={'flex  text-2xl font-bold items-center gap-1 text-[#333A56]'}><HiMiniBuildingStorefront className=''/> EMS</NavLink></li>
                <div className='flex gap-8 text-xl font-semibold items-center text-[#526585] ]'>
                <li><NavLink className='hover:text-[#333a56]' to="/">Home</NavLink></li>
                <li><NavLink className='hover:text-[#333a56]' to="/about">About</NavLink></li>
                <li><NavLink className='hover:text-[#333a56]' to="/contact-us">Contact us</NavLink></li>
                </div>
                <div className='flex gap-8 items-center'>
                    <button className='btn rounded-md bg-transparent text-[#333a56]  text-lg font-normal px-3 py-2 cursor-pointer' onClick={()=>navigate("/login")}>Login</button>
                    <button className='btn rounded-md font-normal bg-[#333a56] text-[#ededed] text-lg px-3 py-2 cursor-pointer' onClick={()=>{navigate("/signup")}}>Sign up</button>
                </div>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar