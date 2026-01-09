import { FaUserPlus } from "react-icons/fa";

import { NavLink, useNavigate } from "react-router";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import { SetDepartments } from "../../utils/localStorage";

export default function CreateDepartment() {
    const navigate = useNavigate()
    const [department,setDepartment] = useState('');
  function submitHandler(e){
        e.preventDefault();

        // create department and set to localStorage
        SetDepartments(department);
        // reset vlaues
        setDepartment('');
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
      <div className="flex min-h-full h-full flex-col px-6 pb-0 lg:px-8 bg-[#333a56] ">
                    <h2 className='text-3xl font-bold text-[#e8e8e8] mt-5 '>Create Department</h2>

        <div className="mt-5 mx-auto w-full shadow-md p-5 rounded bg-[#e8e8e8]">
          <form onSubmit={submitHandler} className="space-y-6">
            <div className="w-full">
              <label htmlFor="username" className="block text-sm/6 font-medium text-[#333a56]">
                Department Name
              </label>
              <div className="mt-2">
                <input
                  id="department"
                  name="department"
                  type="text"
                  value={department}
                  onChange={e=>setDepartment(e.target.value)}
                  required
                //   autoComplete="email"
                placeholder="Developer"
                  className="block w-full rounded-md  px-3   bg-[#f7f5e6]   py-1.5 text-base border-[#333a56] border  outline-none sm:text-sm/6 text-[#333a56] focus:ring ring-[#333a56]"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex  justify-center rounded-md bg-[#52658F] px-3 py-2 text-sm/6 font-semibold text-[#e8e8e8] hover:bg-[#333a56] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
              Create Department
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
