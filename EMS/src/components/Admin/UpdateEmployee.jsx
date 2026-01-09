import { FaUserPlus } from "react-icons/fa";

import { NavLink, useNavigate, useParams } from "react-router";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getDepartments, getUserByEmp, updateUser } from "../../utils/localStorage";
import { toast } from "react-toastify";

export default function UpdateEmployee() {
    const navigate = useNavigate()
    const {id} = useParams();
    const [passwordVisible,setPasswordVisible] = useState(false);
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [department,setDepartment] = useState('');
    const [salary,setSalary] = useState('');
    const [birthday,setBirthday] = useState('');
    const [experience,setExperience] = useState('');
    const [allDepartments,setAllDepartments]= useState([]);
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [employee,setEmployee] = useState({});
    const [confirmPasswordVisible,setConfirmPasswordVisible] = useState(false);
    const Icon2 = confirmPasswordVisible ? FaEye : FaEyeSlash;
    const Icon1 = passwordVisible ? FaEye : FaEyeSlash;
    function togglePassword(event){
        setPasswordVisible(!passwordVisible);
    }
    function toggleConfirmPassword(){
        setConfirmPasswordVisible(!confirmPasswordVisible);
    }

// fetch department data
  useEffect(()=>{
      const departmentData = getDepartments();
      setAllDepartments(departmentData);
  },[employee])


// fetch employee data
    useEffect(()=>{
      const employeeData = getUserByEmp(id);
      setEmployee(employeeData); 
    },[id])
    useEffect(()=>{
      setUsername(employee?.username)
      setPassword(employee?.password)
      setConfirmPassword(employee?.confirmPassword)
      setFirstName(employee?.firstName)
      setLastName(employee?.lastName)
      setSalary(employee?.salary)
      setEmail(employee?.email)
      setDepartment(employee?.department)
      setExperience(employee?.experience)
      setBirthday(employee?.birthday)
    },[employee])

    // submit handler
    function submitHandler(event){
      event.preventDefault();
      const data = {
        username,email,firstName,lastName,department,salary,birthday,experience,password
      }
      updateUser(employee.id,data);
      toast.success("User updated Successfully")
      navigate("/dashboard/admin/employee")
      // reset all data
       setUsername('')
      setPassword('')
      setConfirmPassword('')
      setFirstName('')
      setLastName('')
      setSalary('')
      setEmail('')
      setDepartment('')
      setExperience('')
      setBirthday('')
      
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
          <form onSubmit={submitHandler} className="space-y-6">

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
                  value={username}
                  onChange={e=>setUsername(e.target.value)}
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
                   value={email}
                  onChange={e=>setEmail(e.target.value)}
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
                   value={firstName}
                  onChange={e=>setFirstName(e.target.value)}
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
                   value={lastName}
                  onChange={e=>setLastName(e.target.value)}
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
                   value={department}
                  onChange={e=>setDepartment(e.target.value)}
                //   autoComplete="email"
                  className="block w-full rounded-md   bg-[#f7f5e6]    px-3 py-1.5 text-base border-[#333a56] border  outline-none sm:text-sm/6 text-[#333a56] focus:ring ring-[#333a56]"
                >
                <option className="bg-[#f7f5e6]" value={''}>Select Department (Optional)</option>
               {
                allDepartments.length < 1 ? <option className="bg-[#f7f5e6]" value={''}>--- no department found ---</option> : allDepartments?.map((elem,idx)=>(
                  <option className="bg-[#f7f5e6] uppercase" value={elem?.data}>{elem?.data}</option>
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
              <label htmlFor="birthday" className="block text-sm/6 font-medium text-[#333a56]">
               Birthday
              </label>
              <div className="mt-2">
                <input
                  id="birthday"
                  name="birthday"
                  type="date"
                   value={birthday}
                  onChange={e=>setBirthday(e.target.value)}
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
                   value={experience}
                  onChange={e=>setExperience(e.target.value)}
                  required
                //   autoComplete="email"
                  className="block   bg-[#f7f5e6]   w-full rounded-md  px-3 py-1.5 text-base border-[#333a56] border  outline-none sm:text-sm/6 text-[#333a56] focus:ring ring-[#333a56]"
                />
              </div>
            </div>
            </div>
            
                 <div className="flex justify-between gap-5">
            <div className="w-full">
              <label htmlFor="password" className="block text-sm/6 font-medium text-[#333a56]">
               Password
              </label>
              <div className="mt-2 relative ">
                <input
                  id="password"
                  name="password"
                  type={`${passwordVisible ? "text" : "password"}`}
                  required
                   value={password}
                  onChange={e=>setPassword(e.target.value)}
                //   autoComplete="email"
                  className="block w-full    bg-[#f7f5e6]  rounded-md  px-3 py-1.5 text-base border-[#333a56] border  outline-none sm:text-sm/6 text-[#333a56] focus:ring ring-[#333a56]"
                />
                <Icon1 className="absolute right-3 text-[#333a56] top-1/2 -translate-y-1/2 cursor-pointer  " onClick={togglePassword} />
              </div>
            </div>
            
            </div>

            <div>
              <button
                type="submit"
                className="flex  justify-center rounded-md bg-[#52658F] px-3 py-2 text-sm/6 font-semibold text-[#e8e8e8] hover:bg-[#333a56] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
              Edit Employee
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
