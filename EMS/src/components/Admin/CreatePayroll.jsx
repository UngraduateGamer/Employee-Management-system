import { FaUserPlus } from "react-icons/fa";

import { NavLink, useNavigate } from "react-router";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useEffect, useState } from "react";
import { addPayment, getEmployees, getUsers } from "../../utils/localStorage";

export default function CreatePayroll() {
  
    const navigate = useNavigate()
    const [passwordVisible,setPasswordVisible] = useState(false);
    const [confirmPasswordVisible,setConfirmPasswordVisible] = useState(false);
    const Icon2 = confirmPasswordVisible ? FaEye : FaEyeSlash;
    const Icon1 = passwordVisible ? FaEye : FaEyeSlash;
    const [employee,setEmployee] = useState('');
    const [salary,setSalary] = useState('');
    const [startDate,setStartDate]  = useState('');
    const [endDate,setEndDate] = useState('');
    const [users,setUsers] = useState([]);
    const [employeeId,setEmployeeId] = useState('');
    function togglePassword(event){
        setPasswordVisible(!passwordVisible);
    }
    function toggleConfirmPassword(){
        setConfirmPasswordVisible(!confirmPasswordVisible);
    }

// fetch all employees data
useEffect(()=>{
  const data = getUsers().filter(user => user.approved);
  setUsers(data);
},[])


    function submitHandler(e){
      e.preventDefault();

      // create payroll
      const data = {startDate,endDate,salary,status:"pending",empId: employee  }
     addPayment(data)

      // reset all data to the form
      setStartDate('');
      setEndDate('');
      setEmployee('');
      setSalary('');
    }
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-900">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full h-full flex-col mt-20 px-6 pb-0 lg:px-8 bg-[#333a56] ">
      
                    <h2 className='text-3xl capitalize font-bold text-[#e8e8e8] -mt-15'>Create Payroll</h2>

        <div className="mt-5 mx-auto w-full shadow-md p-5 rounded bg-[#e8e8e8]">
          <form onSubmit={submitHandler} className="space-y-6">

            <div className="flex justify-between gap-5">
            <div className="w-1/2">
              <label htmlFor="employee" className="block text-sm/6 font-medium text-[#333a56]">
               Employee
              </label>
              <div className="mt-2">
                <select
                  id="employee"
                  name="employee"
                  value={employee}
                  onChange={e=>setEmployee(e.target.value)}
                  required
                //   autoComplete="email"
                  className="block w-full rounded-md   bg-[#f7f5e6]    px-3 py-1.5 text-base border-[#333a56] border  outline-none sm:text-sm/6 text-[#333a56] focus:ring ring-[#333a56]"
                >
                                      <option className="bg-[#f7f5e6] " value={""}>Select Employee</option>

                {
                  users?.length > 0 ? 
                  users?.map((elem,idx)=>(
                    <option className="bg-[#f7f5e6] " value={elem?.id} >{elem?.username} </option>
                  
                  ))
                  : <option className="bg-[#f7f5e6] " value={""}>--No employee found--</option>

                }
                </select>
              </div>
            </div>
            <div className="w-1/2">
              <label htmlFor="salary" className="block text-sm/6 font-medium text-[#333a56]">
                Salary
              </label>
              <div className="mt-2">
                <input
                  id="salary"
                  name="salary"
                  type="number"
                  value={salary}
                  onChange={e=>setSalary(e.target.value)}
                  required
                //   autoComplete="email"
                  className="block w-full   bg-[#f7f5e6]   rounded-md  px-3 py-1.5 text-base border-[#333a56] border  outline-none sm:text-sm/6 text-[#333a56] focus:ring ring-[#333a56]"
                />
              </div>
            </div>
            </div>

            

            

            
                 <div className="flex justify-between gap-5">
            <div className="w-1/2">
              <label htmlFor="payPeriodStart" className="block text-sm/6 font-medium text-[#333a56]">
               Pay Period Start
              </label>
              <div className="mt-2 relative ">
                <input
                  id="password"
                  name="password"
                  type={'date'}
                  value={startDate}
                  required
                  onChange={(e)=>setStartDate(e.target.value)}
                //   autoComplete="email"
                  className="block w-full    bg-[#f7f5e6]  rounded-md  px-3 py-1.5 text-base border-[#333a56] border  outline-none sm:text-sm/6 text-[#333a56] focus:ring ring-[#333a56]"
                />
              </div>
            </div>
            <div className="w-1/2">
              <label htmlFor="payPeriodEnd" className="block text-sm/6 font-medium text-[#333a56]">
             Pay Period End
              </label>
              <div className="mt-2 relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={`date`}
                  value={endDate}
                  onChange={(e)=>{setEndDate(e.target.value)}}
                  required
                //   autoComplete="email"
                  className="block w-full   bg-[#f7f5e6]   rounded-md  px-3 py-1.5 text-base border-[#333a56] border  outline-none sm:text-sm/6 text-[#333a56] focus:ring ring-[#333a56]"
                />
              </div>
            </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex  justify-center rounded-md bg-[#52658F] px-3 py-2 text-sm/6 font-semibold text-[#e8e8e8] hover:bg-[#333a56] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
              Create Payroll
              </button>
            </div>
          </form>

          {/* <p className="mt-10 text-center text-sm/6 text-[#52658F]">
            Not a member?{' '}
            <NavLink to="/signup" className="font-semibold text-[#333a56] hover:text-[#52658F] underline">
              Sign up
            </NavLink>
          </p> */}
        </div>
      </div>
    </>
  )
}
