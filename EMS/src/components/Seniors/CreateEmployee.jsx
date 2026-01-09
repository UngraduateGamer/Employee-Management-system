
import { FaUserPlus } from "react-icons/fa";

import { NavLink, useNavigate } from "react-router";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { use, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { addUser,getDepartments } from "../../utils/localStorage";

export default function CreateEmployee() {
    const navigate = useNavigate()
    
    const [passwordVisible,setPasswordVisible] = useState(false);
    const [confirmPasswordVisible,setConfirmPasswordVisible] = useState(false);
    const Icon2 = confirmPasswordVisible ? FaEye : FaEyeSlash;
    const Icon1 = passwordVisible ? FaEye : FaEyeSlash;
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState("");
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [department,setDepartment] = useState('');
    const [salary,setSalary] = useState(0);
    const [birthday,setBirthday] = useState('');
    const [experience,setExperience] = useState('');
    const [password,setPassword]= useState('');
    const [confirmPassword,setConfirmPassword]= useState('');
    const [role,setRole] = useState('employee');
    const [allDepartments,setAllDepartments] = useState([]);
// fetch all departments data
useEffect(()=>{
  const data = getDepartments();
  setAllDepartments(data);
},[])

    function submitHandler(event){
      event.preventDefault();
      if(email === 'admin@admin.com'){
        toast.error("Wrong email ! this email is not a valid email")
      }
      else if(password === confirmPassword){
      const user = {
        username,
        firstName,
        lastName,
        email,
        password,
        department,
        salary,
        birthday,
        experience,
        role
      }
      console.log(department)
      addUser(user)
      toast.success("Signup complete! Wait for admin approval (approx. 10hour)");
      navigate("/dashboard/seniors/employee")
    }
      setUsername('');
      setFirstName('');
      setLastName('');
      setDepartment('');
      setSalary('');
      setBirthday('');
      setExperience('');
      setEmail('')
      setPassword('');
      setConfirmPassword('');
      setRole('');
    }

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
      <div className="flex min-h-full h-full flex-col justify-center px-6 py-30 lg:px-8 bg-[#e8e8e8] ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="flex justify-center">
          <FaUserPlus className="text-[#333a56] text-4xl text-center"/>
            </div>
          <h2 className=" text-center text-2xl/9 font-bold tracking-tight text-[#333a56]">Create your employee account</h2>
            <p className="text-[#333a56] cursor-pointer text-center font-medium" onClick={()=>navigate("/login")}><span className="no-underline cursor-auto text-[#52658F]" onClick={(e)=>e.stopPropagation()}>Already have an account? </span> Sign in here</p>

        </div>

        <div className="mt-10 mx-auto w-[80%] shadow-md p-10 rounded">
          <form  method="POST" className="space-y-6" onSubmit={submitHandler}>

            <div className="flex justify-between gap-5 relative">
            <div className="absolute w-full  h-20 ">
               <label htmlFor="employee" className="block w-full text-sm/6 font-medium text-[#333a56] mb-1">
                Select Role
              </label>
              <div className="flex bg-[#f7f5e6] divide-x-2 divide-[#333a56] text-[#333a56] font-semibold text-sm w-fit rounded border-2 cursor-pointer border-[#333a56]">
              <div className={` ${role == 'employee' ? "bg-[#52658f] text-[#e8e8e8]"  : ""} p-3 cursor-pointer `} onClick={()=>{setRole('employee')}} >Employee</div> 
              <div className={` ${role == 'tl' ? "bg-[#52658f] text-[#e8e8e8]"  : ""} p-3 cursor-pointer `} onClick={()=>{setRole('tl')}}>Team Leader </div> 
              <div className={` ${role == 'senior' ? "bg-[#52658f] text-[#e8e8e8]"  : ""}  p-3 cursor-pointer `} onClick={()=>{setRole('senior')}}>Senior Developer</div> 
              </div>

             
            </div>
            <div className="w-1/2 pt-20">
              <label htmlFor="username" className="block text-sm/6 font-medium text-[#333a56]">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={username}
                  required
                //   autoComplete="email"
                  className="block w-full rounded-md  px-3   bg-[#f7f5e6]   py-1.5 text-base border-[#333a56] border  outline-none sm:text-sm/6 text-[#333a56] focus:ring ring-[#333a56]"
                  onChange={(event)=>{setUsername(event.target.value)}}
                />
              </div>
            </div>
            <div className="w-1/2 pt-20">
              <label htmlFor="email" className="block text-sm/6 font-medium text-[#333a56]">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  required
                //   autoComplete="email"
                  className="block w-full   bg-[#f7f5e6]   rounded-md  px-3 py-1.5 text-base border-[#333a56] border  outline-none sm:text-sm/6 text-[#333a56] focus:ring ring-[#333a56]"
                  onChange={(event)=>{setEmail(event.target.value)}}
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
                  value={firstName}
                //   autoComplete="email"
                  className="block w-full rounded-md    bg-[#f7f5e6]   px-3 py-1.5 text-base border-[#333a56] border  outline-none sm:text-sm/6 text-[#333a56] focus:ring ring-[#333a56]"
                  onChange={(event)=>{setFirstName(event.target.value)}}
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
                  value={lastName}
                //   autoComplete="email"
                  className="block w-full    bg-[#f7f5e6]  rounded-md  px-3 py-1.5 text-base border-[#333a56] border  outline-none sm:text-sm/6 text-[#333a56] focus:ring ring-[#333a56]"
                  onChange={(event)=>{setLastName(event.target.value)}}
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
                  value={department}

                  onChange={(event)=>setDepartment(event.target.value)}
                //   autoComplete="email"
                  className="block uppercase w-full rounded-md   bg-[#f7f5e6]    px-3 py-1.5 text-base border-[#333a56] border  outline-none sm:text-sm/6 text-[#333a56] focus:ring ring-[#333a56]"
                >
                <option className="bg-[#f7f5e6]">Select Department (Optional)</option>
                {
                  allDepartments.length < 1 ?  <option className="bg-[#f7f5e6]">---no departments found---</option> : allDepartments?.map((elem,idx)=>(
                     <option className="bg-[#f7f5e6] uppercase" value={elem.data}>{elem.data}</option>
                  ))
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
                  required
                  value={salary}
                  //   autoComplete="email"
                  className="block w-full   bg-[#f7f5e6]   rounded-md  px-3 py-1.5 text-base border-[#333a56] border  outline-none sm:text-sm/6 text-[#333a56] focus:ring ring-[#333a56]"
                  onChange={(event)=>{setSalary(event.target.value)}}
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
                  value={birthday}
                  type="date"
                  required
                //   autoComplete="email"
                  className="block    bg-[#f7f5e6]  w-full rounded-md  px-3 py-1.5 text-base border-[#333a56] border  outline-none sm:text-sm/6 text-[#333a56] focus:ring ring-[#333a56]"
                  onChange={(event)=>{setBirthday(event.target.value)}}
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
                  value={experience}
                  required
                //   autoComplete="email"
                  className="block   bg-[#f7f5e6]   w-full rounded-md  px-3 py-1.5 text-base border-[#333a56] border  outline-none sm:text-sm/6 text-[#333a56] focus:ring ring-[#333a56]"
                  onChange={(event)=>{setExperience(event.target.value)}}
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
                  value={password}
                  type={`${passwordVisible ? "text" : "password"}`}
                  required
                //   autoComplete="email"
                  className="block w-full    bg-[#f7f5e6]  rounded-md  px-3 py-1.5 text-base border-[#333a56] border  outline-none sm:text-sm/6 text-[#333a56] focus:ring ring-[#333a56]"
                  onChange={(event)=>{setPassword(event.target.value)}}
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
                  value={confirmPassword}
                  type={`${confirmPasswordVisible? "text" :"password"}`}
                  required
                //   autoComplete="email"
                  className="block w-full   bg-[#f7f5e6]   rounded-md  px-3 py-1.5 text-base border-[#333a56] border  outline-none sm:text-sm/6 text-[#333a56] focus:ring ring-[#333a56]"
                  onChange={(event)=>{setConfirmPassword(event.target.value)}}
                />
                <Icon2 className="absolute right-3 text-[#333a56] top-1/2 -translate-y-1/2 cursor-pointer" onClick={toggleConfirmPassword}/>
              </div>
            </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#52658F] px-3 py-2 text-sm/6 font-semibold text-[#e8e8e8] hover:bg-[#333a56] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
              Sign up
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
