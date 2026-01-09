import React, { useEffect, useState } from 'react'
import Sidebar from '../../../components/Seniors/SideBar';
import Navbar from '../../../components/Seniors/Navbar';
import { toast } from 'react-toastify';
import { addAttendance, getAttendanceByEmp, getData, getLoggedInUser } from "../../../utils/localStorage";

const AttendanceOnly = () => {
    const [clockIn,setClockIn] = useState(null);
    const [clockOut,setClockOut] = useState(null);
    const [countIn,setCountIn] = useState(0)
    const [countOut,setCountOut] = useState(0)
    const [userId,setUserId] = useState(null);
    const [dates,setDates] = useState(null);
    const [attendance, setAttendance] = useState([])
    const [loginUser,setLoginUser] = useState({})
    const FilterAttendance = "34";

    // get login user data
    useEffect(()=>{
        const loginUserData = getLoggedInUser();
        setLoginUser(loginUserData);
    },[])

    // get attendance data
    useEffect(()=>{
        const attendanceData = getAttendanceByEmp(loginUser?.id);
        setAttendance(attendanceData)
    },[loginUser])


    
    function cIn() {
  const today = new Date().toLocaleDateString();

  const alreadyMarked = attendance.some(
    a => a.date === today
  );

  if (alreadyMarked) {
    toast.error("Attendance already marked for today");
    return;
  }

  const time = new Date().toLocaleTimeString();
  toast.success("Clock in Successfully")
  setClockIn(time);
  setDates(today);
  setCountIn(1);
}

  function cOut() {
  if (countIn === 0) {
    toast.error("Please check in first");
    return;
  }

  if (countOut === 1) {
    toast.error("Already checked out");
    return;
  }

  const time = new Date().toLocaleTimeString();

  const record = {
    empId: loginUser.id,
    empName: loginUser.firstName + " " + loginUser.lastName,
    date: dates,
    status: "present",
    checkIn: clockIn,
    checkOut: time,
    empRole:loginUser.role
  };

  addAttendance(record);

  setClockOut(time);
  setCountOut(1);

  // refresh state
  setAttendance(getAttendanceByEmp(loginUser.id));
}

   
   
    return (
        <div className="bg-[#f7f5e6] w-full h-screen grid grid-cols-[20%_80%]">
            <Sidebar />
            <div className="bg-[#f7f5e6] w-full h-screen ">
                <Navbar />
                <main className='px-10 py-5'>
                    <div className="top flex justify-between items-center">
                        <div className="left flex flex-col w-full gap-0 ">
                            <h2 className='text-3xl font-bold text-[#333a56]'>My Attendance</h2>
                            {/* <div className="msg py-4 w-full px-3 my-4 rounded bg-[#52658f] text-[#e8e8e8]">
                                Clocked in successfully.    
                            </div> */}
                            <div className='flex gap-3 mt-4 '>
                                <button className={`${FilterAttendance ? "none" : "block"} w-fit h-fit px-4 py-2 bg-[#333a56] text-[#e8e8e8] rounded cursor-pointer`}
                                onClick={cIn}
                                >Clock In</button>
                                <button className={`${FilterAttendance && countIn == 0 ? "none" : "block"} w-fit h-fit px-4 py-2 bg-[#52658f] text-[#e8e8e8] rounded cursor-pointer`} onClick={cOut}>Clock Out</button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                               
                                
                            </div>
                        </div>


                    </div>
                    <div className="bottom w-full max-h-fit h-100 overflow-y-auto p-8 bg-[#52658f] rounded my-5">
                        <div className='uppercase font-semibold px-8 py-3 rounded text-[#e8e8e8] flex justify-between text-left bg-[#333a56]'>
                            <h4 className='text-left w-1/3'>Date</h4>
                            <h4 className='text-left w-1/3'>clock in</h4>
                            <h4 className='text-left w-1/3'>clock out</h4>
                        </div>
                        <br />
                       



                   {
                        attendance?.length < 1 ? <p className='text-center mt-5 text-[#e8e8e8]'>No attendance record found.</p> : attendance?.map((elem,idx)=>(
                                 <div key={idx} className='capitalize  my-3 px-8 py-3 text-[#e8e8e8] flex justify-between text-left border-b rounded-none '>
                            <h4 className=' text-left w-1/3  '>{elem?.date}</h4>
                            <h4 className='text-left w-1/3'>{elem?.checkIn}</h4>
                            <h4 className='text-left w-1/3'>{elem?.checkOut}</h4>
                        </div>
                        ))
                   }
                       

                        
                    </div>

                </main>
            </div>
        </div>
    )
}

export default AttendanceOnly