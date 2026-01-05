import { FaUserPlus } from "react-icons/fa";

import { NavLink, useNavigate } from "react-router";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useState } from "react";

export default function UpdateEmployee() {
    const navigate = useNavigate()
    const [passwordVisible,setPasswordVisible] = useState(false);
    const [confirmPasswordVisible,setConfirmPasswordVisible] = useState(false);
    const Icon2 = confirmPasswordVisible ? FaEye : FaEyeSlash;
    const Icon1 = passwordVisible ? FaEye : FaEyeSlash;
    function togglePassword(event){
        setPasswordVisible(!passwordVisible);
    }
    function toggleConfirmPassword(){
        setConfirmPasswordVisible(!confirmPasswordVisible);
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
      <div className="flex min-h-full h-full flex-col justify-center px-6 pb-0 lg:px-8 bg-[#333a56] ">
                    <h2 className='text-3xl font-bold text-[#e8e8e8] -mt-15'>Edit Employee</h2>

        <div className="mt-5 mx-auto w-full shadow-md p-5 rounded bg-[#e8e8e8]">
          <form action="#" method="POST" className="space-y-6">

            <div className="flex justify-between gap-5">
            <div className="w-1/2">
              <label htmlFor="username" className="block text-sm/6 font-medium text-[#333a56]">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                //   autoComplete="email"
                  className="block w-full rounded-md  px-3   bg-[#f7f5e6]   py-1.5 text-base border-[#333a56] border  outline-none sm:text-sm/6 text-[#333a56] focus:ring ring-[#333a56]"
                />
              </div>
            </div>
            <div className="w-1/2">
              <label htmlFor="email" className="block text-sm/6 font-medium text-[#333a56]">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                //   autoComplete="email"
                  className="block w-full   bg-[#f7f5e6]   rounded-md  px-3 py-1.5 text-base border-[#333a56] border  outline-none sm:text-sm/6 text-[#333a56] focus:ring ring-[#333a56]"
                />
              </div>
            </div>
            </div>

            <div className="flex justify-between gap-5">
            <div className="w-1/2">
              <label htmlFor="firstName" className="block text-sm/6 font-medium text-[#333a56]">
                First name
              </label>
              <div className="mt-2">
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                //   autoComplete="email"
                  className="block w-full rounded-md    bg-[#f7f5e6]   px-3 py-1.5 text-base border-[#333a56] border  outline-none sm:text-sm/6 text-[#333a56] focus:ring ring-[#333a56]"
                />
              </div>
            </div>
            <div className="w-1/2">
              <label htmlFor="lastName" className="block text-sm/6 font-medium text-[#333a56]">
                Last Name
              </label>
              <div className="mt-2">
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                //   autoComplete="email"
                  className="block w-full    bg-[#f7f5e6]  rounded-md  px-3 py-1.5 text-base border-[#333a56] border  outline-none sm:text-sm/6 text-[#333a56] focus:ring ring-[#333a56]"
                />
              </div>
            </div>
            </div>

            <div className="flex justify-between gap-5">
            <div className="w-1/2">
              <label htmlFor="department" className="block text-sm/6 font-medium text-[#333a56]">
               Department
              </label>
              <div className="mt-2">
                <select
                  id="department"
                  name="department"
                  required
                //   autoComplete="email"
                  className="block w-full rounded-md   bg-[#f7f5e6]    px-3 py-1.5 text-base border-[#333a56] border  outline-none sm:text-sm/6 text-[#333a56] focus:ring ring-[#333a56]"
                >
                <option className="bg-[#f7f5e6]">Select Department (Optional)</option>
                <option value={'finance'} className="bg-[#f7f5e6]">Finance</option>
                <option value={'marketing'} className="bg-[#f7f5e6]">Marketing</option>
                <option value={'hr'} className="bg-[#f7f5e6]">HR</option>
                <option value={'it'} className="bg-[#f7f5e6]">IT</option>
                <option value={'developers'} className="bg-[#f7f5e6]">Developers</option>
                <option value={'security'} className="bg-[#f7f5e6]">Security</option>
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
                  required
                //   autoComplete="email"
                  className="block w-full   bg-[#f7f5e6]   rounded-md  px-3 py-1.5 text-base border-[#333a56] border  outline-none sm:text-sm/6 text-[#333a56] focus:ring ring-[#333a56]"
                />
              </div>
            </div>
            </div>

                 <div className="flex justify-between gap-5">
            <div className="w-1/2">
              <label htmlFor="birthday" className="block text-sm/6 font-medium text-[#333a56]">
               Birthday
              </label>
              <div className="mt-2">
                <input
                  id="birthday"
                  name="birthday"
                  type="date"
                  required
                //   autoComplete="email"
                  className="block    bg-[#f7f5e6]  w-full rounded-md  px-3 py-1.5 text-base border-[#333a56] border  outline-none sm:text-sm/6 text-[#333a56] focus:ring ring-[#333a56]"
                />
              </div>
            </div>
            <div className="w-1/2">
              <label htmlFor="experience" className="block text-sm/6 font-medium text-[#333a56]">
                Experience (Years)
              </label>
              <div className="mt-2">
                <input
                  id="experience"
                  name="experience"
                  type="number"
                  required
                //   autoComplete="email"
                  className="block   bg-[#f7f5e6]   w-full rounded-md  px-3 py-1.5 text-base border-[#333a56] border  outline-none sm:text-sm/6 text-[#333a56] focus:ring ring-[#333a56]"
                />
              </div>
            </div>
            </div>
            
                 <div className="flex justify-between gap-5">
            <div className="w-1/2">
              <label htmlFor="password" className="block text-sm/6 font-medium text-[#333a56]">
               Password
              </label>
              <div className="mt-2 relative ">
                <input
                  id="password"
                  name="password"
                  type={`${passwordVisible ? "text" : "password"}`}
                  required
                //   autoComplete="email"
                  className="block w-full    bg-[#f7f5e6]  rounded-md  px-3 py-1.5 text-base border-[#333a56] border  outline-none sm:text-sm/6 text-[#333a56] focus:ring ring-[#333a56]"
                />
                <Icon1 className="absolute right-3 text-[#333a56] top-1/2 -translate-y-1/2 cursor-pointer  " onClick={togglePassword} />
              </div>
            </div>
            <div className="w-1/2">
              <label htmlFor="confirmPassword" className="block text-sm/6 font-medium text-[#333a56]">
             Confirm Password
              </label>
              <div className="mt-2 relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={`${confirmPasswordVisible? "text" :"password"}`}
                  required
                //   autoComplete="email"
                  className="block w-full   bg-[#f7f5e6]   rounded-md  px-3 py-1.5 text-base border-[#333a56] border  outline-none sm:text-sm/6 text-[#333a56] focus:ring ring-[#333a56]"
                />
                <Icon2 className="absolute right-3 text-[#333a56] top-1/2 -translate-y-1/2 cursor-pointer" onClick={toggleConfirmPassword}/>
              </div>
            </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex  justify-center rounded-md bg-[#52658F] px-3 py-2 text-sm/6 font-semibold text-[#e8e8e8] hover:bg-[#333a56] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
              Update Account
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
