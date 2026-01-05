import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Employee/Sidebar'
import Navbar from '../../components/Employee/Navbar'
import { getLeaves, getLeavesByEmp, getLoggedInUser } from '../../utils/localStorage';

const LeaveHistory = () => {
  const [leaves,setLeaves] = useState([]);
  const [loginUser,setLoginUser]= useState({});
  // logged in user ka data fetch kro
  useEffect(()=>{
    const user = getLoggedInUser();
    setLoginUser(user) 
  },[])

  // setData to leaves
  useEffect(()=>{
    const leavesData = getLeavesByEmp(loginUser?.id);
    console.log("leaves data",loginUser?.id,leavesData)
    setLeaves(leavesData);
  },[loginUser])


  return (
        <div className="bg-[#f7f5e6] w-full h-screen grid grid-cols-[20%_80%]">
            <Sidebar/>
          <div className="bg-[#f7f5e6] w-full h-screen ">
      <Navbar />
      <main className='px-10 py-5'>
        <div className="top flex justify-between items-center">
          <div className="left flex flex-col gap-0 ">
            <h2 className='text-3xl font-bold text-[#333a56]'>Leave History</h2>
          </div>
         

        </div>
        <div className="bottom w-full h-fit p-8 bg-[#52658f] rounded my-5">
            <div className='uppercase font-semibold px-8 py-3 rounded text-[#e8e8e8] flex justify-between text-left bg-[#333a56]'>
                <h4 className='text-left w-1/4'>Start date</h4>
                <h4 className='text-left w-1/4'>end date</h4>
                <h4 className='text-left w-1/4'>reason</h4>
                <h4 className='text-left w-1/4'>status</h4>
            </div>

         {
           leaves?.length < 1 ? <p className='text-center mt-5 text-[#e8e8e8]'>No leave requests found.</p> :   leaves?.map((elem,idx)=>(
            <div  key={idx} className='capitalize  my-3 px-8 py-3 text-[#e8e8e8] flex justify-between text-left border-b rounded-none '>
                <h4 className='text-left w-1/4'>{elem?.startDate}</h4>
                <h4 className='text-left w-1/4'>{elem?.endDate}</h4>
                <h4 className='text-left w-1/4 overflow-hidden '>{elem?.reason}</h4>
                <h4 className='text-left w-1/4 capsule] flex items-center'>
                <button className='bg-[#e8e8e8] rounded-full px-3 py-1 text-[#333a56] font-medium text-sm'>{elem?.status}</button></h4>
            </div>
           ))
           
           
         }
        </div>
      
      </main>
    </div>
</div>
  )
}

export default LeaveHistory