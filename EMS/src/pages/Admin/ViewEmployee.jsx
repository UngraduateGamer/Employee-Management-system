import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Admin/Sidebar'
import Navbar from '../../components/Admin/Navbar'
import { useNavigate } from 'react-router'
import { approveUser, getUsers } from '../../utils/localStorage'

const ViewEmployee = () => {
    const navigate = useNavigate()
    const [empData,setEmpData] = useState([]);
    useEffect(()=>{
      const user = getUsers();
      setEmpData(user)
    },[])

    function ApprovedUser(id){
      const res = approveUser(id)
      console.log(res)
      setEmpData(prev => prev.map(emp => emp.id === id ? { ...emp, approved: true } : emp));
    }
  return (
        <div className="bg-[#f7f5e6] w-full h-screen grid grid-cols-[20%_80%]">
            <Sidebar/>
          <div className="bg-[#f7f5e6] w-full h-screen ">
      <Navbar />
      <main className='px-10 py-5'>
        <div className="top flex justify-between items-center">
          <div className="left flex flex-col gap-0 ">
            <h2 className='text-3xl font-bold text-[#333a56]'>View Employees</h2>
          </div>
         

        </div>
        <div className="bottom w-full h-fit p-8 bg-[#52658f] rounded my-5">
            <div className='uppercase font-semibold px-8 py-3 rounded text-[#e8e8e8] flex justify-between text-left bg-[#333a56]'>
                <h4 className='text-left w-1/6'>Name</h4>
                <h4 className='text-left w-1/6'>Department</h4>
                <h4 className='text-left w-1/6'>Experience</h4>
                <h4 className='text-left w-1/6'>salary</h4>
                <h4 className='text-left w-1/6'>status</h4>
                <h4 className='text-left w-1/6'>action</h4>
            </div>

           {
            empData?.length < 1 
            ? <p className='text-center mt-5 text-[#e8e8e8]'>No employees found.</p> 
            : empData?.map((elem,idx)=>(
               <div key={idx} className='capitalize  my-3 px-8 py-3 text-[#e8e8e8] flex justify-between text-left border-b rounded-none '>
                <h4 className='text-left w-1/6'>{elem?.firstName+ " "+ elem?.lastName}</h4>
                <h4 className='text-left w-1/6'>{elem?.department}</h4>
                <h4 className='text-left w-1/6 overflow-hidden '>{elem?.experience}</h4>
                <h4 className='text-left w-1/6 overflow-hidden '>&#8377;{Number(elem?.salary).toLocaleString()}</h4>
                <h4 className='text-left w-1/6 capsule flex items-center'>
                <button className='bg-[#e8e8e8] rounded-full px-3 py-1 text-[#333a56] font-medium text-sm' onClick={()=>{ApprovedUser(elem?.id)}}>{elem?.approved ? "Approved" : "Pending"}</button></h4>
                <h4 className='text-left w-1/6 overflow-hidden font-semibold'><span className='cursor-pointer  ' onClick={()=>{navigate("/dashboard/admin/employees/edit/id")}}>Edit</span> <span className='text-[#] ml-2 cursor-pointer'>Delete</span></h4>
            </div>
            ))
          }
           
            
        </div>
      
      </main>
    </div>
</div>
  )
}

export default ViewEmployee