import React from 'react'
import { FaUserGroup } from "react-icons/fa6";
import EMS_Card from './EMS_Card';
import { BiTaskX } from "react-icons/bi";
import { TbNotesOff } from "react-icons/tb";
import { FaRupeeSign } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import TopWave from './TopWave';

const EMS_Cards = () => {
  return (
    <div className='mx-auto py-10  bg-[#e8e8e8]  relative z-3'>
        <div className='w-[85%] mx-auto flex flex-wrap justify-between gap-y-10'>
         <EMS_Card icon={  <FaUserGroup/>   } title={' Employee Management'} description={'Keep all employee records organized and accessible. Manage profiles, roles, and departments with ease.'} />

         <EMS_Card icon={  <TbNotesOff/>   } title={'Leave Management'} description={'Automate leave requests and approvals. Track leave balances and view team availability at a glance.'} />

         <EMS_Card icon={  <FaRupeeSign/>   } title={'Payroll Processing'} description={'Simplify your payroll with automated calculations and easy payslip generation. Ensure timely and accurate payments.'} />

         <EMS_Card icon={  <MdOutlineAccessTime/>   } title={'Attendance Tracking'} description={'Monitor employee attendance with simple clock-in and clock-out functionality. Generate reports for payroll and analysis. '} />
       
        </div>
    </div>
  )
}

export default EMS_Cards