import React, { useEffect, useState } from 'react'
import Sidebar from '../../../components/Seniors/SideBar';
import Navbar from '../../../components/Seniors/Navbar';
import { useNavigate } from 'react-router';
import { applyLeave,getLeaves,getLoggedInUser } from '../../../utils/localStorage';
const LeaveApplyOnly = () => {
  const [startDate,setStartDate] = useState('');
  const [endDate,setEndDate] = useState('');
  const [reason,setReason] = useState('');
  const [emp,setEmp]= useState({});
  const navigate = useNavigate();

  useEffect(()=>{
    const empData = getLoggedInUser();
    setEmp(empData) 
  },[])


  function submitHandler(event){
    event.preventDefault();
      const leave = {
        startDate,
        endDate,
        empId:emp?.id,
        reason,
        empRole:emp?.role,
        empName:emp?.firstName +" "+ emp?.lastName,
        appliedData : new Date().toLocaleDateString()
      }
      applyLeave(leave)
    
   
   
    setEndDate('');
    setStartDate('');
    setReason('');
    navigate("/dashboard/seniors")
  }



  return (
        <div className="bg-[#f7f5e6] w-full h-screen grid grid-cols-[20%_80%]">
            <Sidebar/>
          <div className="bg-[#f7f5e6] w-full h-screen ">
      <Navbar />
      <main className='px-10 py-5'>
        <div className="top flex justify-between items-center">
          <div className="left flex flex-col gap-0 ">
            <h2 className='text-3xl font-bold text-[#333a56]'>Apply for leave</h2>
          </div>
         

        </div>
         <form onSubmit={submitHandler}>
        <div className="bottom w-full h-fit p-8 items-center bg-[#52658f] rounded my-5 grid grid-cols-2 grid-rows-2 gap-5 text-[#e8e8e8] ">
            <div className='flex flex-col rounded gap-1'>
                <label htmlFor="startDate">Start Date</label>
                <input type="date" 
                onChange={e=>setStartDate(e.target.value)}
                className='p-3 outline-none focus:outline-none bg-[#e8e8e8] text-[#333a56] rounded' name="startDate" id="startDate" value={startDate} />
            </div>
            <div className='flex flex-col rounded gap-1'>
                <label htmlFor="endDate">End Date</label>
                <input type="date" className='p-3 outline-none focus:outline-none bg-[#e8e8e8] text-[#333a56] rounded' name="endDate" id="endDate" 
                value={endDate} 
                onChange={(e)=>setEndDate(e.target.value)} />
            </div>
            <div className='flex flex-col rounded gap-1 col-span-2'>
                <label htmlFor="reason">Reason</label>
                <input type="text" className='p-3 outline-none focus:outline-none bg-[#e8e8e8] text-[#333a56] rounded' name="reason" id="reason" value={reason} onChange={e=>setReason(e.target.value)} />
            </div>
            
             <button className='h-fit w-fit px-5 py-2  rounded bg-[#333a56] text-[#e8e8e8] cursor-pointer active:scale-95 btn '>Submit</button>
        </div>
         </form>
      
      </main>
    </div>
</div>
  )
}

export default LeaveApplyOnly