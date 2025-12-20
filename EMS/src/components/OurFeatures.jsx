import React from 'react'
import TopWave from './TopWave'
import BottomWave from './BottomWave'

const OurFeatures = () => {
  return (
    <div className='relative bg-[#e8e8e8]  '>
        <BottomWave/>
       <div className="relative flex flex-col items-center gap-5 py-10 -mt-32 z-2 ">
        <h4 className='uppercase text-[#526585]  text-2xl font-bold'>our features</h4>
        <h2 className=' text-[#333a56] text-5xl font-bold'>A better way to manage your workforce</h2>
        <p className='text-xl text-center text-[#526585]'>Everything you need to run your HR operations smoothly  and<br /> efficiently, all in one place.</p>
       </div>
    </div>
  )
}

export default OurFeatures