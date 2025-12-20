import React from 'react'
import { NavLink } from 'react-router'

const Footer = () => {
  return (
    <div className='w-full  bg-[#f7f5e6] py-10'>
        <div className="grid w-[85%] mx-auto grid-rows-5 grid-cols-4 gap-1 justify-between content-center font-medium">
            <NavLink to="/nothing" className="text-[#526585] hover:text-[#333a56]  uppercase row-span-2 font-semibold">solutions</NavLink>
            <NavLink to="/nothing" className="text-[#526585]  hover:text-[#333a56] uppercase row-span-2 font-semibold">support</NavLink>
            <NavLink to="/nothing" className="text-[#526585]  hover:text-[#333a56] uppercase row-span-2 font-semibold">company</NavLink>
            <NavLink to="/nothing" className="text-[#526585]  hover:text-[#333a56] uppercase row-span-2 font-semibold">legal</NavLink>
            <NavLink to="/nothing" className="capitalize   text-[#526585]  hover:text-[#333a56]">Payroll</NavLink>
            <NavLink to="/nothing" className="capitalize   text-[#526585]  hover:text-[#333a56]">Pricing</NavLink>
            <NavLink to="/about" className="capitalize  text-[#526585]  hover:text-[#333a56]"> About</NavLink>
            <NavLink to="/nothing" className="capitalize   text-[#526585]  hover:text-[#333a56]">Claim</NavLink>
            <NavLink to="/nothing" className="capitalize   text-[#526585]  hover:text-[#333a56]">Attendance</NavLink>
            <NavLink to="/nothing" className="capitalize   text-[#526585]  hover:text-[#333a56]">Documentation</NavLink>
            <NavLink to="/nothing" className="capitalize   text-[#526585]  hover:text-[#333a56]">Blog</NavLink>
            <NavLink to="/nothing" className="capitalize   text-[#526585]  hover:text-[#333a56]">Privacy</NavLink>
            <NavLink to="/nothing" className="capitalize   text-[#526585]  hover:text-[#333a56]">Leave Management</NavLink>
            <NavLink to="/nothing" className="capitalize   text-[#526585]  hover:text-[#333a56]">Guides</NavLink>
            <NavLink to="/nothing" className="capitalize   text-[#526585]  hover:text-[#333a56]">jobs</NavLink>
            <NavLink to="/nothing" className="capitalize   text-[#526585]  hover:text-[#333a56]">Terms</NavLink>
        </div>
        <div className="copy-right border-t border-[#52658f] text-center mt-10  pt-5  font-semibold text-[#52658f]">
            &copy; 2025 Employee Management System. All rights reserved.
        </div>
    </div>
  )
}

export default Footer