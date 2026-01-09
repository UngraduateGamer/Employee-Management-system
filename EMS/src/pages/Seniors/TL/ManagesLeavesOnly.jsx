import React, { useEffect, useState } from 'react'
import Sidebar from '../../../components/Seniors/SideBar'
import Navbar from '../../../components/Seniors/Navbar'
import { useNavigate } from 'react-router'
import { applyLeave,approveLeave,getLeaves, rejectLeave } from '../../../utils/localStorage'
const ManageLeavesOnly = () => {
  const [leaves ,setLeaves] = useState([]);
  // leaves data
  useEffect(()=>{
      // fetch only employees leave
    const leavesData = getLeaves().filter(elem => elem.empRole == 'employee');
    setLeaves(leavesData);
},[])
useEffect(()=>{
    console.log(leaves)    
},[leaves])
    const navigate = useNavigate()
    function rejectLeaves(id){
      rejectLeave(id);
      // change to state for immidaitely changing the ui 
      setLeaves(prev => prev.map(l => l.id == id? {...l , status: "rejected"} : l))

    }
    function approvedLeaves(id){
    approveLeave(id);
      // change to state for immidaitely changing the ui 
      setLeaves(prev => prev.map(l => l.id == id ? {...l,status:"approved"} : l))
    }

  return (
        <div className="bg-[#f7f5e6] w-full h-screen grid grid-cols-[20%_80%]">
            <Sidebar/>
          <div className="bg-[#f7f5e6] w-full h-screen ">
      <Navbar />
      <main className='px-10 py-5'>
        <div className="top flex justify-between items-center">
          <div className="left flex flex-col gap-0 ">
            <h2 className='text-3xl font-bold text-[#333a56]'>Manage Leave Requests</h2>
          </div>
         

        </div>
        <div className="bottom w-full overflow-y-auto max-h-fit h-120 p-8 bg-[#52658f] rounded my-5">
            <div className='uppercase font-semibold px-8 py-3 rounded text-[#e8e8e8] flex justify-between text-left bg-[#333a56]'>
                <h4 className='text-left w-1/6'>Employee</h4>
                <h4 className='text-left w-1/6'>Start date</h4>
                <h4 className='text-left w-1/6'>end date</h4>
                <h4 className='text-left w-1/6'>reason</h4>
                <h4 className='text-left w-1/6'>status</h4>
                <h4 className='text-left w-1/6'>action</h4>
                
            </div>

            {
              leaves?.length < 1 ?  <p className='text-center mt-5 text-[#e8e8e8]'>No leave requests found.</p> : leaves?.map((elem,idx)=>(
                <div key={idx} className='capitalize  my-3 px-8 py-3 text-[#e8e8e8] flex justify-between text-left border-b rounded-none '>
                <h4 className='text-left w-1/6'>{elem?.empName}</h4>
                <h4 className='text-left w-1/6'>{elem?.startDate}</h4>
                <h4 className='text-left w-1/6'>{elem?.endDate}</h4>
                <h4 className='text-left w-1/6'>{elem?.reason}</h4>
                <h4 className='text-left w-1/6' >{elem?.status}</h4>
                <h4 className='text-left w-1/6 ' 
                >{elem?.status == 'pending' ? <div className='flex gap-2'><span className='cursor-pointer' 
                onClick={()=>{
                  approvedLeaves(elem?.id)
                }}
                >Approve</span> <span 
                onClick={()=>{
                    rejectLeaves(elem?.id)
                }}
                className='cursor-pointer'
                >Reject</span></div> : ""}</h4>
               
            </div>
              ))
            }
           
           
        </div>
      
      </main>
    </div>
</div>
  )
}

export default ManageLeavesOnly