import { FaUserPlus } from "react-icons/fa";

import { NavLink, useNavigate } from "react-router";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useEffect, useState } from "react";
import { addAttendance, getAttendanceByEmp, getUserByEmp, getUsers } from "../../utils/localStorage";

export default function CreateAttendance() {
    const navigate = useNavigate()
    const [passwordVisible,setPasswordVisible] = useState(false);
    const [confirmPasswordVisible,setConfirmPasswordVisible] = useState(false);
    const Icon2 = confirmPasswordVisible ? FaEye : FaEyeSlash;
    const Icon1 = passwordVisible ? FaEye : FaEyeSlash;
    const [employee,setEmployee] = useState('');
    const [checkIn,setCheckIn] = useState('');
    const [checkOut,setCheckOut]= useState('');
    const [dates,setDates] = useState('')
    function togglePassword(event){
        setPasswordVisible(!passwordVisible);
    }
    function toggleConfirmPassword(){
        setConfirmPasswordVisible(!confirmPasswordVisible);
    }

    const formatTimeWithSecondsAndAmPm = (time) => {
  if (!time) return "";

  let [hours, minutes] = time.split(":");
  hours = Number(hours);

  // current seconds
  const seconds = String(new Date().getSeconds()).padStart(2, "0");

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  return `${hours}:${minutes}:${seconds} ${ampm}`;
};


    // fetch all employees
    
    const [users,setUsers] = useState([]);
    useEffect(()=>{
      // all data
      const data = getUsers();
      // sirf vo data chaiye jo approved ho
      const approvedUser = data?.filter(elem => elem.approved);
      setUsers(approvedUser);
    },[])

// check ki user ne pehle attendance set kiya hai ya nai
const isAttendanceExists = (empId, date) => {
  const attendance = getData("ems_attendance");

  return attendance.some(
    a => a.empId === empId && a.date === date
  );
};

useEffect(()=>{

},[])


    // submit handler
    function submitHandler(e){
      // check user attendance exists or not
      // isAttendanceExists()
      e.preventDefault();
      let user = getUserByEmp(employee);
      console.log(user)
      addAttendance({empId:employee,empName:user[0]?.firstName + " "+ user[0]?.lastName,date: new Date(dates).toLocaleDateString(),checkIn:formatTimeWithSecondsAndAmPm(checkIn),checkOut:formatTimeWithSecondsAndAmPm(checkOut),status:"present"})
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
                    <h2 className='text-3xl capitalize font-bold text-[#e8e8e8] -mt-15'>Add Attendance Record</h2>

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
                <option className="bg-[#f7f5e6]" value={''}>Select Employee</option>
               {
                users.length < 1 ? <option className="bg-[#f7f5e6]">---no employee found---</option> : users?.map((elem,idx)=>(
                  <option key={idx} className="bg-[#f7f5e6]" value={elem.id}>{elem?.username}</option>
                )) 
               }
                </select>
              </div>
            </div>
            <div className="w-1/2">
              <label htmlFor="date" className="block text-sm/6 font-medium text-[#333a56]">
               date
              </label>
              <div className="mt-2">
                <input
                  id="date"
                  name="date"
                  value={dates}
                onChange={e=>setDates(e.target.value)}
                  type="date"
                  required
                //   autoComplete="email"
                  className="block w-full   bg-[#f7f5e6]   rounded-md  px-3 py-1.5 text-base border-[#333a56] border  outline-none sm:text-sm/6 text-[#333a56] focus:ring ring-[#333a56]"
                />
              </div>
            </div>
            </div>

            

            

            
                 <div className="flex justify-between gap-5">
            <div className="w-1/2">
              <label htmlFor="clockIn" className="block text-sm/6 font-medium text-[#333a56]">
               Clock In
              </label>
              <div className="mt-2 relative ">
                <input
                  id="clockIn"
                  name="clockIn"
                  value={checkIn}
                  onChange={e=>setCheckIn(e.target.value)}
                  type="time"
                                    required
                //   autoComplete="email"
                  className="block w-full    bg-[#f7f5e6]  rounded-md  px-3 py-1.5 text-base border-[#333a56] border  outline-none sm:text-sm/6 text-[#333a56] focus:ring ring-[#333a56]"
                />
              </div>
            </div>
            <div className="w-1/2">
              <label htmlFor="clockOut" className="block text-sm/6 font-medium text-[#333a56]">
            Clock Out
              </label>
              <div className="mt-2 relative">
                <input
                  id="clockOut"
                  name="clockOut"
                  type={`time`}
                   value={checkOut}
                  onChange={e=>setCheckOut(e.target.value)}
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
              Add Attendance Record
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
