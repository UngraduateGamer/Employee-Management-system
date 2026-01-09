import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Employee/Sidebar'
import Navbar from '../../components/Employee/Navbar'
import { getLoggedInUser, getPaymentsByEmp, loginUser } from '../../utils/localStorage';

const PlaySlips = () => {
    const [user,setUser] = useState({});
    const [payroll,setPayroll] = useState([]);

    //fetch data of login user
    useEffect(()=>{
        const loginUserData = getLoggedInUser();
        setUser(loginUserData);
    },[])
    
    // fetch payroll data by loginuser
    useEffect(()=>{
        const payrollData = getPaymentsByEmp(user?.id);
        setPayroll(payrollData);
    },[user])

    return (
        <div className="bg-[#f7f5e6] w-full h-screen grid grid-cols-[20%_80%]">
            <Sidebar />
            <div className="bg-[#f7f5e6] w-full h-screen ">
                <Navbar />
                <main className='px-10 py-5'>
                    <div className="top flex justify-between items-center">
                        <div className="left flex flex-col gap-0 ">
                            <h2 className='text-3xl font-bold text-[#333a56]'>My Payslips</h2>
                        </div>


                    </div>
                    <div className="bottom w-full h-fit p-8 bg-[#52658f] rounded my-5">
                        <div className='uppercase font-semibold px-8 py-3 rounded text-[#e8e8e8] flex justify-between text-left bg-[#333a56]'>
                            <h4 className='text-left w-2/5'>pay period</h4>
                            <h4 className='text-left w-1/4'>salary</h4>
                            <h4 className='text-left w-1/4'>status</h4>
                        </div>

                     {
                        payroll?.length < 1 ? <p className='text-center mt-5 text-[#e8e8e8]'>No payrolls found.</p>  : payroll?.map((elem,idx)=>(
                               <div key={idx} className='capitalize  my-3 px-8 py-3 text-[#e8e8e8] flex justify-between text-left border-b rounded-none '>
                            <h4 className=' text-left w-2/5  '>{new Date(elem?.startDate).toLocaleDateString()} to {new Date(elem?.endDate).toLocaleDateString()}</h4>
                            <h4 className='text-left w-1/4'>&#8377;{Number(elem?.salary).toLocaleString()}</h4>
                            
     <h4 className='w-1/4 text-left'><button className='bg-[#e8e8e8] rounded-full px-3 py-1 text-[#333a56] font-medium text-sm'>{elem?.status == 'paid' ? "Accepted" : "Pending"}</button></h4>
     
                            
                          

                        </div>
                        ))
                     }

                        
                    </div>

                </main>
            </div>
        </div>
    )
}

export default PlaySlips