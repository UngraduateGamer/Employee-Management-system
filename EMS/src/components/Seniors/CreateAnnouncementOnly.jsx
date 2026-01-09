import { FaUserPlus } from "react-icons/fa";

import { NavLink, useNavigate } from "react-router";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useEffect, useState } from "react";
import { addAnnouncement } from "../../utils/localStorage";
import { toast } from "react-toastify";

export default function CreateAnnouncementOnly() {
  const [user,setUser] = useState({});
  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem("loggedInUser")));
  },[])

  function handleSubmit(event){
    event.preventDefault();
    const announcementData = {title,content,role:user?.role};
      addAnnouncement(announcementData);
      setTitle('');
      setContent('');
      toast.success("Announcement Created Successfully")
    }
    const navigate = useNavigate()
    const [passwordVisible,setPasswordVisible] = useState(false);
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
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
      <div className="flex min-h-full h-full flex-col mt-20 px-6 pb-0 lg:px-8 bg-[#333a56] ">
                    <h2 className='text-3xl capitalize font-bold text-[#e8e8e8] -mt-15'>Add New Announcement</h2>

        <div className="mt-5 mx-auto w-full shadow-md p-5 rounded bg-[#e8e8e8]">
          <form onSubmit={handleSubmit} method="POST" className="space-y-6">

           
            

            

            
                 <div className="flex justify-between gap-5">
            <div className="w-full">
              <label htmlFor="title" className="block text-sm/6 font-medium text-[#333a56]">
               Title
              </label>
              <div className="mt-2 relative ">
                <input
                  id="title"
                  name="title"
                  type={'text'}
                  required
                  value={title}
                  onChange={(e)=>setTitle(e.target.value)}
                //   autoComplete="email"
                  className="block w-full    bg-[#f7f5e6]  rounded-md  px-3 py-1.5 text-base border-[#333a56] border  outline-none sm:text-sm/6 text-[#333a56] focus:ring ring-[#333a56]"
                />
              </div>
            </div>
            </div>

                 <div className="flex justify-between gap-5">
            <div className="w-full">
              <label htmlFor="content" className="block text-sm/6 font-medium text-[#333a56]">
               Content
              </label>
              <div className="mt-2 relative ">
                <input
                  id="content"
                  name="content"
                  type={'text'}
                  value={content}
                  onChange={e=>setContent(e.target.value)}
                  required
                //   autoComplete="email"
                  className="block w-full    bg-[#f7f5e6]  rounded-md  px-3 py-1.5 text-base border-[#333a56] border  outline-none sm:text-sm/6 text-[#333a56] focus:ring ring-[#333a56]"
                />
              </div>
            </div>
            </div>
           

            <div>
              <button
                type="submit"
                className="flex  justify-center rounded-md bg-[#52658F] px-3 py-2 text-sm/6 font-semibold text-[#e8e8e8] hover:bg-[#333a56] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
              Add New Announcement
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
