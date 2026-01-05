import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Admin/Sidebar'
import Navbar from '../../components/Admin/Navbar'
import { useNavigate } from 'react-router'
import { getAttendance } from '../../utils/localStorage'

const ManageAttendance = () => {
    const navigate = useNavigate()
    const [attendance,setAttendance] = useState([]);
    useEffect(()=>{
      const attendanceData = getAttendance()
    attendanceData.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
});
      setAttendance(attendanceData)
    },[])
  return (
        <div className="bg-[#f7f5e6] w-full h-screen grid grid-cols-[20%_80%]">
            <Sidebar/>
          <div className="bg-[#f7f5e6] w-full h-screen ">
      <Navbar />
      <main className='px-10 py-5'>
        <div className="top flex justify-between items-center">
          <div className="left flex flex-col gap-0 ">
            <h2 className='text-3xl font-bold text-[#333a56]'>Manage Attendance</h2>
          </div>
         

        </div>
        <div className="bottom w-full h-fit p-8 bg-[#52658f] rounded my-5">
            <div className='uppercase font-semibold px-8 py-3 rounded text-[#e8e8e8] flex justify-between text-left bg-[#333a56]'>
                <h4 className='text-left w-1/4'>Employee</h4>
                <h4 className='text-left w-1/4'>Date</h4>
                <h4 className='text-left w-1/4'>clock in</h4>
                <h4 className='text-left w-1/4'>clock out</h4>
                
            </div>

            {
              attendance?.length < 1 ? <p className='text-center mt-5 text-[#e8e8e8]'>No attendance record found in month.</p> : attendance?.map((elem,idx)=>(
                <div key={idx} className='capitalize  my-3 px-8 py-3 text-[#e8e8e8] flex justify-between text-left border-b rounded-none '>
                <h4 className='text-left w-1/4'>{elem?.empName}</h4>
                <h4 className='text-left w-1/4'>{elem?.date}</h4>
                <h4 className='text-left w-1/4'>{elem?.checkIn}</h4>
                <h4 className='text-left w-1/4'>{elem?.checkOut}</h4>
            </div>
              ))
            }
            
        </div>
      
      </main>
    </div>
</div>
  )
}

export default ManageAttendance