import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Admin/Sidebar'
import Navbar from '../../components/Admin/Navbar'
import { useNavigate } from 'react-router'
import { getPayments, getUserByEmp, getUsers, updateStatusByPayment } from '../../utils/localStorage'
import { toast } from 'react-toastify';

const ManagePayroll = () => {
    const navigate = useNavigate()
    const [status,setStatus] = useState('pending')
    // fetch all payrolls data
    const [payroll,setPayroll] = useState([]);
    useEffect(()=>{
      const payrollData = getPayments()
      setPayroll(payrollData);
    },[])
    
    function processPayment(id){
      updateStatusByPayment(id);
      // state ko bhi change karo taki immidiately ui change ho
      setPayroll(prev=>prev.map(elem => elem.id == id ? {...elem,status:"paid"} : elem));
      toast.success("Payment processed");
    }
    // fetch user Data according to payroll
    // useEffect(()=>{
      
    // },[payroll])

  return (
        <div className="bg-[#f7f5e6] w-full h-screen grid grid-cols-[20%_80%]">
            <Sidebar/>
          <div className="bg-[#f7f5e6] w-full h-screen ">
      <Navbar />
      <main className='px-10 py-5'>
        <div className="top flex justify-between items-center">
          <div className="left flex flex-col gap-0 ">
            <h2 className='text-3xl font-bold text-[#333a56]'>Manage Payroll</h2>
          </div>
         

        </div>
        <div className="bottom w-full h-fit p-8 bg-[#52658f] rounded my-5">
            <div className='uppercase font-semibold px-8 py-3 rounded text-[#e8e8e8] flex justify-between text-left bg-[#333a56]'>
                <h4 className='text-left w-2/11'>Employee</h4>
                <h4 className='text-left w-2/11'>salary</h4>
                <h4 className='text-left w-2/7'>pay period</h4>
                <h4 className='text-left w-2/11'>status</h4>
                <h4 className='text-left w-2/11'>action</h4>
                
            </div>

         {
          payroll?.length < 1 ? <p className='text-center mt-5 text-[#e8e8e8]'>No payrolls found.</p> : payroll?.map((elem,idx)=>(
               <div key={idx} className='capitalize  my-3 px-8 py-3 text-[#e8e8e8] flex justify-between text-left border-b rounded-none '>
                <h4 className='text-left w-2/11'>{getUserByEmp(elem?.empId).username}</h4>
                <h4 className='text-left w-2/11'>&#8377;{Number(elem?.salary).toLocaleString()}</h4>
                <h4 className='text-left w-2/7 lowercase'>{new Date(elem?.startDate).toLocaleDateString()} to {new Date(elem?.endDate).toLocaleDateString()}</h4>
                <h4 className='text-left w-2/11 capsule flex items-center'>
                <button className='bg-[#e8e8e8] rounded-full px-3 py-1 text-[#333a56] font-medium text-sm'>{elem?.status}</button></h4>
                <h4 className='w-2/11 font-semibold' >{elem?.status == 'paid' ? <h2></h2> : <h2 onClick={()=>{processPayment(elem?.id)}}>Process Payment</h2>}</h4>
            </div>
          ))
         }
           
            
        </div>
      
      </main>
    </div>
</div>
  )
}

export default ManagePayroll