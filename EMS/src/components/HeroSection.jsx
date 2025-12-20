import React from 'react'

const HeroSection = () => {
  return (
    <div className='w-[60%] h-[500px]  rounded-5xl  mx-auto flex flex-col justify-center gap-5  items-center relative z-2'>
        <h1 className='text-7xl leading-tight font-bold  text-center text-[#333a56]'>Manage Your Team <span className='text-[#52658f]'>Efficiently & Seamlessly</span></h1>
        <p className='text-center text-[#52658f] text-[17px] w-[85%]'>The all-in-one platform  to streamline your HR processes, from payroll and attendance to leave  management and annoucements. Empower your workforce and simplify your adminstration.</p>
        <div className='flex gap-5'>
            <button className='px-5 py-2 cursor-pointer text-lg bg-[#333a56] rounded-md text-[#e8e8e8]'>Get started</button>
            <button className='px-5 py-2 cursor-pointer text-lg bg-[#52658f] rounded-md text-[#e8e8e8]'>Login</button>
        </div>
    </div>
  )
}

export default HeroSection