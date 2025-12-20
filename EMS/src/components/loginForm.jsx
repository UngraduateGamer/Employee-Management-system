import { HiMiniBuildingStorefront } from "react-icons/hi2";
import { NavLink } from "react-router";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
export default function LoginForm() {
    const [passwordVisible,setPasswordVisible] = useState(false)
    function togglePassword(event){
        setPasswordVisible(!passwordVisible);
    }
    const Icon = passwordVisible ? FaEye : FaEyeSlash;
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-900">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full h-full flex-col justify-center px-6 py-30 lg:px-8 bg-[#e8e8e8]">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="flex justify-center">
          <HiMiniBuildingStorefront className="text-[#333a56] text-4xl text-center"/>
            </div>
          <h2 className=" text-center text-2xl/9 font-bold tracking-tight text-[#333a56]">Sign in to your account</h2>
            <p className="text-[#333a56] text-center"><span className="text-[#52658F]">Or</span> start your journey with us</p>

        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
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
                  className="block w-full bg-[#f7f5e6] rounded-md  px-3 py-1.5 text-base border-[#333a56] border  outline-none sm:text-sm/6 text-[#333a56] focus:ring ring-[#333a56]"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-[#333a56]">
                  Password
                </label>
                <div className="text-sm">
                  <NavLink href="#" className="font-semibold text-[#52658F] hover:text-[#333a56]">
                    Forgot password?
                  </NavLink>
                </div>
              </div>
             <div className="mt-2 relative">
                <input
                  id="password"
                  name="Password"
                  type={`${passwordVisible? "text" :"password"}`}
                  required
                //   autoComplete="email"
                  className="block w-full bg-[#f7f5e6] rounded-md  px-3 py-1.5 text-base border-[#333a56] border  outline-none sm:text-sm/6 text-[#333a56] focus:ring ring-[#333a56]"
                />
                <Icon className="absolute right-3 text-[#333a56] top-1/2 -translate-y-1/2 cursor-pointer" onClick={togglePassword}/>
              </div>
              
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#52658F] px-3 py-1.5 text-sm/6 font-semibold text-[#e8e8e8] hover:bg-[#333a56] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Log in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-[#52658F]">
            Not a member?{' '}
            <NavLink to="/signup" className="font-semibold text-[#333a56] hover:text-[#52658F] underline">
              Sign up
            </NavLink>
          </p>
        </div>
      </div>
    </>
  )
}
